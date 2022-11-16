import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const {createuser} = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
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
            .then(data => setProfileImage(data.data.url))
            .catch(err => console.error(err))

        //Get other forms value;
        const name = data.fullName;
        const email = data.email;
        const password = data.password;
        // console.log(name, email, password);
        //Create a user using email and password
        createuser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))

    };

    return (
        <div className='w-96 mx-auto bg-gray-800 text-white py-5 px-10 rounded-lg'>
            <h1 className='text-2xl font-bold text-center my-5'>Register an Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <input {...register("fullName")} type="text" placeholder="Your Name" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register("email")} type="email" placeholder="Email Address" className="input w-full max-w-xs input-bordered text-gray-900" />
                <input {...register("password")} type="password" placeholder="Enter Password" className="input w-full max-w-xs input-bordered text-gray-900" />
                {
                    profileImage ?
                        <div className='flex items-center gap-3'>
                            <img src={profileImage} alt='' className='w-14 rounded-full' />
                            <p className='text-lg font-semibold'>Profile Picture</p>
                        </div>
                        : <input {...register('image')} type="file" id="profile" />
                }
                <button className='bg-primary py-2 text-center rounded-lg text-white font-semibold' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;