"use client";

// 'useMemo' ditambahkan untuk optimasi kalkulasi data
import { useEffect, useState, useMemo } from "react";
// 'Image' dan 'Link' tidak digunakan, bisa dihapus jika tidak ada rencana
// import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import supabase from "@/lib/db";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UmkmAdminSkeleton from "@/components/skeletons/UmkmAdminSkeleton";
// 'UmkmCardData' tidak digunakan di komponen ini
// import { UmkmCardData } from "@/lib/type";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, XCircle, CheckCircle2 } from "lucide-react";

// =====================
// 🔹 Komponen Badge Status
// =====================
function StatusBadge({ status }: { status: boolean | null }) {
  if (status === true) {
    return (
      <Badge
        variant="outline"
        className="bg-green-100 text-green-800 border-green-200 font-semibold"
      >
        Disetujui
      </Badge>
    );
  } else if (status === false) {
    return (
      <Badge
        variant="secondary"
        className="bg-yellow-100 text-yellow-800 border-yellow-200"
      >
        Menunggu Verifikasi
      </Badge>
    );
  } else {
    // Status 'null'
    return <Badge variant="destructive">Ditolak</Badge>;
  }
}

// =====================
// 🔹 Tipe Data
// =====================
interface Umkm {
  id: string;
  nama_usaha: string;
  kategori: string;
  email: string;
  foto_1?: string;
  status: boolean | null;
  created_at: string;
}

