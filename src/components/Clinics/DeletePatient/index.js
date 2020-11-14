import React from 'react';

const DeletePatient = (props) => {


    return (
        <div className="modal win " tabIndex="-1" role="dialog" id="deletePatientWin" style={{ display: props.display }} aria-labelledby="deletePatientWinTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered win-content win-delete" role="document">
                <div className="modal-content">
                    <div className="modal-header title-bar">
                        <h5 className="modal-title win-title">حذف مريض</h5>
                        <button type="button" className="close" onClick={props.toggleDisplay} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body win-body-delete">
                        <div className="pt-3 pb-3">
                            هل تريد بالتأكيد حذف المريض <label className="font-weight-bold">{props.patient.firstName} {props.patient.fatherName} {props.patient.lastName}</label> ؟
                        </div>
                        <div className="choices-btns">
                            <button className="btn save" onClick={props.delPatient} >حذف</button>
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePatient;

/*

<div className="win delete-patient patient-win" style={{display:props.display}} >
            <div className="win-container center">

                <div className="title-bar">
                    <label className="win-title"> حذف مريض</label>
                    <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                </div>

                <div className="win-body">

                    <div className="form-content">
                        <div>
                           هل تريد بالتأكيد حذف المريض {props.patient.firstName} {props.patient.fatherName} {props.patient.lastName } ؟
                        </div>
                        <div className="choices-btns">
                            <button  className="btn save" onClick={props.delPatient } >حذف</button>
                            <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>

*/