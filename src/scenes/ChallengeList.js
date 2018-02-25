import React from "react";
import { Row, Col } from "react-bootstrap";
import ChallengeBox from "../components/ChallengeBox";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ChallengeList extends React.Component {
  componentDidMount() {

  }
  render() {
    return <div />;
  }
}

const getAllChallenges = () => {
  return dispatch => {
    
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = disptach => {
  return {};
};

const connectedChallengeList = connect(mapStateToProps, mapDispatchToProps)(ChallengeList);

export { connectedChallengeList as ChallengeList };
