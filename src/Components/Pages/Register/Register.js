import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const { createuser, userProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/dashboard'
    const onSubmit = data => {
        //Get other forms value;
        const name = data.fullName;
        const email = data.email;
        const password = data.password;
        //Get the file from the input
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        //Save file to the imgbb server
        const url = 'https://api.imgbb.com/1/upload?key=ee7085d23184f77801d3c6950c563d75';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                //Create a user using email and password
                const userImage = data.data.url;
                createuser(email, password)
                    .then((result) => {
                        const user = result.user;
                        const currentUser = {
                            email: user.email
                        }
                        toast.success('Account Registration Successful...')
                        userProfile(name, data.data.url)
                            .then(() => {
                                const userData = { name, email, userImage}
                                saveUser(userData)
                                //get Access token from the server
                                fetch('http://localhost:5000/accesstoken', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body:JSON.stringify(currentUser)
                                })
                                .then(res => res.json())
                                .then(data => {
                                    if(data.accessToken){
                                        localStorage.setItem('accessToken', data.accessToken)
                                    }
                                })
                                navigate(from, {replace: true})
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    };
    const saveUser = (userData) => {
        console.log(userData);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }

    return (
        <div className='w-96 mx-auto bg-gray-800 text-white py-5 px-10 rounded-lg'>
            <h1 className='text-2xl font-bold text-center my-5'>Register an Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <input {...register("fullName")} type="text" placeholder="Your Name" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register("email")} type="email" placeholder="Email Address" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register("password")} type="password" placeholder="Enter Password" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register('image')} type="file" id="profile" />
                <small>Already Have an Account? <Link to='/login' className='text-primary font-semibold'>Login</Link></small>
                <button className='bg-primary py-2 text-center rounded-lg text-white font-semibold' type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;