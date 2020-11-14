import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './style.css';
import Charts from './Charts';

import Stats from './Stats';
import Table from './Table';

class Statistics extends Component {
    state = {
        minDate: '',
        maxDate: ''
    }
    changeDispalyStats = (e) => {
        this.setState({
            stateDis: e.target.value,
        });
    }
    editDate = (e) => {
        this.setState({
            [e.target.name]: e.target.value != '' ? Date.parse(e.target.value) : '',
        });

    }

    getCounts_AgeGender_Patients = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.visits.map(visit => {
            var index = this.props.patients.findIndex(patient => (patient.id == visit.person_id &&
                (this.state.minDate != '' ? Date.parse(visit.visit_date) > this.state.minDate : true) &&
                (this.state.maxDate != '' ? Date.parse(visit.visit_date) < this.state.maxDate : true)));
            if (index != -1) {
                var patient = this.props.patients[index];
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
            var b = true;
            if (this.state.minDate != '' && Date.parse(visit.visit_date) < this.state.minDate) {
                b = false;
            }
            if (this.state.maxDate != '' && Date.parse(visit.visit_date) > (this.state.maxDate))
                b = false;
            if (b) {
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
            }

        });
        return data;
    }

    getCounts_AgeGender_NewPatients = () => {
        const data = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.props.patients.map(patient => {

            if ((this.state.minDate != '' ? Date.parse(patient.registerdate) > this.state.minDate : true) && (this.state.maxDate != '' ? Date.parse(patient.registerdate) < this.state.maxDate : true)) {
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

    getCount_genderClinicAge_Patients = () => {
        const data = [
            [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]];
        this.props.examination.map(exam => {
            var visitInd = this.props.visits.findIndex(x => x.visit_id === parseInt(exam.visit_id));
            var visit = this.props.visits[visitInd];
            var patientIndex = this.props.patients.findIndex(x => x.id === parseInt(visit.person_id));
            var patient = this.props.patients[patientIndex];
            var doctorIndex = this.props.doctors.findIndex(x => x.doctor_id === exam.doctor_id);
            var clinicId = parseInt(this.props.doctors[doctorIndex].clinic_id);
            var gender = parseInt(patient.gender);
            var age = parseInt(patient.age);
            if ((this.state.minDate != '' ? Date.parse(visit.visit_date) > this.state.minDate : true) &&
                (this.state.maxDate != '' ? Date.parse(visit.visit_date) < this.state.maxDate : true)) {
                if (age < 5)
                    data[gender][0][clinicId - 1]++;
                else if (age < 18)
                    data[gender][1][clinicId - 1]++;
                else if (age < 59)
                    data[gender][2][clinicId - 1]++;
                else
                    data[gender][3][clinicId - 1]++;

            }

        });
        return data;

    }

    getCount_Clinics_examination = () => {
        const genderClinicAge_Patients = this.getCount_genderClinicAge_Patients();
        const data = [
            genderClinicAge_Patients[0][0][0] + genderClinicAge_Patients[0][1][0] + genderClinicAge_Patients[0][2][0] + genderClinicAge_Patients[0][3][0] +
            genderClinicAge_Patients[1][0][0] + genderClinicAge_Patients[1][1][0] + genderClinicAge_Patients[1][2][0] + genderClinicAge_Patients[1][3][0],

            genderClinicAge_Patients[0][0][1] + genderClinicAge_Patients[0][1][1] + genderClinicAge_Patients[0][2][1] + genderClinicAge_Patients[0][3][1] +
            genderClinicAge_Patients[1][0][1] + genderClinicAge_Patients[1][1][1] + genderClinicAge_Patients[1][2][1] + genderClinicAge_Patients[1][3][1],

            genderClinicAge_Patients[0][0][2] + genderClinicAge_Patients[0][1][2] + genderClinicAge_Patients[0][2][2] + genderClinicAge_Patients[0][3][2] +
            genderClinicAge_Patients[1][0][2] + genderClinicAge_Patients[1][1][2] + genderClinicAge_Patients[1][2][2] + genderClinicAge_Patients[1][3][2],

            genderClinicAge_Patients[0][0][3] + genderClinicAge_Patients[0][1][3] + genderClinicAge_Patients[0][2][3] + genderClinicAge_Patients[0][3][3] +
            genderClinicAge_Patients[1][0][3] + genderClinicAge_Patients[1][1][3] + genderClinicAge_Patients[1][2][3] + genderClinicAge_Patients[1][3][3],

            genderClinicAge_Patients[0][0][4] + genderClinicAge_Patients[0][1][4] + genderClinicAge_Patients[0][2][4] + genderClinicAge_Patients[0][3][4] +
            genderClinicAge_Patients[1][0][4] + genderClinicAge_Patients[1][1][4] + genderClinicAge_Patients[1][2][4] + genderClinicAge_Patients[1][3][4],

            genderClinicAge_Patients[0][0][5] + genderClinicAge_Patients[0][1][5] + genderClinicAge_Patients[0][2][5] + genderClinicAge_Patients[0][3][5] +
            genderClinicAge_Patients[1][0][5] + genderClinicAge_Patients[1][1][5] + genderClinicAge_Patients[1][2][5] + genderClinicAge_Patients[1][3][5],

            genderClinicAge_Patients[0][0][6] + genderClinicAge_Patients[0][1][6] + genderClinicAge_Patients[0][2][6] + genderClinicAge_Patients[0][3][6] +
            genderClinicAge_Patients[1][0][6] + genderClinicAge_Patients[1][1][6] + genderClinicAge_Patients[1][2][6] + genderClinicAge_Patients[1][3][6],

            genderClinicAge_Patients[0][0][7] + genderClinicAge_Patients[0][1][7] + genderClinicAge_Patients[0][2][7] + genderClinicAge_Patients[0][3][7] +
            genderClinicAge_Patients[1][0][7] + genderClinicAge_Patients[1][1][7] + genderClinicAge_Patients[1][2][7] + genderClinicAge_Patients[1][3][7],

        ];

        return data;
    }
    getCount_Gender_Patients = () => {
        const data = this.getCounts_AgeGender_Patients();
        const male = data[0][0] + data[0][1] + data[0][2] + data[0][3];
        const female = data[1][0] + data[1][1] + data[1][2] + data[1][3];
        return [male, female];
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
                        <Stats max={this.state.maxDate} min={this.state.minDate} />
                        <Charts max={this.state.maxDate} min={this.state.minDate}
                            getCounts_AgeGender_Patients={this.getCounts_AgeGender_Patients}
                            getCounts_ِAgeGender_Visits={this.getCounts_ِAgeGender_Visits}
                            getCounts_AgeGender_NewPatients={this.getCounts_AgeGender_NewPatients}
                            getCount_genderClinicAge_Patients={this.getCount_genderClinicAge_Patients}
                            getCount_Clinics_examination={this.getCount_Clinics_examination}
                            getCount_Gender_Patients={this.getCount_Gender_Patients}
                            getCount_Gender_Visits={this.getCount_Gender_Visits}
                            getCount_Gender_NewPatients={this.getCount_Gender_NewPatients}
                        />

                        <Table getCounts_AgeGender_Patients={this.getCounts_AgeGender_Patients}
                            getCounts_ِAgeGender_Visits={this.getCounts_ِAgeGender_Visits}
                            getCounts_AgeGender_NewPatients={this.getCounts_AgeGender_NewPatients}
                            getCount_genderClinicAge_Patients={this.getCount_genderClinicAge_Patients}
                            getCount_Clinics_examination={this.getCount_Clinics_examination}
                            getCount_Gender_Patients={this.getCount_Gender_Patients}
                            getCount_Gender_Visits={this.getCount_Gender_Visits}
                            getCount_Gender_NewPatients={this.getCount_Gender_NewPatients}
                        />

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

export default connect(mapStateToProps, null)(Statistics);


/*
 <div className="tab-body statistics">

                <div className="tab-content">

                   <div>
                        <Stats max={this.state.maxDate} min={this.state.minDate}/>
                        <Charts max={this.state.maxDate} min={this.state.minDate}
                            getCounts_AgeGender_Patients = {this.getCounts_AgeGender_Patients}
                            getCounts_ِAgeGender_Visits = {this.getCounts_ِAgeGender_Visits}
                            getCounts_AgeGender_NewPatients = {this.getCounts_AgeGender_NewPatients}
                            getCount_genderClinicAge_Patients = {this.getCount_genderClinicAge_Patients}
                            getCount_Clinics_examination = {this.getCount_Clinics_examination}
                            getCount_Gender_Patients = {this.getCount_Gender_Patients}
                            getCount_Gender_Visits = {this.getCount_Gender_Visits}
                            getCount_Gender_NewPatients = {this.getCount_Gender_NewPatients}
                        />
                   </div>
                   <div>



                   <Table getCounts_AgeGender_Patients = {this.getCounts_AgeGender_Patients}
                            getCounts_ِAgeGender_Visits = {this.getCounts_ِAgeGender_Visits}
                            getCounts_AgeGender_NewPatients = {this.getCounts_AgeGender_NewPatients}
                            getCount_genderClinicAge_Patients = {this.getCount_genderClinicAge_Patients}
                            getCount_Clinics_examination = {this.getCount_Clinics_examination}
                            getCount_Gender_Patients = {this.getCount_Gender_Patients}
                            getCount_Gender_Visits = {this.getCount_Gender_Visits}
                            getCount_Gender_NewPatients = {this.getCount_Gender_NewPatients}
                            />

                    </div>


                </div>

            </div>


*/