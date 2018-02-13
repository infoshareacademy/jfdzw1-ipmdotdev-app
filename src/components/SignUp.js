// FORMULARZ REJESTRACYJNY

import React, { Component } from "react";
import { connect } from "react-redux";

class SignUp extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export {connectedSignUp as SignUp};