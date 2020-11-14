import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

class EditShippedMed extends Component {

    state = {
        medicine: this.props.medicine,
    }

    editShippedMed = (e) => {
        e.preventDefault();
        this.props.editShippedMed(this.state.medicine);
        document.getElementById("form-editShippedMed").reset();
    }
    changeVal = (e) => {
        this.setState({
            medicine: {
                ...this.state.medicine,
                [e.target.name]: e.target.value
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            medicine: nextProps.medicine
        });
    }
    getMedicine = (id) => {
        var ind = this.props.medicines.findIndex(med => med.medicine_id == id);
        if (ind == -1) return ''
        return this.props.medicines[ind].medicine_name;
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
                            <label>رقم الشحنة</label>
                            <Field id="shipment_id" disabled name="shipment_id" readOnly type="text" />
                        </div>
                        <div className="field row">
                            <label>اسم الدواء</label>
                            <Field id="medicine_name" disabled name="medicine_name" readOnly type="text" />
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>تاريخ الانتاج</label>
                            <Field id="production_date" name="production_date" type="date" />
                            <div className="error col-12"><ErrorMessage name="production_date" /></div>
                        </div>
                        <div className="field row"><label>تاريخ انتهاء الصلاحية</label>
                            <Field id="expiration_date" name="expiration_date" type="date" />
                            <div className="error col-12"><ErrorMessage name="expiration_date" /></div>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>الكمية</label>
                            <Field id="quantity" name="quantity" type="number" />
                            <div className="error col-12"><ErrorMessage name="quantity" /></div>
                        </div>
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
            <div className="modal win" tabIndex="-1" style={{ display: props.display }} role="dialog" id="addPatientWin" aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="col-6 modal-dialog modal-dialog-centered win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">تعديل معلومات دواء مشحون</h5>
                            <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    shipment_id: props.medicine.shipment_id, medicine_name:(this.getMedicine(props.medicine.medicine_id)),
                                    production_date: ' ', expiration_date: '',quantity:this.props.medicine.quantity
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
        medicine_form: state.medicine_form
    }
}
export default connect(mapStateToProps, null)(EditShippedMed);
