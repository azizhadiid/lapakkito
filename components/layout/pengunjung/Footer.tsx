import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Globe } from "lucide-react"

// Komponen helper untuk link di footer 
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-[#4E4039] hover:text-[#E65A4B] transition-colors duration-200"
            >
                {children}
            </Link>
        </li>
    )
}

// Komponen helper untuk ikon sosial media
function SocialIcon({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#E65A4B] transition-colors duration-200"
        >
            <Icon className="w-6 h-6" />
        </a>
    )
}

export default function Footer() {
    return (
        // Background #F7F6F6 dan Teks #4E4039
        <footer className="bg-[#F7F6F6] text-[#4E4039] border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* === Kolom 1: Logo & Info === */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-2">
                        <Link href="/" className="mb-4">
                            <img src="/images/logo-vertikal.png" alt="Lapak Kito Logo" className="h-12 w-auto" />
                        </Link>
                        <p className="text-sm mt-2">
                            Copyright &copy; {new Date().getFullYear()} Lapakkito.com
                        </p>
                        <p className="text-sm">
                            All rights reserved
                        </p>
                        {/* Ikon Sosial Media */}
                        <div className="flex gap-4 mt-6">
                            <SocialIcon href="#" icon={Instagram} />
                            <SocialIcon href="#" icon={Globe} />
                            <SocialIcon href="#" icon={Twitter} />
                            <SocialIcon href="#" icon={Youtube} />
                        </div>
                    </div>

                    {/* === Kolom 2: Menu === */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-950">Menu</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/">Beranda</FooterLink>
                            <FooterLink href="/tentang">Tentang Kami</FooterLink>
                            <FooterLink href="/umkm">UMKM</FooterLink>
                            <FooterLink href="/faq">FAQ</FooterLink>
                            <FooterLink href="/kontak">Kontak Kami</FooterLink>
                            <FooterLink href="/register">Register UMKM</FooterLink>
                        </ul>
                    </div>

                    {/* === Kolom 3: Bantuan === */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-950">Bantuan</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">Pusat Bantuan</FooterLink>
                            <FooterLink href="#">Ketentuan Layanan</FooterLink>
                            <FooterLink href="#">Legalitas</FooterLink>
                            <FooterLink href="#">Kebijakan Privasi</FooterLink>
                            <FooterLink href="#">Status</FooterLink>
                        </ul>
                    </div>

                    {/* === Kolom 4: Kontak === */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-950">Kontak</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#E65A4B] flex-shrink-0" />
                                <span>lapakkito@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#E65A4B] flex-shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#E65A4B] flex-shrink-0" />
                                <span>Jambi, Indonesia</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}