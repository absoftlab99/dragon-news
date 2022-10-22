import React from 'react';
import { ButtonGroup, Button, Card } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord, FaEye, FaTerminal } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';

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
            <div className='mt-3'>
                <h4>Editorials</h4>
            </div>
            <div className='mt-3'>
                <h4>Branding</h4>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/PROCESS_OF_BRANDING_jpg_ETRsFZG9.jpg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/12/TYPES_OF_BRANDING_jpg_ZkUzJTIw.jpg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.marketingdonut.co.uk/sites/default/files/branding_overview_371705137.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default RightSideNav;