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
            </Nav>;

);

    }

}


export default NavBar