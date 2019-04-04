import React, { Component } from "react";
import { connect } from "react-redux";
//import { deleteAccount } from "./actions.js"
import { deleteUser } from "../actions";
import { Button } from "semantic-ui-react";
class DeleteAccount extends Component {
  render() {
    return (
      <div className="delete-account-div">
        <Button color="red" onClick={this.props.deleteUser}>Delete Account</Button>
      </div>
    );
  }
}

export default connect(
  null,
  {deleteUser}
)(DeleteAccount);