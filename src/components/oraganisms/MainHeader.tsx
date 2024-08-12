import React from 'react';
import Navbar from './Navbar';
import HeroProductContent from '../molecules/HeroProductContent';
import Divider from '../ui/Divider';

const MainHeader = () => {
  return (
    <header className='bg-[#191919]'>
      <div className='container bg-center bg-cover bg-no-repeat bg-hero-product-mobile md:bg-hero-product-tablet lg:bg-hero-product-desktop'>
        <Navbar />
        <Divider />
        <HeroProductContent />
      </div>
    </header>
  );
};

export default MainHeader;
