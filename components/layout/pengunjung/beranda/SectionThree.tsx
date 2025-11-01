import { MapPin } from "lucide-react";
import Link from "next/link";

function UmkmCard({
    id,
    imgSrc,
    title,
    description,
    location,
}: {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
    location: string;
}) {
    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden 
            transition-all duration-500 hover:-translate-y-2 border border-gray-100
            w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]">
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
                    <span className="line-clamp-1">{location}</span>
                </div>

                {/* Button */}
                <Link
                    href={`/umkm/${id}`}
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

export default async function SectionThree() {
    // Sebelum data diambil await 3 sek
    await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4E4039]">
                    UMKM Yang Ada Saat ini
                </h2>

                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    <UmkmCard
                        id="toko-jas-jambi"
                        imgSrc="/images/jas.jpg"
                        title="Toko Jas Jambi"
                        description="Toko Jas Jambi menyediakan jas formal dan semi-formal untuk berbagai acara, dengan layanan penyesuaian dan konsultasi gaya."
                        location="Jalan Kota Baru, Kota Jambi"
                    />
                    <UmkmCard
                        id="toko-kue-jambi"
                        imgSrc="/images/donut.jpg"
                        title="Toko Kue Jambi"
                        description="Toko Kue Jambi menjual aneka kue lezat untuk acara dan konsumsi harian, bisa dipesan langsung."
                        location="Jalan Kota Baru, Kota Jambi"
                    />
                    <UmkmCard
                        id="toko-donat-jambi"
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
    );
}