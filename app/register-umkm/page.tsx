import RegisterUMKMPage from '@/components/layout/pengunjung/pages/RegisterUMKMPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register-UMKM', // ini untuk metadata halaman
};

export default function FaqPagePengunjung() {
    // mengembalikan komponen FAQ Page sebagai client-side rendering
    return <RegisterUMKMPage/>;
}