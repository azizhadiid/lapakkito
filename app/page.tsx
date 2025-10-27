import BerandaPage from '@/components/layout/pengunjung/pages/BerandaPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beranda', // ini untuk metadata halaman
};

export default function RegisterPage() {
  // mengembalikan komponen BerandaPage sebagai client-side rendering
  return <BerandaPage />;
}