import React from 'react';
import { connect } from 'react-redux';

const PreviewMedicine = (props) => {

    return (
        <div className="modal win win-preview" tabIndex="-1" role="dialog" id="previewMedicineWin" style={{ display: props.display }} aria-labelledby="addPatientWinTitle" aria-hidden="true">
            <div className="modal-dialog win-content modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">عرض بيانات دواء</h5>
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
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.medicine_id}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الاسم</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.medicine_name}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الكود</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.code}</label>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-4">
                                    <div className="field row"><label className="w-50">العيار</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.medicine_calibre}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">الشكل</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine_form[props.medicine.medicine_form]}</label>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-4">
                                    <div className="field row"><label className="w-50">المادة الفعالة</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.active_material}</label>
                                    </div>
                                    <div className="field row"><label className="w-50">ملاحظات</label>
                                        <label className="w-50 mainColor font-weight-bold">{props.medicine.note}</label>
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
        medicines: state.medicines,
        medicine_form: state.medicine_form
    }
}
export default connect(mapStateToProps, null)(PreviewMedicine);


/*
        <div className="win win-preview" style={{display:props.display}} >
            <div className="win-container center">
                <div className="title-bar">
                    <label className="win-title">عرض بيانات دواء</label>
                    <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                </div>


                <div className="win-body">

                    <div className="form-content">
                        <div className="cols-container">
                            <div className="col">
                                <div className="field"><label>الرقم</label><input disabled value={props.medicine.medicine_id}  type="text" /></div><br />
                                <div className="field"><label>الاسم</label><input disabled value={props.medicine.medicine_name}  type="text" /></div><br />
                                <div className="field"><label> الكود</label><input disabled value={props.medicine.code} type="text" /></div><br />
                            </div>
                            <div className="col">
                                <div className="field"><label>العيار</label><input disabled value={props.medicine.medicine_calibre}  type="text" /></div><br />
                                <div className="field"><label>الشكل</label>
                                    <input value={props.medicine_form[props.medicine.medicine_form]} disabled type="text" />
                                </div><br />
                                <div className="field"><label> المادة الفعالة</label><input disabled value={props.medicine.active_material} type="text" /></div><br />

                            </div>
                            <div className="col">
                                <div className="field"><label> ملاحظات</label><input disabled value={props.medicine.note} type="text" /></div><br />
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