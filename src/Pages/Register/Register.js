import React, { useContext, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const {popUpSignIn, popUpGit, createUser, updtaeData, logOut, signInWithPassword} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    
    const registerUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        createUser(email, password, name, photo)
        .then(result =>{
            const user = result.user;
            setError('');
            updtaeData(name, photo);
            logOut();
            signInWithPassword(email, password);
            form.reset();
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
    }

    const popUpHandler = (event) =>{
        event.preventDefault();

        popUpSignIn(provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const gitPopUpHandler = (event) =>{
        event.preventDefault();
        popUpGit(gitProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <Form onSubmit={registerUser} className='w-75 mx-auto border border-primary p-4 rounded'>
            <h5>Register for Access of All News</h5>
            <hr></hr>
            <div className="d-flex">
                <Form.Group className="mb-3 w-50 me-2" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="photo" />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            {
                error?
                <p className='alert alert-danger'>{error}</p> :
                ''
            }
            <Button variant="primary" type="submit">
                Sign Up
            </Button><br></br>
            <small>Already have an account? <Link to='/login'>Please Login</Link></small>
            <ButtonGroup vertical className='w-100 mt-2'>
                <Button onClick={popUpHandler} variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button onClick={gitPopUpHandler} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Register;