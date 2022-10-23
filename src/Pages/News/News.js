import React from 'react';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const News = () => {
    const news = useLoaderData();
    const {title, author, image_url, details, rating, category_id} = news;
    return (
        <Row>
            <Col>
            <Card className="text-center mb-3">
                <Card.Header>
                    <div className='row'>
                        <div className='col-6 profile d-flex'>
                            <img src={author.img} alt="" />
                            <div className='text-start ps-2'>
                                <p className='m-0 fw-bolder'>{author.name ? author.name : 'Abdullah Al Mahmud'}</p>
                                <small className='published_date'>{author.published_date}</small>
                            </div>
                        </div>
                        <div className="col-6 text-end lh-lg">
                            <p><FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt></p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-start'>{title}</Card.Title>
                        <img className='img-fluid' src={image_url} alt={title} />
                    <Card.Text>
                    {
                        <p className='text-start pt-2'>{details}</p>
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-start d-inline d-flex">
                    <div className=''>
                        <b>Ratings:</b> {rating.number} <Badge bg='warning' text='dark'>{rating.badge}</Badge> | <b>Total View:</b> <FaEye></FaEye> {news.total_view}
                    </div>
                    <div className="ms-auto">
                        <Link to={`/category/${category_id}`}><Button> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back</Button></Link>
                    </div>
                </Card.Footer>
            </Card>
            </Col>
        </Row>
    );
};

export default News;