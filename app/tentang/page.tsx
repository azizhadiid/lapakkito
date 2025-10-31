import TentangPage from '@/components/layout/pengunjung/pages/TentangPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tentang', // ini untuk metadata halaman
};

export default function Tentang(){
    return <TentangPage/>
}