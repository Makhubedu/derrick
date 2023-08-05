import React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Fira_Code } from 'next/font/google';
import Footer from '@/components/Footer';

import './globals.css';

import type { Metadata } from 'next';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Derrick Makhubedu | Portfolio',
  description: 'Derrick Makhubedu Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${firaCode.className} flex min-h-screen flex-col items-center justify-between p-10 pt-0 overflow-x-hidden`}>
        {children}
        <Analytics />
        <section className='w-full max-w-7xl mt-16'>
          <Footer />
        </section>
      </body>
    </html>
  );
}
