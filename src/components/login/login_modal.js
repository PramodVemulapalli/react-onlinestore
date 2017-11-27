import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Row} from 'react-bootstrap';
import FacebookLogin from './facebook_login';
import UserpwdLogin from './userpwd_login';
import EmailLogin from './email_login';
import EmailRegister from './email_register';
import SignupForm from './signup_form';
import SigninLinks from './signin_links';



class LoginModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
          showModal: false,
          showForm: 'signin'
        }
    }

    componentDidMount() {
      this.props.onRef(this)
    }

    componentWillUnmount() {
      this.props.onRef(undefined)
    }

    setForm = (type) => {
      this.setState({ showForm: type });
    }

    close = () => {
      this.setState({ showModal: false });
    }

    open = () => {
      this.setState({ showModal: true });
    }


    rendersignin(showFormVar) {
      if ( showFormVar == 'signin' ) {
        return(
          <div>
            <Row>
              <FacebookLogin />
            </Row>
            <hr />
            <Row>
              <EmailLogin/>
            </Row>
            <hr />
            <Row>
              <SigninLinks setForm={this.setForm} showForm={this.state.showForm}/>
            </Row>
          </div>
        );
      } else {
        return null;
      }
    }

    renderregister(showFormVar) {
      if ( showFormVar == 'register' ) {
        return(
          <div>
            <Row>
              <FacebookLogin />
            </Row>
            <hr />
            <Row>
              <EmailRegister/>
            </Row>
            <hr />
            <Row>
              <SigninLinks setForm={this.setForm} showForm={this.state.showForm}/>
            </Row>
          </div>
        );
      } else {
        return null;
      }
    }

    rendersignup(showFormVar) {
      if ( showFormVar == 'signup' ) {
        return(
          <div>
            <Row>
              <SignupForm setForm={this.setForm} />
            </Row>
            <hr />
            <Row>
              <SigninLinks setForm={this.setForm} showForm={this.state.showForm}/>
            </Row>
          </div>
        );
      } else {
        return null;
      }
    }

    render() {

      console.log(this.state.showForm);
      // https://stackoverflow.com/questions/19053181/how-to-remove-focus-around-buttons-on-click
      // https://stackoverflow.com/questions/16839284/underline-a-tag-when-hovering
      return (
        <Modal show={this.state.showModal} onHide={this.close}>
           { this.rendersignin(this.state.showForm) }
           { this.rendersignup(this.state.showForm) }
           { this.renderregister(this.state.showForm) }
        </Modal>
      );



    }

}

export default LoginModal;
