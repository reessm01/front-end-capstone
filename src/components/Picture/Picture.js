import React, { Component } from "react";
import { pictureStyles } from "./style"
//import { connect } from "react-redux";
export class Picture extends Component {
    render() {
        let pictureStyle = {...pictureStyles, backgroundColor: this.props.bgColor }
        return (
            <div draggable style={pictureStyle}></div>
        );
    }
}


