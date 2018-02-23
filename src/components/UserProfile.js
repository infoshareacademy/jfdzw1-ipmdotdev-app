// PROFIL UŻYTKOWNIKA, KTÓRY WYŚWIETLA SIĘ Z BOKU

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

class UserProfile extends Component {

  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col md={3}>
              <div style={{height: '100%'}}>
                <img src={"http://via.placeholder.com/150x200"} width={150} height={200}/>
                <h2>Piotr Redux</h2>
                  <h3>O mnie</h3>
                  <textarea>xxxxxxx </textarea>
                <p>Warszawa</p>
                  <p>Mężczyza</p>
                  <p>30 lat</p>
              </div>
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