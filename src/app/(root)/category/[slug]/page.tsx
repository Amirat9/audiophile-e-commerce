import BestGear from '@/components/oraganisms/BestGear';
import CategoryMenu from '@/components/oraganisms/CategoryMenu';
import CategoryProductList from '@/components/oraganisms/CategoryProductList';
import React from 'react';
import { getCategoryProducts } from '@/lib/getCategoryProducts';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const products = await getCategoryProducts(params.slug);
  return (
    <main>
      <div className='container flex flex-col gap-[120px] pt-16 pb-[120px] md:pt-[120px] lg:py-[160px]'>
        <CategoryProductList products={products} />
        <CategoryMenu />
        <BestGear />
      </div>
    </main>
  );
};

export default CategoryPage;
