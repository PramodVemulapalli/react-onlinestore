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

      <div className="col-sm-6 col-sm-offset-3" style={{'textAlign':'center', 'marginTop':'25px'}}>

        <div className="btn-group">
          <a className='btn btn-primary '><h5><i className="fa fa-facebook" ></i></h5></a>
          <a className='btn btn-primary ' href=''> <h5>Sign in with Facebook </h5></a>
        </div>

      </div>

    );
  }

}

export default connect( null , {
  facebookSignin
})(FacebookLogin);
