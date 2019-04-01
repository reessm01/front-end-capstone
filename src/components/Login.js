import React, { Component } from 'react';
// import logo from './logo';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap/Button';
import {loginNavToProfile as login } from '../../actions/auth';
class userLogin extends Component {

    state = {
        userName: "",
        password: ""
    }

    handleUserLogin = e => {
        e.preventDefault();
        this.props.userLogin(this.state)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { isloading, err} = this.props;
        return (
            <div className="App">
                <Form>
                    <Form.Group controlId="userLoginUserName">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            type="userName"
                            placeholder="UserName"
                            autoFocus
                            onSubmit={this.handleUserLogin}
                            onChange={this.handleChange}
                            // control={Input}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="userLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="password"
                            type="password"
                            placeholder="Password"
                            autoFocus
                            onSubmit={this.handleUserLogin}
                            onChange={this.handleChange}
                            //   control={Input}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">/>
                        Submit
                    </Button>
                </Form>;
      </div>
        );
    }
}

export default connect(
    ({ auth }) => ({
        isLoading: auth.loginLoading,
        err: auth.loginError
    }),
    { login })(userLogin);