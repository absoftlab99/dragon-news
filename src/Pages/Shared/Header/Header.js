import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container, Image, Button} from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../contexts/UserContext';
import avater from '../../../images/avater.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const signOutHandler = () =>{
        logOut();
    }

    console.log(user);
    return (
        <Navbar className='bg-primary sticky fixed-top' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' as={Link} to="/">Dragon News</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Nav.Link className='text-light' as={Link} to='/home'>Home</Nav.Link>
                    {
                        user?.uid ? <Button onClick={signOutHandler} className='' variant='danger'>Log Out</Button> :
                        <>
                            <Nav.Link className='text-light' as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/register'>Register</Nav.Link>
                        </>
                    }
                </Nav>
                <div className='d-flex'>
                    {
                        user?.uid ? 
                        <Image className='ps-3' roundedCircle style={{height:45}} src={user?.photoURL}></Image> :
                        <Image className='ps-3' roundedCircle style={{height:45}} src={avater}></Image>
                        
                    }
                    <div className="ps-2 text-light">
                        <p className='mb-0'>{user?.displayName}</p>
                        <small>{user?.email}</small>
                    </div>
                </div>
                <div className="d-sm-block d-md-none">
                <LeftSideNav></LeftSideNav>
                </div>
            </Navbar.Collapse> 
            </Container>  
        </Navbar>
    );
};

export default Header;