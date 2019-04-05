import React, { Component } from 'react';
//import { Link } from "react-router-dom"
import '../App.css';
import { NavBar } from "./NavBar"
import { connect } from 'react-redux'
import { updateThenNavToProfile as update } from '../actions/users.js'
import { PageHeader } from './PageHeader'
// import UserImage from "./UserImage.js"
// import DeleteUserAccount from "./DeleteUserAccount.js"
import { AmazonAds } from './Amazon'

import {
    Card,
    Button,
    Form,
    Input
} from "semantic-ui-react";
export class ProfilePage extends Component {

    state = {
        username: "",
        password: "",
        displayName: "",
        about: this.props.about
    }

    handleUserUpdate = e => {
        e.preventDefault();
        this.props.update({ state: this.state, userInfo: this.props.userInfo })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        return (
        <React.Fragment>
            <div className="profilePageBody">
            <PageHeader />
            <NavBar /> 
            <AmazonAds />
            <div className="profilePageDiv formDiv">
                {/* <Link to="/feed"></Link> */}
                <Form onSubmit={this.handleUserUpdate} align= "center">
                    <Card> 
                    {/* <UserImage /> */}
                        <Card.Header>Display Name: {this.props.displayName}</Card.Header>
                        <Card.Content>User Name: {this.props.username}</Card.Content>
                        <Card.Description>All About You: {this.props.about}</Card.Description>
                    </Card>
                    <label>Make Changes to Your Account</label>
                    <Form.Field
                            placeholder="Change Your Display Name"
                            type="text"
                            defaultValue={this.props.displayName}
                            name="displayName"
                            onChange={this.handleUserChange}
                            control={Input}
                        />
                    
                    <Form.Field>
                        <Input
                            placeholder="Change Password"
                            type="password"
                            defaultValue={this.props.passwordValue}
                            name="password"
                            onChange={this.handleChange}
                            // control={Input}
                        />
                    </Form.Field>
                    <Form.TextArea
                        placeholder='Change Your "About Me" Section And Tell the World Who You Are...'
                        type="text"
                        defaultValue={this.props.about}
                        name="about"
                        onChange={this.handleChange}
                        // control={Input}
                    />
                    <Button
                        type="submit"
                        size="large"
                         color="green"
                        onSubmit={this.handleUpdate}>
                       Submit Changes
                    </Button>
                </Form>
                {/* <DeleteAccount /> */}
            </div>
            </div>
            </React.Fragment>
        )
    }
}
/////Code to connect after wired up////
 export default connect(
     ({ auth, users }) => ({
         userInfo: auth.login,
         username: users.currentUsername,
         displayName: users.currentDisplayName,
         about: users.currentAbout,
         passwordValue: users.currentPassword
     }), { update }
 )(ProfilePage)

//export default ProfilePage;