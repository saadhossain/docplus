import React from 'react';
import {FaRegClock, FaMapMarkerAlt} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import FeatureItems from './FeatureItems';
const Feature = () => {
    const clock = <FaRegClock></FaRegClock>
    const location = <FaMapMarkerAlt></FaMapMarkerAlt>
    const phone = <BiPhoneCall></BiPhoneCall>
    const featuresData = [
        {
            id: 1, 
            title: 'Opening Hours',
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae.",
            featureIcon : clock,
            bgColor: "bg-primary"
        },
        {
            id: 2, 
            title: 'Our Branches',
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae.",
            featureIcon : location,
            bgColor: "bg-accent"
        },
        {
            id: 3, 
            title: 'Contact Now',
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae.",
            featureIcon : phone,
            bgColor: "bg-primary"
        }
    ]
    return (
        <div className='w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {
                featuresData.map(feature => <FeatureItems key={feature.id} feature={feature}></FeatureItems>)
            }
        </div>
    );
};

export default Feature;