import React, { Component } from "react";
//import { connect } from "react-redux";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { NavBar } from "./NavBar"
export class ToolBar extends Component {
  render() {
    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
      <NavBar /> 
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button onClick={this.props.handleAddGrid}>
            <i className="fas fa-plus-circle" />
          </Button>
          <Button onClick={this.props.handleSubtractGrid}>
            <i className="fas fa-minus-circle" />
          </Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup className="mr-2" aria-label="Second group">
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Third group">
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
