import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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

    const signInWithPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const popUpGit = (gitProvider) => {
        return signInWithPopup(auth, gitProvider);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const updtaeData = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
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


    const authInfo = {createUser, categories, setCatName, catName, popUpSignIn, popUpGit, user, logOut, signInWithPassword, updtaeData}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;