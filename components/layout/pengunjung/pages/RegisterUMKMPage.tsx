"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react';
import supabase from "@/lib/db";

import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import SelectionFour from "../register-umkm/SelectionFour";
import SelectionOne from "../register-umkm/SelectionOne";
import SelectionThree from "../register-umkm/SelectionThree";
import SelectionTwo from "../register-umkm/SelectionTwo";

import { FileData, FormData } from '@/lib/type';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function RegisterUMKMPage() {
    const [formData, setFormData] = useState<FormData>({
        nama_usaha: "",
        nama_pemilik: "",
        email: "",
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

    const [fileData, setFileData] = useState<FileData>({
        foto_1: null,
        foto_2: null,
        foto_3: null,
        foto_4: null,
        foto_5: null,
    });

    // State untuk loading
    const [isLoading, setIsLoading] = useState(false);
    // State untuk checkbox "Terms"
    const [termsAccepted, setTermsAccepted] = useState(false);
    // State untuk hitung karakter (jika masih diperlukan)
    const [deskripsiCount, setDeskripsiCount] = useState(0);

    // Handler untuk input teks dan textarea
    const handleTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target; // Kita akan gunakan 'id'
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));

        if (id === "deskripsi") {
            setDeskripsiCount(value.length);
        }
    };

    // Handler untuk komponen Select
    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handler untuk input file
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, files } = e.target;
        if (files && files[0]) {
            setFileData((prev) => ({
                ...prev,
                [id as keyof FileData]: files[0],
            }));
        }
    };

    // Fungsi helper untuk UPLOAD SATU FILE 
    const uploadFoto = async (file: File | null): Promise<string | null> => {
        if (!file) return null;

        const fileName = `public/${Date.now()}-${file.name}`;
        const bucketName = "umkm_photos"; // Pastikan ini nama bucket Anda

        const { error: uploadError } = await supabase.storage
            .from(bucketName)
            .upload(fileName, file);

        if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error(`Gagal mengupload ${file.name}: ${uploadError.message}`);
        }

        const { data } = supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName);

        return data.publicUrl;
    };

    // --- HANDLER UTAMA SAAT SUBMIT ---
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;

        // === 1. VALIDASI MANUAL ===

        // Validasi Terms & Conditions
        if (!termsAccepted) {
            Swal.fire({
                title: 'Peringatan!',
                text: 'Anda harus menyetujui syarat dan ketentuan untuk mendaftar.',
                icon: 'warning',
                confirmButtonColor: '#E65A4B'
            });
            return;
        }

        const {
            nama_usaha,
            nama_pemilik,
            nomor_hp,
            alamat,
            kategori,
            tahun_berdiri,
            deskripsi,
            email,
        } = formData;

        // Cek kolom wajib 
        if (
            !nama_usaha ||
            !nama_pemilik ||
            !nomor_hp ||
            !alamat ||
            !kategori ||
            !tahun_berdiri ||
            !deskripsi ||
            !email
        ) {
            Swal.fire({
                title: 'Form Belum Lengkap',
                text: 'Harap isi semua kolom informasi dasar yang wajib (bertanda *).',
                icon: 'warning',
                confirmButtonColor: '#E65A4B'
            });
            return;
        }

        if (deskripsi.length < 10 || deskripsi.length > 1000) {
            Swal.fire({
                title: 'Deskripsi Tidak Valid',
                text: 'Deskripsi harus antara 10 sampai 1000 karakter.',
                icon: 'warning',
                confirmButtonColor: '#E65A4B'
            });
            return;
        }

        setIsLoading(true); // Mulai loading

        try {
            // === 2. UPLOAD SEMUA FOTO ===
            const [url1, url2, url3, url4, url5] = await Promise.all([
                uploadFoto(fileData.foto_1),
                uploadFoto(fileData.foto_2),
                uploadFoto(fileData.foto_3),
                uploadFoto(fileData.foto_4),
                uploadFoto(fileData.foto_5),
            ]);

            // === 3. SIAPKAN DATA UNTUK DATABASE ===
            // Ambil tahun dari input type="date"
            const tahunBerdiriAngka = new Date(formData.tahun_berdiri).getFullYear();

            const dataToInsert = {
                ...formData, // Ambil semua data teks (termasuk link, dll)
                tahun_berdiri: tahunBerdiriAngka, // Ubah ke angka TAHUN saja
                status: false, // Default status
                // Masukkan URL foto
                foto_1: url1,
                foto_2: url2,
                foto_3: url3,
                foto_4: url4,
                foto_5: url5,
            };

            // === 4. INSERT DATA KE DATABASE ===
            const { error: insertError } = await supabase
                .from("umkm")
                .insert(dataToInsert);

            if (insertError) {
                throw new Error(`Gagal menyimpan data: ${insertError.message}`);
            }

            // === 5. SUKSES ===
            // **Pesan alert sesuai permintaan Anda**
            Swal.fire({
                title: 'Pendaftaran Berhasil!',
                text: 'Silahkan tunggu verifikasi dari admin kami.',
                icon: 'success',
                confirmButtonColor: '#4E4039' // Warna yang lebih 'netral' untuk sukses
            });

            // Reset semua form
            setFormData({
                nama_usaha: "", nama_pemilik: "", email: "", nomor_hp: "",
                alamat: "", lokasi_gmap: "", kategori: "", tahun_berdiri: "",
                deskripsi: "", link_instagram: "", link_tiktok: "", link_facebook: "",
                link_gojek: "", link_grab: "", link_maxim: "", link_shopee: "",
                link_tokopedia: "",
            });
            setFileData({
                foto_1: null, foto_2: null, foto_3: null, foto_4: null, foto_5: null,
            });
            setTermsAccepted(false); // Reset checkbox
            setDeskripsiCount(0);
            (e.target as HTMLFormElement).reset(); // Reset input file

        } catch (error: unknown) {
            console.error("Kesalahan saat submit form:", error);

            let errorMessage = "Terjadi kesalahan yang tidak diketahui.";

            // Periksa tipe error sebelum mengakses .message
            if (error instanceof Error) {
                errorMessage = `Gagal mendaftar: ${error.message}`;
            } else if (typeof error === 'string') {
                errorMessage = error;
            }

            Swal.fire({
                title: 'Terjadi Kesalahan',
                text: errorMessage,
                icon: 'error',
                confirmButtonColor: '#E65A4B'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <MainLayoutPengunjung>
            <section className="relative py-23 md:py-30">
                <div className="max-w-xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-start mb-10">
                        <h1 className="text-3xl font-bold text-[#4E4039]">
                            Daftarkan UMKM Anda!
                        </h1>
                        <p className="mt-2 text-[#4E4039]">
                            Selamat datang di LAPAK KITO! Daftarkan UMKM anda untuk menjangkau pasar yang lebih luas bersama kami 👋
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 md:p-10">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-10">
                                <SelectionOne
                                    formData={formData}
                                    handleTextChange={handleTextChange}
                                    handleSelectChange={handleSelectChange}
                                    deskripsiCount={deskripsiCount}
                                />
                                <SelectionTwo
                                    formData={formData}
                                    handleTextChange={handleTextChange}
                                />
                                <SelectionThree
                                    onFileChange={handleFileChange}
                                />
                                <SelectionFour
                                    isLoading={isLoading}
                                    termsAccepted={termsAccepted}
                                    onTermsChange={setTermsAccepted}
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </MainLayoutPengunjung>
    )
}