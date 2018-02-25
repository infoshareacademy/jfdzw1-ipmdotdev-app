import React from "react";
import { Row, Col } from "react-bootstrap";
import ChallengeBox from "../components/ChallengeBox";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ChallengeList extends React.Component {
  componentDidMount() {
    this.props.getAllChallenges();
  }
  render() {
    if (this.props.allChallenges === null) {
      return <p>Loading…</p>;
    }
    return (
      <Row>
        <Col xs={12}>
          {this.props.allChallenges.map(challenge => (
            <ChallengeBox
              key={challenge.id}
              title={challenge.title}
              description={challenge.description}
              imgSrc={challenge.img}
            />
          ))}
        </Col>
      </Row>
    );
  }
}

const getAllChallenges = () => {
  return dispatch => {
    dispatch({ type: "GET_ALL_CHALLENGES_PENDING" });
    fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/challenge")
      .then(rsp => rsp.json())
      .then(data => {
        dispatch({ type: "GET_ALL_CHALLENGES_SUCCESS", allChallenges: data });
      })
      .catch(err => {
        dispatch({ type: "GET_ALL_CHALLENGES_ERROR" });
      });
  };
};

const mapStateToProps = state => {
  return {
    allChallenges: state.challengesData.allChallenges
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllChallenges: () => dispatch(getAllChallenges())
  };
};

const connectedChallengeList = connect(mapStateToProps, mapDispatchToProps)(
  ChallengeList
);

export { connectedChallengeList as ChallengeList };
