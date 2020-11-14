import React, { Component } from 'react';

import { connect } from 'react-redux';
import './style.css';

import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

class AddShipment extends Component {

    getId = () => {
        return this.props.shipment.length + 1;
    }
    getTodayDate = () => {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        if (month < 10)
            month = '0' + month;
        var day = today.getDate();
        if (day < 10)
            day = '0' + day;
        var formatToday = year + '-' + month + '-' + day;
        return formatToday;
    }
    state = {
        newShip: { shipment_id: this.getId(), shipment_date: this.getTodayDate(), shipment_source_id: 2 },
        selectedMedicines: [],
        newMed: { shipment_id: this.getId(), medicine_id: 1, production_date: '', expiration_date: '', quantity: 12, current_quantity: 5 },
        error: ''
    }
    addShip = (e) => {
        e.preventDefault();
        if (this.state.selectedMedicines.length == 0) {
            this.setState({
                error: 'لا يوجد ادوية محددة'
            })
        }
        else {
            document.getElementById("form-addShipment").reset();
            var medicines = this.state.selectedMedicines;
            medicines.map((med, index) => {
                medicines[index] = {
                    ...medicines[index],
                    medicine_id: parseInt(medicines[index].medicine_id),
                    quantity: parseInt(medicines[index].quantity),
                }
            })
            this.props.addShipment(this.state.newShip, this.state.selectedMedicines);
            this.setState({
                newShip: { shipment_id: 1, shipment_date: this.getTodayDate(), shipment_source_id: 2 },
                selectedMedicines: [],
                newMed: { shipment_id: 1, medicine_id: 1, production_date: '', expiration_date: '', quantity: 12, current_quantity: 5 },
            })
        }
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
    changeValShip = (e) => {
        this.setState({
            newShip: {
                ...this.state.newShip,
                [e.target.name]: e.target.value
            },
            error: ''
        })
    }
    changeValMed = (e) => {
        this.setState({
            newMed: {
                ...this.state.newMed,
                [e.target.name]: e.target.value
            },
            error: ''
        })
    }
    getMedicine = (id) => {
        var index = this.props.medicines.findIndex(medicine => medicine.medicine_id == parseInt(id));
        return this.props.medicines[index];
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
                            <label>رقم الشحن</label>
                            <Field id="id" disabled name="shipment_id" readOnly type="text" />
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label> تاريخ الشحن</label>
                            <Field id="shipment_date" name="shipment_date" type="date" />
                            <div className="error col-12"><ErrorMessage name="shipment_date" /></div>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>مصدر الشحن</label>
                            <Field id="shipment_source_id" name="shipment_source_id" type="text" />
                            <div className="error col-12"><ErrorMessage name="shipment_source_id" /></div>
                        </div>
                    </div>
                </div>
                <div className="shipped-medicine cols-container row">
                    <div className="text-right col-12"><label className="title">الأدوية المشحونة</label></div>
                    <table className=" table table-bordered col-11 mx-auto medicine-table text-center">
                        <thead >
                            <tr className="p-1">
                                <th scope="col">اسم الدواء</th>
                                <th scope="col"> كود</th>
                                <th scope="col"> تاريخ الانتاج</th>
                                <th scope="col"> تاريخ انتهاء الصلاحية</th>
                                <th scope="col"> الكمية</th>
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
                                            <td>{medicine.production_date}</td>
                                            <td>{medicine.expiration_date}</td>
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
                                        this.props.medicines.map(medicine =>
                                            <option key={medicine.medicine_id} value={medicine.medicine_id} >{medicine.medicine_name}</option>
                                        )
                                    }
                                </Field>
                                <div className="error col-12"><ErrorMessage name="shipment_source_id" /></div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-2 ">
                            <div className="field row">
                                <Field className="col-12" id="production_date" name="production_date" type="date" />
                                <div className="error col-12"><ErrorMessage name="production_date" /></div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-2 ">
                            <div className="field row">
                                <Field className="col-12" id="expiration_date" name="expiration_date" type="date" />
                                <div className="error col-12"><ErrorMessage name="expiration_date" /></div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-2 ">
                            <div className="field row">
                                <Field className="col-12" id="quantity" name="quantity" type="number" placeholder="الكمية" />
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
            <div className="modal win" tabIndex="-1" role="dialog" id="addPatientWin" aria-labelledby="addPatientWinTitle" aria-hidden="true"  >

                <div className="modal-dialog modal-dialog-centered win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">شحن أدوية</h5>
                            <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    shipment_id: this.getId(), shipment_date: this.getTodayDate(), shipment_source_id: '',
                                    production_date: ' ', expiration_date: '', medicine_id: ''
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
        shipment: state.shipment
    }
}

export default connect(mapStateToProps, null)(AddShipment);