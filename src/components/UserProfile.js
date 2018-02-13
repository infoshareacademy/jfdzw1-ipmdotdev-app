// PROFIL UŻYTKOWNIKA, KTÓRY WYŚWIETLA SIĘ Z BOKU

import React, { Component } from "react";
import { connect } from "react-redux";

class UserProfile extends Component {
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

const connectedUserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export {connectedUserProfile as UserProfile};