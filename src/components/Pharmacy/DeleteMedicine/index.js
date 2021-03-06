import React from 'react';

const DeleteMedicine = (props) => {


    return (

        <div className="modal win " tabIndex="-1" role="dialog" id="deleteMedicineWin" aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">حذف دواء </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body win-body-delete">
                        <div className="pt-3 pb-3">
                            هل تريد بالتأكيد حذف الدواء<label className="font-weight-bold">{props.medicine.medicine_name}</label> ؟
                        </div>
                        <div className="choices-btns">
                            <button className="btn save" onClick={props.delMedicine} >حذف</button>
                            <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeleteMedicine;


/*


        <div className="win delete-medicine" style={{display:props.display}} >
            <div className="win-container center">

                <div className="title-bar">
                    <label className="win-title"> حذف دواء</label>
                    <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                </div>


                <div className="win-body">

                    <div className="form-content">
                        <div>
                           هل تريد بالتأكيد حذف الدواء {props.medicine.medicine_name} ؟
                        </div>
                        <div className="choices-btns">
                            <button  className="btn save" onClick={props.delMedicine } >حذف</button>
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>

*/