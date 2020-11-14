import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddExam from '../AddExam';
import DeleteExam from '../DeleteExam';
import EditExam from '../EditExam';

import PreviewExam from '../PreviewExam';

class Visits extends Component {
    state = {
        isDisplayedAdd: 'none',
        isDisplayedPrev: 'none',
        isDisplayedEdit: 'none',
        isDisplayedDelete: 'none',
        exam: { examination_id: 1, visit_id: 2, doctor_id: 2, prescrition_id: '', clinic_id: 1, patientName: '', patientId: '', note: '' },
        examination: this.props.examination,
        isDisplaySearch: 'none',
        fixedTopHeight: '7em',
        search: { visitId: '', patientId: '', patientName: '', visitDate: '', clinicId: '', doctorId: '', prescritionId: '' },
        prev: false
    }
    getVisit = (visitId) => {
        var visitInd = this.props.visits.findIndex(x => x.visit_id === visitId);
        return this.props.visits[visitInd];
    }
    getPatient = (id) => {
        var patientInd = this.props.patients.findIndex(x => x.id === id);
        return this.props.patients[patientInd];
    }
    getClinic = (id) => {
        var clinicInd = this.props.clinics.findIndex(x => x.clinic_id === id);
        return this.props.clinics[clinicInd];
    }
    getDoctor = (id) => {
        var doctorInd = this.props.doctors.findIndex(x => x.doctor_id === parseInt(id));
        return this.props.doctors[doctorInd];
    }
    getPatientName = (visitId) => {
        var visit = this.getVisit(visitId);
        var patient = this.getPatient(visit.person_id);
        if (patient.firstName == '' || patient.fatherName == '' || patient.lastName == '') return '';
        return patient.firstName + '  ' + patient.fatherName + '  ' + patient.lastName;
    }

