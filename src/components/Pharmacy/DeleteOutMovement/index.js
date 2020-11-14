import React from 'react';
import { connect } from 'react-redux';

const DeleteOutMovement = (props) => {


    return (

        <div className="modal win " tabIndex="-1" role="dialog" id="deletePatientWin" style={{ display: props.display }} aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title"> حذف عملية اخراج</h5>
                        <button type="button" className="close" onClick={props.toggleDisplay} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {
                        (props.medicine_out.filter(medicine => medicine.movement_id == props.move.movement_id)).length === 0 ?

                            <div className="modal-body win-body-delete">
                                <div className="pt-3 pb-3">
                                    هل تريد بالتأكيد حذف العملية ذات الرقم<label className="font-weight-bold"> {props.move.movement_id}</label>  ؟
                                </div>
                                <div className="choices-btns">
                                    <button className="btn save" onClick={props.delShippedMed} >حذف</button>
                                    <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                                </div>
                            </div>
                            :
                            <div className="modal-body win-body-delete">
                                <div className="pt-3 pb-3">
                                    لا يمكنك حذف هذه الحركة لانها متعلقة بأدوية مخرجة
                                </div>
                                <div className="choices-btns">
                                    <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
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

/*
 <div className="win delete-medicine" style={{display:props.display}} >
            <div className="win-container center">

                <div className="title-bar">
                    <label className="win-title"> حذف عملية اخراج</label>
                    <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                </div>
                <div className="win-body">
                    {
                        (props.medicine_out.filter(medicine => medicine.movement_id == props.move.movement_id)).length === 0 ?
                            <div className="form-content">
                                <div>
                                هل تريد بالتأكيد حذف العملية ذات الرقم  {props.move.movement_id} ؟
                                </div>
                                <div className="choices-btns">
                                    <button  className="btn save" onClick={props.delMove } >حذف</button>
                                    <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                                </div>
                            </div>
                        :
                        <div className="form-content">
                            <div>
                                لا يمكنك حذف هذه الحركة لانها متعلقة بأدوية مخرجة
                            </div>
                            <div className="choices-btns">
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

*/