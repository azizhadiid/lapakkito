"use client";

import { useState, useEffect, useMemo } from "react";

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { UmkmCardData } from "@/lib/type";
import supabase from "@/lib/db";
import UmkmPageSectionSkeletonCard from "@/components/skeletons/UmkmSectionSkeletonForPage";

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

interface CardSectionProps {
    searchQuery: string;
    category: string;
}

export default function UMKMCardSection({ searchQuery, category }: CardSectionProps) {
    // State untuk render card
    const [allUmkm, setAllUmkm] = useState<UmkmCardData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // State untuk pegination
    const [currentPage, setCurrentPage] = useState(1);
    const CARDS_PER_PAGE = 9;

    useEffect(() => {
        const fetchUmkm = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('umkm')
                .select('id, nama_usaha, deskripsi, alamat, foto_1, kategori')
                .eq('status', true);

            if (error) {
                console.error("Gagal fetch UMKM:", error.message);
            } else if (data) {
                setAllUmkm(data as UmkmCardData[]);
            }
            setIsLoading(false);
        };

        fetchUmkm();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, category]);

    const filteredUmkm = useMemo(() => {
        return allUmkm
            .filter(umkm =>
                umkm.nama_usaha.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(umkm =>
                category === "Semua Kategori" || umkm.kategori === category
            );
    }, [allUmkm, searchQuery, category]);

    // --- Kalkulasi total halaman & data untuk halaman ini ---
    const totalPages = Math.ceil(filteredUmkm.length / CARDS_PER_PAGE);

    const currentCards = useMemo(() => {
        const firstCardIndex = (currentPage - 1) * CARDS_PER_PAGE;
        const lastCardIndex = firstCardIndex + CARDS_PER_PAGE;
        return filteredUmkm.slice(firstCardIndex, lastCardIndex);
    }, [filteredUmkm, currentPage]); // <-- 'currentCards' dihitung ulang jika filter atau halaman berubah

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return (
            <section className="py-16 md:py-24 bg-[#E2E0DD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <UmkmPageSectionSkeletonCard />
                </div>
            </section>
        );
    }

    return (
        // Latar belakang #E2E0DD agar konsisten dengan halaman Beranda
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Container Flexbox untuk Kartu */}
                <div className="flex flex-wrap items-stretch justify-center gap-8">
                    {currentCards.length > 0 ? (
                        <div className="flex flex-wrap items-stretch justify-center gap-8">
                            {currentCards.map((item) => (
                                <UmkmCard
                                    key={item.id}
                                    id={item.id}
                                    imgSrc={item.foto_1 || "/images/placeholder.png"}
                                    title={item.nama_usaha}
                                    description={item.deskripsi}
                                    location={item.alamat || "Lokasi tidak tersedia"}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-bold text-[#4E4039]">
                                Tidak Ada UMKM Ditemukan
                            </h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Coba ganti kata kunci pencarian atau filter kategori Anda.
                            </p>
                        </div>
                    )}
                </div>

                {/* === Pagination === */}
                {totalPages > 1 && (
                    <div className="mt-16">
                        <Pagination>
                            <PaginationContent>
                                {/* --- Tombol Previous --- */}
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    />
                                </PaginationItem>

                                {/* --- Nomor Halaman --- */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            onClick={() => handlePageChange(page)}
                                            isActive={currentPage === page}
                                            className={currentPage !== page ? "cursor-pointer" : ""}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                {/* --- Tombol Next --- */}
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}
            </div>
        </section>
    );
}