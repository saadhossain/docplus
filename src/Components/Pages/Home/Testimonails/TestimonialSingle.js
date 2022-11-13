import React from 'react';

const TestimonialSingle = ({ review }) => {
    const { name, description, location, image } = review;

    return (
        <div className='p-5 shadow-2xl rounded-xl'>
            <p>{description}</p>
            <div className='flex gap-2 items-center mt-3'>
                <img src={image} alt={name} className='w-14' />
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <h3 className='font-semibold text-primary'>{location}</h3>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSingle;