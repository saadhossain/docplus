import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

//Create Context
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //Create a Auth firebase authetication
    const auth = getAuth(app);

    // const create a Account 
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //User and Context infor
    const userInfo = {createuser}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;