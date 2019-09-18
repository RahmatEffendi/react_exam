import React from "react";
import { Nav, Navbar, Image} from 'react-bootstrap';

const Header = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Image src="https://newsapi.org/images/n-logo-border.png" style={{width: "50px", height: "50px"}} rounded />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#link">Home</Nav.Link>
                <Nav.Link href="#link">Product</Nav.Link>
                <Nav.Link href="#link">Article</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
