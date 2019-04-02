import React, { Component } from "react";
//import "./App.css";
import Canvas from "./Canvas";
import {ToolBar} from "./ToolBar"
import { connectRouter } from 'connected-react-router';
import { userProfilePage } from './ProfilePage'
import { userLogin } from './Login'
import { userRegistration } from './RegistrationPage'
import { BrowserRouter,Switch, Route } from "react-router-dom";
// import userProfilePage from "./ProfilePage";


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
          <Route path="/toolbar" render={() => <ToolBar />} />
          <Route path="/profile" render={() => <userProfilePage />} />
          <Route path="/login" render={() => <userLogin />} />
          <Route path="/registration" render={() => <userRegistration />} />
        </Switch>
    
    </BrowserRouter>
      
    );
  }
}

export default connectRouter(
  ({ auth }) => ({
    login: auth.login
  }),
  null
)(App);
