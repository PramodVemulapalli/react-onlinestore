import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import firebase from 'firebase';
import { connect } from 'react-redux';
import { facebookSignin } from '../../actions';


//const auth = firebase.auth
//const provider = new firebase.auth.FacebookAuthProvider();
//provider.addScope('public_profile');
//provider.addScope('email');

class SigninLinks extends Component {


  constructor(props) {
      super(props)
      this.state = {
        user: null
      }
  }

  login(formtype) {
    this.props.setForm(formtype);
  }

  render() {

    if ( this.props.showForm == 'signin') {
      return (
        <div className="col-sm-6 col-sm-offset-3" style={{'textAlign':'center'}}>
            <a onClick={ () => this.login('signup')}> <h5> Don't have an account. Sign Up Here ! </h5> </a>
        </div>
      );
    }

    if ( this.props.showForm == 'signup') {
      return (
        <div className="col-sm-6 col-sm-offset-3" style={{'textAlign':'center'}}>
            <a onClick={ () => this.login('signin')}> <h5> Already have an account. Sign In Here ! </h5> </a>
        </div>
      );
    }

    if ( this.props.showForm == 'register') {
      return (
        <div className="col-sm-6 col-sm-offset-3" style={{'textAlign':'center'}}>
            <a onClick={ () => this.login('signin')}> <h5> Already have an account. Sign In Here ! </h5> </a>
        </div>
      );
    }

  }

}

export default SigninLinks;
