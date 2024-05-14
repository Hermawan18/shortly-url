import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Icon from '@/app/assets/images/favicon-32x32.png';
import './globals.css';

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/assets/images/favicon-32x32.png',
  },
  title: 'Shortly',
  description: 'Shorten url',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
