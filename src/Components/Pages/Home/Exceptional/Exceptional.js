import React from 'react';
import exception from '../../../../assests/img/treatment.png';
import BtnPrimary from '../../../kits/Buttons/BtnPrimary';
const Exceptional = () => {
    return (
        <div className='w-11/12 mx-auto lg:flex items-center gap-10'>
            <div className='w-full lg:w-2/4'>
                <img src={exception} alt='Treatment' className='rounded-xl'/>
            </div>
            <div className='w-full lg:w-2/4'>
                <h1 className='text-4xl font-bold'>Exceptional Dental Care, on Your Terms</h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio est quo cupiditate voluptatibus doloribus ea placeat, inventore pariatur, facilis suscipit fugit consequatur sunt sequi commodi eum quidem neque. Id reprehenderit laudantium dolor iste dicta? Ut quia quidem optio! Corporis et maiores maxime eum, fuga ducimus nihil modi tempora similique.</p>
                <BtnPrimary>Book Appointment</BtnPrimary>
            </div>
        </div>
    );
};

export default Exceptional;