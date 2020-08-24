
import React, { Component } from 'react'
import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

class MyNav extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="pr-5 pl-5 fixed-top " >
                    <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>


                    <Form inline className="ml-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light"><FaSearch /></Button>
                    </Form>
                    <Nav className="ml-auto ">
                        <Nav.Link href="#home"  >Home </Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Browse</Nav.Link>
                    </Nav>

                </Navbar>
            </>
        )
    }
}
export default MyNav
