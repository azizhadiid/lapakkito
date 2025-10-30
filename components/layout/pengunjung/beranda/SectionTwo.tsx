import { Card } from "@/components/ui/card";
import { CreditCard, Handshake, Search } from "lucide-react";

export default function SectionTwo() {
    return (
        <section className="py-16 md:py-24 relative -mt-16 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* HANYA CARD INI YANG BERWARNA PUTIH */}
                <Card className="bg-[#F7F6F6] shadow-xl rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-950 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        Bagaimana Ini Bekerja
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1: Temukan */}
                        <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all ease-in-out hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                            <div className="flex justify-center items-center h-16 w-16 bg-[#4E4039]/10 rounded-lg mx-auto mb-4">
                                <Search className="w-8 h-8 text-[#4E4039]" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4E4039]">Temukan</h3>
                            <p className="text-sm text-[#4E4039]">
                                Jelajahi direktori UMKM Jambi dengan mudah. LapakKito membantu kamu menemukan pelaku usaha lokal yang sesuai  dengan kebutuhanmu. Cukup cari berdasarkan kategori, lokasi, atau nama usaha—semua informasi tersedia dalam satu tempat.
                            </p>
                        </div>

                        {/* Card 2: Hubungi */}
                        <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all ease-in-out hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                            <div className="flex justify-center items-center h-16 w-16 bg-[#4E4039]/10 rounded-lg mx-auto mb-4">
                                <Handshake className="w-8 h-8 text-[#4E4039]" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4E4039]">Hubungi</h3>
                            <p className="text-sm text-[#4E4039]">
                                Ingin tahu lebih lanjut tentang produk atau layanan? Gunakan fitur Hubungi untuk mengirim pesan, menelepon, atau mengakses media sosial UMKM pilihanmu. LapakKito memudahkan komunikasi agar transaksi dan kolaborasi berjalan lancar.
                            </p>
                        </div>

                        {/* Card 3: Transaksi */}
                        <div className="bg-[#EFEFEF] rounded-lg p-6 text-center shadow-lg transition-all ease-in-out hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400">
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
    );
}