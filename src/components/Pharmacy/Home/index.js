import React, { Fragment } from "react";
import { Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Tab from '../Tab/index';
import Medecines from '../Medicines';
import Moves from '../Moves';
import Statistics from '../Statistics';
import WelcomePage from '../WelcomePage';
import Stock from '../Stock';
import logo from '../../../images/logo.png';

const Home = () => {
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
                    <Route path="/pharmacy" component={Tab} />
                    <Route exact path="/pharmacy" component={WelcomePage} />
                    <Route path="/pharmacy/stock" component={Stock} />
                    <Route path="/pharmacy/medicines" component={Medecines} />
                    <Route path="/pharmacy/moves" component={Moves} />
                    <Route path="/pharmacy/statistics" component={Statistics} />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;

/*

        <Fragment>
            <div className="home">
                <Tab />
                <div className="area">
                </div>
            </div>
        </Fragment>
*/