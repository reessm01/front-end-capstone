import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginThenNavToProfile as login } from '../actions/auth';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from "semantic-ui-react";
import picture from "./Images/Header.png"
export class Login2 extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleLogin = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <div />
          <Header as="h1" color="teal" textAlign="center">
            Flower Power
          </Header>
          <Image src={picture} size="medium" centered />
          <Header as="h2" color="grey" textAlign="center">
            Login
          </Header>
          <Form onSubmit={this.handleLogin} size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autoFocus
                onChange={this.handleUsernameChange}
              />
              <Form.Field
                label="Password:"
                required
                placeholder="Password"
                type="password"
                control={Input}
                onChange={this.handlePasswordChange}
              />
              <Button.Group>
                <Button 
                  type="submit"
                  positive
                  size="large"
                  to="/profile"
                  
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
        </Grid.Column>
      </Grid>
    );
  }
}

 const mapStateToProps = state => {
   return {
     result: state.loginResult
   };
 };
 const mapDispatchToProps = dispatch => {
   return {
     login: loginData => dispatch(login(loginData))
   };
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Login2);
//export default Login2