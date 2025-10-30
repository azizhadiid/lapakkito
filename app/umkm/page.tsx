import UMKMPage from '@/components/layout/pengunjung/pages/UMKMPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UMKM', // ini untuk metadata halaman
};

export default function RegisterPage() {
    // mengembalikan komponen BerandaPage sebagai client-side rendering
    return <UMKMPage />;
}