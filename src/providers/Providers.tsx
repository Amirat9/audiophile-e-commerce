import React from 'react';
import { ModalProvider } from '@/context/ModalContext';
import { CartProvider } from '@/context/CartContext';
import { MenuProvider } from '@/context/MenuContext';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ModalProvider>
      <CartProvider>
        <MenuProvider>{children}</MenuProvider>
      </CartProvider>
    </ModalProvider>
  );
};

export default Providers;
