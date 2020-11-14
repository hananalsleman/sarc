import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png';

const Tab = () => {
    return (
        <div className="tab col-lg-2 d-none position-fixed d-lg-block">

            <nav >
                <div className="logo"><NavLink to="/clinics" ><img className="d-block mx-auto" src={logo} alt="" /></NavLink></div>
                <ul className="nav  flex-column">
                    <NavLink to="/clinics/patients" activeClassName="active"><li className="nav-item "><span>مرضى</span><i className="fa fa-users"></i></li></NavLink>
                    <NavLink to="/clinics/visits" activeClassName="active"> <li className="nav-item"><span>زيارات</span><i className="fa fa-eye"></i></li></NavLink>
                    <NavLink to="/clinics/statistics" activeClassName="active"><li className="nav-item"><span>إحصائيات</span><i className="fa fa-bar-chart"></i></li></NavLink>
                    <NavLink to="/" exact activeClassName="active"><li className="nav-item"><span> الخروج</span><i className="fa fa-unlock"></i></li></NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Tab;