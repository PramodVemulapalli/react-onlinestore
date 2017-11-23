import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Row} from 'react-bootstrap';
import FacebookLogin from './facebook_login';
import UserpwdLogin from './userpwd_login';
import EmailLogin from './email_login';


class LoginModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
          showModal: false
        }
    }

    componentDidMount() {
      this.props.onRef(this)
    }

    componentWillUnmount() {
      this.props.onRef(undefined)
    }


    close = () => {
      this.setState({ showModal: false });
    }

    open = () => {
      this.setState({ showModal: true });
    }

    render() {


      // https://stackoverflow.com/questions/19053181/how-to-remove-focus-around-buttons-on-click
      // https://stackoverflow.com/questions/16839284/underline-a-tag-when-hovering
      return (
          <Modal show={this.state.showModal} onHide={this.close}>
              <Row>
                <EmailLogin/>
              </Row>
              <hr />
              <Row>
                  <div className="col-sm-6 col-sm-offset-3" style={{'textAlign':'center', 'marginBottom':'50px'}}>
                      <FacebookLogin />
                  </div>
              </Row>
          </Modal>
      );
    }

}

export default LoginModal;
