import React from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';

const FeaturedProducts = () => {
  return (
    <section className='space-y-8'>
      <div className='bg-primary rounded-lg py-[55px] px-6 md:pb-16 md:pt-[52px] lg:flex lg:pb-0 lg:pt-[96px]'>
        <div className='max-w-[172px] md:max-w-[198px] lg:max-w-[410px] mx-auto'>
          <picture>
            <source
              media='(max-width: 767px)'
              srcSet={featuredProducts.zx9Speaker.mobile}
            />
            <source
              media='(max-width: 1099px)'
              srcSet={featuredProducts.zx9Speaker.tablet}
            />
            <Image
              src={featuredProducts.zx9Speaker.desktop}
              alt='zx9 speaker'
              width={410}
              height={490}
            />
          </picture>
        </div>
        <div className='text-center space-y-6 mt-8 md:max-w-[349px] md:mx-auto md:mt-16 lg:text-start lg:mt-5'>
          <h4 className='heading-xl px-12 lg:px-0'>zx9 speaker</h4>
          <p className='body-text opacity-75'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className='text-white bg-black hover:bg-black/80 active:bg-black/85 md:!mt-10'>
            <Link href={'/product-detail/zx9-speaker'}>see product</Link>
          </Button>
        </div>
      </div>
      <div className='bg-zx7-mobile py-[101px] pl-6 rounded-lg bg-cover bg-no-repeat md:px-[60px] md:bg-zx7-tablet lg:bg-zx7-desktop'>
        <h3 className='text-black heading-base mb-8'>zx7 speaker</h3>
        <Button className='bg-transparent text-black border border-black hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white active:bg-black active:text-white'>
          <Link href={'/product-detail/zx7-speaker'}>see product</Link>
        </Button>
      </div>
      <div className='flex flex-col gap-6 md:flex-row'>
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet={featuredProducts.yx1Earphones.mobile}
          />
          <source
            media='(max-width: 1099px)'
            srcSet={featuredProducts.yx1Earphones.tablet}
          />
          <Image
            src={featuredProducts.yx1Earphones.desktop}
            alt='yx1 earphones'
            width={600}
            height={600}
            className='rounded-lg md:flex-1'
          />
        </picture>
        <div className='bg-card py-10 px-6 rounded-lg md:px-10 md:py-[101px] md:w-[540px] lg:pl-[95px]'>
          <h3 className='heading-base text-black mb-8'>yx1 earphones</h3>
          <Button className='bg-transparent text-black border border-black hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white active:bg-black active:text-white'>
            <Link href={'/product-detail/yx1-earphone'}>see product</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
