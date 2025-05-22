import React from 'react';
import HeroSection from '../Components/HeroSection';
import { useLoaderData } from 'react-router';
import FeaturedGardeners from '../Components/FeaturedGardeners';

const Home = () => {

    const gardeners = useLoaderData();
    console.log(gardeners);
    return (
        <div className='max-w-[1420px] mx-auto px-5 2xl:px-0'>
            <section className='mt-5 border-2 border-gray-200 rounded-2xl'>
                <HeroSection></HeroSection>
            </section>
            <section className='mt-15'>
                <FeaturedGardeners gardeners={gardeners}></FeaturedGardeners>
            </section>
        </div>
    );
};

export default Home;