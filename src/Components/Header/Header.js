import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/doctor-log-64.png';
const Header = () => {
    return (
        <div className='py-2'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt='Logo' className='w-10' />
                    <h1 className='text-doc text-2xl font-bold'>Doc+</h1>
                </div>
                <div>
                    <ul className='lg:flex gap-3 font-bold text-doc'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;