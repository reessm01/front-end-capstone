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
    let grid = [];
    for (let i = 0; i < 50; i++) {
      let newArray = [];
      for (let j = 0; j < 50; j++) {
        newArray.push({ row: i, columen: j });
      }
      grid.push(newArray);
    }
    this.setState({ ...this.state, grid: grid });
  }
  handleAddGrid = () => {
    this.setState({
      numRows: this.state.numRows + 1,
      numCols: this.state.numCols + 1,
      canvasWidth: this.state.canvasWidth + 10
    });
  };
  handleSubtractGrid = () => {
    this.setState({
      numRows: this.state.numRows - 1,
      numCols: this.state.numCols - 1,
      canvasWidth: this.state.canvasWidth - 10
    });
  };
  handleDragOver = (e) =>{
      console.log("finish dragging");
      e.preventDefault()
  }

  render() {
    const store = [];
    for (let i = 0; i < this.state.numRows; i++) {
      let row = [];
      for (let j = 0; j < this.state.numCols; j++) {
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
          <PictureList pictures={this.state.pictures} />
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
