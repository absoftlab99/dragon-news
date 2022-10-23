import React from 'react';
import Card from 'react-bootstrap/Card';
import { Badge, Col, Row } from 'react-bootstrap';
import './NewsCard.css';
import { FaRegBookmark, FaRegEye, FaShareAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    return (
        <Row>
                <Col>
                <Card className="text-center mb-3">
                    <Card.Header>
                        <div className='row'>
                            <div className='col-6 profile d-flex'>
                                <img src={news.author.img} alt="" />
                                <div className='text-start ps-2'>
                                    <p className='m-0 fw-bolder'>{news.author.name ? news.author.name : 'Abdullah Al Mahmud'}</p>
                                    <small className='published_date'>{news.author.published_date}</small>
                                </div>
                            </div>
                            <div className="col-6 text-end lh-lg">
                                <p><FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt></p>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-start'>{news.title}</Card.Title>
                            <img className='img-fluid' src={news.image_url} alt={news.title} />
                        <Card.Text>
                        {
                            news.details.length > 400 ?
                            <p className='text-start pt-2'>{news.details.slice(0, 400) + '...'} <Link to={`/news/${news._id}`}>Read More</Link></p> :
                            <p className='text-start pt-2'>{news.details}</p>
                        }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted text-start d-inline">
                        <b>Ratings:</b> {news.rating.number} <Badge bg='warning' text='dark'>{news.rating.badge}</Badge> | <b>Total View:</b> <FaEye></FaEye> {news.total_view}
                    </Card.Footer>
                </Card>
                </Col>
        </Row>
    );
};

export default NewsCard;