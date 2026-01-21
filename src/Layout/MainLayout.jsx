import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className='bg-secondary-color min-h-screen flex flex-col justify-between'>
            <Navbar></Navbar>
           {/* 3. flex-grow: This div expands to push the Footer down */}
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;