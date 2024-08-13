'use client';
import React from 'react';
import hamburgerIcon from '@/assets/shared/tablet/icon-hamburger.svg';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';
import { useMenu } from '@/context/MenuContext';

const HamburgerMenu = () => {
  const { menuTrigger, isMenuOpen } = useMenu();
  const { modalTrigger, isModalOpen } = useModal();
  const handleClick = () => {
    if (!isMenuOpen && !isModalOpen) {
      modalTrigger();
      menuTrigger();
    }
  };

  return (
    <Button
      size={'icon'}
      variant={'icon'}
      className={cn('lg:hidden')}
      onClick={handleClick}>
      <Image
        src={hamburgerIcon}
        alt='hamburger menu icon'
      />
    </Button>
  );
};

export default HamburgerMenu;
