'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { dollarAmountFormatter } from '@/lib/formatter';
import { Button } from '../ui/button';
import { useCart } from '@/context/CartContext';

type Props = {
  slug: string;
  quantity: number;
  price: number;
  name: string;
};

const CartItem = ({ slug, quantity, price, name }: Props) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity);
  const { updateCartItem } = useCart();

  // Synchronize state with prop changes
  useEffect(() => {
    setSelectedQuantity(quantity);
  }, [quantity]);

  // Handle quantity change
  const handleQuantityChange = (change: number) => {
    const newQuantity = selectedQuantity + change;

    // Ensure new quantity is within valid range
    if (newQuantity >= 0 && newQuantity <= 10) {
      setSelectedQuantity(newQuantity);

      // Update the cart item with the new quantity
      const updatedItem = {
        slug,
        price,
        name,
        quantity: newQuantity,
      };
      updateCartItem(updatedItem);
    }
  };

  return (
    <div className='flex items-center'>
      <Image
        src={`/assets/cart/image-${slug}.jpg`}
        alt='cart item image'
        className='rounded-xl'
        width={64}
        height={64}
      />
      <div className='ml-4'>
        <h5 className='body-text uppercase font-bold'>{name.split(' ')[0]}</h5>
        <p className='text-sm font-bold leading-[25px] text-black/50'>
          {dollarAmountFormatter(price)}
        </p>
      </div>
      <div className='bg-card ml-auto flex items-center justify-between gap-5 py-4 px-6 w-[120px] h-10'>
        <Button
          onClick={() => handleQuantityChange(-1)}
          className='bg-transparent text-black/25 p-0 focus-visible:bg-transparent hover:bg-transparent active:bg-transparent'
          disabled={selectedQuantity <= 0}>
          -
        </Button>
        <div className='text-[13px] font-bold tracking-[1px]'>
          {selectedQuantity}
        </div>
        <Button
          onClick={() => handleQuantityChange(1)}
          className='bg-transparent text-black/25 p-0 focus-visible:bg-transparent hover:bg-transparent active:bg-transparent'
          disabled={selectedQuantity >= 10}>
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
