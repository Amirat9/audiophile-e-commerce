import React from 'react';
import Image from 'next/image';
import { bestGearSectionProps } from '@/lib/constants';
const BestGear = () => {
  return (
    <section className='flex flex-col text-center text-black lg:flex-row-reverse lg:text-start lg:items-center lg:gap-[145px]'>
      <picture>
        <source
          media='(max-width: 767px)'
          srcSet={bestGearSectionProps.image.mobile}
        />
        <source
          media='(max-width: 1099px)'
          srcSet={bestGearSectionProps.image.tablet}
        />
        <Image
          src={bestGearSectionProps.image.desktop}
          alt='best gear photo'
          width={700}
          height={600}
          className='rounded-lg mx-auto'
        />
      </picture>
      <div className='mt-10 md:max-w-[573px] md:mx-auto lg:mt-0 lg:max-w-[445px]'>
        <h3 className='heading-base md:heading-lg'>
          Bringing you the <span className='text-primary'>best</span> audio gear
        </h3>
        <p className='body-text opacity-50 mt-8'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestGear;
