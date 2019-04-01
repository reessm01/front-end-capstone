import React, { Component } from 'react';
import { connectRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Login from '../Login.js';
import ProfilePage from '../ProfilePage.js';
import RegistrationPage from '../RegistrationPage.js';
import NavBar from '../NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Title /> */}
        <Switch>
          <Route exact path="/profile" render = { () => <NavBar /> } />
          {/* <Route exact path="/feed" render = { () => <NavBar /> } /> */}
        </Switch>
        <Switch>
        <Route exact path="/" render = { () => <Login /> } />
        <Route exact path="/register" render = { () => <RegistrationPage /> } />
        <Route exact path="/profile" render = { () => <ProfilePage /> } />
        {/* <Route exact path="/feed" render = { () => <FeedPage /> } /> */}
        </Switch>
     </div>
    );
  }
}

export default connectRouter(({ auth}) => ({
  login: auth.login}), null )(App);