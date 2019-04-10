import React, { Component } from "react";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginThenNavToPlanner as login } from '../actions/auth';
import {
  Button,
  Form,
  Input,
  Segment, Grid, Image, Header
} from "semantic-ui-react";
import loginPicture from "./Images/Header.png"
import largeSucculent from "../components/Images/side.jpg"
 class Login2 extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault()
    this.props.login({ ...this.state });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  };

  render() {

    const { isLoading, err } = this.props

    return (
      <React.Fragment> 
        
        <Grid>
          <Grid.Column >
          <div>
              <Header 
              style={{fontSize: "70px", fontFamily: "Just Another Hand", color: "#78A9BB" }}
               as="h1"
               align="center">
               <Image src={largeSucculent} style={{ height: "13%", width: "13%" }} />
                Flower Power
              </Header>
            <Header as="h2" color="grey" textAlign="center" fontFamily="Raleway">
              Plan Your Garden With Us!
            </Header>
            <div 
            style={{color:"grey", textAlign:"center", fontFamiy:"Raleway"}}>
              Register as a New User Or Login To Your Active Account.
              </div>
            </div>
          </Grid.Column> 
        </Grid>
        <div className="pageDiv">
          <Form className="formDiv" onSubmit={this.handleLogin} size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                name="username"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autoFocus
                onChange={this.handleChange}
              />
              <Form.Field
                label="Password:"
                name="password"
                required
                placeholder="Password"
                type="password"
                control={Input}
                onChange={this.handleChange}
              />
              <Button.Group>
                <Button
                  type="submit"
                  positive
                  size="large"
                  to="/canvas"
                  disabled={isLoading}
                >
                  Login to Your Account!
                </Button>
                <Button.Or />
                <Link to="/register">
                  <Button size="large" color="teal">
                    Don't Have an Account? Register Here!
                  </Button>
                </Link>
              </Button.Group>
              <div>{this.props.result}</div>
            </Segment>
          </Form>
          
           {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
        <Image src={loginPicture} size="small" centered />
        
      </React.Fragment>
    )
  }
}

export default connect(
  ({auth}) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }), {login}
)(Login2)