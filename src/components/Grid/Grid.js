import React, { Component } from "react";
import { cellStyle } from "./styles"
import { OverlayTrigger } from "react-bootstrap"
import { gridToolTip } from "./gridToolTip"
//import { connect } from "react-redux";
export class Grid extends Component {
    render() {
        const cellStyles = {
            ...cellStyle,
            backgroundImage: this.props.image !== null ? "url(" + this.props.image + ")" : null
        }

        return (
            <OverlayTrigger
                placement="right-start"
                delay={{ show: 500, hide: 250 }}
                overlay={gridToolTip}
            >
                <div
                    data-i={this.props.i}
                    data-j={this.props.j}
                    draggable={this.props.image !== null ? "true" : "false"}
                    style={cellStyles}
                    onDragStartCapture={this.props.handleDragStart}
                    onContextMenu={this.props.contextMenu}
                />
            </OverlayTrigger>
        );
    }
}


