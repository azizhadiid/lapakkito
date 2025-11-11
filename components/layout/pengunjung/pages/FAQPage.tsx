"use client";

import SectionOne from "../faq/SelectionOne";
import { MainLayoutPengunjung } from "../MainLayoutPengunjung";

const FAQPage = () => {

    // Function to handle the toggle of FAQ items
    const faqs = [
        {
            q: "Bagaimana cara mendaftar sebagai penjual?",
            a: "Klik tombol Register UMKM, isi data yang diminta. Jika selesai mengirim data, tunggu verifikasi dari admin."
        },
        {
            q: "Bagaimana cara menghubungi penjual?",
            a: "Cari produk yang diinginkan, klik hubungi atau klik sosial media yang tersedia."
        },
        {
            q: "Apakah metode pemesanan tersedia?",
            a: "Saat ini, platform kami hanya menyediakan informasi profil UMKM saja."
        },
        {
            q: "Bagaimana cara menghubungi admin?",
            a: "Hubungi kami melalui email lapakkito10@gmail.com"
        },
        {
            q: "Apakah ada biaya untuk mendaftar UMKM?",
            a: "Tidak ada biaya. Pendaftaran UMKM di platform kami sepenuhnya gratis."
        },
        {
            q: "Berapa lama proses verifikasi UMKM?",
            a: "Proses verifikasi biasanya memakan waktu 1-2 hari kerja. Kami akan memberitahu Anda melalui email setelah proses selesai."
        }
    ];

    return (
        <>
            <MainLayoutPengunjung>
                <SectionOne faqs={faqs} />

            </MainLayoutPengunjung>
        </>
    )
}

export default FAQPage;