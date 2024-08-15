import React from 'react';
import Image from 'next/image';
import { ImageSet } from '@/types';
import ProductQuantity from './ProductQuantity';
import { dollarAmountFormatter } from '@/lib/formatter';

type Props = {
  image: ImageSet;
  name: string;
  isNew: boolean;
  description: string;
  price: number;
  slug: string;
  priceId: string;
};

const ProductCard = ({
  image,
  name,
  isNew,
  description,
  price,
  slug,
  priceId,
}: Props) => {
  const fromattedPrice = dollarAmountFormatter(price);

  return (
    <section className='flex flex-col md:flex-row md:items-center md:gap-[69px] lg:gap-[125px]'>
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
          alt=''
          className='bg-card rounded-lg mb-8 md:mb-0'
          width={700}
          height={600}
        />
      </picture>
      <div className='md:max-w-[340px] lg:max-w-[445px]'>
        {isNew && (
          <p className='heading-overline text-primary mb-6 md:mb-4'>
            new product
          </p>
        )}
        <h1 className='heading-base mb-6 md:mb-8 lg:pr-12'>{name}</h1>
        <p className='body-text opacity-50 mb-6 md:mb-8'>{description}</p>
        <p className='heading-xs mb-8'>{fromattedPrice}</p>
        <ProductQuantity
          slug={slug}
          name={name}
          price={price}
          priceId={priceId}
        />
      </div>
    </section>
  );
};

export default ProductCard;
