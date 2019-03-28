import React, { Component } from "react";
//import "./App.css";
import {Canvas} from "./Canvas";
import { BrowserRouter,Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Canvas />} />
        </Switch>
    
    </BrowserRouter>
      
    );
  }
}

export default App;
