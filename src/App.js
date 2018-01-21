import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./App.css";

import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    userlogged: true
  }

  handleLogging = () => {
    if(this.state.userlogged) {
      this.setState({userlogged: false})
    } else {
      this.setState({userlogged: true})
    }
  }

  render() {
    return (
      <Navigation userlogged={this.state.userlogged} handleLogging={this.handleLogging} />
    )
  }
}

export default App;
