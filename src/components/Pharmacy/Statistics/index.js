import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import Charts from './Charts';
import Stats from './Stats';
import Table from './Table';

class Statistics extends Component {
    state = {
        minDate: '',
        maxDate: ''
    }
    editDate = (e) => {
        this.setState({
            [e.target.name]: e.target.value !== '' ? Date.parse(e.target.value) : '',
        });

    }

    getCountAvailableMedicine = () => {
        var count = (this.props.medicines.filter(medicine =>
            (this.props.pharmacy_stock.filter(stock => stock.medicine_id === medicine.medicine_id && stock.current_quantity > 0)).length > 0
        )).length;
        return count;
    }
    getCountOutMedicine = () => {
        var count = (this.props.medicines.filter(medicine =>
            (this.props.medicine_out.filter(out => out.medicine_id === medicine.medicine_id)).length > 0
        )).length;
        return count;
    }
    getCounts_AgeGender_OutMovement = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.pharmacy_movement_out.map(move => {
            if (move.movement_type === 1 && (this.state.minDate !== '' ? Date.parse(move.movement_date) > this.state.minDate : true)
                && (this.state.maxDate !== '' ? Date.parse(move.movement_date) < this.state.maxDate : true)
            ) {
                var indEx = this.props.examination.findIndex(exam => (exam.prescrition_id === move.prescrition_id));
                var indVisit = this.props.visits.findIndex(visit => (visit.visit_id === this.props.examination[indEx].visit_id));
                var index = this.props.patients.findIndex(patient => (patient.id === this.props.visits[indVisit].person_id));
                var patient = this.props.patients[index];
                if (index !== -1) {
                    if (patient.gender === '0') {
                        if (patient.age < 5)
                            data[0][0]++;
                        else if (patient.age < 18)
                            data[0][1]++;
                        else if (patient.age < 59)
                            data[0][2]++;
                        else
                            data[0][3]++;
                    } else {
                        if (patient.age < 5)
                            data[1][0]++;
                        else if (patient.age < 18)
                            data[1][1]++;
                        else if (patient.age < 59)
                            data[1][2]++;
                        else
                            data[1][3]++;
                    }
                }
            }


        });
        return data;
    }
    getCounts_Gender_OutMovement = () => {
        var data = [
            this.getCounts_AgeGender_OutMovement()[0][0] + this.getCounts_AgeGender_OutMovement()[0][1] + this.getCounts_AgeGender_OutMovement()[0][2] + this.getCounts_AgeGender_OutMovement()[0][3],
            this.getCounts_AgeGender_OutMovement()[1][0] + this.getCounts_AgeGender_OutMovement()[1][1] + this.getCounts_AgeGender_OutMovement()[1][2] + this.getCounts_AgeGender_OutMovement()[1][3],
        ]
        return data;
    }
    getCount_Type_OutMovement = () => {
        var data = [0, 0, 0];
        this.props.pharmacy_movement_out.map(outMove => {
            if ((this.state.minDate !== '' ? Date.parse(outMove.movement_date) > this.state.minDate : true)
                && (this.state.maxDate !== '' ? Date.parse(outMove.movement_date) < this.state.maxDate : true))
                data[outMove.movement_type]++;
        });
        return data;
    }
    getCount_MonthAgeGender_OutMedicine = () => {
        var data = [
            [
                [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
            ]
        ]
        this.props.medicine_out.map(outMed => {
            var move = this.props.pharmacy_movement_out[this.props.pharmacy_movement_out.findIndex(move => move.movement_id === outMed.movement_id)];
            if (move.prescrition_id !== '') {
                var prescrition_id = move.prescrition_id;
                var exam = this.props.examination[this.props.examination.findIndex(exam => exam.prescrition_id === prescrition_id)];
                var visit = this.props.visits[this.props.visits.findIndex(visit => visit.visit_id === exam.visit_id)];
                var person = this.props.patients[this.props.patients.findIndex(patient => patient.id === visit.person_id)];
                var month = parseInt((move.movement_date).slice(5, 7));
               /* var year = parseInt((move.movement_date).slice(0, 4)); */
                var gender = parseInt(person.gender);
                if (person.age < 5) {
                    data[gender][month][0]++;
                } else if (person.age < 18) {
                    data[gender][month][1]++;
                } else if (person.age < 60) {
                    data[gender][month][2]++;
                } else {
                    data[gender][month][3]++;
                }
            }
        })

        return data;
    }
    render() {
        return (
            <div className="tab-body statistics">
                <div className="fixed-tp col-12 col-lg-10" >
                    <div className="titlebar-content row p-3 mx-auto">
                        <div className="titlebar row col-12 my-auto  mx-auto">
                            <div className="pull-right col-5 col-md-2 track  order-1 order-md-1" id="pointer">
                                إحصائيات
                            </div>
                            <div className="rangeDate col-12 col-md-6 pt-3 order-3 order-md-2">
                                <label>من<input type="date" name="display" onChange={this.editDate} name="minDate" /></label>
                                <label>إلى<input type="date" name="display" onChange={this.editDate} name="maxDate" /></label>
                            </div>
                            <div className="pull-left col-5 col-md-2 order-2 order-md-3">
                                <ReactHTMLTableToExcel
                                    table="tables"
                                    filename="Report"
                                    className="btn pl-3 pr-3 add"
                                    sheet="Sheet"
                                    id="btn"
                                    buttonText="اخراج لملف اكسل" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pl-3 pr-3 pt-2">
                    <div className="statistic-content">
                        <Stats max={this.state.maxDate} min={this.state.minDate}
                            getCountAvailableMedicine={this.getCountAvailableMedicine}
                            getCountOutMedicine={this.getCountOutMedicine}
                        />
                        <Charts max={this.state.maxDate} min={this.state.minDate}
                            getCounts_AgeGender_OutMovement={this.getCounts_AgeGender_OutMovement}
                            getCounts_Gender_OutMovement={this.getCounts_Gender_OutMovement}
                            getCount_Type_OutMovement={this.getCount_Type_OutMovement}
                            getCount_MonthAgeGender_OutMedicine={this.getCount_MonthAgeGender_OutMedicine()}
                        />
                        <Table />
                    </div>
                    <div>
                    </div>


                </div>

            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        patients: state.patients,
        gender: state.gender,
        nationality: state.nationality,
        examination: state.examination,
        visits: state.visits,
        diagnose: state.diagnose,
        doctors: state.doctors,
        clinics: state.clinics,
        medicines: state.medicines,
        pharmacy_stock: state.pharmacy_stock,
        pharmacy_movement_out: state.pharmacy_movement_out,
        shipment: state.shipment,
        medicine_out: state.medicine_out
    }
}

export default connect(mapStateToProps, null)(Statistics);