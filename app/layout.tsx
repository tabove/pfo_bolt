import './globals.css';
import type{ Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider} from '@/theme-provider';
import { Analutics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['Latin'] });

export const metadata: Metadata = {
    title: 'Portfolio | Your name',
    description: 'Software Engineer Portfolio showcasing projects and skills',
    openGraph: {
        title: 'Portfolio | Your Name',
        description: 'Software Engineer Portfolio showcasing projects and skills',
        type: 'website',
        url: 'https://your-portfolio.com',
    } ,
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    );
  }