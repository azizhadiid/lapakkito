import supabase from "@/lib/db";
import { MapPin, ArchiveX } from "lucide-react"; // Tambahkan ArchiveX untuk ikon "data kosong"
import Link from "next/link";


// Komponen UmkmCard (Saya modifikasi sedikit untuk fallback)
function UmkmCard({
    id,
    imgSrc,
    title,
    description,
    location,
}: {
    id: string;
    imgSrc: string | null; // Bisa jadi null dari database
    title: string;
    description: string;
    location: string | null; // Bisa jadi null dari database
}) {
    // Tentukan gambar fallback jika imgSrc null
    const displayImage = imgSrc || "/images/placeholder-umkm.jpg"; // Ganti dengan path gambar default Anda

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden 
            transition-all duration-500 hover:-translate-y-2 border border-gray-100
            w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]">
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden bg-gray-200">
                <img
                    src={displayImage} // Gunakan displayImage
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#4E4039] group-hover:text-[#D9534F] transition-colors duration-300 line-clamp-1">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4E4039] leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-[#4E4039] pt-2 border-t border-gray-100">
                    <MapPin className="w-4 h-4 text-[#D9534F] flex-shrink-0" />
                    {/* Tampilkan fallback jika lokasi null */}
                    <span className="line-clamp-1">{location || "Lokasi tidak tersedia"}</span>
                </div>

                {/* Button */}
                <Link
                    href={`/umkm/${id}`} // Gunakan ID dinamis
                    className="w-full mt-4 py-3 px-6 bg-white border-2 border-[#D9534F] text-[#D9534F] rounded-lg font-semibold hover:bg-[#D9534F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                    <span>Lihat Detail</span>
                    <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

// Komponen Utama SectionThree (Async)
export default async function SectionThree() {
    // 1. Ambil data dari Supabase langsung
    const { data: umkms, error } = await supabase
        .from("umkm")
        .select("id, nama_usaha, deskripsi, alamat, foto_1")
        .eq("status", true)
        .limit(3)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching UMKM data:", error.message);
    }

    return (
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4E4039]">
                    UMKM Yang Ada Saat ini
                </h2>

                {/* 4. Render Kondisional */}
                {/* Cek jika 'umkms' null, error, atau panjangnya 0 */}
                {!umkms || umkms.length === 0 ? (
                    // Tampilan jika TIDAK ADA DATA
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-[#4E4039] opacity-75">
                        <ArchiveX className="w-16 h-16" />
                        <p className="text-lg font-medium">
                            Tidak ada data UMKM saat ini.
                        </p>
                    </div>
                ) : (
                    // Tampilan jika DATA DITEMUKAN
                    <div className="flex flex-wrap items-stretch justify-center gap-8">
                        {/* 5. Mapping data ke UmkmCard */}
                        {umkms.map((umkm) => (
                            <UmkmCard
                                key={umkm.id}
                                id={umkm.id}
                                imgSrc={umkm.foto_1}
                                title={umkm.nama_usaha}
                                description={umkm.deskripsi}
                                location={umkm.alamat}
                            />
                        ))}
                    </div>
                )}

                {/* Tombol Lihat Selengkapnya (tetap ada) */}
                <div className="text-center mt-12">
                    <Link href="/umkm" className="text-lg text-[#D9534F] font-semibold underline hover:text-[#C9302C] decoration-2 underline-offset-4">
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
        </section>
    );
}