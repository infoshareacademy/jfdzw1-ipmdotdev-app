import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import {Login} from "./Login"

const Navigation = props => {
  if (props.userlogged) {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Switcheroo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={props.handleLogging}>
              Wyloguj
            </NavItem>
          </Nav>
          <Navbar.Text pullRight>
            Witaj <Navbar.Link href="#">""</Navbar.Link>!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Switcheroo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Login/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Navigation;
