"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
    const navItems = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/tentang" },
        { name: "UMKM", href: "/umkm" },
        { name: "FAQ", href: "/faq" },
        { name: "Kontak", href: "/kontak" },
    ]

    return (
        // Menggunakan hex code #F7F6F6 secara langsung
        <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-[#F7F6F6] lg:bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link href="/" className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Lapak Kito Logo" className="h-10 w-auto" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-yellow-950 hover:text-black font-semibold transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        {/* Menggunakan hex code #D9534F dan hover #C9302C */}
                        <Button className="bg-[#D9534F] text-white hover:bg-[#C9302C] rounded-full px-6 py-2">
                            Register UMKM
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6 text-gray-800" />
                                </Button>
                            </SheetTrigger>
                            {/* Menggunakan hex code #F7F6F6 untuk background mobile menu */}
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#F7F6F6]">
                                <div className="flex flex-col h-full p-6">
                                    <Link href="/" className="flex items-center gap-2 mb-8">
                                        <img src="/images/logo-vertikal.png" alt="Lapak Kito Logo" className="h-10 w-auto" />
                                    </Link>

                                    <div className="flex flex-col gap-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="text-lg text-gray-700 hover:text-black font-medium transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Menggunakan hex code #D9534F dan hover #C9302C */}
                                    <Button className="bg-[#D9534F] text-white hover:bg-[#C9302C] rounded-full px-6 py-2 mt-auto">
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