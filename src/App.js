import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import "./styles/App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Home from "./scenes/Home";
import { ChallengeMain } from "./scenes/ChallengeMain";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Grid fluid={true}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/challenge/:challengeId" component={ChallengeMain} />
            </Switch>
            <Footer className="footer" />
          </Grid>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
