import BestGear from '@/components/oraganisms/BestGear';
import CategoryMenu from '@/components/oraganisms/CategoryMenu';
import React from 'react';
import { getProduct } from '@/lib/getProduct';
import { Product } from '@/types/index';
import ProductCard from '@/components/molecules/ProductCard';
import ProductDetails from '@/components/molecules/ProductDetails';
import ProductGallery from '@/components/molecules/ProductGallery';
import RecommendList from '@/components/oraganisms/RecommendList';
import GoBackNav from '@/components/molecules/GoBackNav';

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product: Product = await getProduct(params.slug);
  return (
    <main className='text-black'>
      <div className='container relative flex flex-col gap-[88px] pt-[64px] pb-[120px] md:pt-[82px] lg:pb-[160px] lg:pt-[160px]'>
        <GoBackNav />
        <ProductCard
          name={product.name}
          image={product.image}
          description={product.description}
          isNew={product.new}
          price={product.price}
          slug={product.slug}
          priceId={product.priceId}
        />
        <ProductDetails
          features={product.features}
          includes={product.includes}
        />
        <ProductGallery gallery={product.gallery} />
        <RecommendList recommendedItems={product.others} />
        <CategoryMenu />
        <BestGear />
      </div>
    </main>
  );
};

export default ProductDetailPage;
