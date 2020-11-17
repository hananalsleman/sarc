import React from 'react';
import { connect } from 'react-redux';

const DeleteOutMovement = (props) => {


    return (

        <div className="modal win " tabIndex="-1" role="dialog" id="deleteOutMovementWin" aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title"> حذف عملية اخراج</h5>
                        <button type="button" className="close"  data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {
                        (props.medicine_out.filter(medicine => medicine.movement_id === props.move.movement_id)).length === 0 ?

                            <div className="modal-body win-body-delete">
                                <div className="pt-3 pb-3">
                                    هل تريد بالتأكيد حذف العملية ذات الرقم<label className="font-weight-bold"> {props.move.movement_id}</label>  ؟
                                </div>
                                <div className="choices-btns">
                                    <button className="btn save" onClick={props.delShippedMed} >حذف</button>
                                    <span className="btn cancel"  data-dismiss="modal" aria-label="Close">إلغاء</span>
                                </div>
                            </div>
                            :
                            <div className="modal-body win-body-delete">
                                <div className="pt-3 pb-3">
                                    لا يمكنك حذف هذه الحركة لانها متعلقة بأدوية مخرجة
                                </div>
                                <div className="choices-btns">
                                    <span className="btn cancel"  data-dismiss="modal" aria-label="Close">إلغاء</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>



    )
}


function mapStateToProps(state) {
    return {
        medicines: state.medicines,
        stock: state.pharmacy_stock,
        pharmacy_movement_out: state.pharmacy_movement_out,
        medicine_out: state.medicine_out,
        movement_out_types: state.movement_out_types
    }
}

export default connect(mapStateToProps, null)(DeleteOutMovement);

