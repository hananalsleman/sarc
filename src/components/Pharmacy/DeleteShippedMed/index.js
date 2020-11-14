import React from 'react';

const DeleteShippedMed = (props) => {
    
    return (
        <div className="modal win " tabIndex="-1" role="dialog" id="deleteShipmentMedWin" aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">حذف دواء مشحون</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body win-body-delete">
                        <div className="pt-3 pb-3">
                         هل تريد بالتأكيد حذف الدواء<label className="font-weight-bold">{props.medicine.medicine_id}</label> من الشحن رقم
                        <label className="font-weight-bold">{props.medicine.shipment_id}</label> ؟
                        </div>
                        <div className="choices-btns">
                            <button className="btn save" onClick={props.delShippedMed} >حذف</button>
                            <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DeleteShippedMed;
