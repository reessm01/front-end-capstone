import React, { Component } from "react";
//import { connect } from "react-redux";
export class Picture extends Component {
    render() {
        return (
            <div draggable style={{ border: "1px solid grey", width: "40px", height: "40px", backgroundColor:this.props.bgColor}}></div>
        );
    }
}


