import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A modern portfolio built with Next.js, Aceternity UI, and Three.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-pink-50 text-foreground`}>
        <div className="min-h-screen bg-pink-50">
          {children}
        </div>
      </body>
    </html>
  );
}
