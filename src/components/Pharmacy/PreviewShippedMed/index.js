import React, { Component } from 'react';
import { connect } from 'react-redux';

class PreviewShippedMed extends Component {

    state = {
        medicine: this.props.medicine,
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            medicine: nextProps.medicine
        });
    }
    getMedicine = (id) => {
        var ind = this.props.medicines.findIndex(med => med.medicine_id === id);
        if (ind === -1) return ''
        return this.props.medicines[ind].medicine_name;
    }
    getShip = (id) => {
        var ind = this.props.shipment.findIndex(ship => ship.shipment_id === id);
        if (ind === -1) return '';
        return this.props.shipment[ind].shipment_date;
    }
    render() {
        const props = this.props;
        return (
            <div className="modal win win-preview" tabIndex="-1" role="dialog" id="previewShipmentMedWin" style={{ display: props.display }} aria-labelledby="addPatientWinTitle" aria-hidden="true">
                <div className="modal-dialog win-content modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header title-bar">
                            <h5 className="modal-title win-title">عرض معلومات دواء مشحون</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-content" >
                                <div className="cols-container row">
                                    <div className="col-12  col-lg-4">
                                        <div className="field row">
                                            <label className="w-50">رقم الشحنة</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.medicine.shipment_id}</label>
                                        </div>
                                        <div className="field row"><label className="w-50">تاريخ الشحنة</label>
                                            <label className="w-50 mainColor font-weight-bold">{this.getShip(props.medicine.shipment_id)}</label>
                                        </div>
                                        <div className="field row"><label className="w-50">اسم الدواء</label>
                                            <label className="w-50 mainColor font-weight-bold">{(this.getMedicine(props.medicine.medicine_id))}</label>
                                        </div>
                                    </div>
                                    <div className="col-12  col-lg-4">
                                        <div className="field row"><label className="w-50">تاريخ الانتاج</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.medicine.production_date}</label>
                                        </div>
                                        <div className="field row"><label className="w-50">تاريخ انتهاء الصلاحية</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.medicine.expiration_date}</label>
                                        </div>
                                    </div>
                                    <div className="col-12  col-lg-4">
                                        <div className="field row"><label className="w-50"> الكمية المشحونة</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.medicine.quantity}</label>
                                        </div>
                                        <div className="field row"><label className="w-50"> الكمية المتوفرة</label>
                                            <label className="w-50 mainColor font-weight-bold">{props.medicine.current_quantity}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choices-btns">
                                    <span className="btn cancel" data-dismiss="modal" aria-label="Close">إلغاء</span>
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
        shipment: state.shipment
    }
}
export default connect(mapStateToProps, null)(PreviewShippedMed);