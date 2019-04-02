import React, { Component } from "react";
import {cellStyle} from "./styles"
//import { connect } from "react-redux";
export class Grid extends Component {
    render() {
        const cellStyles = {...cellStyle, backgroundImage: this.props.image !== null ? "url("+this.props.image+")":null}
        console.log(this.props.image !== null)
        return (
           <div data-i={this.props.i} data-j={this.props.j}  style={cellStyles}></div>
        ) ;  
    }
}


