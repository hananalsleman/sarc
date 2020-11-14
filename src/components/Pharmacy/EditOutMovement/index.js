import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
class EditOutMovement extends Component {

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
    editMove = (e) => {
        e.preventDefault();
        this.props.editMove(this.state.move, this.state.selectedMedicines);
        this.setState({
            move: { movement_id: 3, movement_type: 1, movement_date: '', notes: '', prescrition_id: '' },
            selectedMedicines: [],
            newMed: { medicine_id: 1, shipment_id: 1, quantity: 15 },
        })
    }
    addMed = (e) => {
        e.preventDefault();
        var medicines = this.state.selectedMedicines;
        medicines.push(this.state.newMed);
        this.setState({
            selectedMedicines: medicines
        })
    }
    delMed = (index) => {
        var medicines = this.state.selectedMedicines;
        medicines.splice(index, 1);
        this.setState({
            selectedMedicines: medicines
        })
    }
    changeValMed = (e) => {

        if (e.target.name == 'medicine') {
            this.setState({
                newMed: {
                    ...this.state.newMed,
                    medicine_id: parseInt(e.target.value[0]),
                    shipment_id: parseInt(e.target.value[2]),
                }
            })
        }
        else {
            this.setState({
                newMed: {
                    ...this.state.newMed,
                    [e.target.name]: parseInt(e.target.value)
                }
            })
        }
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
    schema = () => {
        const schema = Yup.object({
            firstName: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            lastName: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            fatherName: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            motherName: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            nationalNumber: Yup.number().test('len', 'يجب ان يكون الرقم مؤلف من 11', val => val > 0 ? val.toString().length === 10 : true),
            phone: Yup.number().test('len', 'يجب ان يكون الرقم مؤلف من 10', val => val > 0 ? val.toString().length === 7 : true)
        });
        return schema;
    }
    form = (props) => {
        return (
            <form className="form-content" id="addPatientForm" onSubmit={props.handleSubmit}>
                <div className="cols-container row">
                    <div className="col-12  col-lg-4">
                        <div className="field row">
                            <label>نوع الاخراج</label>
                            <Field id="movement_type" name="movement_type" component="select">
                                <option>نوع الاخراج</option>
                                {
                                    this.props.movement_out_types.map((medicine, index) =>
                                        <option key={index} value={index} >{this.props.movement_out_types[index]}</option>
                                    )
                                }
                            </Field>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>تاريخ الإخراج</label>
                            <Field id="movement_date" name="movement_date" type="date" />
                            <div className="error col-12"><ErrorMessage name="movement_date" /></div>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>رقم الوصفة</label>
                            <Field id="prescrition_id" name="prescrition_id" type="text" />
                            <div className="error col-12"><ErrorMessage name="prescrition_id" /></div>
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
                                <th scope="col"> - </th>
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
                                            <td><i onClick={() => this.delMed(index)} className="fa fa-remove"></i></td>
                                        </tr>
                                    ) : <tr >
                                        <td colSpan="6" className="empty">لا يوجد ادوية محددة</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                    <div className="cols-container justify-content-start row col-12" id="form-addMed">
                        <div className="col-12  col-lg-2 ">
                            <div className="field row">
                                <Field className="col-12" id="medicine_id" name="medicine_id" component="select">
                                    <option>اسم الدواء</option>
                                    {
                                        this.props.pharmacy_stock.map((medicine, index) =>
                                            (medicine.current_quantity > 0 ?
                                                <option key={index} value={'' + medicine.medicine_id + ',' + medicine.shipment_id} >
                                                    {(this.getMedicine(medicine.medicine_id)).medicine_name}
                                                   تاريخ الشحن {(this.getShipment(medicine.shipment_id)).shipment_date}
                                                </option>
                                                : null)
                                        )
                                    }
                                </Field>
                                <div className="error col-12"><ErrorMessage name="shipment_source_id" /></div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-2 ">
                            <div className="field row">
                                <Field className="col-12" id="quantity" name="quantity" type="number" max={this.state.maxQuantity} placeholder="الكمية" />
                                <div className="error col-12"><ErrorMessage name="quantity" /></div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-1">
                            <div className="field row">
                                <button onClick={this.addMed} className="btn btn-secondary pt-0 pb-0 pl-2 pr-2">اضافة </button>
                            </div>
                        </div>
                        <div className="error" style={{ width: '50%', marginTop: '10px' }}><span>{this.state.error}</span></div>
                    </div>

                </div>
                <div className="choices-btns">
                    <button type="submit" className="btn save">حفظ</button>
                    <span className="btn cancel" onClick={props.toggleDisplay} data-dismiss="modal" aria-label="Close">إلغاء</span>
                </div>
            </form >
        )
    }
    render() {
        const props = this.props;
        return (


            <div className="modal win" tabIndex="-1" role="dialog" id="editOutMovementWin" aria-labelledby="addPatientWinTitle" aria-hidden="true"  >

                <div className="modal-dialog modal-dialog-centered win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">إخراج أدوية</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    movement_type: this.props.movement_out_types[this.props.move.movement_type],
                                    movement_date: props.move.movement_date,
                                    prescrition_id: props.move.prescrition_id,
                                }}
                                onSubmit={this.addShip}
                                render={this.form}
                                validationSchema={this.schema()}
                            />
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

export default connect(mapStateToProps, null)(EditOutMovement);
