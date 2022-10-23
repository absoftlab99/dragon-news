import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [catName, setCatName] = useState('All News');
    const [user, setUser] = useState(null);
    const popUpSignIn = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const popUpGit = (gitProvider) => {
        return signInWithPopup(auth, gitProvider);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then (data => setCategories(data));
    },[]);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo = {categories, setCatName, catName, popUpSignIn, popUpGit, user, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;