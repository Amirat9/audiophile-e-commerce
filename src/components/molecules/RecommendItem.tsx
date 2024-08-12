import { ImageSet } from '@/types';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  image: ImageSet;
  name: string;
  slug: string;
};

const RecommendItem = ({ image, name, slug }: Props) => {
  return (
    <div className='text-center'>
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
          alt='recommended item photo'
          className='rounded-lg bg-card mb-10'
          width={350}
          height={350}
        />
      </picture>
      <h4 className='mb-8 heading-sm'>{name}</h4>
      <Button>
        <Link href={`/product-detail/${slug}`}>see product</Link>
      </Button>
    </div>
  );
};

export default RecommendItem;
