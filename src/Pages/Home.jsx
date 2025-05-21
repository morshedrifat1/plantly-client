import React from 'react';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    return (
        <div className='max-w-[1420px] mx-auto px-5 2xl:px-0'>
            <section className='mt-5 border-2 border-gray-200 rounded-2xl'>
                <HeroSection></HeroSection>
            </section>
        </div>
    );
};

export default Home;