import React, { Component } from "react";
//import "./App.css";
import Canvas from "./Canvas";
import { ToolBar } from "./ToolBar"
import { Login2 } from "./Login2"
import { ProfilePage } from "./ProfilePage"
import { RegistrationPage } from './RegistrationPage'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
          <Route exact path="/Login" render={() => <Login2 />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/register" render={() => <RegistrationPage /> } />
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
