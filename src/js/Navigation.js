import React, { Component } from 'react';
import './../css/navigation.css';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import logo from './../images/logo.png';


// Navigation component to route user to other webpage.
export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="navigate" collapseOnSelect>
                <Navbar.Header>
                        <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" className="Navi" pullRight>
                        <NavItem eventKey={1} href="/" className="NavItem">
                            Home
                        </NavItem>
                        <NavItem eventKey={1} href="/">
                            Sign in
                        </NavItem>
                        <NavItem eventKey={1} href="/">
                            Sign Up
                        </NavItem>
                        <NavItem eventKey={2} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} href="/Profile">
                            Profile
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}