    toggleDisplayAdd = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block'
        });
    }
    toggleDisplayPrev = (exam) => {
        this.setState({
            ...this.state,
            isDisplayedPrev: this.state.isDisplayedPrev === 'block' ? 'none' : 'block',
            prev: this.state.prev === false ? true : false,
            exam: exam
        });
    }
    toggleDisplayEdit = (exam) => {
        this.setState({
            ...this.state,
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            exam: exam
        });
    }
    toggleDisplayDelete = (exam) => {
        this.setState({
            ...this.state,
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            exam: exam
        });
    }
    toggleDisplaySearch = () => {
        this.setState({
            ...this.state,
            isDisplaySearch: this.state.isDisplaySearch === 'block' ? 'none' : 'block',
            fixedTopHeight: this.state.isDisplaySearch === 'block' ? '7em' : '10.5em'
        });
    }

    addExam = (newExam, diseases) => {
        this.props.addExam(newExam, diseases);
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
            exam: {}
        });
    }
    delExam = () => {
        this.props.deleteExam(this.state.exam.examination_id);
        this.setState({
            ...this.state,
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            exam: {}
        });
    }

    editExam = (exam, diseases) => {
        this.props.editExam(exam, diseases);
        this.setState({
            ...this.state,
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            exam: {}
        });
    }
    search = (e) => {

        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value
            },
        },
            () => this.setState({
                examination: this.props.examination.filter(item => ((this.state.search.visitId !== '' ? item.visit_id === parseInt(this.state.search.visitId) : true) &&
                    (this.state.search.patientId !== '' ? this.getVisit(item.visit_id).person_id === parseInt(this.state.search.patientId) : true))
                )
            })
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.examination !== nextProps.examination) {
            this.setState({
                examination: nextProps.examination,
            });
        }
    }
    render() {
        var examination = this.state.examination;
        return (
            <div className="tab-body visits ">

                <AddExam toggleDisplay={this.toggleDisplayAdd} display={this.state.isDisplayedAdd} addExam={this.addExam} />
                <DeleteExam toggleDisplay={this.toggleDisplayDelete} display={this.state.isDisplayedDelete} exam={this.state.exam} delExam={this.delExam} />
                <PreviewExam toggleDisplay={this.toggleDisplayPrev} display={this.state.isDisplayedPrev} examination={this.state.exam} prev={this.state.prev} />
                <EditExam toggleDisplay={this.toggleDisplayEdit} display={this.state.isDisplayedEdit} editExam={this.editExam} examination={this.state.exam} />

                <div className="fixed-tp col-12 col-lg-10">
                    <div className="titlebar-content mt-2 mt-lg-0 row p-3 mx-auto">
                        <div className="titlebar p-0 row col-12 my-auto mx-auto">
                            <div className="track pull-right col-4 col-md-2 order-1 order-md-1" id="pointer">
                                زيارات
                            </div>
                            <div className="pull-left p-0 col-6 col-md-4 order-2 order-md-3">
                                <button className="btn pl-3 pr-3 add" data-toggle="modal" data-target="#addPatientWin">إضافة معاينة</button>
                                <button className="btn search" data-toggle="collapse" href="#collapseFormSearch" role="button" aria-expanded="false" aria-controls="collapseFormSearch" ><i className="fa fa-search"></i></button>
                            </div>

                        </div>
                        <div className="collapse" id="collapseFormSearch">
                            <div className="card card-body">
                                Anim pa life accusamus terry ric labore wes apiente ea proident.
                             </div>
                        </div>
                    </div>

                </div>

                <div className="pl-3 pr-3 pt-2">
                    <table className="table table-bordered table-info">
                        <thead className="first-line">
                            <tr>
                                <th scope="col" className="dis-none">رقم الزيارة</th>
                                <th scope="col" className="dis-none"> رقم المريض</th>
                                <th scope="col" >اسم المريض</th>
                                <th scope="col" className="dis-none">تاريخ الزيارة </th>
                                <th scope="col" >العيادة</th>
                                <th scope="col" className="dis-none">الدكتور</th>
                                <th scope="col" className="dis-none">رقم الوصفة</th>
                                <th scope="col" > -- </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                examination.map(exam =>
                                    <tr className="line" key={exam.examination_id} >
                                        <td scope="col" className="dis-none" >{exam.visit_id}</td>
                                        <td scope="col" className="dis-none" >{this.getVisit(exam.visit_id).person_id}</td>
                                        <td scope="col" >{this.getPatientName(exam.visit_id)}</td>
                                        <td scope="col" className="dis-none">{this.getVisit(exam.visit_id).visit_date}</td>
                                        <td scope="col" >{exam.doctor_id != '' ? this.getClinic(this.getDoctor(exam.doctor_id).clinic_id).clinic_name : ''}</td>
                                        <td scope="col" className="dis-none">{exam.doctor_id != '' ? this.getDoctor(exam.doctor_id).name : ''}</td>
                                        <td scope="col" className="dis-none">{exam.prescrition_id}</td>
                                        <td scope="col" >
                                            <button onClick={() => this.toggleDisplayEdit(exam)} className="action"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.toggleDisplayDelete(exam)} className="action" data-toggle="modal" data-target="#deletePatientWin"><i className="fa fa-remove"></i></button>
                                            <button onClick={() => this.toggleDisplayPrev(exam)} className="action"><i className="fa fa-eye"></i></button>
                                        </td>
                                    </tr >
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        patients: state.patients,
        gender: state.gender,
        nationality: state.nationality,
        examination: state.examination,
        visits: state.visits,
        diagnose: state.diagnose,
        doctors: state.doctors,
        clinics: state.clinics
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExam: (newExam, diseases) => dispatch({ data: { newExam, diseases }, type: 'ADDEXAM' }),
        editExam: (exam, diseases) => dispatch({ data: { exam, diseases }, type: 'EDITEXAM' }),
        deleteExam: (exId) => dispatch({ data: exId, type: 'DELETEEXAM' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visits);