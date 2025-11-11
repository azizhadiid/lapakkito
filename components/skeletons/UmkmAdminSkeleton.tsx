import { Skeleton } from "@/components/ui/skeleton";

export default function UmkmPageSectionSkeletonCard() {
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
      <section className="hidden lg:block container mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
        {/* Header Tabel */}
        <Skeleton className="h-12 w-full rounded-none rounded-t-lg bg-gray-200" />
        
        {/* Baris-baris Tabel */}
        <div className="p-4 space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </section>

      {/* 3. Skeleton untuk Tampilan Card (Mobile) */}
      <section className="block lg:hidden mt-10 space-y-6 px-4">
        {/* Ulangi 3-4 kali untuk meniru daftar */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 border flex flex-col"
          >
            {/* Bagian Atas Card */}
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-24 mt-2" />
                <Skeleton className="h-5 w-20 mt-3" />
              </div>
              <Skeleton className="h-10 w-16 flex-shrink-0" />
            </div>
            {/* Bagian Bawah Card (Tombol) */}
            <div className="flex justify-end gap-2 mt-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
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