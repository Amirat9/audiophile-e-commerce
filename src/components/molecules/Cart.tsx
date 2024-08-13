'use client';
import React from 'react';
import Image from 'next/image';
import cartIcon from '@/assets/shared/desktop/icon-cart.svg';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { modalTrigger, isModalOpen } = useModal();
  const { cartTrigger, isCartOpen, cartItems } = useCart();
  const productAmount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const handleClick = () => {
    if (!isModalOpen && !isCartOpen) {
      cartTrigger();
      modalTrigger();
    }
  };

  return (
    <Button
      size={'icon'}
      variant={'icon'}
      className={cn('relative md:ml-auto lg:ml-0')}
      onClick={handleClick}>
      <Image
        src={cartIcon}
        alt='cart icon'
      />
      {productAmount !== 0 && (
        <div className='bg-primary p-2 text-center flex items-center justify-center text-[10px] text-white font-bold w-5 h-5 rounded-full absolute -top-1/2 -right-1/2'>
          {productAmount > 9 ? '+9' : productAmount}
        </div>
      )}
    </Button>
  );
};

export default Cart;
