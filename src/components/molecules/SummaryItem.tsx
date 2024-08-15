import React from 'react';
import Image from 'next/image';
import { dollarAmountFormatter } from '@/lib/formatter';

type Props = {
  name: string;
  price: number;
  quantity: number;
  slug: string;
};

const SummaryItem = ({ name, price, quantity, slug }: Props) => {
  return (
    <div className='flex items-center text-black'>
      <Image
        src={`/assets/cart/image-${slug}.jpg`}
        alt='items picture'
        width={64}
        height={64}
        className='rounded-xl'
      />
      <div className='ml-4'>
        <h3 className='body-text font-bold'>{name.split(' ')[0]}</h3>
        <p className='text-sm font-bold leading-[25px] opacity-50'>
          {dollarAmountFormatter(price)}
        </p>
      </div>
      <p className='ml-auto body-text opacity-50 font-bold'>{`x${quantity}`}</p>
    </div>
  );
};

export default SummaryItem;
