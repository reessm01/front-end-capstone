import React, { Component } from "react";
import { Grid } from "./Grid";
import { ToolBar } from "./ToolBar";
import { PictureList } from "./PictureList";
//import { connect } from "react-redux";
export class Canvas extends Component {
  state = {
    numRows: 50,
    numCols: 50,
    canvasWidth: 500,
    pictures: [
      { pictureId: 1, bgColor: "red" },
      { pictureId: 2, bgColor: "blue" }
    ]
  };
  componentWillMount() {
    let grid = Array(this.state.numRows).fill(null).map(() => Array(this.state.numCols).fill({ pictureLink: null }))
    this.setState({ ...this.state, grid: grid });
  }
  handleAddGrid = () => {
    let newGrid = Array.from(this.state.grid)
    newGrid.map(row => row.push({ pictureLink: null }))
    newGrid.push(Array(this.state.numCols + 1).fill({ pictureLink: null }))
    this.setState({
      numRows: this.state.numRows + 1,
      numCols: this.state.numCols + 1,
      canvasWidth: this.state.canvasWidth + 10,
      grid: newGrid
    });
  };
  handleSubtractGrid = () => {
    let newGrid = Array.from(this.state.grid)
    newGrid.pop()
    newGrid.forEach(row => row.pop())
    this.setState({
      numRows: this.state.numRows - 1,
      numCols: this.state.numCols - 1,
      canvasWidth: this.state.canvasWidth - 10,
      grid: newGrid
    });
  };
  handleDragOver = (e) => {
    console.log("finish dragging");
    e.preventDefault()
  }
  handleDragStart = pictureId => event=>{
      console.log(pictureId)
      event.dataTransfer.setData("pictureId",pictureId)
  }
  

  render() {
    const store = [];
    for (let i = 0; i < this.state.grid.length; i++) {
      let row = [];
      for (let j = 0; j < this.state.grid[0].length; j++) {
        row.push(<Grid key={i + "," + j} />);
      }
      store.push(row);
    }

    return (
      <div>
        <div>
          <ToolBar
            handleAddGrid={this.handleAddGrid}
            handleSubtractGrid={this.handleSubtractGrid}
          />
        </div>
        <br />
        <div>
          <PictureList pictures={this.state.pictures} handleDragStart={this.handleDragStart}/>
        </div>
        <div onDragOver={this.handleDragOver}
          style={{
            display: "flex",
            width: this.state.canvasWidth + "px",
            flexWrap: "wrap"
          }}
        >
          {store}
        </div>
      </div>
    );
  }
}
