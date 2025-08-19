import React, { useEffect } from 'react';
import Banner from './HomeComponent/Banner';
import PartnerAbout from './HomeComponent/PartnerAbout';
import Transport from './HomeComponent/Transport';
import { Testimonials } from '../../Components/Testimonials';

const Home = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <PartnerAbout></PartnerAbout>
            <Transport></Transport>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;