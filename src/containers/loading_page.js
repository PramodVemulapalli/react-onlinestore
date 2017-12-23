import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authStateChanged } from '../actions';


class LoadingPage extends Component {

  constructor(props) {
      super(props);
  }

  componentWillMount() {
      this.props.authStateChanged();
  }

  renderLoader() {

    if ( this.props.loginstatus == 'checking' || this.props.loginstatus == 'initial') {
      return (
        <div className="overlayed">
          <div className="centered">
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return
    }

  }

  render() {

    console.log(this.props.children);

    return (
      null
    );

  }


}

function mapStateToProps(state) {
  return { loginstatus: state.auth.loginStatus};
}

export default connect( mapStateToProps , {authStateChanged} )(LoadingPage);
