import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'

//Create Context
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //Create a Auth firebase authetication
    const auth = getAuth(app);
    //Set user
    const [user, setUser] = useState()
    //Loading
    const [loading, setLoading] = useState(true)
    // const create a Account 
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update user profile
    const userProfile = (name, profileImage) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profileImage
        })
    }
    //Login User
    const userLogin = (email, password) =>  {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Logout
    const logOut = () => {
        return signOut(auth)
    }
    //Get logged in user from the auth
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [auth])
    //User and Context infor
    const userInfo = {createuser, userProfile, userLogin, user, loading, logOut}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;