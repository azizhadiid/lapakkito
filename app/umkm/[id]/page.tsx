import DetailUMKMPage from '@/components/layout/pengunjung/pages/DetailUMKMPage';
import { UmkmDataProps } from '@/lib/type';
import type { Metadata } from 'next';

// Data dummy
const dummyData: UmkmDataProps = {
    name: "Toko Donut Jambi",
    category: "Makanan dan Minuman",
    author: "Aziz Alhadid",
    date: "26 Oktober 2025",
    description: "Toko Donat Jambi menyajikan donat lembut dengan berbagai pilihan rasa dan topping. Cocok untuk camilan harian, hampers, atau sajian acara spesial. Bisa dipesan langsung dan tersedia layanan antar untuk area Jambi.",
    images: [
        "/images/donut.jpg",
        "/images/kue.jpg",
        "/images/jas.jpg",
        "/images/kue.jpg",
        "/images/jas.jpg"
    ],
    // URL Google Maps Tugu Keris Jambi 
    gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.20281588691!2d103.60529197502565!3d-1.6305337983542962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e258620c925ab8d%3A0x8accc8e879b02a41!2sTugu%20Keris%20Siginjai%20(%20Tugu%20Kotabaru%20)%20Jambi!5e0!3m2!1sid!2sid!4v1761998256757!5m2!1sid!2sid",

    // --- Data Tambahan Sesuai SQL ---
    nomor_hp: "081234567890",
    alamat: "Jl. Jend. Basuki Rahmat No. 1, Kota Jambi",
    status: true,

    // --- Link Sosial Media ---
    link_instagram: "https://www.instagram.com/",
    link_tiktok: "https://www.tiktok.com/",
    link_facebook: "https://www.fecebook.com/",

    // --- Link Pesan Online ---
    link_gojek: "https://gofood.co.id/",
    link_grab: "https://food.grab.com/",
    link_shopee: "https://shopeefood.co.id/",
    link_maxim: "https://shopeefood.co.id/",
    link_tokopedia: "https://shopeefood.co.id/"
};

async function getUmkmData(id: string): Promise<UmkmDataProps> {
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Kembalikan data (seolah-olah dari database)
    return dummyData;
}

export const metadata: Metadata = {
    title: 'Detail UMKM', // ini untuk metadata halaman
};

export default async function RegisterPage({ params }: { params: { id: string } }) {
    const umkmData = await getUmkmData(params.id);
    return <DetailUMKMPage umkmData={umkmData} />;
}