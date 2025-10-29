import { Skeleton } from "@/components/ui/skeleton"

/**
 * Ini adalah kerangka untuk SATU kartu UMKM.
 * Kita buat sebagai helper di file yang sama.
 */
function SkeletonCard() {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]">
            {/* Gambar */}
            <Skeleton className="h-64 w-full" />

            <div className="p-6 space-y-4">
                {/* Judul */}
                <Skeleton className="h-7 w-3/4" />

                {/* Deskripsi */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                {/* Lokasi */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-1/3" />
                </div>

                {/* Tombol */}
                <Skeleton className="h-12 w-full rounded-lg" />
            </div>
        </div>
    )
}

/**
 * Ini adalah komponen skeleton LENGKAP untuk Section 3
 */
export default function UmkmSectionSkeleton() {
    return (
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Kerangka Judul Section */}
                <Skeleton className="h-10 md:h-12 w-1/2 max-w-sm mx-auto mb-12" />

                {/* Kerangka Grid Kartu */}
                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>

                {/* Kerangka Tombol "Lihat Selengkapnya" */}
                <Skeleton className="h-5 w-1/4 max-w-xs mx-auto mt-12" />

            </div>
        </section>
    )
}