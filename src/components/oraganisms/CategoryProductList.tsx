import React from 'react';
import CategoryProduct from '../molecules/CategoryProduct';
import { Product } from '@/types';

type Props = {
  products: Array<Product>;
};

const CategoryProductMenu = ({ products }: Props) => {
  return (
    <section className='flex flex-col gap-[120px] lg:gap-[160px]'>
      {products.reverse().map((product, index) => (
        <CategoryProduct
          key={index}
          name={product.name}
          description={product.description}
          isNew={true}
          slug={product.slug}
          image={product.image}
          isEven={(index + 1) % 2 === 0}
        />
      ))}
    </section>
  );
};

export default CategoryProductMenu;
