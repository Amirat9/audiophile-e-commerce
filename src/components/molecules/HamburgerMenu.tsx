import React from 'react';
import hamburgerIcon from '@/assets/shared/tablet/icon-hamburger.svg';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const HamburgerMenu = () => {
  return (
    <Button
      size={'icon'}
      variant={'icon'}
      className={cn('lg:hidden')}>
      <Image
        src={hamburgerIcon}
        alt='hamburger menu icon'
      />
    </Button>
  );
};

export default HamburgerMenu;
