import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ChallangesCarousel from "../components/ChallangesCarousel";

const Home = props => {
  if (props.userlogged) {
    return (
      <Row>
        <Col xs={12}>To jest Home po zalogowaniu</Col>
      </Row>
    );
  } else {
    return <ChallangesCarousel />;
  }
};

export default Home;
