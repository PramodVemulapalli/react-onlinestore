import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux'

import { loginUser } from '../../actions';
import validator from 'validator';
import { connect } from 'react-redux';





// const auth = firebase.auth
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('public_profile');
// provider.addScope('email');



class EmailLogin extends Component {

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
    const { email, password } = values;
    this.props.loginUser(values, () => {
      this.props.changePage('/dishes');
    });
    console.log(email);
    console.log(password);
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
                  placeholder="Username"
                  component={this.renderTextField}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
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

  if (!validator.isEmail(email)){
    errors.email = "Please enter a valid email address!";
  }
  if (!validator.isAscii(password)){
    errors.password = "Please enter a valid password!";
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
  changePage: (pagename) => push(pagename)
}, dispatch)

export default reduxForm({
  validate,
  form: 'EmailLoginForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(EmailLogin)
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
