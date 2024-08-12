import React from 'react';
import Image from 'next/image';
import cartIcon from '@/assets/shared/desktop/icon-cart.svg';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Cart = () => {
  return (
    <Button
      size={'icon'}
      variant={'icon'}
      className={cn('md:ml-auto lg:ml-0')}>
      <Image
        src={cartIcon}
        alt='cart icon'
      />
    </Button>
  );
};

export default Cart;
