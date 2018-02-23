// LOGOWANIE UŻYTKOWNIKA

import React from "react";

import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    const loginInput = {
      login: this.login.value,
      password: this.password.value
    };
    this.props.authUser(loginInput);
  };

  render() {
    return (
      <form inline onSubmit={this.handleSubmit}>
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
    );
  }
}

const authenticateUser = loginInput => {
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
      })
      .catch(err => {
        dispatch({ type: "ERROR" });
      });
  };
};

const mapStateToProps = state => {
  return {
    userLogged: state.loginStatus.userLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: loginInput => dispatch(authenticateUser(loginInput))
  };
};

const connectSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export { connectSignIn as SignIn };
