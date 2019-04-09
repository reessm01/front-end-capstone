import React, { Component } from "react"
import { Grid } from "./Grid/Grid"
import PictureList from "./PictureList"
import { OverlayTrigger } from "react-bootstrap"
import { Button } from "semantic-ui-react"
import { toolTip } from "./ToolTip"
import { getFlowerData } from "../actions/getFlowerData"
import { connect } from "react-redux"
import { NavBar } from "./NavBar"
import { PageHeader } from "./PageHeader"
import MainMenu from "./MainMenu/MainMenu"
import SideInfo from "./SideInfo"
import {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant,
  filterFlowers,
  patchLayout,
  saveLayout
} from "../actions"

class Canvas extends Component {
  state = {
    prevElement: null,
    name: "",
    selectedState: "all"
  }

  componentWillMount() {
    this.props.getFlowerData()
  }
  componentDidMount() {
    this.setState((state, props) => ({
      filterflowers: props.flowers
    }))
  }

  contextMenu = e => {
    e.preventDefault()
    if (e.target.id === "rows" || e.target.id === "col") {
      this.props.subtractGrid(e.target.id)
    } else {
      this.props.removePlant(e.target.dataset.i, e.target.dataset.j)
    }
  }

  handleFilter = e => {
    let value = e.target.textContent
    if (value !== "All States") {
      this.props.filterFlowers(this.filterState(value, [...this.props.flowers]))
      this.setState({ ...this.state, selectedState: null })
    } else this.setState({...this.state, selectedState: "all"})
  }

  filterState(stateValue, flowers) {
    if (stateValue === "") return flowers
    else {
      let filteredFlowers = flowers.filter(flower => {
        return flower.states
          .split(",")
          .map(word => word.trim())
          .includes(stateValue)
      })
      return filteredFlowers
    }
  }

  handleDragOver = e => {
    e.preventDefault()
    if (
      e.target.dataset.i !== this.state.targetRow ||
      e.target.dataset.j !== this.state.targetCol
    ) {
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
    let name = event.target.dataset.name
    if (name) {
      event.dataTransfer.setData("name", name)
    }
  }

  handleDrop = e => {
    e.preventDefault()

    let name = e.dataTransfer.getData("name")
    if (name) {
      let curflower = this.props.flowers.find(flower => flower.name === name)
      this.props.dropPlant(
        this.state.targetRow,
        this.state.targetCol,
        curflower.image
      )
    } else {
      this.props.dropPlant(
        this.state.targetRow,
        this.state.targetCol,
        this.props.grid[this.state.originRow][this.state.originCol].pictureLink
      )
      let stateCopy = this.state.prevElement
      if (this.state.prevElement !== null) {
        this.props.removePlant(this.state.originRow, this.state.originCol)
        stateCopy.style.opacity = 1.0
      }
    }

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
    const store = []

    for (let i = 0; i < grid.length; i++) {
      let row = []
      for (let j = 0; j < grid[0].length; j++) {
        row.push(
          <Grid
            key={i + "," + j}
            i={i}
            j={j}
            image={grid[i][j].pictureLink}
            handleDragStart={this.handleDragStart}
            onContextMenu={this.contextMenu}
          />
        )
      }
      store.push(row)
    }

    return (
      <div>
        <PageHeader />
        <NavBar />
        <MainMenu
          width={this.props.width}
          chooseState={this.handleFilter}
          grid={this.props.grid}
        />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "510px",
            height: "110px",
            overflow: "scroll"
          }}
        >
          <PictureList
            images={
              this.state.selectedState === "all"
                ? this.props.flowers
                : this.props.filteredFlowers
            }
            handleDragStart={this.handleDragStart}
          />
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
                <div
                  id="col"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "3px"
                  }}
                >
                  <i id="col" className="fas fa-chevron-right" />
                </div>
              </Button>
            </OverlayTrigger>
          </div>
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
            style={{
              height: "25px",
              margin: "0px",
              width: this.props.width + "px"
            }}
          >
            <div
              id="rows"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "initial"
              }}
            >
              <i id="rows" className="fas fa-chevron-down" />
            </div>
            <SideInfo/>
          </Button>
        </OverlayTrigger>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid.grid,
    width: state.grid.canvasWidth,
    id: state.grid.id,
    flowers: state.flowers.flower,
    filteredFlowers: state.flowers.filteredFlowers,
    error: state.error,
    saveMessage: state.grid.saveMessage,
    errorMessage: state.grid.errorMessage,
    userLayouts: state.grid.userLayouts,
    userHasLayouts: state.grid.userHasLayouts,
  }
}

const mapDispatchToProps = {
  initGrid,
  expandGrid,
  subtractGrid,
  dropPlant,
  removePlant,
  getFlowerData,
  saveLayout,
  filterFlowers,
  patchLayout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
