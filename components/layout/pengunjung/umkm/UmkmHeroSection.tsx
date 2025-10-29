"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, ChevronDown } from "lucide-react"

export default function UmkmHeroSection() {
    return (
        // Menggunakan background #EFEFEF yang konsisten dengan Hero di Beranda
        <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Pembungkus untuk menengahkan semua konten */}
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

                    {/* === 1. Judul === */}
                    <h1 className="
            text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E4039] leading-tight
            animate-in fade-in slide-in-from-bottom-5 duration-700
            ">
                        Selamat Datang di
                        <br />
                        Directory UMKM Lapak Kito
                    </h1>

                    {/* === 2. Paragraf Deskripsi === */}
                    <p className="
            mt-6 text-lg text-gray-700
            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200
            ">
                        Platform direktori UMKM Jambi yang membantu masyarakat menemukan, menghubungi, dan mendukung usaha lokal secara langsung dan praktis.
                    </p>

                    {/* === 3. Search Bar & Filter === */}
                    <div className="
            w-full max-w-2xl mt-8 
            flex flex-col md:flex-row gap-3
            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300
            ">

                        {/* Input dengan Ikon */}
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Cari UMKM..."
                                // Styling agar lebih besar dan sesuai desain
                                className="h-12 pl-12 pr-4 rounded-lg bg-white shadow-sm"
                            />
                        </div>

                        {/* Tombol Kategori (Dropdown) */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="
                  h-12 px-6 rounded-lg 
                  bg-[#E65A4B] text-white hover:bg-[#C9302C]
                  flex-shrink-0
                  flex items-center gap-2
                ">
                                    <span>Pilih Kategori</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white">
                                {/* Ganti dengan data kategori Anda */}
                                <DropdownMenuItem>Kuliner</DropdownMenuItem>
                                <DropdownMenuItem>Fashion</DropdownMenuItem>
                                <DropdownMenuItem>Jasa</DropdownMenuItem>
                                <DropdownMenuItem>Kriya</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>

                </div>
            </div>
        </section>
    )
}