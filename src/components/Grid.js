import React, { Component } from "react";
//import { connect } from "react-redux";
export class Grid extends Component {
    render() {
        return (
           <div id={this.props.id}style={{backgroundColor:"white",border:"1px solid grey",width:"10px", display:"inline-block",height:"10px"}}></div>
        ) ;  
    }
}


