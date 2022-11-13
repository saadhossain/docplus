import React from 'react';
import {FaComments} from 'react-icons/fa'
import TestimonialSingle from './TestimonialSingle';

const Testimonails = () => {
    const reviews = [
        {
            "id": 1,
            "name": "Winson Herry",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis itaque vero quae consequuntur sequi sed.",
            "location": "California",
            "image": "https://i.ibb.co/9Wnm1C7/review4.png"
        },
        {
            "id": 2,
            "name": "Hyen Gill",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis itaque vero quae consequuntur sequi sed.",
            "location": "Washington",
            "image": "https://i.ibb.co/g3S2Lch/review3.png"
        },
        {
            "id": 3,
            "name": "Elice Beth",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis itaque vero quae consequuntur sequi sed.",
            "location": "New Jersey",
            "image": "https://i.ibb.co/WGJkHdj/review11.png"
        },
    ]
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary'>Testimonials</h4>
                    <h2 className='text-4xl font-bold'>What Our Patients Says</h2>
                </div>
                <FaComments className='text-6xl opacity-25 text-primary'></FaComments>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    reviews.map(review => <TestimonialSingle key={review.id} review={review}></TestimonialSingle>)
                }
            </div>
        </div>
    );
};

export default Testimonails;