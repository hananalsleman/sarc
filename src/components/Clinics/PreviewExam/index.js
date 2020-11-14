import React from 'react';

import { connect } from 'react-redux';

const PreviewExam = (props) => {

    const getDiseaseName = (id) => {
        id = parseInt(id);
        var diseaseIn = props.diseases.findIndex(x => x.disease_id === id);
        return props.diseases[diseaseIn];
    }
    var examination = props.examination;
    const getPatient = (id) => {
        var patientInd = props.patients.findIndex(x => x.id === id);
        return props.patients[patientInd];
    }
    const getVisit = (visitId) => {
        var visitInd = props.visits.findIndex(x => x.visit_id === visitId);
        return props.visits[visitInd];
    }
    const getClinic = (id) => {
        var clinicInd = props.clinics.findIndex(x => x.clinic_id === id);
        if (clinicInd == -1) return -1;
        return props.clinics[clinicInd];
    }
    const getPatientName = (visitId) => {
        var visit = getVisit(visitId);
        var patient = getPatient(visit.person_id);
        return patient.firstName + '  ' + patient.fatherName + '  ' + patient.lastName;
    }
    const getExamInfo = () => {
        var visit = getVisit(props.examination.visit_id);
        var patientName = getPatientName(visit.visit_id);
        var clinic = (props.examination.doctor_id != '' ? getClinic(props.examination.doctor_id) : '');
        examination = {
            ...props.examination,
            clinic_id: (props.examination.doctor_id != '' ? clinic.clinic_id : ''),
            patientName,
            patientId: visit.person_id
        }
    }
    const getNameDoctor = (id) => {
        var ind = props.doctors.findIndex(doctor => doctor.doctor_id == parseInt(id));
        if (ind == -1)
            return '';
        return props.doctors[ind].name;
    }
    const getNameClinic = (id) => {
        var clinic = getClinic(id);
        if (clinic == -1) return '';
        return clinic.clinic_name;
    }
    return (
        <div className="modal win win-preview" tabIndex="-1" role="dialog" id="previewExamWin" style={{ display: props.display }} aria-labelledby="addPatientWinTitle" aria-hidden="true">
            { props.prev == true ? getExamInfo() :null}
            <div className="modal-dialog win-content modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">عرض بيانات معاينة</h5>
                        <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-content" >
                            <div className="cols-container row">
                                <div className="col-12  col-lg-4">
                                    <div className="field row">
                                        <label className="w-50">رقم المريض</label>
                                        <label className="w-50 mainColor font-weight-bold">{examination.patientId}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">اسم المريض</label>
                                        <label className="w-50 mainColor font-weight-bold">{examination.patientName}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">تاريخ المعاينة</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.prev == true ? getVisit(examination.visit_id).visit_date : ''} </label>
                                    </div>
                                    <div className="field row"><label className="w-50">العيادة</label>
                                        <label className="w-50 mainColor font-weight-bold">{getNameClinic(examination.clinic_id)}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الدكتور</label>
                                        <label className="w-50 mainColor font-weight-bold">{getNameDoctor(props.examination.doctor_id)}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">رقم الوصفة</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.examination.prescrition_id}</label>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-4">
                                    <div className="field row"><label className="w-50">التشخيص</label>
                                        <div className="list">
                                            {props.diagnose.filter(diagnose => diagnose.examination_id == examination.examination_id).length > 0
                                                ? props.diagnose.filter(diagnose => diagnose.examination_id == examination.examination_id).map(disease =>
                                                    <div className="row" key={disease.disease_id} >
                                                        <label>{getDiseaseName(disease.disease_id).disease_name}</label>
                                                    </div>
                                                ) : <div className="row empty"> لا يوجد امراض محددة </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-4">
                                    <div className="field row"><label className="w-50">ملاحظات</label>
                                        <label className="w-50 mainColor font-weight-bold">{examination.note}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="choices-btns">
                                <span className="btn cancel" onClick={props.toggleDisplay} data-dismiss="modal" aria-label="Close">إلغاء</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}


function mapStateToProps(state) {
    return {
        diseases: state.diseases,
        visits: state.visits,
        patients: state.patients,
        doctors: state.doctors,
        clinics: state.clinics,
        diagnose: state.diagnose
    }
}


export default connect(mapStateToProps, null)(PreviewExam);



/*
<div className="win-preview win" style={{display:props.display}} >
            { props.prev == true ? getExamInfo() :null}
            <div className="win-container center">
                <div className="title-bar">
                    <label className="win-title">عرض بيانات معاينة</label>
                    <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                </div>


                <div className="win-body">

                    <div className="form-content">
                        <div className="cols-container">
                            <div className="col">
                                    <div className="field"><label>رقم المريض</label><input defaultValue={examination.patientId} disabled  type="text" /></div><br />
                                    <div className="field"><label>اسم المريض</label><input  defaultValue={examination.patientName} disabled  type="text" /></div><br />
                                    <div className="field"><label> تاريخ المعاينة</label><input  defaultValue={props.prev == true ? getVisit(examination.visit_id).visit_date : ''}  disabled type="text" /></div><br/>
                                    <div className="field"><label>العيادة</label>
                                        <input  name="clinicId" disabled value={getNameClinic(examination.clinic_id)} />
                                    </div><br />
                                    <div className="field"><label>الدكتور</label>
                                        <input value={getNameDoctor(props.examination.doctor_id)} disabled />
                                    </div><br />
                                    <div className="field"><label>رقم الوصفة</label><input defaultValue={props.examination.prescrition_id}  disabled  type="text" /></div><br />
                                </div>
                            <div className="col">

                                <div className="field"><label>التشخيص</label>
                                </div><br />
                                <div className="list">
                                    {
                                    props.diagnose.filter(diagnose => diagnose.examination_id == examination.examination_id ).length > 0
                                    ? props.diagnose.filter(diagnose => diagnose.examination_id == examination.examination_id ).map( disease =>
                                        <div className="row" key={disease.disease_id} >
                                            <label>{getDiseaseName(disease.disease_id).disease_name}</label>
                                        </div>
                                    ) : <div className="row empty"> لا يوجد امراض محددة </div> }

                                </div>
                            </div>
                            <div className="col">
                                <div className="field"><label> ملاحظات</label><input defaultValue={examination.note} disabled  type="text" /></div><br />
                            </div>
                        </div>
                        <div className="choices-btns">
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

*/