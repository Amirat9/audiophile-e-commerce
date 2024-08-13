'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useCart } from '@/context/CartContext'; // Import useCart hook

type Props = {
  slug: string;
  name: string;
  price: number;
};

const ProductQuantity = ({ slug, name, price }: Props) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addCartItem } = useCart(); // Destructure addCartItem from the cart context

  // Function to handle quantity change
  const handleQuantityChange = (change: number) => {
    setSelectedQuantity((prevQuantity) =>
      Math.min(Math.max(prevQuantity + change, 1), 10)
    );
  };

  // Function to handle adding to cart
  const handleClick = () => {
    // Create a new cart item
    const newItem = {
      slug,
      name,
      price,
      quantity: selectedQuantity,
    };

    // Add item to cart
    addCartItem(newItem);
  };

  return (
    <div className='flex items-center gap-4'>
      <div className='bg-card flex items-center justify-between gap-5 py-4 px-6 w-[120px] h-12'>
        <Button
          onClick={() => handleQuantityChange(-1)}
          className='bg-transparent text-black/25 p-0 focus-visible:bg-transparent hover:bg-transparent active:bg-transparent'
          disabled={selectedQuantity <= 1}>
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
      <Button onClick={handleClick}>Add to Cart</Button>
    </div>
  );
};

export default ProductQuantity;
