import { Skeleton } from "@/components/ui/skeleton";

export default function UmkmAdminSkeleton() {
  return (
    <>
      {/* 1. Skeleton untuk Header (Judul dan Filter) */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Judul Halaman */}
        <Skeleton className="h-12 w-3/4 max-w-lg" />

        {/* Bar Pencarian dan Filter */}
        <div className="w-full max-w-2xl mt-8 flex flex-col md:flex-row gap-3">
          {/* Input Pencarian */}
          <Skeleton className="h-12 w-full" />
          {/* Tombol Kategori */}
          <Skeleton className="h-12 w-full md:w-48 flex-shrink-0" />
        </div>
      </div>

      {/* 2. Skeleton untuk Tampilan Tabel (Desktop) */}
      {/* Perhatikan penghapusan padding horizontal di sini */}
      <section className="hidden lg:block container mx-auto pb-5 mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
        {/* Header Tabel */}
        {/* Latar belakang bg-gray-200 sesuai dengan bg-gray-200 di TableHeader Anda */}
        <Skeleton className="h-12 w-full rounded-none rounded-t-lg bg-gray-200" />
        
        {/* Baris-baris Tabel. Meniru 6 baris data per halaman. */}
        <div className="p-4 space-y-4"> {/* Padding di dalam sini untuk setiap baris */}
          {[...Array(6)].map((_, i) => ( // Sesuaikan dengan CARDS_PER_PAGE Anda (6)
            <div key={i} className="flex justify-between items-center h-10 w-full">
              {/* Kolom UMKM, Kategori, Konten (diwakili dengan 3 skeleton) */}
              <Skeleton className="h-6 w-1/5" />
              <Skeleton className="h-6 w-1/6" />
              <Skeleton className="h-6 w-1/5" />
              {/* Kolom Verifikasi (diwakili dengan 2 skeleton tombol) */}
              <div className="flex gap-2">
                <Skeleton className="h-8 w-16" /> {/* Tombol Tolak */}
                <Skeleton className="h-8 w-16" /> {/* Tombol Setujui */}
              </div>
              {/* Kolom Status */}
              <Skeleton className="h-6 w-1/6" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Skeleton untuk Tampilan Card (Mobile) */}
      {/* Padding di section ini tetap ada untuk tampilan mobile */}
      <section className="block lg:hidden mt-10 space-y-6 px-4">
        {/* Ulangi sesuai CARDS_PER_PAGE Anda (6) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 border flex flex-col"
          >
            {/* Bagian Atas Card: Nama Usaha, Kategori, Status, dan Tombol Lihat */}
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-32" /> {/* Nama Usaha */}
                <Skeleton className="h-4 w-24 mt-2" /> {/* Kategori */}
                <Skeleton className="h-5 w-36 mt-3" /> {/* Status Badge */}
              </div>
              <Skeleton className="h-10 w-16 flex-shrink-0" /> {/* Tombol Lihat */}
            </div>
            {/* Bagian Bawah Card (Tombol Verifikasi/Tolak) */}
            <div className="flex justify-end gap-2 mt-4">
              <Skeleton className="h-10 w-24" /> {/* Tombol Tolak */}
              <Skeleton className="h-10 w-24" /> {/* Tombol Setujui */}
            </div>
          </div>
        ))}
      </section>

      {/* 4. Skeleton untuk Paginasi */}
      <div className="mt-16 flex justify-center">
        <Skeleton className="h-10 w-64" />
      </div>
    </>
  );
}