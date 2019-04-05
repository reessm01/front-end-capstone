import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginThenNavToProfile as login } from '../actions/auth';
import {
  Button,
  Form,
  Input,
  Segment, Grid, Image, Header
} from "semantic-ui-react";

import picture from "./Images/Header.png"
export class Login2 extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.props);
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {

    const { handleLogin, handleChange } = this
    const { isLoading } = this.props

    return (
          <React.Fragment>
            <div className="formDiv">
                <Grid
                    textAlign="center"
                    style={{ height: "100%" }}
                    verticalAlign="middle"
                >   
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <div className="ui title">
                        <Header as="h1" textAlign="center">
                            Flower Power
                        </Header>
    </div>
                        <Image src={picture} size="medium" centered />
                        <Header as="h2" color="grey" textAlign="center">
                            Login
                        </Header>
                    </Grid.Column>
                </Grid>
           
          <Form onSubmit={handleLogin} size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autoFocus
                onChange={handleChange}
              />
              <Form.Field
                label="Password:"
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
                  disabled={ isLoading }
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
//export default Login2