import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, ErrorMessage, Formik } from 'formik';

class EditExam extends Component {


    getVisit = (visitId) => {
        var visitInd = this.props.visits.findIndex(x => x.visit_id === visitId);
        return this.props.visits[visitInd];
    }
    getPatient = (id) => {
        var patientInd = this.props.patients.findIndex(x => x.id === id);
        return this.props.patients[patientInd];
    }
    getPatientName = (visitId) => {
        var visit = this.getVisit(visitId);
        var patient = this.getPatient(visit.person_id);
        return patient.firstName + '  ' + patient.fatherName + '  ' + patient.lastName;
    }
    getClinic = (doctorId) => {
        var doctorInd = this.props.doctors.findIndex(x => x.doctor_id === parseInt(doctorId));
        var clinicId = this.props.doctors[doctorInd].clinic_id;
        var clinicInd = this.props.clinics.findIndex(x => x.clinic_id === parseInt(clinicId));
        return this.props.clinics[clinicInd];
    }
    getDiseases = (id) => {
        var diseases = this.props.diagnose.filter(diagnose => diagnose.examination_id === id);
        var result = diseases.map(diagnose => {
            return diagnose.disease_id
        });
        return result;
    }
    state = {
        selectedDiseases: this.getDiseases(this.props.examination.id),
        exam: {
            ...this.props.examination,
            patientId: this.props.examination.person_id !== '' ? this.getVisit(this.props.examination.visit_id).person_id : '',
            patientName: this.props.examination.person_id !== '' ? this.getPatientName(this.props.examination.visit_id) : '',
            clinic_id: this.props.examination.person_id !== '' ? this.getClinic(this.props.examination.doctor_id).clinic_id : '',
            examdate: this.getVisit(this.props.examination.visit_id).visit_date
        },
        doctors: this.props.doctors
    }
    editExam = (e) => {
        e.preventDefault();
        console.log(this.state.exam);
        this.props.editExam(this.state.exam, this.state.selectedDiseases);
    }
    changeVal = (e) => {
        if (e.target.name === "clinic_id") {
            var doctors = this.props.doctors.filter(doctor => doctor.clinic_id === e.target.value)
            this.setState({
                doctors,
                exam: {
                    ...this.state.exam,
                    doctor_id: doctors[0].doctor_id
                }
            })
        }
        else {
            this.setState({
                exam: {
                    ...this.state.exam,
                    [e.target.name]: e.target.value
                }
            })
        }
    }
    addDisease = (e) => {
        var diseases = this.state.selectedDiseases;
        diseases.push(parseInt(e.target.value));
        var set_diseases = Array.from(new Set(diseases));
        this.setState({
            selectedDiseases: set_diseases
        })
    }
    deleteDisease = (id) => {
        var diseases = this.state.selectedDiseases;
        id = parseInt(id);
        var diseaseIn = this.state.selectedDiseases.findIndex(x => x === id);
        diseases.splice(diseaseIn, 1);
        this.setState({
            selectedDiseases: diseases
        });
    }
    getDiseaseName = (id) => {
        id = parseInt(id);
        var diseaseIn = this.props.diseases.findIndex(x => x.disease_id === id);
        return this.props.diseases[diseaseIn];
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.examination !== nextProps.examination && nextProps.display === 'block') {
            this.setState({
                selectedDiseases: this.getDiseases(nextProps.examination.examination_id),
                exam: {
                    ...nextProps.examination,
                    patientId: this.getVisit(nextProps.examination.visit_id).person_id,
                    patientName: this.getPatientName(nextProps.examination.visit_id),
                    clinic_id: nextProps.examination.doctor_id !== '' ? this.getClinic(nextProps.examination.doctor_id).clinic_id : '',
                    examdate: this.getVisit(nextProps.examination.visit_id).visit_date
                }
            });
        }
    }
    form = (props) => {
        return (
            <form className="form-content" id="addPatientForm" onSubmit={props.handleSubmit}>
                <div className="cols-container row">
                    <div className="col-12  col-lg-4">
                        <div className="field row">
                            <label>رقم المريض</label>
                            <Field id="patientId" name="patientId" disabled readOnly type="text" />
                        </div>
                        <div className="field row"><label>اسم المريض</label>
                            <Field id="patientName" name="patientName" disabled readOnly type="text" />
                            <div className="error col-12"><ErrorMessage name="patientName" /></div>
                        </div>
                        <div className="field row"><label>تاريخ المعاينة</label>
                            <Field id="examdate" name="examdate" type="date" />
                            <div className="error col-12"><ErrorMessage name="examdate" /></div>
                        </div>
                        <div className="field row"><label>العيادة</label>
                            <Field id="clinic_id" name="clinic_id" component="select">
                                {this.props.clinics.map(clinic =>
                                    <option value={clinic.clinic_id} key={clinic.clinic_id}>{clinic.clinic_name}</option>
                                )}
                            </Field>
                        </div>
                        <div className="field row"><label>الدكتور</label>
                            <Field id="doctor_id" name="doctor_id" component="select">
                                {this.state.doctors.map(doctor =>
                                    <option value={doctor.doctor_id} key={doctor.doctor_id}>{doctor.name}</option>
                                )}
                            </Field>
                        </div>
                        <div className="field row"><label>رقم الوصفة</label>
                            <Field id="prescrition_id" name="prescrition_id" type="text" />
                            <   div className="error col-12"><ErrorMessage name="lastName" /></div>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>التشخيص</label>
                            <Field id="diagnose" name="diagnose" component="select" onChange={this.addDisease}>
                                {this.props.diseases.map(disease =>
                                    <option value={disease.disease_id} key={disease.disease_id} >
                                        {disease.disease_name}
                                    </option>
                                )}
                            </Field>
                        </div>
                        <div className="list">
                            {this.state.selectedDiseases.length > 0
                                ? this.state.selectedDiseases.map(diseaseId =>
                                    <div className="row" key={diseaseId} >
                                        <label>{this.props.diseases[this.props.diseases.findIndex(x => x.disease_id === diseaseId)].disease_name}</label>
                                        <div onClick={() => this.deleteDisease(diseaseId)}><i className="fa fa-remove"></i></div>
                                    </div>
                                ) : <div className="row empty"> لا يوجد امراض محددة </div>
                            }
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label> ملاحظات</label><Field name="note" id="note" component="textarea" /></div>
                    </div>
                </div>
                <div className="choices-btns">
                    <button type="submit" className="btn save">حفظ</button>
                    <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
                </div>
            </form>
        )
    }

    render() {
        const props = this.props;
        var examination = this.state.exam;
        return (
            <div className="modal win" tabIndex="-1" role="dialog" id="editExamWin" aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">تعديل مريض</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    patientId: examination.patientId || '',
                                    patientName: examination.patientName || '',
                                    examdate: examination.examdate || '',
                                    note: props.examination.note || '',
                                    prescrition_id: props.examination.prescrition_id || '',
                                    clinic_id: props.examination.clinic_id || '0',
                                    doctor_id: props.examination.doctor_id || ''
                                }}
                                onSubmit={this.editExam}
                                render={this.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


function mapStateToProps(state) {
    return {
        diseases: state.diseases,
        diagnose: state.diagnose,
        visits: state.visits,
        patients: state.patients,
        doctors: state.doctors,
        clinics: state.clinics,
    }
}


export default connect(mapStateToProps, null)(EditExam);
