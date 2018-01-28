import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./scenes/Home";
import Footer from "./components/Footer";
import reducer from "./reducers";
//import {createStore} from "redux/index";
import {Provider} from "react-redux";
import {createStore} from "redux";



const store = createStore(reducer);


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
        <Provider store ={store}>

        <div>
        <Navigation
          userlogged={this.state.userlogged}
          handleLogging={this.handleLogging}
        />
        <Grid>
          <Home userlogged={this.state.userlogged} />
        </Grid>
        <Footer className="footer" />
      </div>
        </Provider>
    );
  }
}

export default App;
