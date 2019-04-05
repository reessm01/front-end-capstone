import React, { Component } from "react";
//import { pictureStyles } from "./style"
//import { connect } from "react-redux";
export class Picture extends Component {
  // handleDragStart = (pictureId)=>(event)=>{
  //    console.log("pictureId:"+ pictureId)
  //    event.dataTransfer.setData("pictureId",pictureId)
  // }
  render() {
    const pictureStyle = {
      width: "100px",
      height: "100px",
      backgroundImage: "url(" + this.props.image + ")",
      backgroundSize: "cover",
      backgrounPosition:"center",
      zIndex: "1000",
      overflow: "scroll"
    };
    return (
      <div  data-name={this.props.name}
        draggable="true"
        style={pictureStyle}
        onDragStart={this.props.handleDragStart}
      >
        {/* <img src={this.props.image} alt="" style={{width:"200px",height:"200px"}} /> */}
      </div>
    );
  }
}
