import React, { Component } from 'react';

import { connect } from 'react-redux';

class PreviewOutMovement extends Component {

    getId = () => {
        return this.props.pharmacy_movement_out.length + 1;
    }
    getOutMedicine = (id) => {
        var data = this.props.medicine_out.filter(med => med.movement_id === id);
        return data;
    }
    state = {
        move: { movement_id: 3, movement_type: 1, movement_date: '', notes: '', prescrition_id: '' },
        selectedMedicines: [],
        newMed: { medicine_id: 1, shipment_id: 1, quantity: 15 },

    }

    getMedicine = (medicine_id) => {
        var index = this.props.medicines.findIndex(medicine => medicine.medicine_id == parseInt(medicine_id));
        return this.props.medicines[index];
    }
    getShipment = (id) => {
        var index = this.props.shipment.findIndex(shipment => shipment.shipment_id == parseInt(id));
        return this.props.shipment[index];
    }
    getPharamcyStore = (medicine_id, shipment_id) => {
        var index = this.props.pharmacy_stock.findIndex(medicine => medicine.medicine_id == parseInt(medicine_id) && medicine.shipment_id == shipment_id);
        if (index == -1) return '';
        return this.props.pharmacy_stock[index].current_quantity;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.move !== nextProps.move) {
            this.setState({
                move: nextProps.move,
                selectedMedicines: this.getOutMedicine(nextProps.move.movement_id),
            });
        }
    }

    render() {
        const props = this.props;
        return (
            <div className="modal win win-preview" tabIndex="-1" role="dialog" id="previewPatientWin" style={{ display: props.display }} aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">عرض معلومات إخراج أدوية </h5>
                            <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-content" >
                                <div className="cols-container row">
                                    <div className="col-12  col-lg-4">
                                        <div className="field row">
                                            <label className="w-50">نوع الاخراج</label>
                                            <label className="w-50 mainColor font-weight-bold">{this.props.movement_out_types[this.props.move.movement_type]}</label>
                                        </div>
                                    </div>
                                    <div className="col-12  col-lg-4">
                                        <div className="field row"><label className="w-50">تاريخ الإخراج</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.move.movement_date}</label>
                                        </div>
                                    </div>
                                    <div className="col-12  col-lg-4">
                                        <div className="field row"><label className="w-50"> رقم الوصفة</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.move.prescrition_id}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="shipped-medicine cols-container row">
                                    <div className="text-right col-12"><label className="title">الأدوية المخرجة</label></div>
                                    <table className=" table table-bordered col-11 mx-auto medicine-table text-center">
                                        <thead >
                                            <tr className="p-1">
                                                <th scope="col">اسم الدواء</th>
                                                <th scope="col"> كود</th>
                                                <th scope="col"> تاريخ الشحن</th>
                                                <th scope="col"> الكمية المتوفرة</th>
                                                <th scope="col"> الكمية المخرجة</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.selectedMedicines.length > 0 ?
                                                    this.state.selectedMedicines.map((medicine, index) =>
                                                        <tr key={index}>
                                                            <td>{(this.getMedicine(medicine.medicine_id)).medicine_name}</td>
                                                            <td>{(this.getMedicine(medicine.medicine_id)).code}</td>
                                                            <td>{(this.getShipment(medicine.shipment_id)).shipment_date}</td>
                                                            <td>{(this.getPharamcyStore(medicine.medicine_id, medicine.shipment_id)).current_quantity}</td>
                                                            <td>{medicine.quantity}</td>
                                                        </tr>
                                                    ) : <tr >
                                                        <td colSpan="6" className="empty">لا يوجد ادوية محددة</td>
                                                    </tr>
                                            }
                                        </tbody>
                                    </table>
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
}

function mapStateToProps(state) {
    return {
        medicines: state.medicines,
        medicine_form: state.medicine_form,
        shipment: state.shipment,
        medicine_out: state.medicine_out,
        pharmacy_movement_out: state.pharmacy_movement_out,
        movement_out_types: state.movement_out_types,
        pharmacy_stock: state.pharmacy_stock
    }
}

export default connect(mapStateToProps, null)(PreviewOutMovement);

/*

<div className="AddOutMovement   win" style={{ display: props.display }} >
                <div className="win-container center">

                    <div className="title-bar">
                        <label className="win-title">إخراج أدوية</label>
                        <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                    </div>

                    <div className="win-body">

                        <form className="form-content" id="form-addMove">
                            <div className="cols-container">
                                <div className="col">
                                    <div className="field"><label>نوع الاخراج</label>
                                        <input  disabled value={this.props.movement_out_types[this.props.move.movement_type]} type="text" />
                                    </div><br />
                                </div>
                                <div className="col">
                                    <div className="field"><label>تاريخ الإخراج</label><input  disabled value={props.move.movement_date} type="text" /></div><br />
                                </div>
                                <div className="col">
                                    <div className="field"><label> رقم الوصفة</label><input disabled value={props.move.prescrition_id} type="text" /></div><br />
                                </div>
                            </div>
                            <div className="outed-medicine">

                                <label className="title">الأدوية المخرجة</label>
                                <table className="medicine-table">
                                    <thead>
                                        <tr>
                                            <th>اسم الدواء</th>
                                            <th> كود</th>
                                            <th> تاريخ الشحن</th>
                                            <th>الكمية المتوفرة</th>
                                            <th>الكمية المخرجة</th>
                                            <th> - </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.selectedMedicines.length > 0 ?
                                            this.state.selectedMedicines.map( (medicine,index) =>
                                                <tr key={index}>
                                                    <td>{(this.getMedicine(medicine.medicine_id)).medicine_name}</td>
                                                    <td>{(this.getMedicine(medicine.medicine_id)).code}</td>
                                                    <td>{(this.getShipment(medicine.shipment_id)).shipment_date}</td>
                                                    <td>{(this.getPharamcyStore(medicine.medicine_id,medicine.shipment_id))}</td>
                                                    <td>{medicine.quantity}</td>
                                                </tr>
                                             ):<tr >
                                                    <td colSpan="6" className="empty">لا يوجد ادوية محددة</td>
                                                </tr>
                                        }

                                    </tbody>
                                </table>

                            </div>
                            <div className="choices-btns">
                                <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


*/