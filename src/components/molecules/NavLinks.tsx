'use client';
import React from 'react';
import { navLinkProps } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {
  className?: string;
};

const NavLinks = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'hidden lg:flex lg:items-center lg:gap-x-[34px] uppercase',
        className
      )}>
      {navLinkProps.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.href}
          className={cn(
            'hover:text-primary hover:transition-colors hover:ease-in hover:delay-75',
            pathname === navLink.href ? 'text-primary' : 'text-white'
          )}>
          {navLink.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
