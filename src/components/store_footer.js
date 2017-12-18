import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';


class StoreHeader extends Component {

  // https://stackoverflow.com/questions/39858754/how-can-i-open-a-modal-from-a-navbar-with-react-bootstrap
  handleSelect = (selectedKey) => {
    console.log(selectedKey);
    if (selectedKey === 5) {
      this.props.logoutUser();
    }
  }


  // https://github.com/ReactTraining/react-router/issues/83#issuecomment-214794477
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop={true} onSelect={this.handleSelect} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4} href="#">Link Right</NavItem>
              <NavItem eventKey={5} href="#">Sign Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }

}

export default connect(null, {logoutUser})(StoreHeader);
