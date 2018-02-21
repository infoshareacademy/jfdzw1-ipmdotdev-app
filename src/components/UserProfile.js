// PROFIL UŻYTKOWNIKA, KTÓRY WYŚWIETLA SIĘ Z BOKU

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

class UserProfile extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={3}>
              <div style={{height: 510}}>
                <img src={"http://via.placeholder.com/150x200"} width={150} height={200}/>
                <h2>Piotr Redux</h2>
                  <h3>O mnie</h3>
                  <p style={{textAlign: "left"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.</p>
                <p>Warszawa</p>
                  <p>Mężczyza</p>
                  <p>30 lat</p>
              </div>
            </Col>
            <Col xs={12} sm={9}>
              <h2>Aktywne wyzwania:</h2>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={9}>
              <h2>Propozycje wyzwań:</h2>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} sm={3}>
              <Thumbnail src="http://via.placeholder.com/300x150" alt="242x200">
                <h4>Wyzwanie</h4>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">dodaj</Button>&nbsp;
                  <Button bsStyle="danger">zrezygnuj</Button>
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