import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Navbar className='bg-primary sticky fixed-top' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' as={Link} to="/">Dragon News</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Nav.Link className='text-light' as={Link} to='/home'>Home</Nav.Link>
                </Nav>
                <div className="d-sm-block d-md-none">
                <LeftSideNav></LeftSideNav>
                </div>
            </Navbar.Collapse> 
            </Container>  
        </Navbar>
    );
};

export default Header;