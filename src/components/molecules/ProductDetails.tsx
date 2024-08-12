import React from 'react';
import { IncludedItem } from '@/types';

type Props = {
  features: string;
  includes: Array<IncludedItem>;
};

const ProductDetails = ({ features, includes }: Props) => {
  return (
    <section className='flex flex-col gap-[88px] lg:flex-row lg:gap-[125px]'>
      <div className='lg:max-w-[635px]'>
        <h3 className='heading-sm mb-6 md:mb-8 md:heading-md'>features</h3>
        <p className='body-text opacity-50 whitespace-pre-line'>{features}</p>
      </div>
      <div className='md:flex md:gap-[160px] lg:flex-col lg:gap-0'>
        <h3 className='heading-sm mb-6 md:mb-8 md:heading-md'>in the box</h3>
        <ul>
          {includes.map((item, index) => (
            <li
              key={index}
              className='flex items-center gap-6'>
              <div className='body-text text-primary font-bold'>{`${item.quantity}x`}</div>
              <div className='body-text opacity-50 font-medium'>
                {item.item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;
