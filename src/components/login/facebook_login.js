import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import firebase from 'firebase';
import { connect } from 'react-redux';
import { facebookSignin } from '../../actions';


//const auth = firebase.auth
//const provider = new firebase.auth.FacebookAuthProvider();
//provider.addScope('public_profile');
//provider.addScope('email');

class FacebookLogin extends Component {


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

      <div>

        <Button bsStyle="link" className="btn-social btn-facebook" onClick={this.login.bind(this)} block>
          <i className="fa fa-facebook" /> Sign in with Facebook
        </Button>

      </div>

    );
  }

}

export default connect( null , {
  facebookSignin
})(FacebookLogin);
