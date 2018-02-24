// LOGOWANIE UŻYTKOWNIKA

import React from "react";

import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const loginInput = {
      login: this.login.value,
      password: this.password.value
    };
    this.props.authUser(loginInput, this.props.history);
  };

  render() {
    const loginBox = (
      <div>
        {this.props.hasError && (
          <p>Logowanie nie powiodło się. Spróbuj ponownie!</p>
        )}
        <form inline="true" onSubmit={this.handleSubmit}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Login</ControlLabel>
            <FormControl
              type="text"
              placeholder="Login"
              inputRef={input => {
                this.login = input;
              }}
            />
          </FormGroup>
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Hasło</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              inputRef={input => {
                this.password = input;
              }}
            />
          </FormGroup>
          <Button type="submit">Zaloguj</Button>
        </form>
      </div>
    );
    return (
      <Row>
        <Col xs={12} sm={4} smOffset={4}>
          {this.props.userLogged ? (
            <p className="text-center">Brawo, jesteś zalogowany!</p>
          ) : (
            loginBox
          )}
        </Col>
      </Row>
    );
  }
}

const authenticateUser = (loginInput, history) => {
  return dispatch => {
    dispatch({ type: "PENDING" });
    fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/user/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInput)
    })
      .then(rsp => rsp.json())
      .then(data => {
        dispatch({ type: "SUCCESS", userData: data });
        setTimeout(() => history.push("/"), 1500);
      })
      .catch(err => {
        dispatch({ type: "ERROR" });
      });
  };
};

const mapStateToProps = state => {
  return {
    userLogged: state.loginStatus.userLogged,
    hasError: state.loginStatus.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: (loginInput, history) => dispatch(authenticateUser(loginInput, history))
  };
};

const connectedSignIn = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));

export { connectedSignIn as SignIn };
