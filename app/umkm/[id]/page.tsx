import DetailUMKMPage from '@/components/layout/pengunjung/pages/DetailUMKMPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Detail UMKM', // ini untuk metadata halaman
};

export default function RegisterPage() {
    // mengembalikan komponen Detail UMKM sebagai client-side rendering
    return <DetailUMKMPage />;
}