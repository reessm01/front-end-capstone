 import React, { Component } from "react";
 import { connect } from "react-redux";
 import { Form, Button, Image, Input } from "semantic-ui-react";
 import { updateUserImage as uploadImage } from "../actions";

 export class UserImage extends Component {
   state = {
     active: false,
     file: null
   };
   imageFileChangeHandler = event => {
     const imageFile = event.target.imageFiles[0];
     this.setState({
       imageFile
     });
   };

   imageFileUploadHandler = event => {
     const imageFile = this.state.imageFile;
     this.handleToggle();
     this.props.uploadUserPic({ picture: imageFile });
   };

   handleUploadImage = e => {
     e.preventDefault();
     const formData = new FormData(e.target);
     this.props.uploadImage(formData);
   };

   handleToggle = () => {
     this.setState(prevState => ({
       active: !prevState.active
     }));
   };

   render() {
     return (
       <div>
         <Form onSubmit={this.handleUploadImage}>
           <Image
             alt=""
             src={this.props.userimage}
             className="profile-user-pic"
           />
           <Input type="file" name="picture" required />
           <Button  type="submit" color="blue">
             Upload a Photo
           </Button>
         </Form>
       </div>
     );
   }
 }

 export default connect(
   ({ users, auth }) => ({
     //image: users.usersImages[auth.login.id],
     //userimage: users.usersImages[auth.login.id]
   }),
   { uploadImage }
 )(UserImage);