import React from 'react';
import Appointment from './Appointment/Appointment';
import Exceptional from './Exceptional/Exceptional';
import Feature from './Feature/Feature';
import Banner from './HomeBanner/Banner';
import Services from './Services/Services';
import Testimonails from './Testimonails/Testimonails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonails></Testimonails>
        </div>
    );
};

export default Home;