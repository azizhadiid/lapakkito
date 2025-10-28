"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import supabase from "@/lib/db";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// --- Tentukan tipe data untuk state ---
// (Ini opsional tapi sangat membantu agar tidak typo)
interface FormData {
    nama_usaha: string;
    nama_pemilik: string;
    nomor_hp: string;      // BARU
    alamat: string;        // BARU
    lokasi_gmap: string;   // BARU
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

interface FileData {
    foto_1: File | null;
    foto_2: File | null;
    foto_3: File | null;
    foto_4: File | null;
    foto_5: File | null;
}

export default function DaftarUmkmPage() {
    // --- STATE ---
    // State untuk data teks dari form
    const [formData, setFormData] = useState<FormData>({
        nama_usaha: "",
        nama_pemilik: "",
        nomor_hp: "",      // BARU
        alamat: "",        // BARU
        lokasi_gmap: "",   // BARU
        kategori: "",
        tahun_berdiri: "",
        deskripsi: "",
        link_instagram: "",
        link_tiktok: "",
        link_facebook: "",
        link_gojek: "",
        link_grab: "",
        link_maxim: "",
        link_shopee: "",
        link_tokopedia: "",
    });

    // State untuk file-file foto
    const [fileData, setFileData] = useState<FileData>({
        foto_1: null,
        foto_2: null,
        foto_3: null,
        foto_4: null,
        foto_5: null,
    });

    // State untuk loading (agar tombol bisa di-disable)
    const [isLoading, setIsLoading] = useState(false);
    // State untuk hitung karakter deskripsi
    const [deskripsiCount, setDeskripsiCount] = useState(0);

    // --- HANDLERS ---
    // Handler untuk mengubah state data teks
    const handleSelectChange = (value: string) => {
        // 'value' adalah string dari 'SelectItem' yang dipilih
        setFormData((prev) => ({
            ...prev,
            kategori: value, // Langsung update state 'kategori'
        }));
    };

    const handleTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));

        // Update hitungan karakter khusus untuk deskripsi
        if (id === "deskripsi") {
            setDeskripsiCount(value.length);
        }
    };

    // Handler untuk mengubah state file
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, files } = e.target;
        if (files && files[0]) {
            setFileData((prev) => ({
                ...prev,
                // Kita pakai 'as keyof FileData' agar TypeScript tahu 'id' adalah key di tipe FileData
                [id as keyof FileData]: files[0],
            }));
        }
    };

    // Fungsi helper untuk UPLOAD SATU FILE
    const uploadFoto = async (file: File | null): Promise<string | null> => {
        // Jika tidak ada file, kembalikan null
        if (!file) return null;

        // 1. Buat nama file unik.
        // 'public/' adalah folder di dalam bucket.
        // Anda bisa ganti 'public' dengan apa saja.
        const fileName = `public/${Date.now()}-${file.name}`;
        const bucketName = "umkm_photos"; // Pastikan ini nama bucket Anda

        // 2. Upload file
        const { error: uploadError } = await supabase.storage
            .from(bucketName)
            .upload(fileName, file);

        if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error(`Gagal mengupload ${file.name}: ${uploadError.message}`);
        }

        // 3. Ambil Public URL
        const { data } = supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName);

        return data.publicUrl;
    };

    // --- HANDLER UTAMA SAAT SUBMIT ---
    // --- HANDLER UTAMA SAAT SUBMIT ---
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Mencegah halaman refresh
        if (isLoading) return; // Mencegah double-submit

        // === 1. VALIDASI MANUAL (TANPA ZOD) ===
        // AMBIL SEMUA FIELD BARU
        const {
            nama_usaha,
            nama_pemilik,
            nomor_hp,      // <-- TAMBAHKAN INI
            alamat,        // <-- TAMBAHKAN INI
            kategori,
            tahun_berdiri,
            deskripsi,
        } = formData;

        // Cek kolom wajib
        // TAMBAHKAN VALIDASI UNTUK FIELD BARU
        if (
            !nama_usaha ||
            !nama_pemilik ||
            !nomor_hp ||    // <-- TAMBAHKAN INI
            !alamat ||      // <-- TAMBAHKAN INI
            !kategori ||
            !tahun_berdiri ||
            !deskripsi
        ) {
            alert("Harap isi semua kolom yang bertanda * (wajib).");
            return; // Hentikan fungsi
        }

        // Cek batasan karakter (sesuai SQL)
        if (nama_usaha.length < 3) {
            alert("Nama Usaha minimal 3 karakter.");
            return;
        }
        if (deskripsi.length < 10 || deskripsi.length > 500) {
            alert("Deskripsi harus antara 10 sampai 500 karakter.");
            return;
        }
        // --- Akhir Validasi ---

        setIsLoading(true); // Mulai loading

        try {
            // === 2. UPLOAD SEMUA FOTO ===
            // (Bagian ini sudah benar)
            const [url1, url2, url3, url4, url5] = await Promise.all([
                uploadFoto(fileData.foto_1),
                uploadFoto(fileData.foto_2),
                uploadFoto(fileData.foto_3),
                uploadFoto(fileData.foto_4),
                uploadFoto(fileData.foto_5),
            ]);

            // === 3. SIAPKAN DATA UNTUK DATABASE ===
            const dataToInsert = {
                ...formData, // Ambil semua data teks dari state (termasuk nomor_hp, alamat, lokasi_gmap)
                tahun_berdiri: parseInt(formData.tahun_berdiri), // Ubah ke angka
                status: false, // <-- TAMBAHKAN INI (DEFAULT STATUS)

                // Masukkan URL foto yang didapat
                foto_1: url1,
                foto_2: url2,
                foto_3: url3,
                foto_4: url4,
                foto_5: url5,
            };

            // === 4. INSERT DATA KE DATABASE ===
            // (Bagian ini sudah benar)
            const { error: insertError } = await supabase
                .from("umkm") // Nama tabel Anda
                .insert(dataToInsert); // Kirim objek data yang sudah lengkap

            if (insertError) {
                // Jika gagal insert, lempar error
                throw new Error(`Gagal menyimpan data: ${insertError.message}`);
            }

            // === 5. SUKSES ===
            // (Bagian reset Anda sudah benar)
            alert("Sukses! Data UMKM Anda berhasil didaftarkan.");
            // Reset semua form
            setFormData({
                nama_usaha: "",
                nama_pemilik: "",
                nomor_hp: "",
                alamat: "",
                lokasi_gmap: "",
                kategori: "",
                tahun_berdiri: "",
                deskripsi: "",
                link_instagram: "",
                link_tiktok: "",
                link_facebook: "",
                link_gojek: "",
                link_grab: "",
                link_maxim: "",
                link_shopee: "",
                link_tokopedia: "",
            });
            setFileData({
                foto_1: null,
                foto_2: null,
                foto_3: null,
                foto_4: null,
                foto_5: null,
            });
            setDeskripsiCount(0);
            (e.target as HTMLFormElement).reset(); // Ini untuk membersihkan input file
        } catch (error: any) {
            // Tangkap semua error (dari upload atau insert)
            console.error(error);
            alert(`Terjadi kesalahan: ${error.message}`);
        } finally {
            // Apapun yang terjadi (sukses/gagal), matikan loading
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-10">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">
                        Form Pendaftaran UMKM
                    </CardTitle>
                    <CardDescription className="text-center">
                        Daftarkan usaha Anda untuk tampil di direktori kami.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {/* Ganti <form> dengan <form onSubmit={...}> */}
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        {/* --- Bagian Informasi Dasar --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Informasi Dasar
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {/* Tambahkan 'htmlFor' dan 'id' yang cocok */}
                                    <label
                                        htmlFor="nama_usaha"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Nama Usaha *
                                    </label>
                                    <Input
                                        id="nama_usaha"
                                        placeholder="Contoh: Kedai Kopi Senja"
                                        value={formData.nama_usaha}
                                        onChange={handleTextChange}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="nama_pemilik"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Nama Pemilik Usaha *
                                    </label>
                                    <Input
                                        id="nama_pemilik"
                                        placeholder="Contoh: Budi Setiawan"
                                        value={formData.nama_pemilik}
                                        onChange={handleTextChange}
                                    />
                                </div>

                                {/* --- INPUT BARU MULAI DARI SINI --- */}
                                <div>
                                    {/* Nomor HP */}
                                    <label
                                        htmlFor="nomor_hp"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Nomor HP (WhatsApp) *
                                    </label>
                                    <Input
                                        id="nomor_hp"
                                        type="tel"
                                        placeholder="Contoh: 08123456789"
                                        value={formData.nomor_hp}
                                        onChange={handleTextChange}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="kategori" // Biarkan 'htmlFor' tetap
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Kategori *
                                    </label>
                                    <Select
                                        value={formData.kategori}
                                        onValueChange={handleSelectChange} // Gunakan handler baru
                                    >
                                        <SelectTrigger id="kategori"> {/* Beri 'id' di sini agar terhubung ke label */}
                                            <SelectValue placeholder="Pilih kategori usaha" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Kuliner (FnB)">Kuliner (FnB)</SelectItem>
                                            <SelectItem value="Fashion (Pakaian)">Fashion (Pakaian)</SelectItem>
                                            <SelectItem value="Kriya (Kerajinan)">Kriya (Kerajinan)</SelectItem>
                                            <SelectItem value="Jasa">Jasa (Contoh: Laundry, Bengkel)</SelectItem>
                                            <SelectItem value="Agribisnis">Agribisnis (Contoh: Sayur, Buah)</SelectItem>
                                            <SelectItem value="Kesehatan & Kecantikan">Kesehatan & Kecantikan</SelectItem>
                                            <SelectItem value="Lainnya">Lainnya</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="tahun_berdiri"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Tahun Berdiri *
                                    </label>
                                    <Input
                                        id="tahun_berdiri"
                                        type="number"
                                        placeholder="Contoh: 2019"
                                        value={formData.tahun_berdiri}
                                        onChange={handleTextChange}
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    {/* Alamat */}
                                    <label
                                        htmlFor="alamat"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Alamat Lengkap *
                                    </label>
                                    <Textarea
                                        id="alamat"
                                        placeholder="Contoh: Jl. Jend. Sudirman No. 10, RT 01, Kelurahan..., Kecamatan..., Kota Jambi"
                                        className="min-h-[100px]"
                                        value={formData.alamat}
                                        onChange={handleTextChange}
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    {/* Lokasi Google Maps */}
                                    <label
                                        htmlFor="lokasi_gmap"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Tautan Lokasi Google Maps
                                    </label>
                                    <Input
                                        id="lokasi_gmap"
                                        type="url"
                                        placeholder="https://maps.app.goo.gl/..."
                                        value={formData.lokasi_gmap}
                                        onChange={handleTextChange}
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Buka Google Maps, cari lokasi usaha Anda, klik "Share", lalu "Copy link".
                                    </p>
                                </div>

                                <div className="md:col-span-2">
                                    <label
                                        htmlFor="deskripsi"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Deskripsi Usaha *
                                    </label>
                                    <Textarea
                                        id="deskripsi"
                                        placeholder="Jelaskan sedikit tentang usaha Anda (min 10, maks 500 karakter)"
                                        className="min-h-[120px]"
                                        value={formData.deskripsi}
                                        onChange={handleTextChange}
                                        maxLength={500}
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {/* Tampilkan hitungan karakter */}
                                        {deskripsiCount} / 500 karakter
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* --- Bagian Upload Foto --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Media (Foto Usaha)
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Upload foto-foto yang mewakili usaha Anda (opsional).
                            </p>
                            {/* Kita beri ID unik untuk setiap input file */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label
                                        htmlFor="foto_1"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Foto 1 (Utama)
                                    </label>
                                    <Input
                                        id="foto_1"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="foto_2"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Foto 2
                                    </label>
                                    <Input
                                        id="foto_2"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="foto_3"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Foto 3
                                    </label>
                                    <Input
                                        id="foto_3"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="foto_4"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Foto 4
                                    </label>
                                    <Input
                                        id="foto_4"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="foto_5"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Foto 5
                                    </label>
                                    <Input
                                        id="foto_5"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Bagian Tautan Platform --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Tautan Platform (Opsional)
                            </h3>
                            {/* Kita beri ID unik untuk setiap input link */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label
                                        htmlFor="link_gojek"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Gojek
                                    </label>
                                    <Input
                                        id="link_gojek"
                                        placeholder="https://..."
                                        value={formData.link_gojek}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_grab"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Grab
                                    </label>
                                    <Input
                                        id="link_grab"
                                        placeholder="https://..."
                                        value={formData.link_grab}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_maxim"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Maxim
                                    </label>
                                    <Input
                                        id="link_maxim"
                                        placeholder="https://..."
                                        value={formData.link_maxim}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_shopee"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Shopee
                                    </label>
                                    <Input
                                        id="link_shopee"
                                        placeholder="https://..."
                                        value={formData.link_shopee}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_tokopedia"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Tokopedia
                                    </label>
                                    <Input
                                        id="link_tokopedia"
                                        placeholder="https://..."
                                        value={formData.link_tokopedia}
                                        onChange={handleTextChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Bagian Tautan Sosial Media --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Tautan Sosial Media (Opsional)
                            </h3>
                            {/* Kita beri ID unik untuk setiap input link */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label
                                        htmlFor="link_instagram"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Instagram
                                    </label>
                                    <Input
                                        id="link_instagram"
                                        placeholder="https://..."
                                        value={formData.link_instagram}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_tiktok"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Tiktok
                                    </label>
                                    <Input
                                        id="link_tiktok"
                                        placeholder="https://..."
                                        value={formData.link_tiktok}
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="link_facebook"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Facebook
                                    </label>
                                    <Input
                                        id="link_facebook"
                                        placeholder="https://..."
                                        value={formData.link_facebook}
                                        onChange={handleTextChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <CardFooter className="flex justify-end p-0 pt-6">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full md:w-auto"
                                // Tambahkan disabled saat loading
                                disabled={isLoading}
                            >
                                {/* Ubah teks tombol saat loading */}
                                {isLoading ? "Mengirim..." : "Kirim Pendaftaran"}
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
