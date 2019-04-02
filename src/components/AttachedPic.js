import React, { Component } from "react";
//import { connect } from "react-redux";
export class AttachedPic extends Component {
    
    render() {
        return (
            <div  draggable style={{ border: "1px solid grey", width: "40px", height: "40px", backgroundColor: this.props.bgColor, zIndex: 1000,position:"absolute",top:this.props.top+"px", left:this.props.left+"px"}} onDragStart={this.props.handleDragStart}>
            </div>
        );
    }
}
