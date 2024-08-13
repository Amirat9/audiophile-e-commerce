import type { Metadata } from 'next';
import '../../globals.css';
import MainHeader from '@/components/oraganisms/MainHeader';
import Footer from '@/components/oraganisms/Footer';
import ModalWrapper from '@/components/oraganisms/ModalWrapper';


export const metadata: Metadata = {
  title: 'Audiophile | Premium Speakers, Headphones & Earphones',
  description:
    'Explore Audiophile for a curated selection of premium speakers, headphones, and earphones. Enjoy top-notch sound quality, competitive prices, and exceptional service. Find the perfect audio equipment to enhance your listening experience today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <ModalWrapper>{children}</ModalWrapper>
      <Footer />
    </>
  );
}
