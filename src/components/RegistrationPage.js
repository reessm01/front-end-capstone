import React, { Component } from 'react';
import '../App.css';
// import { connect } from 'react-redux'
//import { Link } from 'react-router-dom';
// import { registerNavToProfile as register } from '../../actions/auth';
import {
    Button,
    Form
} from "semantic-ui-react";
export class RegistrationPage extends Component {

    state = {
        username: "",
        password: "",
        displayName: ""
    }

    handleUserRegistration = e => {
        e.preventDefault();
        this.props.userRegistration(this.state)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        //const { isLoading } = this.props

        return (
            <div className="RegistrationPage">
                <Form className="RegistrationForm" onSubmit={this.handleUserRegistration}>
                <Form.Field
                        label="Username:"
                        required
                        placeholder="Username"
                        type="text"
                        //control={Input}
                        autoFocus
                        onChange={this.handleChange}
                        name="username"
                    />
                    <Form.Field
                        label="Password:"
                        required
                        placeholder="Password"
                        type="password"
                        //control={Input}
                        onChange={this.handleChange}
                        name="password"
                    />
                    <Form.Field
                        label="Display Name:"
                        required
                        placeholder="Choose a Display Name"
                        type="text"
                        //control={Input}
                        onChange={this.handleChange}
                        name="displayName"
                    />
                    <Button variant="primary" type="submit">
                        Start Gardening!
                     </Button>
                </Form>;
       </div>
        )
    }
}

// export default connect(
//     ({ auth }) => ({
//         isLoading: auth.registerLoading,
//         err: auth.registerError
//         }),
//         { register }
//     )(userRegistration);

export default RegistrationPage