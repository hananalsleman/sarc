import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddPatient from '../AddPatient';
import PreviewPatient from '../PreviewPatient';
import EditPatient from '../EditPatient';
import DeletePatient from '../DeletePatient';

class Patients extends Component {

    state = {
        fixedTopHeight: '7em',
        patients: this.props.patients,
        patient: { id: '', firstName: '', lastName: '', fatherName: '', motherName: '', age: '', gender: '', birthdate: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
        initialPatient: { id: 1, firstName: '', lastName: '', fatherName: '', motherName: '', age: '', gender: '', birthdate: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
        search: { name: '', motherName: '', age: '', gender: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
    }

    toggleDisplayWin = (p) => {
        this.setState({
            ...this.state,
            patient: p
        });
    }
    toggleDisplaySearch = () => {
        this.setState({
            ...this.state,
            isDisplaySearch: this.state.isDisplaySearch === 'block' ? 'none' : 'block',
            fixedTopHeight: this.state.isDisplaySearch === 'block' ? '7em' : '10.5em'
        });
    }

    delPatient = () => {
        this.props.deletePatient(this.state.patient.id);
        this.setState({
            isDisplayedDelete: this.state.isDisplayedDelete === 'block' ? 'none' : 'block',
            patient: {}
        });
    }

    addPatient = (newPatient) => {
        newPatient.id = parseInt(newPatient.id);
        this.props.addPatient(newPatient);
        this.setState({
            ...this.state,
            isDisplayedAdd: this.state.isDisplayedAdd === 'block' ? 'none' : 'block',
            patient: {}
        });
    }

    editPatient = (p) => {
        this.props.editPatient(p);
        this.setState({
            isDisplayedEdit: this.state.isDisplayedEdit === 'block' ? 'none' : 'block',
            patient: {}
        })
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
                patients: this.props.patients.filter(item => (
                    (item.firstName + ' ' + item.fatherName + ' ' + item.lastName).indexOf(this.state.search.name) !== -1)
                    && item.motherName.indexOf(this.state.search.motherName) !== -1
                )
            })
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.patients !== nextProps.patients) {
            this.setState({
                patients: nextProps.patients,
            });
        }
    }

    render() {
        var patients = this.state.patients;
        return (
            <div className="tab-body">
                <AddPatient  addPatient={this.addPatient} />
                <DeletePatient   patient={this.state.patient} delPatient={this.delPatient} />
                <EditPatient  patient={this.state.patient} editPatient={this.editPatient} />
                <PreviewPatient  patient={this.state.patient} />

                <div className="fixed-tp col-12 col-lg-10">
                    <div className="titlebar-content mt-2 mt-lg-0 row p-3 mx-auto">
                        <div className="titlebar p-0 row col-12 my-auto  mx-auto">
                            <div className="track pull-right col-4 col-md-2 order-1 order-md-1" id="pointer">
                                مرضى
                            </div>
                            <div className="pull-left p-0 col-6 col-md-4 order-2 order-md-3">
                                <button className="btn pl-3 pr-3 add" data-toggle="modal" data-target="#addPatientWin">إضافة مريض</button>
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
                                <th scope="col">  اسم المريض</th>
                                <th scope="col"> اسم الأم</th>
                                <th scope="col" className="dis-none">العمر</th>
                                <th scope="col" className="dis-none">الجنس </th>
                                <th scope="col" className="dis-none">الجنسية</th>
                                <th scope="col" className="dis-none">مكان الولادة</th>
                                <th scope="col" className="dis-none"> تاريخ التسجيل</th>
                                <th scope="col" className="dis-none"> الهاتف </th>
                                <th scope="col" > -- </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(patient =>
                                    <tr className="line" key={patient.id} >
                                        <td scope="col" >{patient.firstName} {patient.fatherName} {patient.lastName} </td>
                                        <td scope="col" > {patient.motherName}</td>
                                        <td scope="col" className="dis-none">{patient.age}</td>
                                        <td scope="col" className="dis-none">{this.props.gender[patient.gender]}</td>
                                        <td scope="col" className="dis-none">{this.props.nationality[patient.nationality]}</td>
                                        <td scope="col" className="dis-none">{patient.birthplace}</td>
                                        <td scope="col" className="dis-none">{patient.registerdate}</td>
                                        <td scope="col" className="dis-none">{patient.phone}</td>
                                        <td scope="col" >
                                            <button onClick={() => this.toggleDisplayWin(patient)}  data-toggle="modal" data-target="#editPatientWin" className="action"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(patient)} data-toggle="modal" data-target="#deletePatientWin" className="action" ><i className="fa fa-remove"></i></button>
                                            <button onClick={() => this.toggleDisplayWin(patient)} data-toggle="modal" data-target="#previewPatientWin" className="action"><i className="fa fa-eye"></i></button>
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
        nationality: state.nationality
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPatient: (newPatient) => dispatch({ data: newPatient, type: 'ADDPATIENT' }),
        editPatient: (patient) => dispatch({ data: patient, type: 'EDITPATIENT' }),
        deletePatient: (pId) => dispatch({ data: pId, type: 'DELETEPATIENT' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Patients);
