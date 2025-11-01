"use client"

import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { UmkmDataProps } from "@/lib/type";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMotorcycle, FaBusinessTime } from 'react-icons/fa';
import { SiGojek, SiGrab, SiShopee } from 'react-icons/si';
import {
    User, CalendarDays,
} from "lucide-react"


// Komponen Ikon Helper
function InfoIcon({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <div className="flex items-center gap-3 text-sm text-[#4E4039] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400">
            <Icon className="w-4 h-4 text-[#E65A4B]" />
            <span>{text}</span>
        </div>
    )
}

// Komponen Tombol Link Helper
function LinkButton({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) {
    return (
        <Button
            asChild // <-- Biarkan 'a' di dalam yang menjadi elemen utama
            variant="outline"
            className="h-10 w-10 p-0 bg-[#F7F6F6] shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-700"
            aria-label={text}
        >
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="w-5 h-5 text-[#4E4039]" />
            </a>
        </Button>
    )
}

// --- Helper untuk format nomor WA ---
function formatWaNumber(phone: string | null): string {
    if (!phone) return "#"; // Fallback jika tidak ada nomor

    // Hapus semua karakter non-digit
    let formatted = phone.replace(/\D/g, '');

    // Ganti '0' di depan dengan '62'
    if (formatted.startsWith('0')) {
        formatted = '62' + formatted.substring(1);
    }
    // Pastikan diawali 62
    else if (!formatted.startsWith('62')) {
        formatted = '62' + formatted;
    }

    return `https://wa.me/${formatted}`;
}

export default function DetailUMKMPage({ umkmData }: { umkmData: UmkmDataProps }) {
    // Format link WA dari nomor_hp
    const waLink = formatWaNumber(umkmData.nomor_hp);

    return (
        <MainLayoutPengunjung>
            <div className="bg-[#EFEFEF] py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">

                    {/* === SECTION ATAS (Galeri & Info) === */}
                    <div className="
                    grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12
                    bg-[#faf8f8] md:p-8 rounded-2xl shadow-lg px-6 py-6
                    ">

                        {/* --- KOLOM KIRI: Galeri Foto --- */}
                        <div className="lg:col-span-3">
                            <Carousel className="w-full rounded-lg overflow-hidden animate-in fade-in slide-in-from-left-5 duration-700">
                                <CarouselContent className="text-[#4E4039]">
                                    {umkmData.images.map((imgSrc, index) => (
                                        <CarouselItem key={index}>
                                            <Image
                                                src={imgSrc}
                                                alt={`${umkmData.name} - gambar ${index + 1}`}
                                                width={800}
                                                height={600}
                                                priority={index === 0}
                                                className="w-full h-auto aspect-[4/3] object-cover"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-16" />
                                <CarouselNext className="mr-16" />
                            </Carousel>
                        </div>

                        {/* --- KOLOM KANAN: Info Detail --- */}
                        <div className="lg:col-span-2 flex flex-col space-y-5">
                            <span className="
                            text-sm font-semibold text-[#E65A4B]
                            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200
                            ">
                                {umkmData.category}
                            </span>

                            <h1 className="
                            text-4xl font-bold text-[#4E4039]
                            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300
                            ">
                                {umkmData.name}
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                <InfoIcon icon={User} text={umkmData.author} />
                                <InfoIcon icon={CalendarDays} text={umkmData.date} />
                            </div>

                            <p className="
                            text-base text-[#4E4039] leading-relaxed
                            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400
                            ">
                                {umkmData.description}
                            </p>

                            <Separator className="my-4" />

                            {/* Link Sosial Media */}
                            <div>
                                <h3 className="text-sm font-semibold text-[#4E4039] mb-3 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
                                    Link Sosial Media:
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {umkmData.link_instagram && <LinkButton href={umkmData.link_instagram} icon={FaInstagram} text="Instagram" />}
                                    {umkmData.link_tiktok && <LinkButton href={umkmData.link_tiktok} icon={FaTiktok} text="Tiktok" />}
                                    {umkmData.link_facebook && <LinkButton href={umkmData.link_facebook} icon={FaFacebook} text="Facebook" />}
                                    {waLink !== "#" && <LinkButton href={waLink} icon={FaWhatsapp} text="Whatsapp" />}
                                </div>
                            </div>

                            {/* Link Pesan Online */}
                            <div>
                                <h3 className="text-sm font-semibold text-[#4E4039] mb-3 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-600">
                                    Link Pesan Online:
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {umkmData.link_shopee && <LinkButton href={umkmData.link_shopee} icon={SiShopee} text="ShopeeFood" />}
                                    {umkmData.link_gojek && <LinkButton href={umkmData.link_gojek} icon={SiGojek} text="GoFood" />}
                                    {umkmData.link_grab && <LinkButton href={umkmData.link_grab} icon={SiGrab} text="GrabFood" />}
                                    {umkmData.link_tokopedia && <LinkButton href={umkmData.link_tokopedia} icon={FaBusinessTime} text="Tokopedia" />}
                                    {umkmData.link_maxim && <LinkButton href={umkmData.link_maxim} icon={FaMotorcycle} text="Maxim" />}
                                </div>
                            </div>

                            {/* Tombol CTA */}
                            <Button
                                asChild
                                className="
                                w-full h-12 mt-4 bg-[#E65A4B] text-[#EFEFEF] hover:bg-[#C9302C] rounded-lg px-8 py-3 text-lg font-semibold transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-5 
                                "
                            >
                                <a href={waLink} target="_blank" rel="noopener noreferrer">
                                    Hubungi Sekarang
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* === SECTION BAWAH: Google Maps === */}
                    <div className="
                    mt-12 bg-[#faf8f8] p-6 md:p-8 rounded-2xl shadow-lg
                    animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500
                    ">
                        <h2 className="text-3xl font-bold text-[#4E4039] mb-6">
                            Lokasi Kami
                        </h2>
                        <div className="overflow-hidden rounded-lg shadow-inner">
                            <iframe
                                src={umkmData.gmapEmbedUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayoutPengunjung>
    );
}