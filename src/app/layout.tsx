import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shringhi Construction - Professional Building Materials & Services',
  description: 'Leading construction materials supplier with 20+ years of excellence. Quality materials, expert consultation, and reliable delivery solutions.',
  keywords: 'construction, materials, cement, steel, aggregates, building supplies',
  authors: [{ name: 'Shringhi Construction' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
