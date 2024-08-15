'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import SummaryItem from './SummaryItem';
import Link from 'next/link';
import { Button } from '../ui/button';

const CheckoutSummary = () => {
  const { cartItems } = useCart();
  return (
    <section className='text-black bg-white rounded-lg py-8 px-6 space-y-8'>
      <h4 className='uppercase heading-xs font-bold'>summary</h4>
      <div className='space-y-6'>
        {cartItems.map((item, index) => (
          <SummaryItem
            key={index}
            slug={item.slug}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
      <Link href={'/'}>
        <Button className='w-full'>continue & pay</Button>
      </Link>
    </section>
  );
};

export default CheckoutSummary;
