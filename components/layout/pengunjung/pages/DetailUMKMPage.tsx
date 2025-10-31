"use client"

import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
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
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiGojek, SiGrab, SiShopee } from 'react-icons/si';
import {
    User, CalendarDays, Instagram, Twitter, Youtube, Globe,
    ShoppingBag, Bike, Store, Send
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
function LinkButton({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <Button
            variant="outline"
            className="h-10 w-10 p-0 bg-[#F7F6F6] shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-700"
            aria-label={text}
        >
            <Icon className="w-5 h-5 text-[#4E4039]" />
        </Button>
    )
}

export default function DetailUMKMPage({ umkmData }: { umkmData: UmkmDataProps }) {
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
                                            <img
                                                src={imgSrc}
                                                alt={`${umkmData.name} - gambar ${index + 1}`}
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
                                    <LinkButton icon={FaInstagram} text="FaInstagram" />
                                    <LinkButton icon={FaTiktok} text="FaTiktok" />
                                    <LinkButton icon={FaFacebook} text="FaFacebook" />
                                    <LinkButton icon={FaWhatsapp} text="FaWhatsapp" />
                                </div>
                            </div>

                            {/* Link Pesan Online */}
                            <div>
                                <h3 className="text-sm font-semibold text-[#4E4039] mb-3 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-600">
                                    Link Pesan Online:
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <LinkButton icon={SiShopee} text="SiShopee" />
                                    <LinkButton icon={SiGojek} text="SiGojek" />
                                    <LinkButton icon={SiGrab} text="SiGrab" />
                                </div>
                            </div>

                            {/* Tombol CTA */}
                            <Button className="
                            w-full h-12 mt-4 bg-[#E65A4B] text-[#EFEFEF] hover:bg-[#C9302C] rounded-lg px-8 py-3 text-lg font-semibold transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300
                            ">
                                Hubungi Sekarang
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