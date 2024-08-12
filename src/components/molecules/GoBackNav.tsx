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
      className='text-body text-black hover:text-primary focus-visible:text-primary active:text-primary cursor-pointer uppercase'
      onClick={onDivClick}>
      go back
    </div>
  );
};

export default GoBackNav;
