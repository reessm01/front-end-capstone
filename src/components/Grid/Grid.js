import React, { Component } from "react"
import { cellStyle } from "./styles"
import { OverlayTrigger } from "react-bootstrap"
import { gridToolTip } from "./gridToolTip"
//import { connect } from "react-redux";
export class Grid extends Component {
  render() {

    return (
      <OverlayTrigger
        placement="right-start"
        delay={{ show: 500, hide: 250 }}
        overlay={gridToolTip}
      >
        <div>
            {this.props.image ? 
            <img
            src={
              this.props.image !== null ? this.props.image : null
            }
            data-i={this.props.i}
            data-j={this.props.j}
            draggable={this.props.image !== null ? "true" : "false"}
            style={cellStyle}
            onDragStartCapture={this.props.handleDragStart}
            onContextMenu={this.props.contextMenu}
          />
        :
        <div 
            data-i={this.props.i}
            data-j={this.props.j}
            style={cellStyle}
            onContextMenu={this.props.contextMenu}
        />
        }
          
        </div>
      </OverlayTrigger>
    )
  }
}
