'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';

const ProductQuantity = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  return (
    <div className='flex items-center gap-4'>
      <div className='bg-card flex items-center justify-between gap-5 py-4 px-6 w-[120px] h-12'>
        <Button
          onClick={() => setSelectedQuantity(selectedQuantity - 1)}
          className='bg-transparent text-black/25 p-0 focus-visible:bg-transparent hover:bg-transparent active:bg-transparent'>
          -
        </Button>
        <div className='text-[13px] font-bold tracking-[1px]'>
          {selectedQuantity}
        </div>
        <Button
          onClick={() => setSelectedQuantity(selectedQuantity + 1)}
          className='bg-transparent text-black/25 p-0 focus-visible:bg-transparent hover:bg-transparent active:bg-transparent'>
          +
        </Button>
      </div>
      <Button>add to cart</Button>
    </div>
  );
};

export default ProductQuantity;
