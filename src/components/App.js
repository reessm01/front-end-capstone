import React, { Component } from "react";
import Canvas from "./Canvas";
import { ToolBar } from "./ToolBar"
import Login2 from "./Login2"
import { ProfilePage } from "./ProfilePage"
import  FlowerSearch from "./FlowerSearch.js";
import  VeggieSearch from "./VeggieSearch.js";
import RegistrationPage from './RegistrationPage'
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import { UserImage } from './UserImage'
import  '../App.css'


class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" render={() => <Login2 />} />
          <Route exact path="/canvas" render={() => <Canvas />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/register" render={() => <RegistrationPage /> } />
          <Route exact path="/flowers" render={() => <FlowerSearch />} />
          <Route exact path="/veggies" render={() => <VeggieSearch />} />
          <Route exact path="/userImage" render={() => <UserImage />} />
        </Switch>
    );
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  }),
  null
)(App);
