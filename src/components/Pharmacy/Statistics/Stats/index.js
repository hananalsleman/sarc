import React from 'react';
import { connect } from 'react-redux';

function Stats(props) {

    return (
        <div className="stats d-flex justify-content-around flex-wrap">

            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fas fa-pills"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.medicines.length}</h3>
                    <h5>دواء</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fas fa-store"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.getCountAvailableMedicine()}</h3>
                    <h5>دواء متوفر</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-user-md"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.shipment.length}</h3>
                    <h5>عملية شحن</h5>
                </div>
            </div>
            <div className="stat col-6 col-lg-3 p-1 m-1">
                <div className="stat-icon">
                    <i className="fa fa-user"></i>
                </div>
                <div className="stat-text">
                    <h3>{props.pharmacy_movement_out.length}</h3>
                    <h5>عملية إخراج</h5>
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
        clinics: state.clinics,
        medicines: state.medicines,
        pharmacy_stock: state.pharmacy_stock,
        pharmacy_movement_out: state.pharmacy_movement_out,
        shipment: state.shipment,
    }
}

export default connect(mapStateToProps, null)(Stats);
