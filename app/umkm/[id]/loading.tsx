// app/umkm/[slug]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function DetailUmkmLoading() {
    return (
        // Gunakan layout dan warna yang sama dengan halaman aslinya
        <div className="bg-[#EFEFEF] py-24 md:py-32 animate-pulse">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* === Kerangka SECTION ATAS === */}
                <div className="
          grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12
          bg-white p-6 md:p-8 rounded-2xl shadow-lg
        ">

                    {/* --- Kerangka KOLOM KIRI: Galeri --- */}
                    <div className="lg:col-span-3">
                        <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                    </div>

                    {/* --- Kerangka KOLOM KANAN: Info --- */}
                    <div className="lg:col-span-2 flex flex-col space-y-5">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-10 w-full" />
                        <div className="flex gap-6">
                            <Skeleton className="h-5 w-1/4" />
                            <Skeleton className="h-5 w-1/4" />
                        </div>

                        {/* Deskripsi */}
                        <div className="space-y-2 pt-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-full" />
                        </div>

                        <Skeleton className="h-px w-full my-4" />

                        {/* Links */}
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-1/4" />
                            <div className="flex gap-3">
                                <Skeleton className="h-10 w-10 rounded-md" />
                                <Skeleton className="h-10 w-10 rounded-md" />
                                <Skeleton className="h-10 w-10 rounded-md" />
                            </div>
                        </div>

                        {/* Tombol CTA */}
                        <Skeleton className="w-full h-12 mt-4" />
                    </div>
                </div>

                {/* === Kerangka SECTION BAWAH: Maps === */}
                <div className="mt-12 bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                    <Skeleton className="h-8 w-1/3 mb-6" />
                    <Skeleton className="w-full h-[450px] rounded-lg" />
                </div>

            </div>
        </div>
    )
}