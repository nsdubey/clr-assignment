import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Products Managment</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Products</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} >Hello {props.userName}</Nav.Link>
                    <Nav.Link eventKey={2} onClick={props.doLogout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);


export default NavBar;