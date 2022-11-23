import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Users = () => {
    const { user, logOut } = useContext(AuthContext)
    const { data: users = [0] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: () => fetch(`http://localhost:5000/users?email=${user.email}`, {
            headers: {
                authorization: `Beareer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
    })
    return (
        <div>
            {
                users?.length ? <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Profile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td className='font-semibold'>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={user.userImage} alt={user.name} className="w-10 h-10 rounded-full" />
                                    </td>
                                    <td className='flex gap-2'>
                                        <button className='bg-primary py-1 px-2 rounded font-semibold text-white mt-3'>Admin</button>
                                        <button className='bg-primary py-1 px-2 rounded font-semibold text-white mt-3'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                    : <div>
                        <h1 className='text-4xl font-semibold mt-5 bg-primary text-white py-5 px-10 rounded-xl text-center'>No User Available</h1>
                    </div>
            }
        </div>
    );
};

export default Users;