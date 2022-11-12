import React from 'react';

const FeatureItems = ({ feature }) => {
    const { title, shortDescription, featureIcon, bgColor } = feature;
    return (
        <div className={`flex items-center gap-5 ${bgColor} text-white p-5 rounded-xl`}>
           <span className='text-5xl'>{featureIcon}</span>
            <div>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{shortDescription}</p>
            </div>
        </div>
    );
};

export default FeatureItems;