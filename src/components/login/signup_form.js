import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux'

import { loginUser, emailChanged, phoneChanged, firstnameChanged, lastnameChanged } from '../../actions';
import validator from 'validator';
import { connect } from 'react-redux';





// const auth = firebase.auth
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('public_profile');
// provider.addScope('email');



class SignupForm extends Component {

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

  onSubmit(values) {
    // this === component
    const { email, phone, lastname, firstname } = values;
    this.props.emailChanged(email);
    this.props.phoneChanged(phone);
    this.props.lastnameChanged(lastname);
    this.props.firstnameChanged(firstname);
    this.props.setForm('register');
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
            <h3 className="panel-title">Sign Up</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  component={this.renderTextField}
                />
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  component={this.renderTextField}
                />
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  component={this.renderTextField}
                />
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone"
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
  const firstname = values.firstname? values.firstname: '';
  const lastname = values.lastname? values.lastname: '';
  const phone = values.phone? values.phone: '';


  if (!validator.isAscii(firstname)){
    errors.firstname = "Please enter a valid first name!";
  }
  if (!validator.isAscii(lastname)){
    errors.lastname = "Please enter a valid last name!";
  }
  if (!validator.isEmail(email)){
    errors.email = "Please enter a valid email!";
  }
  if (!validator.isMobilePhone(phone, 'en-US')){
    errors.phone = "Please enter a valid phone!";
  }

  // if errors is empty form is fine to submit
  // if errors has any properties , redux form assumes form is invalid
  return errors;

}

const mapStateToProps = state => ({
  autherror: state.auth.error,
  authloginstatus: state.auth.loginStatus
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  emailChanged,
  firstnameChanged,
  lastnameChanged,
  phoneChanged,
  changePage: (pagename) => push(pagename)
}, dispatch)

export default reduxForm({
  validate,
  form: 'SignUpForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);



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
