import React from 'react';
import doctor from '../../../../assests/img/doctor.png';
import BtnPrimary from '../../../kits/Buttons/BtnPrimary';
import './Appointment.css';
const Appointment = () => {
    return (
        <div className='appointment mt-32 rounded-lg'>
            <div className='w-11/12 mx-auto lg:flex items-center'>
                <img src={doctor} alt='' className='w-full lg:w-1/2 -mt-32 hidden md:block'/>
                <div className='w-full lg:w-1/2 py-10 md:py-0'>
                    <h4 className='text-lg text-primary'>Appointment</h4>
                    <h1 className='text-5xl font-bold text-white'>Make an Appointment</h1>
                    <p className='my-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aliquam corrupti nam fugit hic, exercitationem amet placeat ducimus eum, consectetur dolorum labore. Nemo veritatis debitis a cum velit, facilis, ab est mollitia explicabo expedita inventore magnam atque modi ullam commodi porro facere, ex natus tenetur perspiciatis. Illum quae ullam dolor.</p>
                    <BtnPrimary>Appointment</BtnPrimary>
                </div>
            </div>
        </div>

    );
};

export default Appointment;