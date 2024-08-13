'use client';
import React from 'react';
import CardPopover from '../molecules/CartPopover';
import { useModal } from '@/context/ModalContext';
import { cn } from '@/lib/utils';
import Menu from '../molecules/Menu';

const ModalWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isModalOpen } = useModal();
  return (
    <div className='relative'>
      <div
        className={cn(
          isModalOpen ? 'bg-black/35 absolute inset-0 z-30' : 'hidden'
        )}></div>
      <div className='container relative'>
        <CardPopover />
        <Menu />
      </div>
      {children}
    </div>
  );
};

export default ModalWrapper;
