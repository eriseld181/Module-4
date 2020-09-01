import React, { Component } from 'react'
import { Nav, Navbar, } from 'react-bootstrap'


export default class NavBar extends Component {
    render() {
        return (
            <>

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Menu</Nav.Link>
                            <Nav.Link href="#link">Reservation</Nav.Link>
                            <Nav.Link href="#link">Our Location</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        )
    }
}
