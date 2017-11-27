import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { authStateChanged } from '../actions';




export default function(ComposedComponent) {

  class Authentication extends Component {


    componentWillReceiveProps(nextProps) {
      if (nextProps.authloginstatus == 'notloggedin') {
        nextProps.changePage('/welcome');
      }
    }


    render() {
      console.log('-----authloginstatus--------');
      console.log(this.props.authloginstatus);
      // console.log('Rendering', ComposedComponent);
      // takes the props passed to authentication component to the wrapped component
      /*
      if (this.props.authloginstatus == 'initial') {
          this.props.authStateChanged();
      }
      */

      if (this.props.authloginstatus == 'notloggedin') {
          return null;
      }

      return <ComposedComponent {...this.props} />

    }
  }

  const mapStateToProps = state => ({
    authloginstatus: state.auth.loginStatus
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    authStateChanged,
    changePage: (pagename) => push(pagename)
  }, dispatch)

  return connect( mapStateToProps, mapDispatchToProps)(Authentication);

}


/*
// Example use of the HOC


// In Some other location .... Not in this file ...
// We want to use this HOC

import Authentication // This is my HOC
import Resources // This is the component I want to wrap

const ComposedComponent = Authentication(Resources);

<ComposedComponent />


*/
