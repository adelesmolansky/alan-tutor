import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alan Smolansky - Professional Tutoring Services',
  description:
    'USC student with 5+ years of tutoring experience. Specializing in SAT prep, chess, and academic subjects. Available for in-person and virtual sessions.',
  keywords:
    'tutoring, SAT prep, chess lessons, academic tutoring, USC, Los Angeles, virtual tutoring',
  authors: [{ name: 'Alan Smolansky' }],
  openGraph: {
    title: 'Alan Smolansky - Professional Tutoring Services',
    description:
      'USC student with 5+ years of tutoring experience. Specializing in SAT prep, chess, and academic subjects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
