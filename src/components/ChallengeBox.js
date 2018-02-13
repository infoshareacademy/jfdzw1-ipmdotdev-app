// MAŁY KOMPONENT WYŚWIETLAJACY WYZWANIE NA LIŚCIE WYZWAŃ
// TŁO JAKO ZDJĘCIE, TYTUŁ, OPIS, BEZ SZCZEGÓŁÓW

import React, { Component } from "react";
import { connect } from "react-redux";

const ChallengeBox = props =>  {
    return <div />;
  }


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectedChallengeBox = connect(mapStateToProps, mapDispatchToProps)(ChallengeBox);

export {connectedChallengeBox as ChallengeBox};