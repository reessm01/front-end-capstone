import React, { Component } from "react"
import PictureList from "../PictureList"
import { Tab } from "semantic-ui-react"
import { connect } from "react-redux"

class PlantDisplayBar extends Component {
  render() {
    const panes = [
      {
        menuItem: "Flowers",
        render: () => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "auto",
              height: "210px",
              overflow: "scroll"
            }}
          >
            <PictureList
              images={
                this.props.selectedState === "all"
                  ? this.props.flowers
                  : this.props.filteredFlowers
              }
              handleDragStart={this.handleDragStart}
            />
          </div>
        )
      },
      {
        menuItem: "Veggies",
        render: () => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "auto",
              height: "210px",
              overflow: "scroll"
            }}
          >
            <PictureList
              images={this.props.veggies}
              handleDragStart={this.handleDragStart}
            />
          </div>
        )
      }
    ]
    return (
      <Tab
        menu={{ borderless: true, attached: false, tabular: false }}
        style={{ width: this.props.width + 25 + "px" }}
        panes={panes}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    flowers: state.flowers.flower,
    filteredFlowers: state.flowers.filteredFlowers
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantDisplayBar)