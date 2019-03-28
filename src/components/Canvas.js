import React, { Component } from "react";
import { Grid } from "./Grid";
//import { connect } from "react-redux";
export class Canvas extends Component {
    
  render() {
    const store = [];
    for (let i = 0; i < 50; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        row.push(<Grid />);
      }
      store.push(row);
    }

    return (
      <div style={{ display: "flex" , width:"600px", flexWrap:"wrap"}}>
        {/* {store.map(row=>(
           <Grid />
        ))}  */}
        {store}
        
      </div>
    );
  }
}
