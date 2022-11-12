import React from 'react';
import Feature from './Feature/Feature';
import Banner from './HomeBanner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
        </div>
    );
};

export default Home;