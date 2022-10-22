import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then (data => setCategories(data));
    },[])

    return (
        <div>
            <h5 className='d-none d-md-block'>All Categories</h5>
            <h5 className='d-sm-block d-md-none text-light'>All Categories</h5>
                {
                    categories.map(category =>
                        <ListGroup variant="flush" className='w-100 border-bottom d-none d-md-block' key={category.id}>
                            <ListGroup.Item as={Link} to={`/category/${category.id}`}>{category.name}</ListGroup.Item>
                        </ListGroup>
                    )
                }
        </div>
    );
};

export default LeftSideNav;