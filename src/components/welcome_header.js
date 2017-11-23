import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Row} from 'react-bootstrap';
import LoginModal from './login/login_modal';


class WelcomeHeader extends Component {

  constructor(props) {
      super(props)
  }

  // https://stackoverflow.com/questions/39858754/how-can-i-open-a-modal-from-a-navbar-with-react-bootstrap
  handleSelect = (selectedKey) => {
    console.log(selectedKey);
    if (selectedKey === 1) {
      this.loginmodal.open();
    }
  }

  render() {


    // https://stackoverflow.com/questions/19053181/how-to-remove-focus-around-buttons-on-click
    // https://stackoverflow.com/questions/16839284/underline-a-tag-when-hovering
    return (
      <div>
        <Navbar collapseOnSelect fixedTop={true} onSelect={this.handleSelect} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Hi   </a>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <button style={{ 'background':'none', 'border':'none', 'margin':0 , 'padding':0 , 'outline':'none' }}> Login </button>
            </NavItem>
          </Nav>
        </Navbar>

        <LoginModal onRef={ref => (this.loginmodal = ref)} />

      </div>

    );
  }

}

export default WelcomeHeader;
