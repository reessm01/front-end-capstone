import React, { Component } from "react";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import { Button, Dimmer, Divider, Header, Menu } from "semantic-ui-react";

class Logout extends Component {
  state = {};
  handleLogout = event => {
    this.props.logout();
    this.setState({ active: false });
  };

  handleOpen = () => this.setState({ active: true });

  render() {
    const { active } = this.state;
    return (
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={this.handleOpen} />
        <Dimmer active={active} page>
          <Header icon inverted>
            <Menu.Item>
              Thank You for Stopping By.
            </Menu.Item>
            <Divider />
            <Button
              name="logout"
              onClick={this.handleLogout}
              size="massive"
              color="red"
            >
              Tend Your Garden Again With Us Soon!
            </Button>
          </Header>
        </Dimmer>
      </Menu.Menu>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.logoutLoading,
    err: auth.loginError
  }),
  { logout }
)(Logout);