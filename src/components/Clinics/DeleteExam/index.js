import React from 'react';

const DeleteExam = (props) => {
     
    
    return (
        <div className="modal win " tabIndex="-1" role="dialog" id="deletePatientWin" style={{ display: props.display }} aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">حذف معاينة</h5>
                        <button type="button" className="close" onClick={props.toggleDisplay} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body win-body-delete">
                        <div className="pt-3 pb-3">
                        هل تريد بالتأكيد حذف المعاينة التي رقمها <label className="font-weight-bold">{props.exam.examination_id}</label> ؟
                        </div>
                        <div className="choices-btns">
                            <button className="btn save" onClick={props.delExam} >حذف</button>
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteExam;