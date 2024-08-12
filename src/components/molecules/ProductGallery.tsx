import { Gallery } from '@/types';
import React from 'react';
import Image from 'next/image';

type Props = {
  gallery: Gallery;
};

const ProductGallery = ({ gallery }: Props) => {
  return (
    <section className='flex flex-col gap-5 md:flex-row md:gap-[18px]'>
      <div className='flex flex-col gap-5 lg:gap-8'>
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet={gallery.first.mobile}
          />
          <source
            media='(max-width: 1099px)'
            srcSet={gallery.first.tablet}
          />
          <Image
            src={gallery.first.desktop}
            alt='first gallery photo'
            className='rounded-lg'
            width={700}
            height={700}
          />
        </picture>
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet={gallery.second.mobile}
          />
          <source
            media='(max-width: 1099px)'
            srcSet={gallery.second.tablet}
          />
          <Image
            src={gallery.second.desktop}
            alt='first gallery photo'
            className='rounded-lg'
            width={700}
            height={700}
          />
        </picture>
      </div>
      <picture>
        <source
          media='(max-width: 767px)'
          srcSet={gallery.third.mobile}
        />
        <source
          media='(max-width: 1099px)'
          srcSet={gallery.third.tablet}
        />
        <Image
          src={gallery.third.desktop}
          alt='first gallery photo'
          className='rounded-lg md:h-full md:min-w-[395px] lg:min-w-[635px]'
          width={700}
          height={600}
        />
      </picture>
    </section>
  );
};

export default ProductGallery;
