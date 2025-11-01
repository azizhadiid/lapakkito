import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
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
        <div className="
            group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden 
            transition-all hover:-translate-y-2 border border-gray-100
            w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]
            
            animate-in fade-in slide-in-from-bottom-5 duration-500
        ">
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
                    href={`/umkm/${id}`} // <-- Gunakan 'id' untuk href dinamis
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

const dummyData = [
    {
        id: "toko-jas-jambi",
        imgSrc: "/images/jas.jpg",
        title: "Toko Jas Jambi",
        description: "Toko Jas Jambi menyediakan jas formal dan semi-formal untuk berbagai acara...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-kue-jambi",
        imgSrc: "/images/donut.jpg",
        title: "Toko Kue Jambi",
        description: "Toko Kue Jambi menjual aneka kue lezat untuk acara dan konsumsi harian...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-donat-jambi",
        imgSrc: "/images/kue.jpg",
        title: "Toko Donat Jambi",
        description: "Toko Donat Jambi menawarkan donat lembut dengan berbagai topping...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    // (Data diulang 2x lagi agar jadi 9)
    {
        id: "toko-jas-jambi-2",
        imgSrc: "/images/jas.jpg",
        title: "Toko Jas Jambi 2",
        description: "Toko Jas Jambi menyediakan jas formal dan semi-formal untuk berbagai acara...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-kue-jambi-2",
        imgSrc: "/images/donut.jpg",
        title: "Toko Kue Jambi 2",
        description: "Toko Kue Jambi menjual aneka kue lezat untuk acara dan konsumsi harian...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-donat-jambi-2",
        imgSrc: "/images/kue.jpg",
        title: "Toko Donat Jambi 2",
        description: "Toko Donat Jambi menawarkan donat lembut dengan berbagai topping...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-jas-jambi-3",
        imgSrc: "/images/jas.jpg",
        title: "Toko Jas Jambi 3",
        description: "Toko Jas Jambi menyediakan jas formal dan semi-formal untuk berbagai acara...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-kue-jambi-3",
        imgSrc: "/images/donut.jpg",
        title: "Toko Kue Jambi 3",
        description: "Toko Kue Jambi menjual aneka kue lezat untuk acara dan konsumsi harian...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
    {
        id: "toko-donat-jambi-3",
        imgSrc: "/images/kue.jpg",
        title: "Toko Donat Jambi 3",
        description: "Toko Donat Jambi menawarkan donat lembut dengan berbagai topping...",
        location: "Jalan Kota Baru, Kota Jambi"
    },
];

export default function UMKMCardSection() {
    return (
        // Latar belakang #E2E0DD agar konsisten dengan halaman Beranda
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Container Flexbox untuk Kartu */}
                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    {dummyData.map((item) => (
                        <UmkmCard
                            key={item.id}      // <-- Gunakan id unik untuk 'key'
                            id={item.id}       // <-- Kirim 'id' sebagai prop
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            location={item.location}
                        />
                    ))}
                </div>

                {/* === Pagination === */}
                <div className="mt-16">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">9</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">10</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </section>
    );
}