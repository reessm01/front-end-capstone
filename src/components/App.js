import React, { Component } from "react";
//import "./App.css";
import Canvas from "./Canvas";
import { ToolBar } from "./ToolBar"
import { Login2 } from "./Login2"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
// import userProfilePage from "./ProfilePage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
          <Route exact path="/Login" render={() => <Login2 />} />
          {/* <Route exact path="/Register" render={() => <RegistrationPage />} /> */}
        </Switch>

      </BrowserRouter>

    );
  }
}

export default connect(
  ({ auth }) => ({
    // login: auth.login
  }),
  null
)(App);
