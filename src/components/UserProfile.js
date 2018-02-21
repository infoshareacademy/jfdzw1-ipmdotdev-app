// PROFIL UŻYTKOWNIKA, KTÓRY WYŚWIETLA SIĘ Z BOKU

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

class UserProfile extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <div style={{height: 500}}>
                <img src={"http://via.placeholder.com/150x200"} width={150} height={200}/>
                <h2>Piotr Redux</h2>
                  <h3>O mnie</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.</p>
                <p>Warszawa</p>
                  <p>Mężczyza</p>
                  <p>30 lat</p>
              </div>
            </Col>
            <Col xs={8} md={8}>
              <h2>Aktywne wyzwania:</h2>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/350x150" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="default">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/350x150" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="default">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={8} md={8}>
              <h2>Propozycje wyzwań:</h2>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/350x150" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="default">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/350x150" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="default">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
    );
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
//export default UserProfile;