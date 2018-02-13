// GŁÓWNY WIDOK WYZWANIA ZE WSZYSTKIMI SZCZEGÓŁAMI, MOŻLIWOŚCIA DODAWANIA GO DO PROFILU ITP

import React, { Component } from "react";
import { connect } from "react-redux";

class ChallengeMain extends Component {
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

const connectedChallengeMain = connect(mapStateToProps, mapDispatchToProps)(ChallengeMain);

export {connectedChallengeMain as ChallengeMain};