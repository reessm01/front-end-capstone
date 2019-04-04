import React, { Component } from "react"
import { Grid } from "./Grid/Grid"
import { ToolBar } from "./ToolBar"
// import { CanvasToolBar }
import { PictureList } from "./PictureList"
import { OverlayTrigger } from "react-bootstrap"
import { Button } from "semantic-ui-react"
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

export class Canvas extends Component {
  state = {
    pictures: [
      { pictureId: 1, bgColor: "red" },
      { pictureId: 2, bgColor: "blue" }
    ],
    attachedPictures: [],
    prevElement: null
  }

  contextMenu = e => {
    e.preventDefault()
    if (e.target.id === "rows" || e.target.id === "col") {
      this.props.subtractGrid(e.target.id)
    } else {
      this.props.removePlant(e.target.dataset.i, e.target.dataset.j)
    }

  }

  handleDragOver = (e) => {
    e.preventDefault()
    if (e.target.dataset.i !== this.state.targetRow || e.target.dataset.j !== this.state.targetCol) {
      this.setState({
        ...this.state,
        targetRow: e.target.dataset.i,
        targetCol: e.target.dataset.j
      })
    }
  }

  handleDragStart = event => {
    if (event.target.id !== "static") {
      event.target.style.opacity = 0.3
      this.setState({
        ...this.state,
        originRow: event.target.dataset.i,
        originCol: event.target.dataset.j,
        prevElement: event.target
      })

    }
  }

  handleDrop = e => {
    e.preventDefault()
    let stateCopy = this.state.prevElement
    if (this.state.prevElement !== null) {
      this.props.removePlant(this.state.originRow, this.state.originCol)
      stateCopy.style.opacity = 1.0
    }
    this.props.dropPlant(this.state.targetRow, this.state.targetCol)

    this.setState({
      ...this.state,
      originRow: null,
      originCol: null,
      targetRow: null,
      targetCol: null,
      prevElement: null
    })
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
            onContextMenu={this.contextMenu}
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
              onContextMenu={this.contextMenu}
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
                style={{ width: "25px", margin: "0px", padding: "0px" }}
              >
                <div id="col" style={{ display: "flex", justifyContent: "flex-end", marginRight: "3px" }}>
                  <i id="col" class="fas fa-chevron-right" />
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