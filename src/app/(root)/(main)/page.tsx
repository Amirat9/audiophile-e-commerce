import BestGear from '@/components/oraganisms/BestGear';
import CategoryMenu from '@/components/oraganisms/CategoryMenu';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <div className='container flex flex-col gap-[120px] pt-[92px] md:pt-[148px] lg:pt-[200px] pb-[120px] md:pb-[96px] lg:pb-[200px] '>
        <CategoryMenu />
        <BestGear />
      </div>
    </main>
  );
};

export default HomePage;
