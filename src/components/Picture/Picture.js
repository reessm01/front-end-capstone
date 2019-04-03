import React, { Component } from "react";
import { pictureStyles } from "./style"
//import { connect } from "react-redux";
export class Picture extends Component {
    // handleDragStart = (pictureId)=>(event)=>{
    //    console.log("pictureId:"+ pictureId)
    //    event.dataTransfer.setData("pictureId",pictureId)
    // }
    render() {
        let pictureStyle = {...pictureStyles, backgroundColor: this.props.bgColor }
        return (
            <div id="static" pictureId={this.props.pictureId} draggable="true" style={pictureStyle} onDragStart={this.props.handleDragStart}></div>
        );
    }
}


