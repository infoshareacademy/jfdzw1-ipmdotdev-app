// KARUZELA NA STRONIE GŁÓWNEJ DLA NIEZALOGOWANEGO UŻYTKOWNIKA

import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const ChallangesCarousel = () => {
  return (
    <Row>
      <Col xs={8} xsOffset={2}>
        <Carousel>
          <Carousel.Item>
            <img
            className="center-block img-responsive"
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="center-block img-responsive"
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="center-block img-responsive"
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default ChallangesCarousel;
