import React, { Component } from "react";
//import "./App.css";
import Canvas from "./Canvas";
import { ToolBar } from "./ToolBar"
import Login2 from "./Login2"
import { ProfilePage } from "./ProfilePage"
import  FlowerSearch from "./FlowerSearch.js";
import RegistrationPage from './RegistrationPage'
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import {AmazonAds } from './Amazon'
import { UserImage } from './UserImage'
import { Grid } from "./Grid/Grid"
import  '../App.css'


class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
          <Route exact path='/Grid' render={() => <Grid />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
          <Route exact path="/Login" render={() => <Login2 />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/register" render={() => <RegistrationPage /> } />
          <Route exact path="/flowers" render={() => <FlowerSearch />} />
          <Route exact path="/amazonAds" render={() => <AmazonAds />} />
          <Route exact path="/userImage" render={() => <UserImage />} />
        </Switch>
    );
  }
}

export default connect(
  ({ auth }) => ({
    // login: auth.login
  }),
  null
)(App);
