import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        //Create a user using email and password
        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successful...')
        })
        .catch(err => console.error(err))

    };

    return (
        <div className='w-96 mx-auto bg-gray-800 text-white py-5 px-10 rounded-lg'>
            <h1 className='text-2xl font-bold text-center my-5'>Login your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <input {...register("email")} type="email" placeholder="Email Address" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register("password")} type="password" placeholder="Enter Password" className="input w-full max-w-xs input-bordered text-gray-900" />
                <small>New to Doctor Portal? <Link to='/register' className='text-primary font-semibold'>Register</Link></small>
                <button className='bg-primary py-2 text-center rounded-lg text-white font-semibold' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;