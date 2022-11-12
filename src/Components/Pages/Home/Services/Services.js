import React from 'react';
import cavity from '../../../../assests/img/cavity.png';
import fluoride from '../../../../assests/img/fluoride.png';
import whitening from '../../../../assests/img/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            "name": "Fluoride Treatment",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illo!",
            "img": fluoride,
        },
        {
            id: 2,
            "name": "Cavity",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illo!",
            "img": cavity,
        },
        {
            id: 3,
            "name": "Teath Whitening",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illo!",
            "img": whitening,
        }
    ]
    return (
        <div className='py-10'>
            <div className='text-center'>
                <p className='text-lg text-secondary font-semibold'>Our Services</p>
                <h2 className='text-2xl font-bold text-primary'>Service We Provide</h2>
            </div>
            <div className='w-11/12 mx-auto my-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;