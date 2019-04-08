import React, { Component } from "react";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginThenNavToProfile as login } from '../actions/auth';
import {
  Button,
  Form,
  Input,
  Segment, Grid, Image, Header
} from "semantic-ui-react";
import  '../App.css'
import picture from "./Images/Header.png"
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

    const { handleLogin, handleChange } = this
    const { isLoading, err } = this.props

    return (
      <React.Fragment> 
        
        <Grid>
          <Grid.Column >
          <div>
              <Header 
              style={{fontSize: "100px", fontFamily: "Just Another Hand", color: "#78A9BB" }}
               as="h1" textAlign="center">
                Flower Power
              </Header>
            <Image src={picture} size="medium" centered />
            <Header as="h2" color="grey" textAlign="center">
              Login
            </Header>
            </div>
            <div style={{padding: '5%'}}></div>
          </Grid.Column> 
        </Grid>
        <div className="pageDiv">
          <Form className="formDiv" onSubmit={handleLogin} size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                name="username"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autoFocus
                onChange={handleChange}
              />
              <Form.Field
                label="Password:"
                name="password"
                required
                placeholder="Password"
                type="password"
                control={Input}
                onChange={handleChange}
              />
              <Button.Group>
                <Button
                  type="submit"
                  positive
                  size="large"
                  to="/profile"
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
      </React.Fragment>
    )
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