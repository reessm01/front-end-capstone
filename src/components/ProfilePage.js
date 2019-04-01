import React, { Component } from 'react';
import './App.css';
//import { Link } from "react-router-dom"
// import { connect } from 'react-redux'
//import UserImage from "./UserImage.js"
//import DeleteUserAccount from "./DeleteUserAccount.js"
//Need to add transition to update and return to a page in ../actions
import { Button, Form, Row, Col } from 'react-bootstrap/Button';
class userProfilePage extends Component {

    state = {
        username: "",
        password: "",
        displayName: "",
        about: this.props.about
    }

    handleUserUpdate = e => {
        e.preventDefault();
        this.props.update({state: this.state, userInfo: this.props.userInfo })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        return (
            <div className="profilePageDiv">
                {/* <header className="App-header"></header> */}
                {/* <Link to="/feed"></Link>
                <UserImage /> */}
                <Form onSubmit={this.handleUserUpdate}>
                    <Form.Group controlId="userInfoDisplay">
                        <Form.Label>Display Name: {this.props.displayName}</Form.Label>
                        <Form.Label>User Name: {this.props.username}</Form.Label>
                        <Form.Label>All About You: {this.props.about}</Form.Label>
                    </Form.Group>
                        <Row>  
                            <Col>
                                <Form.Control 
                                    xs={12} md={8}
                                    placeholder="Change Your Display Name"
                                    type="text"
                                    name="displayName"
                                    autoFocus
                                    onChange={this.handleUserChange}
                                    // onKeyDown={this.addTodo}
                                    // control={Input}
                                />
                            </Col>
                            <Col>
                                <Form.Control 
                                    xs={12} md={8}
                                    placeholder="Enter a New Password"
                                    type="password"
                                    name="password"
                                    autoFocus
                                    onChange={this.handleChange}
                                    // control={Input}
                                />
                            </Col>
                        </Row>
                        <Row>
                        <Form.Control 
                                    xs={12} md={8}
                                    placeholder="Tell the World Who You Are!"
                                    type="text"
                                    name="about"
                                    autoFocus
                                    onChange={this.handleChange}
                                    // control={Input}
                                />
                        </Row>
                        />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>;
      </div>
        );
    }
}

/////Code to connect after wired up////
// export default connect(
//     ({ auth, users}) => ({
//         userInfo: auth.login,
//         username: users.currentUsername,
//         displayName: users.currentDisplayName,
//         about: users.currentAbout,
//         passwordValue: users.currentPassword
//     })
// )

export default userProfilePage;