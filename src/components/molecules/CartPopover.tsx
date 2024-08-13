'use client';
import React, { useEffect, useRef } from 'react';
import CartItem from './CartItem';
import { Button } from '../ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';
import { dollarAmountFormatter } from '@/lib/formatter';

const CartPopover = () => {
  const { isCartOpen, cartTrigger, clearCart, cartItems } = useCart();
  const { isModalOpen, modalTrigger } = useModal();
  const popoverRef = useRef<HTMLDivElement>(null);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const productAmount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      if (isModalOpen && isCartOpen) {
        modalTrigger(); // Close modal
        cartTrigger(); // Close popover
      }
    }
  };

  useEffect(() => {
    if (isModalOpen && isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, isCartOpen]);

  return (
    <div
      ref={popoverRef}
      className={cn(
        isCartOpen
          ? 'fixed flex flex-col gap-8 text-black z-50 right-1/2 translate-x-1/2 top-[100px] bg-white rounded-lg px-7 py-8 w-full max-w-[327px] md:max-w-[377px] md:translate-x-0 md:right-10 xl:right-[43.5%] xl:translate-x-full'
          : 'hidden'
      )}>
      {/* Card Header */}
      <div className='flex items-center justify-between'>
        <h4 className='heading-xs'>{`cart (${productAmount})`}</h4>
        <div
          className='body-text opacity-50 underline capitalize'
          onClick={clearCart}>
          remove all
        </div>
      </div>
      {/* Items list */}
      <div className='space-y-6'>
        {cartItems.map((item, index) =>
          item.quantity > 0 ? (
            <CartItem
              key={index}
              slug={item.slug}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
            />
          ) : (
            ''
          )
        )}
      </div>
      {/* Total amount */}
      <div className='flex items-center justify-between'>
        <h5 className='body-text font-medium uppercase text-black/50'>total</h5>
        <p className='text-lg font-bold'>{dollarAmountFormatter(subtotal)}</p>
      </div>
      {/* checkout button */}
      <Button>checkout</Button>
    </div>
  );
};

export default CartPopover;
