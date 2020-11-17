import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import './style.css';
import logo from '../../images/logo.png';
class LoginForm extends Component {

  state = {
    redirect: false,
    section: 0,
    error: ''
  }
  schema = () => {
    const schema = Yup.object({
      username: Yup.string().max(15, ' اسم المستخدم لا يجب ان يتجاوز 15 محرف'),
      password: Yup.string().max(15, ' كلمة المرور لا يجب ان تتجاوز 15 محرف')
    });
    return schema;
  }
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className="bg-blur"></div>
        <div className="elements ">
          <h2 className="mainColor">WELCOME</h2>
          <div className="form-group ">
            <Field type="text" required className="form-control col-md-8 d-block mx-auto" placeholder="اسم المستخدم" id="username" name="username" />
            <div className="error"><ErrorMessage name="username" /></div>
          </div>
          <div className="form-group ">
            <Field type="password" required className="form-control col-md-8 d-block mx-auto" placeholder="كلمة المرور" id="password" name="password" />
            <div className="error"><ErrorMessage name="password" /></div>
          </div>
          <div className="error"><span>{this.state.error}</span></div>
          <button type="submit" className="mainBgColor d-block col-md-9 mx-auto" >تسجيل الدخول</button>
        </div>
      </form>
    )
  }

  login = (value) => {
    if (value.username === "hanan" && value.password === '123') {
      this.setState({
        redirect: true,
        section: 1
      });
    }
    else if (value.username === "salem" && value.password === '111') {
      this.setState({
        redirect: true,
        section: 2
      });
    }
    else {
      this.setState({
        redirect: false,
        section: 0,
        error: 'اسم المستخدم أو كلمة المرور غير صحيحة'
      })
    }
  }
  renderRedirect = () => {
    if (this.state.redirect && this.state.section === 1) {
      this.setState({ redirect: false });
      return <Redirect to='/clinics' />
    }
    else if (this.state.redirect && this.state.section === 2) {
      return <Redirect to='/pharmacy' />
    }
    else {
      return <Redirect to='' />
    }
  }
  render() {
    return (
      <div className="container-fluid login">
        <div className="login-background">
        </div>
        {this.renderRedirect()}
        <div className="row h-100">
          <div className="col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto my-auto " >
            <div className="logo-img mx-auto rounded-circle">
              <div className="bg-blur rounded-circle"></div>
              <img src={logo} className="rounded-circle mx-auto d-block" alt="" />
            </div>
            <Formik
              enableReinitialize
              initialValues={{
                username: '', password: ''
              }}
              onSubmit={this.login}
              render={this.form}
              validationSchema={this.schema()}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default LoginForm;