import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Header, Image } from "semantic-ui-react";
import  largeSucculent  from '../components/Images/side.jpg'


export class PageHeader extends Component {

    render() {

        return (
            <React.Fragment>
                        <Header as="h1" color="teal" textAlign="left">
                        <Image className="largeSucculent" src={largeSucculent}/> 
                        Flower Power
                        </Header>
                        {/* <Image src={picture} size="medium" centered />
                        <Header as="h2" color="grey" textAlign="center">
                            Login
                        </Header> */}
                    {/* </Grid.Column> */}
                {/* </Grid> */}
            </React.Fragment>
        )
    }
}

export default PageHeader