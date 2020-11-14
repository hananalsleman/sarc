import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

class EditMedicine extends Component {

    state = {
        medicine: this.props.medicine,
    }

    editMed = (e) => {
        e.preventDefault();
        this.props.editMedicine(this.state.medicine);
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
            <form className="form-content" id="addPatientForm" onSubmit={props.handleSubmit}>
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
            <div className="modal win" tabIndex="-1" role="dialog" id="editMedicineWin" aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">تعديل معلومات دواء</h5>
                            <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    medicine_id:props.medicine.medicine_id, medicine_name:props.medicine.medicine_name,
                                    code:props.medicine.code, medicine_calibre:props.medicine.medicine_calibre,
                                    medicine_form: props.medicine.medicine_form, active_material: props.medicine.active_material,
                                    note:props.medicine.note
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
export default connect(mapStateToProps, null)(EditMedicine);

/*

<div className=" win" style={{ display: props.display }} >
                <div className="win-container center">
                    <div className="title-bar">
                        <label className="win-title">  تعديل معلومات دواء</label>
                        <button onClick={props.toggleDisplay} ><i className="fa fa-remove"></i></button>
                    </div>

                    <div className="win-body">

                        <form className="form-content">
                            <div className="cols-container">
                                <div className="col">
                                    <div className="field"><label>الرقم</label><input defaultValue={props.medicine.medicine_id} name="medicine_id" disabled onChange={this.changeVal} type="text" /></div><br />
                                    <div className="field"><label>الاسم</label><input defaultValue={props.medicine.medicine_name} name="medicine_name" onChange={this.changeVal} type="text" /></div><br />
                                    <div className="field"><label> الكود</label><input defaultValue={props.medicine.code} name="code" onChange={this.changeVal} type="text" /></div><br />

                                </div>
                                <div className="col">
                                    <div className="field"><label>العيار</label><input defaultValue={props.medicine.medicine_calibre} name="medicine_calibre" onChange={this.changeVal} type="text" /></div><br />
                                    <div className="field"><label>الشكل</label>
                                        <select defaultValue={props.medicine.medicine_form} onChange={this.changeVal} name="medicine_form">
                                            <option ></option>{
                                                this.props.medicine_form.map((form, index) =>
                                                    <option key={index} value={index}>{this.props.medicine_form[index]}</option>
                                                )
                                            }
                                        </select>
                                    </div><br />
                                    <div className="field"><label> المادة الفعالة</label><input defaultValue={props.medicine.active_material} name="active_material" onChange={this.changeVal} type="text" /></div><br />
                                </div>
                                <div className="col">
                                    <div className="field"><label> ملاحظات</label><input defaultValue={props.medicine.note} name="note" onChange={this.changeVal} type="text" /></div><br />
                                </div>
                            </div>
                            <div className="choices-btns">
                                <button type="submit" className="btn save" onClick={this.editMed} >حفظ</button>
                                <span className="btn cancel" onClick={props.toggleDisplay}>إلغاء</span>
                            </div>
                        </form>

                    </div>

                </div>
            </div>


*/