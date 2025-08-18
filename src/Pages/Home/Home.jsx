import React, { useEffect } from 'react';
import Banner from './HomeComponent/Banner';
import PartnerAbout from './HomeComponent/PartnerAbout';
import Transport from './HomeComponent/Transport';
import UserReview from './HomeComponent/UserReview';
import CustomerReview from '../../Components/CustomerReview';

const Home = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <PartnerAbout></PartnerAbout>
            <Transport></Transport>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;