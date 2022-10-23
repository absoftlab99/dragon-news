import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const {catName} = useContext(AuthContext);

    const categoryNews = useLoaderData();

    return (
        <div>
            <h5>Category Name: {catName} <Badge>{categoryNews.length}</Badge> </h5>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;