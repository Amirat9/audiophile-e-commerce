'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const GoBackNav = () => {
  const router = useRouter();
  const onDivClick = () => {
    router.back();
  };

  return (
    <div
      className='absolute top-8 -translate-y-1/2 md:top-8 lg:top-20 text-body text-black hover:text-primary focus-visible:text-primary active:text-primary cursor-pointer capitalize opacity-50'
      onClick={onDivClick}>
      go back
    </div>
  );
};

export default GoBackNav;
