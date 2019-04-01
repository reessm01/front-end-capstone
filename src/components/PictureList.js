import React, { Component } from "react";
import { Picture } from "./Picture/Picture"

export class PictureList extends Component {
    render() {
        return (
            this.props.pictures.map(picture =>(
            
               <Picture key={picture.id} pictureId={picture.id} bgColor={picture.bgColor} handleDragStart={this.props.handleDragStart(picture.pictureId)} />
            ))
            
            
        );
    }
}