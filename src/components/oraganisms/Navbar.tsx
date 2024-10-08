import React from 'react';
import Image from 'next/image';
import logo from '@/assets/shared/desktop/logo.svg';
import Cart from '../molecules/Cart';
import HamburgerMenu from '../molecules/HamburgerMenu';
import NavLinks from '../molecules/NavLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-8 md:justify-start lg:justify-between'>
      <HamburgerMenu />
      <Link href={'/'}>
        <Image
          src={logo}
          alt='website logo'
          className='md:ml-[42px] lg:ml-0'
        />
      </Link>
      <NavLinks />
      <Cart />
    </nav>
  );
};

export default Navbar;
