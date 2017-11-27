import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux'

import { signupUser } from '../../actions';
import validator from 'validator';
import { connect } from 'react-redux';





// const auth = firebase.auth
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('public_profile');
// provider.addScope('email');



class EmailRegister extends Component {


  onSubmit(values) {
    // this === component
    const userdata = {
      email: this.props.authemail,
      phone: this.props.authphone,
      firstname: this.props.authfirstname,
      lastname: this.props.authlastname
    };

    const finaldata = { ...userdata, ...values };
    console.log(finaldata);


    this.props.signupUser(values, () => {
      this.props.changePage('/dishes');
    });
  
  }


  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : '' }`;


    return(
      <div className={className}>
        <input
          className="form-control"
          type={field.type}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onError(){
    if ( this.props.autherror ){
      return (
        <div className="alert alert-danger" role="alert">{this.props.autherror}</div>
      );
    }
    return;
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="col-sm-8 col-sm-offset-2" style={{'marginTop':'25px', 'marginBottom':'25px'}}>
        { this.onError() }
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Login</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  component={this.renderTextField}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  component={this.renderTextField}
                />
                <Field
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                  component={this.renderTextField}
                />
                <button type="submit" className="btn btn-primary btn-block btn-lg"> Submit </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {

  const errors = {};
  const email = values.email ? values.email : '';
  const password = values.password? values.password: '';
  const confirmpassword = values.confirmpassword? values.confirmpassword: '';

  if (!validator.isEmail(email)){
    errors.email = "Please enter a valid email address!";
  }
  if (!validator.isAscii(password)){
    errors.password = "Please enter a valid password!";
  }
  if (!validator.isLength(password, {min:6, max: 30})){
    errors.password = "The password should have atleast 6 characters.";
  }
  if ( password != confirmpassword ){
    errors.confirmpassword = "The password values donot match!";
  }

  // if errors is empty form is fine to submit
  // if errors has any properties , redux form assumes form is invalid
  return errors;

}


// https://github.com/erikras/redux-form/issues/916
// add initialvalues to the form
const mapStateToProps = state => ({
  autherror: state.auth.error,
  authloginstatus: state.auth.loginStatus,
  authemail: state.auth.email,
  authphone: state.auth.phone,
  authfirstname: state.auth.firstname,
  authlastname: state.auth.lastname,
  initialValues: {
    email: state.auth.email
  }
})


const mapDispatchToProps = dispatch => bindActionCreators({
  signupUser,
  changePage: (pagename) => push(pagename)
}, dispatch)


// https://github.com/erikras/redux-form/issues/2012


let formComponent = reduxForm({
    form: 'EmailRegisterForm',
    validate
})(EmailRegister);

export default connect(mapStateToProps, mapDispatchToProps)(formComponent);



/*

const popover = (
  <Popover id="modal-popover" title="popover">
    very popover. such engagement
  </Popover>
);
const tooltip = (
  <Tooltip id="modal-tooltip">
    wow.
  </Tooltip>
);

<h4>Text in a modal</h4>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

<h4>Popover in a modal</h4>
<p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

<h4>Tooltips in a modal</h4>
<p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

<h4>Overflowing text to show scroll behavior</h4>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>


*/
