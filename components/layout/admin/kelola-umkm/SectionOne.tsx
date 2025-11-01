import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { XCircle, CheckCircle2 } from "lucide-react";

// --- Data Dummy (Contoh) ---
// Ganti ini dengan data asli dari database/API Anda
const umkmData = [
  {
    id: 1,
    name: "Bakso Bang Ujang",
    category: "Makanan",
    imageUrl: "/images/bakso.jpg", // Ganti dengan path gambar Anda
    status: "Disetujui",
  },
  {
    id: 2,
    name: "Bubur Ayam 77",
    category: "Makanan",
    imageUrl: "/images/bubur-ayam.jpg",
    status: "Menunggu",
  },
  {
    id: 3,
    name: "Roti Ouu",
    category: "Makanan",
    imageUrl: "/images/roti.jpg",
    status: "Disetujui",
  },
  {
    id: 4,
    name: "Jus Salwa",
    category: "Minuman",
    imageUrl: "/images/jus.jpg",
    status: "Ditolak",
  },
  {
    id: 5,
    name: "Printing Maisah",
    category: "Lainnya",
    imageUrl: "/images/print.jpg",
    status: "Disetujui",
  },
];

// --- Komponen Helper untuk Status Badge (versi shadcn) ---
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case "Disetujui":
      return (
        <Badge
          variant="outline"
          className="bg-green-100 text-green-800 border-green-200 font-semibold"
        >
          Disetujui
        </Badge>
      );
    case "Ditolak":
      return <Badge variant="destructive">Ditolak</Badge>;
    case "Menunggu":
      return <Badge variant="secondary">Menunggu Verifikasi</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function SectionOne() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pembungkus untuk menengahkan semua konten */}
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* === 1. Judul === */}
            <h1
              className="
            text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E4039] leading-tight
            animate-in fade-in slide-in-from-bottom-5 duration-700
            "
            >
              Selamat Datang di
              <br />
              Kelola UMKM
            </h1>

            {/* === 2. Paragraf Deskripsi === */}
            {/* <p
              className="
            mt-6 text-lg text-gray-700
            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200
            "
            >
              Platform direktori UMKM Jambi yang membantu masyarakat menemukan,
              menghubungi, dan mendukung usaha lokal secara langsung dan
              praktis.
            </p> */}

            {/* === 3. Search Bar & Filter === */}
            <div
              className="
            w-full max-w-2xl mt-8 
            flex flex-col md:flex-row gap-3
            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300
            "
            >
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
                  <Button
                    className="
                  h-12 px-6 rounded-lg 
                  bg-[#E65A4B] text-white hover:bg-[#C9302C]
                  flex-shrink-0
                  flex items-center gap-2
                "
                  >
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

        {/* ===============================================================
        SECTION 2: DAFTAR UMKM (Refaktor dari kode saya sebelumnya)
        ===============================================================
      */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-10">
          {/* ===== TAMPILAN MOBILE (Accordion shadcn) ===== */}
          {/* Muncul di layar kecil (default) dan hilang di layar 'lg' ke atas */}
          <div className="space-y-3 lg:hidden">
            <Accordion type="single" collapsible className="w-full">
              {umkmData.map((umkm) => (
                <AccordionItem
                  key={umkm.id}
                  value={`item-${umkm.id}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden px-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="font-medium text-gray-900">
                        {umkm.name}
                      </span>
                      <StatusBadge status={umkm.status} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      {umkm.category}
                    </h4>
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={umkm.imageUrl}
                        alt={umkm.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-green-600 text-white hover:bg-green-700">
                        Setujui
                      </Button>
                      <Button variant="secondary" className="flex-1">
                        Tolak
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* ===== TAMPILAN DESKTOP (Tabel shadcn) ===== */}
          {/* Tersembunyi (hidden) di layar kecil, muncul (block) di layar 'lg' ke atas */}
          <div className="hidden lg:block bg-white shadow-md rounded-lg overflow-hidden border">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UMKM
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Konten
                  </TableHead>
                  <TableHead className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Verifikasi
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white divide-y divide-gray-200">
                {umkmData.map((umkm) => (
                  <TableRow key={umkm.id} className="hover:bg-gray-50">
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {umkm.name}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">
                        {umkm.category}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-16 w-24 rounded-lg overflow-hidden">
                        <Image
                          src={umkm.imageUrl}
                          alt={umkm.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <XCircle className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-green-600 hover:bg-green-50"
                        >
                          <CheckCircle2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={umkm.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* === Pagination === */}
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
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
        </section>
      </section>
    </main>
  );
}
