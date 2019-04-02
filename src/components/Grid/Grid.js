import React, { Component } from "react";
import {cellStyle} from "./styles"
//import { connect } from "react-redux";
export class Grid extends Component {
    render() {
        const cellStyles = {
            ...cellStyle, 
            backgroundImage: this.props.image !== null ? "url("+this.props.image+")":null
        }

        return (
           <div data-i={this.props.i} data-j={this.props.j} draggable={this.props.image!==null ? "true" : "false"} style={cellStyles} onDragStartCapture={this.props.handleDragStart}></div>
        ) ;  
    }
}


