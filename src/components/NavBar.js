import React, { Component } from "react"
// import Logout from "../Logout.js"
import "../App.css"
//import { connect } from 'react-redux'
<<<<<<< HEAD
import { Menu } from 'semantic-ui-react'
<<<<<<< HEAD
<<<<<<< HEAD
// import  largeSucculent  from '../components/Images/side.jpg'
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom"
>>>>>>> f5295d92d8ef248aecb87f20c9844bbca1858c4f
=======
import { Link } from "react-router-dom"
>>>>>>> 894e0c92ed4a4dbbcbf6fd819518b1c6afcfc3a9
=======
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
>>>>>>> 00e0674fd78042c4245345910d319d0b18c75765

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
<<<<<<< HEAD
            as={Link} />
<<<<<<< HEAD
            <Menu.Item
<<<<<<< HEAD
=======
>>>>>>> 00e0674fd78042c4245345910d319d0b18c75765
            as={Link}
          />
          <Menu.Item
            name="feed"
            active={activeItem === "feed"}
            to="/feed"
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
          <Menu.Menu position="right">
            <Menu.Item
<<<<<<< HEAD
              name="profile"
              as={Link}
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
              to="/profile"
            />
             <Menu.Item
              name="flowers"
              as={Link}
              active={activeItem === "flowers"}
              onClick={this.handleItemClick}
              to="/flowers"
            />
            
=======
>>>>>>> 894e0c92ed4a4dbbcbf6fd819518b1c6afcfc3a9
            <Menu.Item
              name="veggies"
              as={Link}
              active={activeItem === "veggies"}
=======
              name='profile'
              active={activeItem === 'profile'}
              as={Link}
              to="/profile"
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='garden planner'
              active={activeItem === 'garden planner'}
              as={Link}
              to="/canvas"
<<<<<<< HEAD
>>>>>>> f5295d92d8ef248aecb87f20c9844bbca1858c4f
=======
>>>>>>> 894e0c92ed4a4dbbcbf6fd819518b1c6afcfc3a9
=======
              name="logout"
              active={activeItem === "logout"}
>>>>>>> 00e0674fd78042c4245345910d319d0b18c75765
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    )
  }
}

export default NavBar
