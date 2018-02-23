// PASEK NAWIGACJI

import React from "react";
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Switcheroo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={"/signin"}>
              <NavItem>Logowanie</NavItem>
            </LinkContainer>
            <LinkContainer to={"/signup"}>
              <NavItem>Rejestracja</NavItem>
            </LinkContainer>
            <LinkContainer to={"/profile"}>
              <NavItem>Profil</NavItem>
            </LinkContainer>
            <LinkContainer to={"/addchallenge"}>
              <NavItem>Dodaj wyzwanie</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
