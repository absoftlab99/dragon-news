import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [catName, setCatName] = useState('All News');

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then (data => setCategories(data));
    },[])

    const authInfo = {categories, setCatName, catName}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;