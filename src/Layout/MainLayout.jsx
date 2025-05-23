import React from 'react';
import Header from '../Components/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpiner from '../Components/LoadingSpiner';

const MainLayout = () => {
    const navigation = useNavigation(); 
    return (
        <div>
            <header className='sticky top-0 z-40 bg-[#f5f8fb]/30 dark:bg-[#0c1222]/30 backdrop-blur-md backdrop-saturate-150'>
                <Header></Header>
            </header>
            <main>
                {navigation.state === "loading" ? <LoadingSpiner></LoadingSpiner> : <Outlet />}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;