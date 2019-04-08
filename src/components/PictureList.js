import React, { Component } from "react";
import { Picture } from "./Picture/Picture"

export class PictureList extends Component {
    render() {
        return (
            this.props.images.map(image =>(
               <Picture key={image.name} color={image.color} name={image.name} image={image.image} handleDragStart={this.props.handleDragStart} />
            ))
        );
    }
}