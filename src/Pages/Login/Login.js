import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ButtonGroup, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Form className='w-50 mx-auto border border-primary p-4 rounded'>
            <h5>Login for Access of All News</h5>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button><br></br>
            <small>New to Dragon News? <Link to='/register'>Create Account</Link></small>
            <ButtonGroup vertical className='w-100 mt-2'>
                <Button variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Login;