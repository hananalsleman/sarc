import React from 'react';
import { connect } from 'react-redux';

function Stats(props) {
    return (
        <div className="stats d-flex justify-content-around flex-wrap">
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-users"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.patients.length}</h3>
                    <h5>مريض</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-eye"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.examination.filter(item =>
                        props.max === '' ? Date.parse(props.visits[props.visits.findIndex(x => x.visit_id === item.visit_id)].visit_date) > props.min :
                            Date.parse(props.visits[props.visits.findIndex(x => x.visit_id === item.visit_id)].visit_date) > props.min &&
                            Date.parse(props.visits[props.visits.findIndex(x => x.visit_id === item.visit_id)].visit_date) < props.max
                    ).length}</h3>
                    <h5>معاينة</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-user-md"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.doctors.length}</h3>
                    <h5>دكتور</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-user"></i>
                </div>
                <div className="stat-text">
                    <h3>{
                        props.patients.filter(item => (parseInt((item.registerdate).slice(5, 7)) === parseInt((new Date).getMonth() + 1) &&
                            parseInt((item.registerdate).slice(0, 4)) === parseInt((new Date).getFullYear()))
                            && ((props.min !== '') ? Date.parse(item.registerdate) > props.min : true)
                            && ((props.max !== '') ? Date.parse(item.registerdate) < props.max : true)).length}</h3>
                    <h5>مريض جديد</h5>
                </div>
            </div>

        </div>
    )
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

export default connect(mapStateToProps, null)(Stats);
