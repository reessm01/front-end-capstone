import React, { Component } from "react";
import { Grid } from "./Grid";
import { ToolBar } from "./ToolBar";
//import { connect } from "react-redux";
export class Canvas extends Component {
  state = {
      numRows:50,
      numCols:50,
      canvasWidth:500
  }
  handleAddGrid = () =>{
      this.setState({
          numRows: this.state.numRows + 1,
          numCols: this.state.numCols +1,
          canvasWidth: this.state.canvasWidth + 10
      })
  }
  handleSubtractGrid = ()=>{
      this.setState({
          numRows: this.state.numRows - 1,
          numCols: this.state.numCols - 1,
          canvasWidth: this.state.canvasWidth - 10
      })
  }

  render() {
    const store = [];
    for (let i = 0; i < this.state.numRows; i++) {
      let row = [];
      for (let j = 0; j < this.state.numCols; j++) {
        row.push(<Grid key={i+","+j}/>);
      }
      store.push(row);
    }

    return (
     <div>
      <div><ToolBar handleAddGrid={this.handleAddGrid} handleSubtractGrid={this.handleSubtractGrid}/></div>
      <br />
      <div style={{ display: "flex" , width:this.state.canvasWidth+"px", flexWrap:"wrap"}}>
        
        {/* {store.map(row=>(
           <Grid />
        ))}  */}
        {store}
        
      </div>
    </div>
    );
  }
}
