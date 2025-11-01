import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SectionOne() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start">
      <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-950 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
                Selamat Datang di
                <br />
                <span className="text-[#D9534F]">Admin Lapak Kito</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                Jaga kualitas dan keamanan platform. Saat ini ada konten baru
                yang perlu Anda verifikasi.
              </p>
              <Button
                asChild // <-- 2. Tambahkan 'asChild'
                className="mt-8 bg-[#E65A4B] text-[#EFEFEF] hover:bg-[#C9302C] rounded-lg px-8 py-3 text-lg font-semibold transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-5"
              >
                <Link href="/kelola-umkm">Kelola Verifikasi!</Link>
              </Button>
            </div>
            <div className="relative h-64 lg:h-full min-h-[300px] lg:ml-48">
              <img
                src="/images/Admin-bro.png"
                alt="Ilustrasi UMKM"
                className="w-full h-full object-contain animate-float-custom animate-float-custom"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
