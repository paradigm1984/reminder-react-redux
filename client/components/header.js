// packages
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="nav-bar" light toggleable>
          <NavbarToggler className="toggler-color" right onClick={this.toggle} />
          <NavbarBrand className="nav-brand" href="/"> Reminder Basic </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="link-nav" href="./#/home"> Github </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link-nav" href="./#/web-development"> About </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header
