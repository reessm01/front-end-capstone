import React, { Component } from "react";
//import { connect } from "react-redux";
export class Picture extends Component {
    
    render() {
        return (
            <div pictureId={this.props.pictureId} draggable style={{ border: "1px solid grey", width: "40px", height: "40px", backgroundColor:this.props.bgColor,zIndex:1000}} onDragStart={this.props.handleDragStart} onDragOver={this.props.handleDragOver} onDrop={this.handleDropPic}>
            </div>
        );
    }
}