// =====================
// 🔹 Komponen Utama
// =====================
export default function AdminPage() {
  const [umkmList, setUmkmList] = useState<Umkm[]>([]);
  // DIPERBAIKI: Hanya satu state 'loading'
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  // State untuk Paginasi
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 6; // Tentukan jumlah item per halaman

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("umkm")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching UMKM:", error);
      } else {
        setUmkmList(data || []);
        const uniqueCategories = [
          ...new Set(data?.map((u) => u.kategori) || []),
        ];
        setCategories(uniqueCategories);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // =====================
  // 🔹 Fungsi Verifikasi & Tolak
  // =====================
  const handleApprove = async (id: string) => {
    const { error } = await supabase
      .from("umkm")
      .update({ status: true })
      .eq("id", id);
    if (error) {
      alert("Gagal menyetujui konten ❌");
    } else {
      alert("UMKM disetujui ✅");
      setUmkmList((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: true } : u))
      );
    }
  };

  const handleReject = async (id: string, email: string) => {
    const reason = prompt("Masukkan alasan penolakan:");
    if (!reason) return;

    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "Pengajuan UMKM Ditolak",
          message: `Halo, pengajuan UMKM Anda ditolak karena alasan berikut:\n"${reason}"\nSilakan perbaiki data dan ajukan kembali.`,
        }),
      });
    } catch (emailError) {
      console.error("Gagal mengirim email:", emailError);
      alert("Gagal mengirim email notifikasi, tapi proses akan dilanjutkan.");
    }

    const { error } = await supabase
      .from("umkm")
      .update({ status: null }) // Ditolak
      .eq("id", id);

    if (error) {
      alert("Gagal menolak konten ❌");
    } else {
      alert("UMKM ditolak dan email telah dikirim 📧");
      setUmkmList((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: null } : u))
      );
    }
  };

  // =====================
  // 🔹 Fungsi Navigasi
  // =====================
  const handlePreview = (id: string) => {
    router.push(`/admin/kelola-umkm/${id}`);
  };

  // =====================
  // 🔹 Data Filtering (Optimized)
  // =====================
  // 'useMemo' digunakan agar 'filteredData' hanya dihitung ulang
  // jika dependensinya (umkmList, searchTerm, selectedCategory) berubah.
  const filteredData = useMemo(() => {
    return umkmList.filter(
      (u) =>
        (u.nama_usaha?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.kategori?.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "Semua Kategori" ||
          u.kategori === selectedCategory)
    );
  }, [umkmList, searchTerm, selectedCategory]);

  // =====================
  // 🔹 Logika Paginasi
  // =====================

  // DIPERBAIKI: Reset ke halaman 1 setiap kali filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Total halaman dihitung dari 'filteredData'
  const totalPages = Math.ceil(filteredData.length / CARDS_PER_PAGE);

  // 'useMemo' digunakan untuk menghitung data yang akan ditampilkan
  // di halaman saat ini.
  const currentData = useMemo(() => {
    const firstDataIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastDataIndex = firstDataIndex + CARDS_PER_PAGE;
    return filteredData.slice(firstDataIndex, lastDataIndex);
  }, [filteredData, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =====================
  // 🔹 Render JSX
  // =====================

  // DIPERBAIKI: Gunakan state 'loading' yang benar
  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-[#E2E0DD]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menggunakan skeleton untuk UX loading yang lebih baik */}
          <UmkmAdminSkeleton />
        </div>
      </section>
    );
  }

  // Hapus 'if (loading)' kedua yang duplikat

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF] w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E4039] leading-tight">
            Panel Verifikasi UMKM
          </h1>

          {/* === Search Bar === */}
          <div
            className="
            w-full max-w-2xl mt-8 
            flex flex-col md:flex-row gap-3
            animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300
            "
          >
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari UMKM..."
                className="h-12 pl-12 pr-4 rounded-lg bg-white shadow-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  <span>{selectedCategory}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Semua Kategori")}
                >
                  Semua Kategori
                </DropdownMenuItem>

                {categories.map((cat) => (
                  <DropdownMenuItem
                    key={cat}
                    onSelect={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* ====== TABEL DESKTOP ====== */}
        <section className="hidden lg:block container mx-auto pb-5 mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="text-center font-bold">UMKM</TableHead>
                <TableHead className="text-center font-bold">Kategori</TableHead>
                <TableHead className="text-center font-bold">Konten</TableHead>
                <TableHead className="text-center font-bold">Verifikasi</TableHead>
                <TableHead className="text-center font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* DIPERBAIKI: 
                1. Cek 'filteredData.length' untuk tahu apakah ada data.
                2. Map 'currentData' untuk menampilkan data halaman ini.
              */}
              {filteredData.length > 0 ? (
                currentData.map((u) => (
                  <TableRow key={u.id} className="hover:bg-gray-50">
                    <TableCell className="text-center font-medium">
                      {u.nama_usaha}
                    </TableCell>
                    <TableCell className="text-center">{u.kategori}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        onClick={() => handlePreview(u.id)}
                        className="bg-[#4E4039] hover:bg-[#3a302b]"
                      >
                        Lihat Konten
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:text-red-600 hover:bg-red-100 p-2 bg-red-600 w-20"
                          onClick={() => handleReject(u.id, u.email)}
                        >
                          Tolak
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:text-green-600 hover:bg-green-100 bg-green-600 w-20"
                          onClick={() => handleApprove(u.id)}
                        >
                          Setujui
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <StatusBadge status={u.status} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    Tidak ada data ditemukan.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </section>

        {/* ====== RESPONSIVE MOBILE CARD VIEW ====== */}
        <section className="block lg:hidden mt-10 space-y-6 px-4">
          {/* DIPERBAIKI: 
            1. Cek 'filteredData.length' untuk tahu apakah ada data.
            2. Map 'currentData' untuk menampilkan data halaman ini.
          */}
          {filteredData.length > 0 ? (
            currentData.map((u) => (
              <div
                key={u.id}
                className="bg-white shadow-md rounded-xl p-4 border flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{u.nama_usaha}</h3>
                    <p className="text-sm text-gray-600">{u.kategori}</p>
                    <div className="mt-2">
                      <StatusBadge status={u.status} />
                    </div>
                  </div>
                  <Button
                    onClick={() => handlePreview(u.id)}
                    className="bg-[#4E4039] hover:bg-[#3a302b] flex-shrink-0"
                  >
                    Lihat
                  </Button>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-red-600 hover:bg-red-100 p-2 bg-red-600 w-24"
                    onClick={() => handleReject(u.id, u.email)}
                  >
                    Tolak
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-green-600 hover:bg-green-100 bg-green-600 w-24"
                    onClick={() => handleApprove(u.id)}
                  >
                    Setujui
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-10">
              Tidak ada data ditemukan.
            </div>
          )}
        </section>

        {/* ====== KOMPONEN PAGINASI ====== */}
        {/* Ini akan muncul jika total halaman lebih dari 1 */}
        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                {/* --- Tombol Previous --- */}
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {/* --- Nomor Halaman --- */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className={currentPage !== page ? "cursor-pointer" : ""}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                {/* --- Tombol Next --- */}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </section>
    </main>
  );
}
