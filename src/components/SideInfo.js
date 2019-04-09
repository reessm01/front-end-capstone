import React, { Component } from "react";
import { VeggieCards } from "./VeggieCards";
import { NavBar } from "./NavBar"
import { Card, Icon, Image } from 'semantic-ui-react'


import { connect } from "react-redux";
import { getVeggieData } from "../actions/getVeggieData";

export class SideInfo extends Component {

  render() {
    const flower = this.props.currentFlower
    return (
      <React.Fragment>
        {flower &&
          <Card className='sideInfo'>
            <Image src={flower.image} />
            <Card.Content>
              <Card.Header>{flower.name}</Card.Header>

              <Card.Description>
                <p>Blooms: {flower.blooms} ({flower.blooms})</p>
                <p>Size: {flower.size}</p>
                <p>Needs: {flower.sun}</p>
                <p>Color(s): {flower.color}</p>
              </Card.Description>
            </Card.Content>
          </Card>}
      </React.Fragment>
    )
  }
}
function mapStatetoProps(state) {
  return { currentFlower: state.flowers.currentFlower }
}
export default connect(mapStatetoProps)(SideInfo)