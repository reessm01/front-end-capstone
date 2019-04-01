import React, { Component } from "react";
import { Grid } from "./Grid/Grid";
import { ToolBar } from "./ToolBar";
import { PictureList } from "./PictureList";
import { width } from "./Grid/styles"
import { Button, OverlayTrigger } from "react-bootstrap"
import { toolTip } from "./ToolTip"
import { AttachedPic } from "./AttachedPic"
//import { connect } from "react-redux";

export class Canvas extends Component {
  state = {
    numRows: 10,
    numCols: 10,
    canvasWidth: 0,
    pictures: [
      { pictureId: 1, bgColor: "red" },
      { pictureId: 2, bgColor: "blue" }
    ],
    attachedPictures: []
  };

  componentWillMount() {
    let grid = Array(this.state.numRows).fill(null).map(() => Array(this.state.numCols).fill({ pictureLink: null }))
    let initWidth = this.state.numRows * width
    this.setState({ ...this.state, grid: grid, canvasWidth: initWidth })
  }

  handleClick = e => {
    switch (e.button) {
      case 0:
        this.handleAddGrid(e.target.id)
        break
    }
  }

  contextMenu = e => {
    console.log(e.target)
    e.preventDefault()
    this.handleSubtractGrid(e.target.id)
  }

  handleAddGrid = id => {
    let newGrid = Array.from(this.state.grid)
    let newRow = 0
    let newCol = 0
    let newWidth = width

    if (id === "col") {
      newCol = 1
      newGrid.map(row => row.push({ pictureLink: null }))
    } else {
      newRow = 1
      newWidth = 0
      newGrid.push(Array(this.state.numCols).fill({ pictureLink: null }))
    }

    this.setState({
      numRows: this.state.numRows + newRow,
      numCols: this.state.numCols + newCol,
      canvasWidth: this.state.canvasWidth + newWidth,
      grid: newGrid
    });
  };

  handleSubtractGrid = id => {
    const minRows = (this.state.numRows > 1) && (id === "rows")
    const minCols = (this.state.numCols > 1) && (id === "col")
    const removalAllowed = minRows || minCols
    console.log(id)
    if(removalAllowed){

      let newGrid = Array.from(this.state.grid)
      let newRow = 0
      let newCol = 0
      let newWidth = width
  
      if (id === "col") {
        newCol = 1
        newGrid.forEach(row => row.pop())
      } else {
        newRow = 1
        newWidth = 0
        newGrid.pop()
      }
  
      this.setState({
        numRows: this.state.numRows - newRow,
        numCols: this.state.numCols - newCol,
        canvasWidth: this.state.canvasWidth - newWidth,
        grid: newGrid
      })
    }
  }

  handleDragOver = (e) => {
    console.log("finish dragging");
    e.preventDefault()
  }

  handleDragStart = pictureId => event => {
    console.log(pictureId)
    event.dataTransfer.setData("pictureId", pictureId)
  }

  render() {

    const store = [];
    for (let i = 0; i < this.state.grid.length; i++) {
      let row = [];
      for (let j = 0; j < this.state.grid[0].length; j++) {
        row.push(<Grid key={i + "," + j} image={this.state.grid[i][j].pictureLink} />);
      }
      store.push(row);
    }
    const pictureHolder = []
    if(this.state.attachedPictures.length!==0){
        this.state.attachedPictures.map(curPic =>(
            pictureHolder.push(<AttachedPic top={curPic.yCoord} left={curPic.xCoord} bgColor="green"
        />)
            
        ))
    }

    return (
      <div>
        <div>
          <ToolBar
          />
        </div>
        <br />
        <div>
          <PictureList pictures={this.state.pictures} handleDragStart={this.handleDragStart} />
        </div>
        <div style={{ display: "block" }}>
          <div style={{ display: "flex" }}>
            <div onDragOver={this.handleDragOver}
              style={{
                display: "flex",
                width: this.state.canvasWidth + "px",
                flexWrap: "wrap",
                margin: "0px"
              }}
            >
              {store}
            </div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={toolTip}
            >
              <Button
                id="col"
                onClick={this.handleClick}
                onContextMenu={this.contextMenu}
                style={{ width: "25px", margin: "0px" }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <i class="fas fa-chevron-right" />
                </div>
              </Button>
            </OverlayTrigger>
          </div>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={toolTip}
          >
            <Button
              id="rows"
              onClick={this.handleClick}
              onContextMenu={this.contextMenu}
              style={{ height: "25px", margin: "0px", width: this.state.canvasWidth + "px" }} >
                <div id="rows" style={{ display: "flex", justifyContent:"center", width:"initial" }}>
                  <i id="rows" class="fas fa-chevron-down" />
                </div>
              </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
