import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import {AiOutlineLogout} from 'react-icons/ai'
import toast from 'react-hot-toast';

const AdminLeftSidebar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('You are logged Out...')
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='bg-[#E6E6E6] h-[80vh] p-5 rounded-lg sticky top-10 flex flex-col justify-between'>
                <div className='flex items-center gap-5'>
                    <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt={user?.displayName} className="w-16 h-16 rounded-full" />
                    <span>
                        <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                        <h5 className='font-semibold text-accent'>{user?.email}</h5>
                    </span>
                </div>
                <Link onClick={handleLogOut} className='flex gap-2 font-semibold'>Logout<AiOutlineLogout className='w-6 h-6 text-gray-900'></AiOutlineLogout></Link>
            </div>
        </div>
    );
};

export default AdminLeftSidebar;