"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet, SheetContent, SheetDescription,
    SheetHeader,
    SheetTitle, SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
    const navItems = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/tentang" },
        { name: "UMKM", href: "/umkm" },
        { name: "FAQ", href: "/faq" },
        { name: "Kontak", href: "/kontak" },
    ]

    // state untuk melacak status scroll
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    // useEffect untuk menambahkan event listener saat scroll
    useEffect(() => {
        const handleScroll = () => {
            // Jika scrollY > 10 piksel, set isScrolled menjadi true
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        // Tambahkan event listener
        window.addEventListener("scroll", handleScroll)

        // Cleanup: Hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={`
                fixed top-0 left-0 w-full z-50 transition-colors duration-300
                ${isScrolled
                ? 'bg-[#F7F6F6] shadow-md'
                : 'bg-[#EFEFEF] lg:bg-transparent'
            }
            `}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link href="/" className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Lapak Kito Logo" className="h-10 w-auto" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => {
                            // Cek apakah link ini sedang aktif
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                    relative text-yellow-950 hover:text-black font-semibold transition-colors duration-300
                                    pb-1
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:bottom-0
                                    after:w-full
                                    after:h-[2px]
                                    after:bg-[#E65A4B]
                                    after:origin-left
                                    after:transition-transform
                                    after:duration-300
                                    hover:after:scale-x-100
                                    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} 
                                    `}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="hidden lg:block">
                        <Button className="bg-[#E65A4B] text-zinc-100 hover:bg-[#C9302C] rounded-lg px-6 py-2">
                            Register UMKM
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6 text-yellow-950" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#F7F6F6]">
                                {/* untuk mengatasi error pada console website */}
                                <SheetHeader className="sr-only">
                                    <SheetTitle>Menu Utama</SheetTitle>
                                    <SheetDescription>
                                        Navigasi utama website Lapak Kito.
                                    </SheetDescription>
                                </SheetHeader>
                                {/* //////////////////////////////////////////////// */}

                                <div className="flex flex-col h-full p-6">
                                    <Link href="/" className="flex items-center mb-6">
                                        <img src="/images/logo-vertikal.png" alt="Lapak Kito Logo" className="h-10 w-auto" />
                                    </Link>

                                    <div className="flex flex-col gap-4">
                                        {navItems.map((item) => {
                                            // Cek apakah link ini sedang aktif
                                            const isActive = pathname === item.href;

                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`
                                                        text-lg font-semibold transition-colors
                                                        ${isActive
                                                            ? 'text-[#E65A4B]'
                                                            : 'text-yellow-950 hover:text-black'
                                                        }
        `}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <Button className="bg-[#E65A4B] text-zinc-100 hover:bg-[#C9302C] rounded-lg px-6 py-2 mt-auto">
                                        Register UMKM
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </nav>
    )
}