import React, { Component } from 'react';

import { connect } from 'react-redux';


import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';


class AddExam extends Component {


    getTodayDate = () => {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        if (month < 10)
            month = '0' + month;
        var day = today.getDate();
        if (day < 10)
            day = '0' + day;
        var formatToday = year + '-' + month + '-' + day;
        return formatToday;
    }

    state = {
        selectedDiseases: [],
        newDiagnose: {},
        newVisit: {},
        newExam: { examination_id: '', visit_id: '', doctor_id: '', prescrition_id: '', note: '', examdate: this.getTodayDate() },
        error: '',
        doctors: this.props.doctors
    }
    addEx = (e) => {
        e.preventDefault();
        if (document.getElementById("patientName").value == 'رقم المريض غير موجود' ||
            document.getElementById("patientName").value == '') {
            this.setState({
                error: 'ادخل رقم مريض  صحيح'
            });
        }
        else {
            this.props.addExam(this.state.newExam, this.state.selectedDiseases);
            document.getElementById("form-addExam").reset();
        }
    }
    changeVal = (e) => {
        if (e.target.name === "patientId") {
            var patientInd = this.props.patients.findIndex(patient => patient.id === parseInt(e.target.value));
            if (patientInd != -1) {
                var patientName = this.props.patients[patientInd].firstName + ' ' + this.props.patients[patientInd].fatherName + ' ' + this.props.patients[patientInd].lastName;
                document.getElementById("patientName").value = patientName;
                this.setState({
                    newExam: {
                        ...this.state.newExam,
                        patientName,
                    }
                });
            }
            else {
                document.getElementById("patientName").value = 'رقم المريض غير موجود';
                this.setState({
                    newExam: {
                        ...this.state.newExam,
                        patientName: '',
                    }
                });
            }

        }
        if (e.target.name == "clinic_id") {
            var doctors = this.props.doctors.filter(doctor => doctor.clinic_id == parseInt(e.target.value));
            console.log(doctors[0].doctor_id);
            this.setState({
                doctors,
                newExam: {
                    ...this.state.newExam,
                    doctor_id: doctors[0].doctor_id
                }
            })
        }
        else {
            this.setState({
                newExam: {
                    ...this.state.newExam,
                    [e.target.name]: e.target.value,
                },
                error: ''
            })
        }
    }
    addDisease = (e) => {
        var diseases = this.state.selectedDiseases;
        diseases.push(parseInt(e.target.value));
        var diseases = Array.from(new Set(diseases));
        this.setState({
            selectedDiseases: diseases
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
    schema = () => {
        const schema = Yup.object({
            });
        return schema;
    }
    form = (props) => {
        return (
            <form className="form-content" id="addPatientForm" onSubmit={props.handleSubmit}>
                <div className="cols-container row">
                    <div className="col-12  col-lg-4">
                        <div className="field row">
                            <label>رقم المريض</label>
                            <Field id="patientId" name="patientId" type="text" />
                            <div className="error col-12"><ErrorMessage name="patientId" /></div>
                        </div>
                        <div className="field row"><label>اسم المريض</label>
                            <Field id="patientName" name="patientName"  type="text" required disabled />
                            <div className="error col-12"><ErrorMessage name="patientName" /></div>
                        </div>
                        <div className="field row"><label> تاريخ المعاينة</label>
                            <Field id="examdate" name="examdate" defaultValue={this.getTodayDate()} type="date" />
                            <div className="error col-12"><ErrorMessage name="examdate" /></div>
                        </div>
                        <div className="field row"><label>العيادة</label>
                            <Field id="clinic_id" name="clinic_id" component="select" onChange={this.changeVal}>
                                {this.props.clinics.map(clinic =>
                                    <option value={clinic.clinic_id} key={clinic.clinic_id}>{clinic.clinic_name}</option>
                                )}
                            </Field>
                        </div>
                        <div className="field row"><label>الدكتور</label>
                            <Field id="doctor_id" name="doctor_id" component="select" onChange={this.changeVal}>
                                {this.state.doctors.map(doctor =>
                                    <option value={doctor.doctor_id} key={doctor.doctor_id}>{doctor.name}</option>
                                )}
                            </Field>
                        </div>
                        <div className="field row"><label>رقم الوصفة</label>
                            <Field id="prescrition_id" name="prescrition_id" type="text" onChange={this.changeVal} />
                            <div className="error col-12"><ErrorMessage name="prescrition_id" /></div>
                        </div>

                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>التشخيص</label>
                            <Field id="diagnose" onChange={this.addDisease} name="diagnose" component="select" >
                                <option ></option>
                                {this.props.diseases.map(disease =>
                                    <option value={disease.disease_id} key={disease.disease_id} >
                                        {disease.disease_name}
                                    </option>
                                )}
                            </Field>
                        </div>

                        <div className="list">
                            {this.state.selectedDiseases.length > 0 ? this.state.selectedDiseases.map(id =>
                                <div className="row" key={id} >
                                    <label>{this.getDiseaseName(id).disease_name}</label>
                                    <div onClick={() => this.deleteDisease(id)}><i className="fa fa-remove"></i></div>
                                </div>
                            ) : <div className="empty"> لا يوجد امراض محددة </div>}
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
        return (

            <div className="modal win" tabIndex="-1" role="dialog" id="addExamWin" style={{ display: props.display }} aria-labelledby="addExamWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">إضافة معاينة</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    patientId: '', patientName: '', lastName: '', fatherName: ' ', motherName: '', age: '',
                                    gender: '0', birthdate: '', birthplace: '', registerdate: this.getTodayDate(), nationality: '0', phone: '', nationalNumber: ''
                                }}
                                render={this.form}
                                validationSchema={this.schema()}
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
        patients: state.patients,
        clinics: state.clinics,
        doctors: state.doctors
    }
}


export default connect(mapStateToProps, null)(AddExam);


/*

            <div className="addpatient win" style={{ display: props.display }} >
                <div className="win-container center">

                    <div className="win-body">

                        <form className="form-content" id="form-addExam">
                            <div className="cols-container">
                                sName="field"><label> ملاحظات</label><input className="name" onChange={this.changeVal} name="note" type="text" /></div><br />
                                </div>
                            </div>
                            <div className="choices-btns">
                                <button onClick={ this.addEx } className="btn save">حفظ</button>
                                <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

*/