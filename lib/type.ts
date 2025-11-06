// Tipe data untuk prop 
export type UmkmDataProps = {
    name: string;
    category: string;
    email: string;
    author: string;
    date: string;
    description: string;
    images: string[];
    gmapEmbedUrl: string;
    alamat: string;
    status: boolean;
    nomor_hp: string | null;
    link_instagram: string | null;
    link_tiktok: string | null;
    link_facebook: string | null;
    link_gojek: string | null;
    link_grab: string | null;
    link_maxim: string | null;
    link_shopee: string | null;
    link_tokopedia: string | null;
}

// Untuk Halaman UMKM
export type UmkmCardData = {
    id: string;
    nama_usaha: string;
    deskripsi: string;
    alamat: string | null;
    foto_1: string | null;
    kategori: string;
};

export interface FormData {
    nama_usaha: string;
    nama_pemilik: string;
    email: string; // BARU (dari SelectionOne)
    nomor_hp: string;
    alamat: string;
    lokasi_gmap: string;
    kategori: string;
    tahun_berdiri: string;
    deskripsi: string;
    link_instagram: string;
    link_tiktok: string;
    link_facebook: string;
    link_gojek: string;
    link_grab: string;
    link_maxim: string;
    link_shopee: string;
    link_tokopedia: string;
}

export interface FileData {
    foto_1: File | null;
    foto_2: File | null;
    foto_3: File | null;
    foto_4: File | null;
    foto_5: File | null;
}