// PROFIL UŻYTKOWNIKA, KTÓRY WYŚWIETLA SIĘ Z BOKU

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";

class UserProfile extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                <h1>User</h1>
                <div style={{backgroundColor: "red", width: 200, height: 200}}></div>
              </code>
            </Col>
            <Col xs={12} md={8}>
              <code></code>
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