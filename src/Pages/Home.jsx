import React from 'react';
import Banner from '../Components/Banner';
import WhyJoin from '../Components/WhyJoin';
import Featured from '../Components/Featured';
import { useLoaderData } from 'react-router';
import StatSection from '../Components/StatSection';
import UpComing_Event from '../Components/UpComing_Event';

const Home = () => {
    const hobbies = useLoaderData()
    console.log(hobbies)
    return (
        <div>
            <Banner></Banner>
            <WhyJoin></WhyJoin>
            <Featured></Featured>
            <StatSection></StatSection>
            <UpComing_Event></UpComing_Event>
        </div>
    );
};

export default Home;