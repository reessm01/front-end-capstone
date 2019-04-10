import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Logout } from './Logout'

export class NavBar extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>
        <Menu
          stackable
          secondary
          pointing 
          color="pink"
          style={{ fontSize: "20px", fontFamily: "Raleway"}}
        >
          <Menu.Item
            name="home"
            style={{color:'gray'}}
            active={activeItem === "login"}
            as={Link}
            to="/"
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            as={Link}
            to="/profile"
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item
            name="flowers"
            style={{color:'gray'}}
            active={activeItem === "flowers"}
            onClick={this.handleItemClick}
            as={Link}
            to="/flowers"
          />
          <Menu.Item
            name="veggies"
            style={{color:'gray'}}
            active={activeItem === "veggies"}
            onClick={this.handleItemClick}
            as={Link}
            to="/veggies"
          />
          <Menu.Item
            name="garden planner"
            style={{color:'gray'}}
            active={activeItem === "garden planner"}
            onClick={this.handleItemClick}
            as={Link}
            to="/canvas"
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              style={{color:'gray'}}
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
              as={Logout}
            />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    )
  }
}

export default NavBar
