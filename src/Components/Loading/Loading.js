import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Loading = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className='flex justify-center min-h-screen items-center'>
               <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
            </div>
        );
    }
};

export default Loading;