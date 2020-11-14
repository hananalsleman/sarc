import React from 'react';
import { NavLink} from 'react-router-dom'; 
import logo from '../../../images/logo.png';

const Tab = () => {
    return (
        <div className="tab col-lg-2 position-fixed d-none d-lg-block">
            <nav >
                <div className="logo"><NavLink to="/pharmacy" ><img className="d-block mx-auto" src={logo} alt=""/></NavLink></div>
                <ul>
                    <NavLink to="/pharmacy/stock" activeClassName="active"><li className="nav-item "><span>المستودع</span><i className="fas fa-store-alt"></i></li></NavLink>
                    <NavLink to="/pharmacy/medicines" activeClassName="active"><li className="nav-item "><span>أدوية</span><i className="fas fa-pills"></i></li></NavLink>
                    <NavLink to="/pharmacy/moves" activeClassName="active"><li className="nav-item "><span>عمليات</span><i className="fa fa-refresh"></i></li></NavLink>
                    <NavLink to="/pharmacy/statistics" activeClassName="active"><li className="nav-item "><span>إحصائيات</span><i className="fa fa-bar-chart"></i></li></NavLink>
                    <NavLink to="/" activeClassName="active" exact><li className="nav-item "><span>تسجيل الخروج</span><i className="fa fa-unlock"></i></li></NavLink>
                </ul> 
            </nav>
        </div>
    );
}

export default Tab;