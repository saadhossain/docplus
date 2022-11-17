import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

//Create Context
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //Create a Auth firebase authetication
    const auth = getAuth(app);

    // const create a Account 
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update user profile
    const userProfile = (name, profileImage) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profileImage
        })
    }
    //Login User
    const userLogin = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //User and Context infor
    const userInfo = {createuser, userProfile, userLogin}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;