import React from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';

import LoginForm from '../LoginForm';
import {default as ClinicsHome}   from '../Clinics/Home/index';
import {default as PharamcyHome}   from '../Pharmacy/Home/index';

const Main = () => {
  
    return (
      //detect any page will appear according to route
      <BrowserRouter>
        <div >
          <Route path="/clinics" component={ClinicsHome} />
          <Route path="/pharmacy" component={PharamcyHome} />
          <Route path="/" exact component={LoginForm} />
        </div>
      </BrowserRouter>
      
    );
  
}


export default Main;