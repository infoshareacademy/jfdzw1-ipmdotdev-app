import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const Footer = props => {
const date = (new Date()).toDateString();

  return (
    <div className={props.className}>
      <Row>
        <Col xs={12}>Dziś jest: {date}</Col>
      </Row>
    </div>
  );
};

export default Footer;
