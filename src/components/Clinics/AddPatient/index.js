import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-datetime';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';


class AddPatient extends Component {

    addP = (value) => {
        this.props.addPatient(value);
        document.getElementById("addPatientForm").reset();
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
                            <label>الرقم</label>
                            <Field id="id" disabled name="id" readOnly type="text" />
                        </div>
                        <div className="field row"><label>الاسم</label>
                            <Field id="firstName" name="firstName" type="text" />
                            <div className="error col-12"><ErrorMessage name="firstName" /></div>
                        </div>
                        <div className="field row"><label>اسم الأب</label>
                            <Field id="fatherName" name="fatherName" type="text" />
                            <div className="error col-12"><ErrorMessage name="fatherName" /></div>
                        </div>
                        <div className="field row"><label>الكنية</label>
                            <Field id="lastName" name="lastName" type="text" />
                            <   div className="error col-12"><ErrorMessage name="lastName" /></div>
                        </div>
                        <div className="field row"><label>اسم الأم</label>
                            <Field id="motherName" name="motherName" type="text" />
                            <div className="error col-12"><ErrorMessage name="motherName" /></div>
                        </div>
                        <div className="field row"><label> تاريخ الميلاد</label>
                            <Field id="birthdate" name="birthdate" type="date" />
                            <div className="error col-12"><ErrorMessage name="birthdate" /></div>
                        </div>


                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label> مكان الميلاد</label>
                            <Field id="birthplace" name="birthplace" type="text" />
                            <div className="error col-12"><ErrorMessage name="birthplace" /></div>
                        </div>
                        <div className="field row"><label>الجنس</label>
                            <Field id="gender" name="gender" component="select">
                                <option ></option>
                                <option value="0">ذكر</option>
                                <option value="1">أنثى</option>
                            </Field>
                        </div>
                        <div className="field row"><label>الجنسية</label>
                            <Field id="nationality" name="nationality" component="select">
                                <option ></option>
                                {this.props.nationality.map((nation, index) =>
                                    <option value={index} key={index}>{nation}</option>
                                )}

                            </Field>
                        </div>
                        <div className="field row"><label> الرقم الوطني</label>
                            <Field id="nationalNumber" name="nationalNumber" type="number" />
                            <div className="error col-12"><ErrorMessage name="nationalNumber" /></div>
                        </div>
                        <br />
                        <div className="group-field">
                            <label className="title-field">عنوان الاقامة الحالي:</label><br />

                            <div className="field row"><label>المحافظة</label>
                                <Field id="nationality" name="nationality" component="select">
                                    <option ></option>
                                    <option>حمص</option>
                                </Field>
                            </div>
                            <div className="field row"><label>المنطقة</label>
                                <Field id="nationality" name="nationality" component="select">
                                    <option ></option>
                                    <option>عكرمة</option>
                                </Field>
                            </div>
                        </div>

                    </div>
                    <div className="col-12  col-lg-4">
                        <div className="field row"><label>رقم الهاتف</label>
                            <Field id="phone" name="phone" type="text" />
                            <div className="error col-12"><ErrorMessage name="phone" /></div>
                        </div>
                        <div className="field row"><label> تاريخ التسجيل</label><Field id="registerdate" name="registerdate" type="date" /></div>
                        <div className="field row"><label> ملاحظات</label><Field name="note" id="note"component="textarea"  /></div>
                    </div>
                </div>
                <div className="choices-btns">
                    <button type="submit" className="btn save">حفظ</button>
                    <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
                </div>
            </form>
        )
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

    render() {

        const props = this.props;
        return (
            <div className="modal win" tabIndex="-1" role="dialog" id="addPatientWin" aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">إضافة مريض</h5>
                            <button type="button" onClick={props.toggleDisplay} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    id: (parseInt(this.props.patients[0].id) + 1), firstName: '', lastName: '', fatherName: ' ', motherName: '', age: '',
                                    gender: '0', birthdate: '', birthplace: '', registerdate: this.getTodayDate(), nationality: '0', phone: '', nationalNumber: ''
                                }}
                                onSubmit={this.addP}
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
        patients: state.patients,
        nationality: state.nationality
    }
}
export default connect(mapStateToProps, null)(AddPatient);