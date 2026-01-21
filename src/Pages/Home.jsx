import React from 'react';
import Banner from '../Components/Banner';
import WhyJoin from '../Components/WhyJoin';
import Challenges from '../Components/Challenges';
import Featured from '../Components/Featured';
import { useLoaderData } from 'react-router';
import StatSection from '../Components/StatSection';

const Home = () => {
    const hobbies = useLoaderData()
    console.log(hobbies)
    return (
        <div>
            <Banner></Banner>
            <WhyJoin></WhyJoin>
            <Featured></Featured>
            <StatSection></StatSection>
            <Challenges></Challenges>

        </div>
    );
};

export default Home;