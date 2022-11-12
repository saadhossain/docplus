import React from 'react';
import chair from '../../../../assests/img/chair.png'
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center gap-10 py-5'>
            <div className='w-full lg:w-2/4'>
                <h1 className='text-5xl font-bold'>Your New <br/>Smile Starts Here</h1>
                <p className='text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta cupiditate, labore quisquam alias, voluptates aspernatur recusandae dolore ut quos atque molestias sequi necessitatibus eaque dolores quasi optio sunt rem.</p>
                <button className='doc-btn from-doc to-doc2nd'>Book Now</button>
            </div>
            <div className='w-full lg:w-2/4'>
                <img src={chair} alt='Hospital Chair'/>
            </div>
        </div>
    );
};

export default Banner;