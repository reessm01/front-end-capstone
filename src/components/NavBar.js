import React, { Component } from 'react';
// import Logout from "../Logout.js"
import '../App.css';
// import { connect } from 'react-redux'
import { Menu, Image } from 'semantic-ui-react'
import  largeSucculent  from '../components/Images/side.jpg'
import { Link } from "react-router-dom";

export class NavBar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div class="NavBar">
        <Image className="largeSucculent" src={largeSucculent}/>
          <Menu pointing secondary>
            {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
            <Menu.Item
            as={Link}
            name="feed"
            active={activeItem === "feed"}
            onClick={this.handleItemClick}
            to="/feed"
          />
          <Menu.Item
            as={Link}
            name="planning"
            active={activeItem === "planning"}
            onClick={this.handleItemClick}
            to="/"
          />
            <Menu.Item
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
            
            <Menu.Item
              name="veggies"
              as={Link}
              active={activeItem === "veggies"}
              onClick={this.handleItemClick}
              to="/veggies"
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }

export default NavBar