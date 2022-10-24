import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ButtonGroup, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const {popUpSignIn, popUpGit, signInWithPassword} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


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
    const signInHandler = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithPassword(email, password)
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
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
        <Form onSubmit={signInHandler} className='w-50 mx-auto border border-primary p-4 rounded'>
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
            {
                error?
                <p className='alert alert-danger'>{error}</p> :
                ''
            }
            <Button className='w-100 mb-3' variant="primary" type="submit">
                Login
            </Button><br></br>
            <div className='text-center'><small>New to Dragon News? <Link to='/register'>Create Account</Link></small></div>
            <ButtonGroup vertical className='w-100 mt-2'>
                <Button onClick={popUpHandler} variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button onClick={gitPopUpHandler} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Login;