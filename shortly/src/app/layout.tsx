import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
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
