import React, { Component } from 'react';
// import Logout from "../Logout.js"
import '../App.css';
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export class NavBar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <React.Fragment>
          <Menu stackable pointing secondary color='pink'
          style={{fontSize:"20px", fontFamily:'Raleway'}}>
            <Menu.Item 
            name='home' 
            //active={activeItem === 'home'} 
            active={this.props.path==='/login'} 
            to ='/login'
            onClick={this.handleItemClick}
            as={Link} 
            />
            <Menu.Item 
            name='feed' 
            // active={activeItem === 'feed'} 
            active={this.props.path==='/feed'} 
            to ='/feed'
            onClick={this.handleItemClick}
            as={Link} />
            <Menu.Item
              name='profile'
              //active={activeItem === 'profile'}
              as={Link}
              active={this.props.path==="/profile"}
              to="/profile"
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='garden planner'
              //active={activeItem === 'profile'}
              as={Link}
              active={this.props.path==="/Canvas"}
              to="/Canvas"
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
      </React.Fragment>
      )
    }
  }

export default NavBar