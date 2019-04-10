// import React, { Component } from 'react';
// import { Link } from "react-router-dom"
// import { NavBar } from "./NavBar"
// import { connect } from 'react-redux'
// import { updateThenNavToProfile as update } from '../actions/users.js'
// import { PageHeader } from './PageHeader'
// import { DeleteAccount } from "./DeleteAccount"
// // import { AmazonAds } from './Amazon'
// import  UserImage  from './UserImage'

// import {
//     Card,
//     Button,
//     Form,
//     Input, Header
// } from "semantic-ui-react";
// export class ProfilePage extends Component {

//     state = {
//         username: "",
//         password: "",
//         displayName: "",
//         region: "",
//         about: this.props.about
//     }

//     handleUserUpdate = e => {
//         e.preventDefault();
//         this.props.update({ state: this.state, userInfo: this.props.userInfo })
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     render() {

//         return (
//             <React.Fragment>
//                     <PageHeader />
//                     <NavBar />
//                    <Link to="/canvas"></Link> 
//                     <div className = "pageDiv">
//                         {/* <div className="userCard"> 
//                              <Card style={{ width:"100%"}} >
//                             <UserImage /> 
//                                 <Card.Header>Display Name: {this.props.displayName}</Card.Header>
//                                 <Card.Content>User Name: {this.props.username}</Card.Content>
//                                 <Card.Description>All About You: {this.props.about}</Card.Description>
//                             </Card> 
//                         </div> */}
//                         <div className="formDiv">
//                             <Form onSubmit={this.handleUserUpdate} align="center"
//                                 style={{ fontSize: "16px", color: "#5B5F50"}}>
//                                 <label style={{padding: "20px", fontSize: "18px"}}>Make Changes to Your Account</label>
//                                 <Form.Field
//                                     placeholder="Change Your Display Name"
//                                     type="text"
//                                     defaultValue={this.props.displayName}
//                                     name="displayName"
//                                     onChange={this.handleUserChange}
//                                     control={Input}
//                                 />
//                                 <Form.Field
//                                         placeholder="Change Password"
//                                         type="password"
//                                         defaultValue={this.props.passwordValue}
//                                         name="password"
//                                         onChange={this.handleChange}
//                                         control={Input}
//                                     />  
//                                 {/* <Form.TextArea
//                                     placeholder='Change Your "About Me" Section And Tell the World Who You Are...'
//                                     type="text"
//                                     defaultValue={this.props.about}
//                                     name="about"
//                                     onChange={this.handleChange}
//                                     control={Input}
//                                 /> */}
//                                 <Button
//                                     type="submit"
//                                     size="medium"
//                                     color="green"
//                                     onSubmit={this.handleUpdate}>
//                                     Submit Changes
//                                  </Button>
//                             </Form>
//                         </div> 
//                     </div>
//                     <div className="deleteAccountDiv" >
//                     <Header as='h3'>Delete your account with us</Header>
//                             <DeleteAccount />
//                             </div> 
//             </React.Fragment>
//         )
//     }
// }
// /////Code to connect after wired up////
// export default connect(
//     ({ auth, users }) => ({
//         userInfo: auth.login,
//         username: users.currentUsername,
//         displayName: users.currentDisplayName,
//         //about: users.currentAbout,
//         passwordValue: users.currentPassword
//     }), { update }
// )(ProfilePage)