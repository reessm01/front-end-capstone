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
          pointing
          secondary
          color="pink"
          style={{ fontSize: "20px", fontFamily: "Raleway" }}
        >
          <Menu.Item
            name="home"
            active={activeItem === "login"}
            to="/"
            onClick={this.handleItemClick}
            as={Link}
          />
          {/* <Menu.Item
            name="feed"
            active={activeItem === "feed"}
            to="/feed"
            onClick={this.handleItemClick}
            as={Link}
          /> */}
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            as={Link}
            to="/profile"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="garden planner"
            active={activeItem === "garden planner"}
            as={Link}
            to="/canvas"
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right"
              // name="logout"
              // as={Link}
              // // active={activeItem === "logout"}
              // onClick={this.handleItemClick}
            > 
            <Logout />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    )
  }
}

export default NavBar
