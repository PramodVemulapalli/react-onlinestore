import React, { Component } from 'react';
import { Button, Panel, FormControl } from 'react-bootstrap';
// import firebase from 'firebase';
import { connect } from 'react-redux';
import { facebookSignin } from '../../actions';


// const auth = firebase.auth
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('public_profile');
// provider.addScope('email');

class UserpwdLogin extends Component {


  constructor(props) {
      super(props)
      this.state = {
        user: null
      }
  }

  login() {
    this.props.facebookSignin();
  }

  render() {
    return (

      <div className="col-sm-8 col-sm-offset-2" style={{'marginTop':'50px'}}>
          <Panel header={<h3>Please Sign In</h3>} className="login-panel">
            <form>
                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </div>
                <Button type="submit" bsSize="large" bsStyle="primary" block>Login</Button>
            </form>
          </Panel>
        </div>

    );
  }

}

export default connect( null , {
  facebookSignin
})(UserpwdLogin);



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
