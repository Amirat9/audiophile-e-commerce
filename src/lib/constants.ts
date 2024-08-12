import mobileBestGear from '@/assets/shared/mobile/image-best-gear.jpg';
import tabletBestGear from '@/assets/shared/tablet/image-best-gear.jpg';
import desktopBestGear from '@/assets/shared/desktop/image-best-gear.jpg';

export const navLinkProps = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'headphones',
    href: '/category/headphones',
  },
  {
    name: 'speakers',
    href: '/category/speakers',
  },
  {
    name: 'earphones',
    href: '/category/earphones',
  },
];

export const categoryMenuProps = [
  {
    name: 'headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    href: '/category/headphones',
  },
  {
    name: 'speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    href: '/category/speakers',
  },
  {
    name: 'earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    href: '/category/earphones',
  },
];

export const socialProps = [
  {
    name: 'facebook',
    image: '/assets/shared/desktop/icon-facebook.svg',
    link: 'https://www.facebook.com',
  },
  {
    name: 'twitter',
    image: '/assets/shared/desktop/icon-twitter.svg',
    link: 'https://www.x.com',
  },
  {
    name: 'instagram',
    image: '/assets/shared/desktop/icon-instagram.svg',
    link: 'https://www.instagram.com',
  },
];

export const bestGearSectionProps = {
  image: {
    mobile: mobileBestGear.src,
    tablet: tabletBestGear.src,
    desktop: desktopBestGear.src,
  },
};
