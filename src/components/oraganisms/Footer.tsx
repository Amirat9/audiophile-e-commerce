import React from 'react';
import Image from 'next/image';
import logo from '@/assets/shared/desktop/logo.svg';
import NavLinks from '../molecules/NavLinks';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container relative text-center pt-[52px] pb-9 md:pt-[60px] md:pb-[46px] md:text-start lg:pb-12 lg:pt-[75px]'>
        <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-primary w-[100px] h-1 md:left-10 md:right-0 md:translate-x-0 lg:left-0'></div>
        <div className='flex flex-col mb-12 gap-12 md:gap-8 md:mb-8 lg:flex-row lg:gap-0 lg:justify-between lg:mb-9'>
          <Image
            src={logo}
            alt='logo'
            className='mx-auto md:mx-0'
          />
          <NavLinks className='flex flex-col gap-4 md:flex-row md:gap-[34px]' />
        </div>
        <p className='body-text opacity-50 mb-12 md:mb-[80px] lg:mb-[56px] lg:max-w-[540px]'>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p className='body-text opacity-50'>
          Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
