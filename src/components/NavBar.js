import React, { Component } from 'react';
// import Logout from "../Logout.js"
import './App.css';
// import { connect } from 'react-redux'
import { Nav } from 'react-bootstrap/Button';



class NavBar extends Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Homepage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Profile/Account Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
    </Nav.Link>
                </Nav.Item>
            </Nav>

);

    }

}
<>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Garden App Homepage</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">HomePage</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#feed">Feed</Nav.Link>
      <Nav.Link href="#planner">Planner</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
</>


export default NavBar