// FORMULARZ DO DODAWANIA NOWEGO WYZWANIA

import React, { Component } from "react";
import { connect } from "react-redux";

class AddChallenge extends Component {
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

const connectedAddChallenge = connect(mapStateToProps, mapDispatchToProps)(AddChallenge);

export {connectedAddChallenge as AddChallenge};