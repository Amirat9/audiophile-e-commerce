'use server';
import Product from '@/schemas/productSchema';

export async function getCategoryProducts(category: string) {
  if (!category) {
    throw new Error('Category is required');
  }
  const categoryProducts = await Product.find({ category }).exec();

  return categoryProducts;
}
