import React from 'react';
import { connect } from 'react-redux';

const PreviewPatient = (props) => {


    return (
        <div className="modal win win-preview" tabIndex="-1" role="dialog" id="previewPatientWin"  aria-labelledby="addPatientWinTitle" aria-hidden="true">
            <div className="modal-dialog win-content modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">عرض بيانات مريض</h5>
                        <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-content" >
                            <div className="cols-container row">
                                <div className="col-12  col-lg-4">
                                    <div className="field row">
                                        <label className="w-50">الرقم</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.id}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الاسم</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.firstName}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">اسم الأب</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.fatherName}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الكنية</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.lastName}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">اسم الأم</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.motherName}</label>
                                    </div>
                                    <div className="field row"><label className="w-50"> تاريخ الميلاد</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.birthdate}</label>
                                    </div>
                                    <div className="field row"><label className="w-50"> مكان الميلاد</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.birthplace}</label>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-4">

                                    <div className="field row"><label className="w-50">الجنس</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.gender[parseInt(props.patient.gender)]}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الجنسية</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.nationality[parseInt(props.patient.nationality)]}</label>
                                    </div>
                                    <div className="field row"><label className="w-50"> الرقم الوطني</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.nationalNumber}</label>
                                    </div>
                                    <br />
                                    <div className="group-field">
                                        <label className="title-field">عنوان الاقامة الحالي:</label><br />

                                        <div className="field row"><label className="w-50">المحافظة</label>
                                            <label className="w-50 mainColor font-weight-bold"></label>
                                        </div>
                                        <div className="field row"><label className="w-50">المنطقة</label>
                                            <label className="w-50 mainColor font-weight-bold"></label>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12  col-lg-4">
                                    <div className="field row"><label className="w-50">رقم الهاتف</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.phone}</label>
                                    </div>
                                    <div className="field row"><label className="w-50"> تاريخ التسجيل</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.registerdate}</label>
                                    </div>
                                    <div className="field row"><label className="w-50"> ملاحظات</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.patient.note}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="choices-btns">
                                <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
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
        patients: state.patients,
        nationality: state.nationality,
        gender: state.gender
    }
}
export default connect(mapStateToProps, null)(PreviewPatient);
