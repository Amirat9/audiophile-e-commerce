import React from 'react';
import { categoryMenuProps } from '@/lib/constants';
import CategoryMenuItem from '../molecules/CategoryMenuItem';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const CategoryMenu = ({ className }: Props) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-[68px] md:flex-row  md:gap-[10px]',
        className
      )}>
      {categoryMenuProps.map((item, index) => (
        <CategoryMenuItem
          key={index}
          name={item.name}
          image={item.image}
          href={item.href}
        />
      ))}
    </section>
  );
};

export default CategoryMenu;
