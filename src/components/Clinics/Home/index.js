import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Tab from '../Tab/index';
import Patients from '../Patients/index';
import Visits from '../Visits/index';
import Statistics from '../Statistics/index';
import WelcomePage from '../WelcomePage';
import logo from '../../../images/logo.png';
const Home = (props) => {
    return (
        <Fragment>
            <nav className="d-lg-none navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand h-100" href="/clinics"><h1 className="my-auto d-inline-block">
                    <img className="my-auto col-3 col-sm-3 col-md-3 img-fluid" src={logo} /> <span className="d-inline-block my-auto">SARC</span></h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item text-right">
                            <NavLink to="/clinics/patients" className="nav-link" activeClassName="active">المرضى</NavLink>
                        </li>
                        <li className="nav-item text-right">
                            <NavLink to="/clinics/visits" className="nav-link" activeClassName="active">زيارات</NavLink>
                        </li>
                        <li className="nav-item text-right">
                            <NavLink to="/clinics/statistics" className="nav-link" activeClassName="active">إحصائيات</NavLink>
                        </li>
                        <li className="nav-item text-right">
                            <NavLink to="/" exact className="nav-link" activeClassName="active"> الخروج</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="home">
                <div className="d-none d-lg-block col-lg-2 "></div>
                <div className="area p-md-0 col-12 col-lg-10">
                    <Route path="/clinics" component={Tab} />
                    <Route path="/clinics" exact component={WelcomePage} />
                    <Route path="/clinics/patients" component={Patients} />
                    <Route path="/clinics/visits" component={Visits} />
                    <Route path="/clinics/statistics" component={Statistics} />
                </div>
            </div>
        </Fragment>
    )
}


function mapStateToProps(state) {
    return {
        isLogin: state.isLogin
    }
}
export default connect(mapStateToProps, null)(Home);