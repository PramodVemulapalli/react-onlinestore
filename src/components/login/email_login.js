import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


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
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="col-sm-8 col-sm-offset-2" style={{'marginTop':'50px'}}>
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

  if (!values.email){
    errors.email = "enter an email!";
  }

  // if errors is empty form is fine to submit
  // if errors has any properties , redux form assumes form is invalid
  return errors;

}

export default reduxForm({
  validate,
  form: 'EmailLoginForm'
})(EmailLogin);



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
