import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord, FaEye, FaTerminal } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h4>Find us On</h4>
            </div>
            <ButtonGroup vertical className='w-100'>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaFacebook></FaFacebook> Facebook</Button>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaYoutube></FaYoutube> You Tube</Button>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaTwitter></FaTwitter> Twitter</Button>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaWhatsapp></FaWhatsapp> Whats App</Button>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaDiscord></FaDiscord> Discord</Button>
                <Button variant='outline-secondary' className='ps-4 text-start mb-2'><FaEye></FaEye> Privacy Policy</Button>
                <Button variant='outline-secondary' className='ps-4 text-start'><FaTerminal></FaTerminal> Terms & Condition</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;