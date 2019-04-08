import React, { Component } from 'react';
// import Logout from "../Logout.js"
import '../App.css';
// import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

export class NavBar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <React.Fragment>
          <Menu stackable pointing secondary color='pink'
          style={{fontSize:"20px", fontFamily:'Raleway'}}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='feed' active={activeItem === 'feed'} onClick={this.handleItemClick} />
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
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