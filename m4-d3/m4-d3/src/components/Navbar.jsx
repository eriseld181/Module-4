import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavBar = (prop) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    {prop.title}
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default NavBar