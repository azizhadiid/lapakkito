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
  imgSrc: string
  title: string
  description: string
  location: string
}) {
  return (
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 h-20">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          {/* Menggunakan hex code #D9534F untuk ikon */}
          <MapPin className="w-4 h-4 mr-2 text-[#D9534F]" />
          <span>{location}</span>
        </div>
        <Button
          variant="outline"
          // Menggunakan hex code untuk border, text, dan hover
          className="w-full border-[#D9534F] text-[#D9534F] hover:bg-[#D9534F] hover:text-white"
        >
          Lihat Detail &rarr;
        </Button>
      </CardContent>
    </Card>
  )
}

// Halaman Utama
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main>
        {/* === Hero Section === */}
        {/* Menggunakan hex code #F7F6F6 untuk background */}
        <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#F7F6F6] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Kolom Teks */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Selamat Datang di
                  <br />
                  {/* Menggunakan hex code #D9534F untuk teks */}
                  <span className="text-[#D9534F]">Lapak Kito</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Dukung UMKM untuk pertumbuhan ekonomi daerah
                </p>
                {/* Menggunakan hex code #D9534F dan hover #C9302C */}
                <Button className="mt-8 bg-[#D9534F] text-white hover:bg-[#C9302C] rounded-full px-8 py-3 text-lg font-semibold transition-transform hover:scale-105">
                  Lihat UMKM!
                </Button>
              </div>

              {/* Kolom Gambar */}
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <img
                  src="/images/trade.png"
                  alt="Ilustrasi UMKM"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === "Bagaimana Ini Bekerja" Section === */}
        <section className="py-16 md:py-24 bg-white relative -mt-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Bagaimana Ini Bekerja
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1: Temukan */}
                <div className="bg-gray-100 rounded-lg p-6 text-center shadow-sm">
                  {/* Menggunakan hex code #D9534F dengan opacity 10% */}
                  <div className="flex justify-center items-center h-16 w-16 bg-[#D9534F]/10 rounded-full mx-auto mb-4">
                    <Search className="w-8 h-8 text-[#D9534F]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Temukan</h3>
                  <p className="text-sm text-gray-600">
                    Jelajahi UMKM Jambi dengan mudah. Temukan produk atau jasa
                    yang Anda butuhkan menggunakan fitur pencarian dan kategori.
                  </p>
                </div>

                {/* Card 2: Hubungi */}
                <div className="bg-gray-100 rounded-lg p-6 text-center shadow-sm">
                  <div className="flex justify-center items-center h-16 w-16 bg-[#D9534F]/10 rounded-full mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-[#D9534F]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Hubungi</h3>
                  <p className="text-sm text-gray-600">
                    Ingin tahu lebih lanjut? Hubungi penjual atau penyedia jasa
                    langsung melalui informasi kontak yang tersedia di halaman
                    detail.
                  </p>
                </div>

                {/* Card 3: Transaksi */}
                <div className="bg-gray-100 rounded-lg p-6 text-center shadow-sm">
                  <div className="flex justify-center items-center h-16 w-16 bg-[#D9534F]/10 rounded-full mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-[#D9534F]" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Transaksi</h3>
                  <p className="text-sm text-gray-600">
                    LapakKito mendukung transaksi langsung antara penjual dan
                    pembeli. Lakukan kesepakatan dan transaksi secara aman dan
                    nyaman.
                  </p>
                </div>

              </div>
            </Card>
          </div>
        </section>

        {/* === "UMKM Yang Ada" Section === */}
        {/* Menggunakan hex code #F7F6F6 untuk background */}
        <section className="py-16 md:py-24 bg-[#F7F6F6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
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