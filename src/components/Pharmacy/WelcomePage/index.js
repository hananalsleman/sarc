import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import { Bar, Pie } from 'react-chartjs-2';
import 'react-calendar/dist/Calendar.css';

import welcomeImage from '../../../images/welcome-clinics.png';
import AddShipment from '../AddShipment';
import AddOutMovement from '../AddOutMovement';

class WelcomePage extends Component {

    state = {
        isDisplayedAddPatient: 'none',
        isDisplayedAddExam: 'none',
        selectedDiseases: [],
    }


    addMove = (newMove, medicines) => {
        this.props.addMove(newMove, medicines);
        this.setState({
            ...this.state,
            isDisplayedAddMove: this.state.isDisplayedAddMove === 'block' ? 'none' : 'block',
        });
    }
    addShipment = (newShipment, medicines) => {
        this.props.addShipment(newShipment, medicines);
        this.setState({
            ...this.state,
            isDisplayedAddShip: this.state.isDisplayedAddShip === 'block' ? 'none' : 'block',
        });
    }

    getCounts_AgeGender_OutMovement = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.pharmacy_movement_out.map(move => {
            if (move.movement_type === 1) {
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
    render() {

        const optionsBar_AgeGender_Prescrition = {
            title: {
                display: true,
                text: 'المجموع للوصفات الطبية المخرجة'
            },
            legend: { display: true },
            scales: {
                xAxes: [{
                    stacked: false,
                    position: "left"
                }],
                yAxes: [{
                    stacked: false,
                    position: "right",
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        const dataBar_AgeGender_Prescrition = {
            labels: ["تحت 5 سنوات ", "بين 5 و 17 سنة", "بين 18 و 59 سنة", "فوق 60 سنة"],
            datasets: [
                // These two will be in the same stack.
                {
                    label: 'ذكور',
                    backgroundColor: "#ddd",
                    data: this.getCounts_AgeGender_OutMovement()[0]
                },

                {
                    label: 'اناث',
                    backgroundColor: "#ffb9bc",
                    data: this.getCounts_AgeGender_OutMovement()[1]
                }
            ]
        }
        const optionsPie_Prescrition = {
            title: {
                display: true,
                text: 'المجموع العام ',
                fontSize: 15
            },

            pieceLabel: {
                render: 'value',
                color: '#fff'
            },
            legend: {
                display: true,
                position: "right",
                fullWidth: true,
            },
        }
        const dataPie_Prescrition = {
            labels: ["ذكور", "اناث"],
            datasets: [
                {
                    label: 'المجموع',
                    borderColor: 'rgba(12,12,12,0)',
                    backgroundColor: [
                        '#222',
                        '#e61b23',
                        '#aaa',
                    ],
                    hoverBackgroundColor: [
                        '#fff',
                        '#f7b3b6',
                        '#eee'
                    ],
                    data: [this.getCounts_Gender_OutMovement()[0],
                    this.getCounts_Gender_OutMovement()[1]
                    ]
                }
            ]
        }
        return (
            <div className="welcomePage pharmacy tab-body">
                <AddShipment addShipment={this.addShipment} />
                <AddOutMovement addMove={this.addMove} />
                <div className="welcome-top ">
                    <Calendar className="calendar d-block col-12 col-lg-4" />
                    <div className="welcome-speech d-block col-12 col-lg-8">
                        <img src={welcomeImage} className="welcomeImage" alt=""/>
                        <div className="title">
                            Welcome Back
                        </div>
                    </div>
                </div>
                <div className="welcome-actions">
                    <div className="actions d-block pl-lg-3 pr-lg-3 col-12 col-lg-3">
                        <div className="row align-items-center justify-content-space-between">
                            <div className="d-flex flex-wrap p-0 col-12">
                                <div className="action col-md-6 col-lg-12 ">
                                    <div className="action-stat ">
                                        <label>{this.props.pharmacy_movement_out.length}</label>
                                        <label>عملية اخراج</label>
                                    </div>
                                    <button className="btn add" data-toggle="modal" data-target="#addPatientWin" >إخراج ادوية</button>
                                </div>
                                <div className="action col-md-6 col-lg-12">
                                    <div className="action-stat">
                                        <label>{this.props.pharmacy_stock.length}</label>
                                        <label>دواء متوفر</label>
                                    </div>
                                    <button className="btn add" data-toggle="modal" data-target="#addShipmentWin">شحن أدوية</button>
                                </div>
                                <div className="action col-12 mb-lg-0 ">
                                    <div className="action-stat">
                                        <label>{this.props.medicines.length}</label>
                                        <label>نوع دواء</label>
                                    </div>
                                    <div className="action-stat">
                                        <label>7</label>
                                        <label>دواء مخرج جديد</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chart mb-1 mb-lg-0 d-block col-12 col-lg-5">
                        <Bar data={dataBar_AgeGender_Prescrition} options={optionsBar_AgeGender_Prescrition} type="bar" />
                    </div>
                    <div className="chart d-block chart-pie pt-3 pb-3 col-12 col-lg-4" >
                        <Pie data={dataPie_Prescrition} options={optionsPie_Prescrition} />
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        patients: state.patients,
        medicines: state.medicines,
        pharmacy_stock: state.pharmacy_stock,
        pharmacy_movement_out: state.pharmacy_movement_out,
        shipment: state.shipment,
        examination: state.examination,
        visits: state.visits
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addMove: (newMove, medicines) => dispatch({ data: { newMove, medicines }, type: 'ADDOUTMOVEMENT' }),
        addShipment: (newShipment, medicines) => dispatch({ data: { newShipment, medicines }, type: 'ADDSHIPMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

