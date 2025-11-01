import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";
import Image from "next/image";

// Komponen helper untuk link di footer
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[#F7F6F6] hover:text-[#E65A4B] transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

// Komponen helper untuk ikon sosial media
function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#F7F6F6] hover:text-[#E65A4B] transition-colors duration-200"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

export default function Footer() {
  return (
    // Background #F7F6F6 dan Teks #4E4039
    <footer className=" bg-[#4E4039] text-[#F7F6F6] border-t border-gray-200 w-full bottom-0 left-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* === Kolom 1: Logo & Info === */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4">
              <img
                src="/images/white-logo-vertikal.png"
                alt="Lapak Kito Logo"
                className="h-13 w-auto"
              />
            </Link>
            <p className="text-sm mt-2">
              Copyright &copy; {new Date().getFullYear()} Lapakkito.com
            </p>
            <p className="text-sm">All rights reserved</p>
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
            <h3 className="text-lg font-semibold mb-4 text-[#F7F6F6]">Menu</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/tentang">Tentang Kami</FooterLink>
              <FooterLink href="/umkm">UMKM</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/kontak">Kontak Kami</FooterLink>
              <FooterLink href="/register-umkm">Register UMKM</FooterLink>
            </ul>
          </div>

          {/* === Kolom 3: Kontak === */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#F7F6F6]">
              Kontak
            </h3>
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
  );
}
