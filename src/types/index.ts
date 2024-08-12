export type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludedItem = {
  quantity: number;
  item: string;
};

export type Gallery = {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
};

export type OtherProduct = {
  slug: string;
  name: string;
  image: ImageSet;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: OtherProduct[];
};
