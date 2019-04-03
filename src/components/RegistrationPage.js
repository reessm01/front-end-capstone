import React, { Component } from 'react';
//import '../App.css';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import { registerNavToProfile as register } from '../../actions/auth';
// import { Button, Form } from 'react-bootstrap/Button';
import {
    Button,
    Form,
    Input
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
        return (
            <div className="RegistrationPage">
                <Form
                    onSubmit={this.handleUserRegistration}>
                    <Form.Group controlId="registerDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Create Your Display Name"
                            autoFocus
                            onChange={this.handleChange}
                            //control={Input}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="registerUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Create Your UserName"
                            autoFocus
                            onChange={this.handleChange}
                            //control={Input}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="registerPassword">
                        <Form.Label>Password</Form.Label>
                         {/* <Form.Control
                        <Input
                        className="registerPassword"
                        type="text"
                        placeholder="Create Your Password"
                        autoFocus
                             onChange={this.handleChange}
                        //control={Input}
                        required 
                    /> */}
                     </Form.Group>
                    <Button variant="primary" type="submit">/>
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