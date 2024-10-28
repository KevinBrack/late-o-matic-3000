import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Late-o-matic 3000',
  description: 'Generate creative excuses for being late, powered by advanced AI technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
