"use client";

import SectionOne from "../faq/SelectionOne";
import { MainLayoutPengungjung } from "../MainLayoutPengunjung";

const FAQPage = () => {

    // Function to handle the toggle of FAQ items
    const faqs = [
        {
            q: "Bagaimana cara mendaftar sebagai penjual?",
            a: "Klik tombol Daftar, isi data yang diminta, lalu verifikasi email. Setelah terverifikasi, lengkapi profil toko dan mulai unggah produk."
        },
        {
            q: "Bagaimana cara membeli produk?",
            a: "Cari produk yang diinginkan, masukkan ke keranjang, lalu lanjutkan ke pembayaran. Pilih metode pembayaran yang tersedia dan konfirmasi."
        },
        {
            q: "Apa metode pengiriman yang tersedia?",
            a: "Kami mendukung beberapa kurir standar dan layanan pengiriman instan tergantung lokasi penjual dan pembeli."
        },
        {
            q: "Bagaimana jika saya ingin mengajukan pengembalian barang?",
            a: "Ajukan permintaan pengembalian melalui halaman pesanan dalam menu akun, sertakan alasan dan foto bukti jika diperlukan."
        },
        {
            q: "Bagaimana cara menghubungi layanan pelanggan?",
            a: "Gunakan fitur Chat Bantuan di halaman Bantuan atau kirim email ke support@lapakkito.example."
        }
    ];

    return (
        <>
            <MainLayoutPengungjung>
                <SectionOne faqs={faqs} />

            </MainLayoutPengungjung>
        </>
    )
}

export default FAQPage;