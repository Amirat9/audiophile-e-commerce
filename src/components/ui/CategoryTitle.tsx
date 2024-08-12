'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const CategoryTitle = () => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];

  return (
    <h2 className='py-8 text-center heading-base md:py-[105px] md:heading-lg lg:py-[98px]'>
      {category}
    </h2>
  );
};

export default CategoryTitle;
