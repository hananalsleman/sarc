import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import { Bar, Pie } from 'react-chartjs-2';
import 'react-calendar/dist/Calendar.css';

import welcomeImage from '../../../images/welcome-clinics.png';

import AddPatient from '../AddPatient';
import AddExam from '../AddExam';

class WelcomePage extends Component {


    state = {
        isDisplayedAddPatient: 'none',
        isDisplayedAddExam: 'none',
        selectedDiseases: [],
        patient: { id: '', firstName: '', lastName: '', fatherName: '', motherName: '', age: '', gender: '', birthdate: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
        initialPatient: { id: 1, firstName: '', lastName: '', fatherName: '', motherName: '', age: '', gender: '', birthdate: '', birthplace: '', registerdate: '', nationality: '', phone: '' },
    }


    getCounts_AgeGender_NewPatients = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.patients.map(patient => {
            if (parseInt((patient.registerdate).slice(5, 7)) === parseInt((new Date).getMonth() + 1) &&
                parseInt((patient.registerdate).slice(0, 4)) == parseInt((new Date).getFullYear())) {

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

        });
        return data;
    }


    getCounts_AgeGender_Patients = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.patients.map(patient => {
            var index = this.props.visits.findIndex(visit => (patient.id == visit.person_id));
            if (index != -1) {
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

        });
        return data;
    }

    getCounts_ِAgeGender_Visits = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.visits.map(visit => {

            var index = this.props.patients.findIndex(x => x.id === parseInt(visit.person_id));
            var patient = this.props.patients[index];
            if (patient.gender === '1') {
                if (patient.age < 5)
                    data[1][0]++;
                else if (patient.age < 18)
                    data[1][1]++;
                else if (patient.age < 59)
                    data[1][2]++;
                else
                    data[1][3]++;
            } else {
                if (patient.age < 5)
                    data[0][0]++;
                else if (patient.age < 18)
                    data[0][1]++;
                else if (patient.age < 59)
                    data[0][2]++;
                else
                    data[0][3]++;

            }

        });
        return data;
    }

    getCount_Gender_Visits = () => {
        const data = this.getCounts_ِAgeGender_Visits();
        const male = data[0][0] + data[0][1] + data[0][2] + data[0][3];
        const female = data[1][0] + data[1][1] + data[1][2] + data[1][3];
        return [male, female];
    }

    getCount_Gender_NewPatients = () => {
        const data = this.getCounts_AgeGender_NewPatients();
        const male = data[0][0] + data[0][1] + data[0][2] + data[0][3];
        const female = data[1][0] + data[1][1] + data[1][2] + data[1][3];
        return [male, female];
    }

    getCount_Gender_Patients = () => {
        const data = this.getCounts_AgeGender_Patients();
        const male = data[0][0] + data[0][1] + data[0][2] + data[0][3];
        const female = data[1][0] + data[1][1] + data[1][2] + data[1][3];
        return [male, female];
    }

    toggleDisplayAddPatient = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isDisplayedAddPatient: this.state.isDisplayedAddPatient === 'block' ? 'none' : 'block'
        });
    }
    toggleDisplayAddExam = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isDisplayedAddExam: this.state.isDisplayedAddExam === 'block' ? 'none' : 'block'
        });
    }
    addPatient = (newPatient) => {
        newPatient.id = parseInt(newPatient.id);
        this.props.addPatient(newPatient);
        this.setState({
            ...this.state,
            isDisplayedAddPatient: this.state.isDisplayedAddPatient === 'block' ? 'none' : 'block',
            patient: {}
        });
    }

    addExam = (newExam, diseases) => {
        this.props.addExam(newExam, diseases);
        this.setState({
            ...this.state,
            isDisplayedAddExam: this.state.isDisplayedAddExam === 'block' ? 'none' : 'block',
            exam: {}
        });
    }
    render() {

        const optionsBar_Gender_Patients = {
            title: {
                display: true,
                text: 'المجموع للاناث و الذكور بكل صنف'
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

        const dataBar_Gender_Patients = {
            labels: ["زيارات", "مسجلين جدد", "مرضى"],
            datasets: [
                {
                    label: 'ذكور',
                    backgroundColor: "#ddd",
                    data: [this.getCount_Gender_Visits()[0], this.getCount_Gender_NewPatients()[0], this.getCount_Gender_Patients()[0]]
                },

                {
                    label: 'اناث',
                    backgroundColor: "#ffb9bc",
                    data: [this.getCount_Gender_Visits()[1], this.getCount_Gender_NewPatients()[1], this.getCount_Gender_Patients()[1]]
                },


            ]
        }

        const optionsPie_Patients = {
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
        const dataPie_Patients = {
            labels: ['مرضى', 'مسجلين جدد', 'زيارات'],
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
                    data: [this.getCount_Gender_Patients()[0] + this.getCount_Gender_Patients()[1],
                    this.getCount_Gender_NewPatients()[0] + this.getCount_Gender_NewPatients()[1],
                    this.getCount_Gender_Visits()[0] + this.getCount_Gender_Visits()[1]]
                }
            ]
        }
        return (
            <div className="welcomePage tab-body">
                <AddPatient toggleDisplay={this.toggleDisplayAddPatient} display={this.state.isDisplayedAddPatient} addPatient={this.addPatient} />
                <AddExam toggleDisplay={this.toggleDisplayAddExam} display={this.state.isDisplayedAddExam} addExam={this.addExam} />

                <div className="welcome-top ">
                    <Calendar className="calendar d-block col-12 col-lg-4" />
                    <div className="welcome-speech d-block col-12 col-lg-8">
                        <img src={welcomeImage} className="welcomeImage" />
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
                                        <label>{this.props.patients.length}</label>
                                        <label>مريض</label>
                                    </div>
                                    <button className="btn add" data-toggle="modal" data-target="#addPatientWin" >مريض جديد</button>
                                </div>
                                <div className="action col-md-6 col-lg-12">
                                    <div className="action-stat">
                                        <label>{this.props.examination.length}</label>
                                        <label>معاينة</label>
                                    </div>
                                    <button className="btn add" data-toggle="modal" data-target="#addExamWin">معاينة جديدة</button>
                                </div>

                                <div className="action col-12 mb-lg-0 ">
                                    <div className="action-stat">
                                        <label>{this.props.doctors.length}</label>
                                        <label>دكتور</label>
                                    </div>
                                    <div className="action-stat">
                                        <label>{this.getCount_Gender_NewPatients()[0] + this.getCount_Gender_NewPatients()[1]}</label>
                                        <label>مريض جديد</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chart mb-1 mb-lg-0 d-block col-12 col-lg-5">
                        <Bar data={dataBar_Gender_Patients} options={optionsBar_Gender_Patients} type="bar" />
                    </div>
                    <div className="chart d-block chart-pie pt-3 pb-3 col-12 col-lg-4" >
                        <Pie data={dataPie_Patients} options={optionsPie_Patients} />
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
        clinics: state.clinics
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addPatient: (newPatient) => dispatch({ data: newPatient, type: 'ADDPATIENT' }),
        addExam: (newExam, diseases) => dispatch({ data: { newExam, diseases }, type: 'ADDEXAM' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

