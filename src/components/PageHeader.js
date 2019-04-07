import React, { Component } from "react";
import { connect } from "react-redux";

import {  Header, Image } from "semantic-ui-react";
import  largeSucculent  from '../components/Images/side.jpg'


export class PageHeader extends Component {

    render() {

        return (
            <React.Fragment>
                    
                        <Header style={{fontSize: "100px", fontFamily: "Just Another Hand", color: "#78A9BB" }} textAlign="left">
                        <Image 
                        src={largeSucculent}
                        style = {{height: '10%', width: '10%'}}/> 
                        Flower Power
                        </Header>
            </React.Fragment>
        )
    }
}

export default PageHeader