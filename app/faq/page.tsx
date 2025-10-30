import FAQPage from "@/components/layout/pengunjung/pages/FAQPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ', // ini untuk metadata halaman
};

export default function FaqPagePengunjung() {
    // mengembalikan komponen FAQ Page sebagai client-side rendering
    return <FAQPage />;
}