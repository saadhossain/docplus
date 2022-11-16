import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/doctor-log-64.png';
const Header = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className='py-2'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className='lg:flex items-center hidden'>
                        <img src={logo} alt='' className='w-10' />
                        <h1 className='text-2xl font-bold text-doc'>Doc+</h1>
                    </Link>
                </div>
                <div className='flex items-center lg:hidden'>
                    <img src={logo} alt='' className='w-10' />
                    <h1 className='text-2xl font-bold text-doc'>Doc+</h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0font-bold ">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;