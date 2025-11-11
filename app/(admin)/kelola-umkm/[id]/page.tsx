import DetailUMKM from '@/components/layout/admin/pages/detailUmkm';
import supabase from '@/lib/db';
import { UmkmDataProps } from '@/lib/type';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getUmkmData(id: string): Promise<UmkmDataProps> {

    // 1. Ambil data dari Supabase
    const { data, error } = await supabase
        .from('umkm')
        .select('*')
        .eq('id', id)
        .single();

    // 2. Handle jika data tidak ditemukan atau ada error
    if (error || !data) {
        console.error("Gagal mengambil data UMKM:", error?.message);
        notFound();
    }

    // 3. Transformasi Data (Bagian Kunci!)
    const dbImages = [
        data.foto_1,
        data.foto_2,
        data.foto_3,
        data.foto_4,
        data.foto_5,
    ];

    // Filter gambar yang null/kosong
    let finalImages = dbImages.filter(img => img) as string[];

    // Atur fallback jika tidak ada gambar sama sekali
    if (finalImages.length === 0) {
        finalImages = ['/no-image.png']; // Sesuai permintaan Anda
    }

    // Format tanggal
    const formattedDate = new Date(data.created_at).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // 4. Kembalikan objek yang sudah SESUAI dengan UmkmDataProps
    return {
        name: data.nama_usaha,
        category: data.kategori,
        email: data.email,
        author: data.nama_pemilik,
        date: formattedDate,
        description: data.deskripsi,
        images: finalImages,
        gmapEmbedUrl: data.lokasi_gmap,
        alamat: data.alamat,
        status: data.status,
        nomor_hp: data.nomor_hp,

        // Link-link
        link_instagram: data.link_instagram,
        link_tiktok: data.link_tiktok,
        link_facebook: data.link_facebook,
        link_gojek: data.link_gojek,
        link_grab: data.link_grab,
        link_maxim: data.link_maxim,
        link_shopee: data.link_shopee,
        link_tokopedia: data.link_tokopedia,
    };
}

export async function generateMetadata(
    { params }: { params: { id: string } }
): Promise<Metadata> {
    // Ambil data minimal untuk metadata
    const { data } = await supabase
        .from('umkm')
        .select('nama_usaha, deskripsi')
        .eq('id', params.id)
        .single();

    return {
        title: data?.nama_usaha || 'Detail UMKM',
        description: data?.deskripsi || 'Detail informasi UMKM.',
    };
}

export default async function UmkmDetailPage({ params }: { params: { id: string } }) {
    // Panggil fungsi yang mengambil DAN mentransformasi data
    const umkmData = await getUmkmData(params.id);

    // Kirim data yang sudah bersih ke komponen Klien
    return <DetailUMKM umkmData={umkmData} />;
}