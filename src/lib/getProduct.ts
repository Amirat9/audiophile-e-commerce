'use server';
import Product from '@/schemas/productSchema';

export async function getProduct(slug: string) {
  return await Product.findOne({slug}).exec();
}
