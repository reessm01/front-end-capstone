import React, { Component } from "react";
//import { connect } from "react-redux";
export class Picture extends Component {
    // handleDragStart = (pictureId)=>(event)=>{
    //    console.log("pictureId:"+ pictureId)
    //    event.dataTransfer.setData("pictureId",pictureId)
    // }
    render() {
        return (
            <div pictureId={this.props.pictureId} draggable style={{ border: "1px solid grey", width: "40px", height: "40px", backgroundColor:this.props.bgColor,zIndex:1000}} onDragStart={this.props.handleDragStart}>
            </div>
        );
    }
}


