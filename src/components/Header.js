// PASEK NAWIGACJI


import React from 'react'
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import {Link} from "react-router-dom"

class Header extends React.Component {

    render() {

        this.state = {
            login: null
        };

        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            Switcheroo
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>

                        { this.state.login != null && this.state.login.isLogged === true ? null :
                            <LinkContainer to={"/SignIn"}>
                                <NavItem>Logowanie</NavItem>
                            </LinkContainer>
                        }

                        <LinkContainer to={"/SignUp"}>
                            <NavItem>Rejestracja</NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/Home"}>
                            <NavItem>Profil</NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


const mapStateToProps = state => {
    return {
        login : state.login
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);