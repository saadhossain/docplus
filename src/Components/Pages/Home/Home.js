import React from 'react';
import Appointment from './Appointment/Appointment';
import Exceptional from './Exceptional/Exceptional';
import Feature from './Feature/Feature';
import Banner from './HomeBanner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;