import { func } from "prop-types";
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Приложение Швейцарский Нож</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link></Nav.Link>
                        <Nav.Link></Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;