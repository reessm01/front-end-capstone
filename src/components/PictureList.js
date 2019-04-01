import React, { Component } from "react";
import { Picture } from "./Picture/Picture"

export class PictureList extends Component {
    render() {
        return (
            this.props.pictures.map(picture =>(
               <Picture key={picture.id} bgColor={picture.bgColor} />
            ))
            
            
        );
    }
}