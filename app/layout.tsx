import './globals.css';
import type{ Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider} from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio | Takashi Hirano',
    description: 'Webデザイナー&エンジニア「Takashi Hirano」のポートフォリオサイト',
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
        title: 'Portfolio | Takashi Hirano',
        description: 'Webデザイナー&エンジニア「Takashi Hirano」のポートフォリオサイト',
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