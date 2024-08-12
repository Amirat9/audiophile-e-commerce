import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrowRightIcon from '@/assets/shared/desktop/icon-arrow-right.svg';

type Props = {
  name: string;
  href: string;
  image: string;
};

function CategoryMenuItem({ name, href, image }: Props) {
  return (
    <div className='bg-card rounded-lg relative pt-[88px] pb-[22px] text-center w-full'>
      <Image
        src={image}
        alt='category thumbnail'
        className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[35%]'
        width={150}
        height={150}
      />
      <h3 className='body-text mb-4 text-black uppercase font-bold tracking-[1.07px] lg:heading-xs'>
        {name}
      </h3>
      <Link
        href={href}
        className='cursor-pointer inline-flex items-center gap-3 group'>
        <span className='text-black font-bold opacity-50 uppercase text-[13px] tracking-[1px] group-hover:text-primary group-hover:opacity-100'>
          shop
        </span>
        <Image
          src={arrowRightIcon}
          alt='arrow right icon'
        />
      </Link>
    </div>
  );
}

export default CategoryMenuItem;
