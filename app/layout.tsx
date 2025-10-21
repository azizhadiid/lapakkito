import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], // Pilih ketebalan yang Anda butuhkan
  variable: '--font-montserrat', // Ini akan membuat CSS variable
});

export const metadata: Metadata = {
  title: {
    default: 'Lapak Kito', // Judul untuk halaman utama (/)
    template: '%s | Lapak Kito', // Template untuk halaman lain
  },
  description: 'Lapak Kito - Platform Direktori UMKM di Kota Jambi',
  icons: { icon: '/lapakkito.svg' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.variable}
      >
        {children}
      </body>
    </html>
  );
}
