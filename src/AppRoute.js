import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Image} from 'react-bootstrap';
import App from './Components/Home/App';
import AboutUs from './Components/Page/AboutUs';
import Article from './Components/Page/Articles';
import Product from './Components/Page/Products';

const AppRoute = () => (
    <BrowserRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Image src="https://newsapi.org/images/n-logo-border.png" style={{width: "50px", height: "50px"}} rounded />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/product">Product</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/article">Article</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                    <Link to="/aboutus">About Us</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/article" component={Article} />
            <Route path="/product" component={Product} />
        </div>
    </BrowserRouter>
);

export default AppRoute;
