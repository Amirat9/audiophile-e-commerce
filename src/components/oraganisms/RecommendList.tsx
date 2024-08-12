import { OtherProduct } from '@/types';
import React from 'react';
import RecommendItem from '../molecules/RecommendItem';

type Props = {
  recommendedItems: Array<OtherProduct>;
};

const RecommendList = ({ recommendedItems }: Props) => {
  return (
    <section className='flex flex-col gap-14 mb-9 md:flex-row md:gap-3 lg:gap-[30px]'>
      {recommendedItems.map((item, index) => (
        <RecommendItem
          key={index}
          image={item.image}
          name={item.name}
          slug={item.slug}
        />
      ))}
    </section>
  );
};

export default RecommendList;
