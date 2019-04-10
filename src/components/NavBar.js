import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Logout } from './Logout'
import { connect } from "react-redux"
import { logoutThenGoToLogin as logout } from "../actions/auth.js";
export class NavBar extends Component {
  state = { activeItem: "flowers" }

  handleItemClick = (e, { name }) => {
    
    this.setState({ activeItem: name })
    if(name==="logout"){
      this.props.logout(this.props.token)
    }
}

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>
        {this.props.login !== null ? (
          
        <Menu
          stackable
          pointing
          secondary
          color="pink"
          style={{ fontSize: "20px", fontFamily: "Raleway" }}
        >
          <Menu.Item
            name="flowers"
            active={activeItem === "flowers"}
            to="/flowers"
            onClick={this.handleItemClick}
            as={Link}
          />
          <Menu.Item
            name="veggies"
            active={activeItem === "veggies"}
            to="/veggies"
            onClick={this.handleItemClick}
            as={Link}
          />
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
          <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              
              onClick={this.handleItemClick}
          />

        </Menu>
        ):(null)
        }
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.login.token
  }
}
export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
