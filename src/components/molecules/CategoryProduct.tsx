import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type Props = {
  image: ImageSet;
  isNew: boolean;
  name: string;
  description: string;
  slug: string;
  isEven: boolean;
};

const CategoryProduct = ({
  image,
  isNew,
  description,
  name,
  slug,
  isEven,
}: Props) => {
  return (
    <div
      className={cn(
        'text-black text-center space-y-6 lg:flex lg:items-center lg:gap-[125px]',
        isEven ? 'lg:flex-row-reverse' : 'lg:flex'
      )}>
      {/* Product Image */}
      <picture>
        <source
          media='(max-width: 767px)'
          srcSet={image.mobile}
        />
        <source
          media='(max-width: 1099px)'
          srcSet={image.tablet}
        />
        <Image
          src={image.desktop}
          alt='product image'
          className='rounded-lg mx-auto'
          width={700}
          height={600}
        />
      </picture>
      {/* Product Detail */}
      <div className='space-y-6 mx-auto md:max-w-[572px] md:space-y-0 md:mt-[52px] lg:max-w-[445px] lg:text-start'>
        {isNew && (
          <p className='heading-overline text-primary md:mb-4'>new product</p>
        )}
        <h3 className='heading-base px-12 md:heading-lg md:!mb-8 lg:px-0 lg:pr-12'>
          {name}
        </h3>
        <p className='body-text opacity-50 !mb-6 lg:!mb-10'>{description}</p>
        <Link
          href={`/product-detail/${slug}`}
          className='w-full'>
          <Button className=''>see product</Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProduct;
