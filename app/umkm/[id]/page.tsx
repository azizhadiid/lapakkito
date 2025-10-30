import DetailUMKMPage from '@/components/layout/pengunjung/pages/DetailUMKMPage';
import { UmkmDataProps } from '@/lib/type';
import type { Metadata } from 'next';

// Data dummy
const dummyData: UmkmDataProps = {
    name: "Toko Donut Jambi",
    category: "Makanan dan Minuman",
    author: "Aziz Alhadid",
    date: "26 Oktober 2025",
    description: "Toko Donat Jambi menyajikan donat lembut...",
    images: [
        "/images/donut.jpg",
        "/images/jas.jpg",
        "/images/kue.jpg",
    ],
    gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127620.42442296767!2d103.54145610214392!3d-1.609985992143615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588b43ab95855%3A0x1000f074b21a360!2sJambi%2C%20Jambi%20City%2C%20Jambi!5e0!3m2!1sen!2sid!4v1678888888888!5m2!1sen!2sid"
};

/**
 * Ini adalah fungsi 'async' untuk mengambil data.
 * Di aplikasi nyata, ini akan memanggil database:
 * const data = await db.umkm.findUnique({ where: { id: id } })
 */
async function getUmkmData(id: string): Promise<UmkmDataProps> {
    // === SIMULASI LOADING ===
    // Kita buat dia 'menunggu' 3 detik agar skeleton-nya terlihat
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Kembalikan data (seolah-olah dari database)
    return dummyData;
}

export const metadata: Metadata = {
    title: 'Detail UMKM', // ini untuk metadata halaman
};

export default async function RegisterPage({ params }: { params: { id: string } }) {
    // mengembalikan komponen Detail UMKM sebagai client-side rendering
    // 1. Ambil data di Server Component
    // 'await' di sinilah yang akan memicu loading.tsx
    const umkmData = await getUmkmData(params.id);

    // 2. Kirim data yang sudah didapat ke Client Component sebagai prop
    return <DetailUMKMPage umkmData={umkmData} />;
}