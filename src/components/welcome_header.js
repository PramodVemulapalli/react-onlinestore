import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';


class WelcomeHeader extends Component {

  // https://stackoverflow.com/questions/39858754/how-can-i-open-a-modal-from-a-navbar-with-react-bootstrap
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
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
          <NavItem eventKey={1} href="#">Log In</NavItem>
        </Nav>
      </Navbar>
      </div>

    );
  }

}

export default WelcomeHeader;
