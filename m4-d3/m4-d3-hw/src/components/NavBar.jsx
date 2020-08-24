import React, { Component } from 'react'
import { Nav, Navbar, Button, Form, FormControl, Link } from 'react-bootstrap'
export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="mb-2">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}
