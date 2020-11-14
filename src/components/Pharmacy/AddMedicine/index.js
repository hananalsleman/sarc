import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

class AddMedicine extends Component {

    getId = () => {
        return this.props.medicines.length + 1;
    }
    state = {
        newMed: { medicine_id: 1, medicine_name: '', code: '', medicine_calibre: '', active_material: '', medicine_form: 0 },
    }
    addM = (e) => {
        e.preventDefault();
        var newMed = this.state.newMed;
        document.getElementById("form-addMedicine").reset();
        this.props.addMedicine(newMed);
    }
    changeVal = (e) => {
        this.setState({
            newMed: {
                ...this.state.newMed,
                [e.target.name]: e.target.value
            }
        })
    }
    schema = () => {
        const schema = Yup.object({
            medicine_name: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            code: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            medicine_calibre: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
            active_material: Yup.string().max(15, 'لا يجب ان يتجاوز 15 حرف'),
        });
        return schema;
    }
    form = (props) => {
        return (
            <form className="form-content" id="addMedicineForm" onSubmit={props.handleSubmit}>
                <div className="cols-container row">
                    <div className="col-12  col-lg-4">
                        <div className="field row">
                            <label>الرقم</label>
                            <Field id="medicine_id" disabled name="medicine_id" readOnly type="text" />
                            <div className="error col-12"><ErrorMessage name="medicine_id" /></div>
                        </div>
                        <div className="field row"><label>الاسم</label>
                            <Field id="medicine_name" name="medicine_name" type="text" />
                            <div className="error col-12"><ErrorMessage name="medicine_name" /></div>
                        </div>
                        <div className="field row"><label>الكود</label>
                            <Field id="code" name="code" type="text" />
                            <div className="error col-12"><ErrorMessage name="code" /></div>
                        </div>

                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>العيار</label>
                            <Field id="medicine_calibre" name="medicine_calibre" type="text" />
                            <div className="error col-12"><ErrorMessage name="medicine_calibre" /></div>
                        </div>
                        <div className="field row"><label>الشكل</label>
                            <Field id="medicine_form" name="medicine_form" component="select">
                                <option ></option>
                                {
                                    this.props.medicine_form.map((form, index) =>
                                        <option key={index} value={index}>{this.props.medicine_form[index]}</option>
                                    )}
                            </Field>
                            <div className="error col-12"><ErrorMessage name="medicine_form" /></div>
                        </div>
                        <div className="field row"><label>المادة الفعالة</label>
                            <Field id="active_material" name="active_material" type="text" />
                            <div className="error col-12"><ErrorMessage name="active_material" /></div>
                        </div>
                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label> ملاحظات</label><Field name="note" id="note" component="textarea" /></div>
                    </div>
                </div>
                <div className="choices-btns">
                    <button type="submit" className="btn save">حفظ</button>
                    <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
                </div>
            </form>
        )
    }
    render() {
        const props = this.props;
        return (
            <div className="modal win" tabIndex="-1" role="dialog" id="addMedicineWin"  aria-labelledby="addPatientWinTitle" aria-hidden="true">

                <div className="modal-dialog win-content modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">إضافة دواء</h5>
                            <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    medicine_id: this.getId(), medicine_name: '', code: '', medicine_calibre: ' ',
                                    medicine_form: '', active_material: '', note: ''
                                }}
                                onSubmit={this.addM}
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

export default connect(mapStateToProps, null)(AddMedicine);