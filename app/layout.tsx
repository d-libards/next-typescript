import './globals.css';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// const inconsolata = Inconsolata({ subsets: ['latin'] });

// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'next-typescript',
  description: 'testing next-typescript',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
