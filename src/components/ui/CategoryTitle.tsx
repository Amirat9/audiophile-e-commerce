'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const CategoryTitle = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];

  return (
    <h1 className='py-8 text-center heading-base md:py-[105px] md:heading-lg lg:py-[98px]'>
      {category}
    </h1>
  );
};

export default CategoryTitle;
