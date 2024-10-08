import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Manrope } from 'next/font/google';
import '../globals.css';
import Providers from '@/providers/Providers';

const manrope = Manrope({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={manrope.className}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
