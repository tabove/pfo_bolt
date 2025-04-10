import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Noto_Serif_JP } from 'next/font/google';
import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('@/components/loading-screen'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });
const notoSansJP = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

export const metadata: Metadata = {
    title: 'Portfolio | Takashi Hirano',
    description: 'Webデザイナー&エンジニア「Takashi Hirano」のポートフォリオサイト',
    metadataBase: new URL('https://portfolio-tabove.vercel.app/'),
    openGraph: {
        title: 'Portfolio | Takashi Hirano',
        description: 'Webデザイナー&エンジニア「Takashi Hirano」のポートフォリオサイト',
        type: 'website',
        url: 'https://portfolio-tabove.vercel.app/',
    } ,
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ja" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${inter.className} ${notoSansJP.variable}`}>
          <ThemeProvider attribute="class" defaultTheme="light">
          <LoadingScreen />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    );
  }