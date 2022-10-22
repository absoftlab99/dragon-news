import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Category = () => {
    const {catName} = useContext(AuthContext);
    console.log(catName);
    return (
        <div>
            <h3>Category Name: {catName}</h3>
        </div>
    );
};

export default Category;