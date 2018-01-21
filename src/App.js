import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./scenes/Home";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    userlogged: true
  };

  handleLogging = () => {
    if (this.state.userlogged) {
      this.setState({ userlogged: false });
    } else {
      this.setState({ userlogged: true });
    }
  };

  render() {
    return (
      <div>
        <Navigation
          userlogged={this.state.userlogged}
          handleLogging={this.handleLogging}
        />
        <Grid>
          <Home />
        </Grid>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
