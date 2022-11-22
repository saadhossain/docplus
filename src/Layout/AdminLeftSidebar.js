import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AdminLeftSidebar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='bg-slate-200 p-5 rounded-xl sticky top-0'>
                <div className='flex items-center gap-5'>
                    <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt={user?.displayName} className="w-12 h-12 rounded-full" />
                    <span>
                        <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                        <h5 className='font-semibold text-accent'>{user?.email}</h5>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AdminLeftSidebar;