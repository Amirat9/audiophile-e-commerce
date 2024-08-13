'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartItem {
  name: string;
  slug: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  isCartOpen: boolean;
  cartTrigger: () => void;
  cartItems: Array<CartItem>;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (slug: string) => void;
  updateCartItem: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const cartTrigger = () => setIsCartOpen(!isCartOpen);

  const addCartItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (i) => i.slug === item.slug
      );

      if (existingItemIndex > -1) {
        // Update the quantity if the item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      }

      // Add the item if it doesn't exist in the cart
      return [...prevItems, item];
    });
  };

  const removeCartItem = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const updateCartItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.slug === item.slug);
      if (itemIndex > -1) {
        // Replace the existing item with the new quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = item;
        return updatedItems;
      }
      // Optionally, add the item if it doesn't exist
      return [...prevItems, item];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartTrigger,
        cartItems,
        addCartItem,
        removeCartItem,
        updateCartItem,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
