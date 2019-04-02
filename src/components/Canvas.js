import React, { Component } from "react";
import { Grid } from "./Grid/Grid";
import { ToolBar } from "./ToolBar";
import { PictureList } from "./PictureList";
import { Button, OverlayTrigger } from "react-bootstrap"
import { toolTip } from "./ToolTip"
import { AttachedPic } from "./AttachedPic"
import { connect } from "react-redux"
import {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant
} from "../actions"

let i = 0
let j = 0
let originRow
let originCol

export class Canvas extends Component {
  state = {
    pictures: [
      { pictureId: 1, bgColor: "red" },
      { pictureId: 2, bgColor: "blue" }
    ],
    attachedPictures: []
  }

  componentWillMount = () => {
    console.log(this.props.width)
  }

  contextMenu = e => {
    e.preventDefault()
    this.props.subtractGrid(e.target.id)
  }

  handleDragOver = (e) => {
    e.preventDefault()
    i = e.target.dataset.i
    j = e.target.dataset.j
  }

  handleDragStart = event => {
    if (event.target.id !== "static") {
      originRow = event.target.dataset.i
      originCol = event.target.dataset.j
    }
  }

  handleDrop = e => {
    e.preventDefault()
    this.props.dropPlant(i, j)
    this.props.removePlant(originRow, originCol)
  }

  render() {
    const { grid } = this.props
    const store = [];

    for (let i = 0; i < grid.length; i++) {
      let row = [];
      for (let j = 0; j < grid[0].length; j++) {
        row.push(
          <Grid
            key={i + "," + j}
            i={i}
            j={j}
            image={grid[i][j].pictureLink}
            handleDragStart={this.handleDragStart}
          />);
      }
      store.push(row);
    }

    const pictureHolder = []

    if (this.state.attachedPictures.length !== 0) {
      this.state.attachedPictures.map(curPic => (
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
            <div
              onDragOverCapture={this.handleDragOver}
              onDrop={this.handleDrop}
              style={{
                display: "flex",
                width: this.props.width + "px",
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
                onClick={e => this.props.expandGrid(e.target.id)}
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
              onClick={e => this.props.expandGrid(e.target.id)}
              onContextMenu={this.contextMenu}
              style={{ height: "25px", margin: "0px", width: this.props.width + "px" }} >
              <div id="rows" style={{ display: "flex", justifyContent: "center", width: "initial" }}>
                <i id="rows" class="fas fa-chevron-down" />
              </div>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ grid }) {
  return {
    grid: grid.grid,
    width: grid.canvasWidth
  }
}

const mapDispatchToProps = {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)