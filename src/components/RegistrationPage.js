import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom';
import { registerThenNavToProfile as register } from '../actions/auth';
import {
    Form,
    Button,
    Input
} from "semantic-ui-react";

class RegistrationPage extends Component {

    state = {
        username: "",
        password: "",
        displayName: ""
    }

    handleRegister = e => {
        e.preventDefault();
        this.props.register(this.state);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { handleRegister, handleChange } = this
        //const { isLoading, err } = this.props

        return (
            <React.Fragment>
                <div className="RegistrationPage">
                    <Form onSubmit={handleRegister} >
                        <Form.Field
                            label="Username:"
                            required
                            placeholder="Username"
                            type="text"
                            control={Input}
                            autoFocus
                            onChange={handleChange}
                            name="username"
                        />
                        <Form.Field
                            label="Password:"
                            required
                            placeholder="Password"
                            type="password"
                            control={Input}
                            onChange={handleChange}
                            name="password"
                        />
                        <Form.Field
                            label="Display Name:"
                            required
                            placeholder="Choose a Display Name"
                            type="text"
                            control={Input}
                            onChange={handleChange}
                            name="displayName"
                        />
                        <Button variant="primary" type="submit">
                            Start Gardening!
                     </Button>
                    </Form>
                </div>
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

//export default RegistrationPage