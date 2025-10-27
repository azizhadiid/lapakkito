import { Navbar } from "@/components/layout/pengunjung/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Handshake, CreditCard, MapPin } from "lucide-react"
import Link from "next/link"

// Komponen untuk kartu UMKM
function UmkmCard({
  imgSrc,
  title,
  description,
  location,
}: {
  imgSrc: string;
  title: string;
  description: string;
  location: string;
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      {/* Image Container with Overlay Effect */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-200">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#D9534F] transition-colors duration-300 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-700 pt-2 border-t border-gray-100">
          <MapPin className="w-4 h-4 text-[#D9534F] flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Button */}
        <button className="w-full mt-4 py-3 px-6 bg-white border-2 border-[#D9534F] text-[#D9534F] rounded-lg font-semibold hover:bg-[#D9534F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          <span>Lihat Detail</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}


// Halaman Utama
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="bg-[#EFEFEF]">
        {/* === Hero Section === */}
        <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Kolom Teks */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-950 leading-tight">
                  Selamat Datang di
                  <br />
                  <span className="text-[#D9534F]">Lapak Kito</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Dukung UMKM untuk pertumbuhan ekonomi daerah. Temukan UMKM
                  lokal terbaik di Kota Jambi hanya dengan beberapa klik.
                </p>
                <Button className="mt-8 bg-[#E65A4B] text-[#EFEFEF] hover:bg-[#C9302C] rounded-lg px-8 py-3 text-lg font-semibold transition-transform hover:scale-105">
                  Lihat UMKM!
                </Button>
              </div>
              {/* Kolom Gambar */}
              <div className="relative h-64 lg:h-full min-h-[300px] lg:ml-48">
                <img
                  src="/images/trade.png"
                  alt="Ilustrasi UMKM"
                  className="w-full h-full object-contain animate-float-custom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === "Bagaimana Ini Bekerja" Section === */}
        <section className="py-16 md:py-24 relative -mt-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* HANYA CARD INI YANG BERWARNA PUTIH */}
            <Card className="bg-[#F7F6F6] shadow-xl rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-950">
                Bagaimana Ini Bekerja
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1: Temukan */}
                <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <div className="flex justify-center items-center h-16 w-16 bg-[#4E4039]/10 rounded-lg mx-auto mb-4">
                    <Search className="w-8 h-8 text-[#4E4039]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4E4039]">Temukan</h3>
                  <p className="text-sm text-[#4E4039]">
                    Jelajahi direktori UMKM Jambi dengan mudah. LapakKito membantu kamu menemukan pelaku usaha lokal yang sesuai  dengan kebutuhanmu. Cukup cari berdasarkan kategori, lokasi, atau nama usaha—semua informasi tersedia dalam satu tempat.
                  </p>
                </div>

                {/* Card 2: Hubungi */}
                <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <div className="flex justify-center items-center h-16 w-16 bg-[#4E4039]/10 rounded-lg mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-[#4E4039]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4E4039]">Hubungi</h3>
                  <p className="text-sm text-[#4E4039]">
                    Ingin tahu lebih lanjut tentang produk atau layanan? Gunakan fitur Hubungi untuk mengirim pesan, menelepon, atau mengakses media sosial UMKM pilihanmu. LapakKito memudahkan komunikasi agar transaksi dan kolaborasi berjalan lancar.
                  </p>
                </div>

                {/* Card 3: Transaksi */}
                <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <div className="flex justify-center items-center h-16 w-16 bg-[#4E4039]/10 rounded-lg mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-[#4E4039]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4E4039]">Transaksi</h3>
                  <p className="text-sm text-[#4E4039]">
                    LapakKito mendukung transaksi langsung antara pembeli dan pelaku usaha. Cukup klik tombol Hubungi atau Order Sekarang untuk terhubung dan mulai belanja. Tanpa login, tanpa ribet langsung ke sumbernya.
                  </p>
                </div>

              </div>
            </Card>
          </div>
        </section>

        {/* === "UMKM Yang Ada" Section === */}
        {/* Menggunakan hex code #F7F6F6 untuk background */}
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4E4039]">
              UMKM Yang Ada Saat ini
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UmkmCard
                imgSrc="/images/jas.jpg"
                title="Toko Jas Jambi"
                description="Toko Jas Jambi menyediakan jas formal dan semi-formal untuk berbagai acara, dengan layanan penyesuaian dan konsultasi gaya."
                location="Jalan Kota Baru, Kota Jambi"
              />
              <UmkmCard
                imgSrc="/images/donut.jpg"
                title="Toko Kue Jambi"
                description="Toko Kue Jambi menjual aneka kue lezat untuk acara dan konsumsi harian, bisa dipesan langsung."
                location="Jalan Kota Baru, Kota Jambi"
              />
              <UmkmCard
                imgSrc="/images/kue.jpg"
                title="Toko Donat Jambi"
                description="Toko Donat Jambi menawarkan donat lembut dengan berbagai topping, cocok untuk camilan harian atau acara spesial."
                location="Jalan Kota Baru, Kota Jambi"
              />
            </div>

            <div className="text-center mt-12">
              {/* Menggunakan hex code #D9534F dan hover #C9302C */}
              <Link href="/umkm" className="text-lg text-[#D9534F] font-semibold underline hover:text-[#C9302C] decoration-2 underline-offset-4">
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* === Footer Section === */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Lapak Kito. Dibuat dengan ❤️ di Jambi.</p>
        </div>
      </footer>
    </div>
  )
}