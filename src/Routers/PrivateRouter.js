import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRouter;