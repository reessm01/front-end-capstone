import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { registerThenNavToLogin as register } from '../actions/auth';
import {
    Form,
    Button,
    Input,
    Grid,
    Segment, Image, Header
} from "semantic-ui-react";
import largeSucculent from "../components/Images/side.jpg"
import loginPicture from "./Images/Header.png"
export class RegistrationPage extends Component {

    state = {
        username: "",
        password: "",
        displayName: "",
        region: ""
    }

    handleRegister = e => {
        e.preventDefault();
        // this.props.register(this.state);
        this.props.register({ ...this.state });
    };

    handleChange = e => {
        // this.setState({ [e.target.name]: e.target.value });
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
                                style={{ fontSize: "70px", fontFamily: "Just Another Hand", color: "#78A9BB",}}
                                as="h1"
                                align="center">
                                <Image src={largeSucculent} style={{ height: "13%", width: "13%" }} />
                                Flower Power
              </Header>
                            <Header as="h2" color="grey" textAlign="center" fontFamily="Raleway">
                                Plan Your Garden With Us!
            </Header>
                            <div
                                style={{ color: "grey", textAlign: "center", fontFamiy: "Raleway" }}>
                                Register as a New User
              </div>
                        </div>
                    </Grid.Column>
                </Grid>
                

                <div className="pageDiv">
                    <Form className="formDiv" onSubmit={this.handleRegister} >
                        <Form.Field
                            label="Username:"
                            required
                            placeholder="Username"
                            type="text"
                            control={Input}
                            autoFocus
                            onChange={this.handleChange}
                            name="username"
                        />
                        <Form.Field
                            label="Password:"
                            required
                            placeholder="Password"
                            type="password"
                            control={Input}
                            onChange={this.handleChange}
                            name="password"
                        />
                        <Form.Field
                            label="Display Name:"
                            required
                            placeholder="Choose a Display Name"
                            type="text"
                            control={Input}
                            onChange={this.handleChange}
                            name="displayName"
                        />
            <Button.Group>
                <Button
                  type="submit"
                  positive
                  size="large"
                  to="/profile"
                  disabled={isLoading}
                  onClick={this.handleRegister}
                > 
                  Start Gardening!
                </Button>
                <Button.Or />
                <Link to="/">
                  <Button size="large" color="teal">
                    Change Your Mind? Go Back Here!
                  </Button>
                </Link>
              </Button.Group>
                    </Form>
                </div>
                <Image src={loginPicture} size="small" centered />
            </React.Fragment>
        )
    }
}

export default connect(
    ({ auth }) => ({
        isLoading: auth.registerLoading,
        err: auth.registerError
    }),
    { register }
)(RegistrationPage);