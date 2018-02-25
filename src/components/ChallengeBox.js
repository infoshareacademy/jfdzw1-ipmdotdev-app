// MAŁY KOMPONENT WYŚWIETLAJACY WYZWANIE NA LIŚCIE WYZWAŃ
// TŁO JAKO ZDJĘCIE, TYTUŁ, OPIS, BEZ SZCZEGÓŁÓW

import React, { Component } from "react";
import { Col, Panel, Image } from "react-bootstrap";

const ChallengeBox = props => {
  return (
    <Col xs={6} sm={4}>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{props.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Image src={props.imgSrc} thumbnail responsive />
          <p>{props.description}</p>
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default ChallengeBox;
