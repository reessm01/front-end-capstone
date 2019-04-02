import React, { Component } from "react";
import {cellStyle} from "./styles"
//import { connect } from "react-redux";
export class Grid extends Component {
    render() {
        const cellStyles = {...cellStyle, backgroundImage: this.props.image !== null && "url("+this.props.image+")", background: this.props.image === null && "lightGrey"}
        return (
           <div style={cellStyles}></div>
        ) ;  
    }
}


