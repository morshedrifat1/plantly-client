import React, { use } from 'react';
import HeroSection from '../Components/HeroSection';
import { useLoaderData } from 'react-router';
import FeaturedGardeners from '../Components/FeaturedGardeners';
import TrendingTips from '../Components/TrendingTips';
const trendingTips = fetch('http://localhost:5000/trending-tips').then(res=>res.json());
const Home = () => {
    const gardeners = useLoaderData();
    const TipsData = use(trendingTips);
    console.log(TipsData);
    console.log(gardeners);
    return (
        <div className='dark:bg-[#0f172a]'>
        <div className='max-w-[1420px] mx-auto px-5 2xl:px-0'>
            <section className='mt-5 border-2 border-gray-200 rounded-2xl'>
                <HeroSection></HeroSection>
            </section>
            <section className='mt-15'>
                <FeaturedGardeners gardeners={gardeners}></FeaturedGardeners>
            </section>
            <section className='mt-15'>
                <TrendingTips TipsData={TipsData}></TrendingTips>
            </section>
            
        </div>
        </div>
    );
};

export default Home;