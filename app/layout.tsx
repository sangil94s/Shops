import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './util/ReactQuery/ReactQuery';
import Headers from '@/components/Layout/Header';
import { ThemeProvider } from '@/components/ETC/ThemeProvider';
import DarkMode from '@/components/Layout/DarkMode';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Gym Shop',
    default: '운동 관련 상품을 판매합니다',
  },
  description: '운동 관련 상품을 판매하는 쇼핑몰 Gym Shop 입니다 - 가제목',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Headers />
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <DarkMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
