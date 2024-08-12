import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const HeroProductContent = () => {
  return (
    <div className='text-center py-[112px] mx-auto md:py-[146px] md:max-w-[380px] lg:text-start lg:mx-0'>
      <p className='heading-overline opacity-50 mb-4 md:mb-6'>NEW PRODUCT</p>
      <h2 className='heading-xl mb-6'>XX99 Mark II HeadphoneS</h2>
      <p className='body-text opacity-75 mb-7 md:px-2 md:mb-10'>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button>
        <Link href={'/'}>see product</Link>
      </Button>
    </div>
  );
};

export default HeroProductContent;
