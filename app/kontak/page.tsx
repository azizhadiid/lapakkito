import KontakPage from '@/components/layout/pengunjung/pages/KontakPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontak', // ini untuk metadata halaman
};

export default function KontakPagePengunjung() {
    // mengembalikan komponen Kontak Page sebagai client-side rendering
    return <KontakPage />;
}