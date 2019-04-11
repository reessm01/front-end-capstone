import React, { Component } from "react";
import Canvas from "./Canvas";
import PageHeader from "./PageHeader"
import Login2 from "./Login2"
import FlowerSearch from "./FlowerSearch.js"
import VeggieSearch from "./VeggieSearch.js"
import TreeSearch from "./TreeSearch.js"
import ShrubSearch from "./ShrubSearch.js"
import RegistrationPage from './RegistrationPage'
import {TreeCards} from "./TreeCards"
import {ShrubCards} from "./ShrubCards"
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import '../App.css'
import { NavBar } from './NavBar'


//connect navbar to redux state//Can use component=//
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Login2 />} />
        <Switch>
          <Route exact path=
            {["/canvas", "/register", "/flowers", "/veggies","/trees","/shrubs"]} render={() => 
            <React.Fragment>
              <PageHeader />
              <NavBar />
              <Switch>
                <Route exact path="/canvas" render={() => <Canvas />} />
                <Route exact path="/register" render={() => <RegistrationPage />} />
                <Route exact path="/flowers" render={() => <FlowerSearch />} />
                <Route exact path="/veggies" render={() => <VeggieSearch />} />
                  <Route exact path="/trees" render={() => <TreeSearch />} />
                  <Route exact path="/shrubs" render={() => <ShrubSearch />} />
              </Switch></React.Fragment>} />
        </Switch>


        {/* <Route exact path = "/canvas" render={() => <Canvas />} 
           <Route path="/toolbar" render={() => <ToolBar />} />
           <Route exact path="/register" render={() => <RegistrationPage /> } />
           <Route exact path="/flowers" render={() => <FlowerSearch />} />
          <Route exact path="/veggies" render={() => <VeggieSearch />} /> */}
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
