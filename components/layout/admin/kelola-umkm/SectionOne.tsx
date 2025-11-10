"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/lib/db";
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
        Menunggu
      </Badge>
    );
  } else {
    return <Badge variant="destructive">Ditolak</Badge>;
  }
}

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
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("umkm")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching UMKM:", error);
      else setUmkmList(data || []);

      setLoading(false);
    };

    fetchData();
  }, []);

  // =====================
  // 🔹 Fungsi Verifikasi
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

  // =====================
  // 🔹 Fungsi Tolak
  // =====================
  const handleReject = async (id: string, email: string) => {
    const reason = prompt("Masukkan alasan penolakan:");
    if (!reason) return;

    await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject: "Pengajuan UMKM Ditolak",
        message: `Halo, pengajuan UMKM Anda ditolak karena alasan berikut:\n"${reason}"\nSilakan perbaiki data dan ajukan kembali.`,
      }),
    });

    const { error } = await supabase.from("umkm").delete().eq("id", id);
    if (error) {
      alert("Gagal menolak konten ❌");
    } else {
      alert("UMKM ditolak dan email telah dikirim 📧");
      setUmkmList((prev) => prev.filter((u) => u.id !== id));
    }
  };

  // =====================
  // 🔹 Filter pencarian
  // =====================
  const filteredData = umkmList.filter(
    (u) =>
      u.nama_usaha?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.kategori?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Memuat data...</p>;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <section className="relative pt-32 pb-16 lg:pt-32 lg:pb-24 bg-[#EFEFEF] w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E4039] leading-tight">
            Panel Verifikasi UMKM
          </h1>

          {/* === Search Bar === */}
          <div className="w-full max-w-2xl mt-8 flex flex-col md:flex-row gap-3">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari UMKM..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 pl-12 pr-4 rounded-lg bg-white shadow-sm"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-12 px-6 rounded-lg bg-[#E65A4B] text-white hover:bg-[#C9302C] flex items-center gap-2">
                  <span>Filter Kategori</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>Kuliner</DropdownMenuItem>
                <DropdownMenuItem>Fashion</DropdownMenuItem>
                <DropdownMenuItem>Jasa</DropdownMenuItem>
                <DropdownMenuItem>Kriya</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* ====== TABEL DESKTOP ====== */}
        <section className="hidden lg:block container mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-center">UMKM</TableHead>
                <TableHead className="text-center">Kategori</TableHead>
                <TableHead className="text-center">Foto</TableHead>
                <TableHead className="text-center">Verifikasi</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((u) => (
                <TableRow key={u.id} className="hover:bg-gray-50">
                  <TableCell className="text-center">{u.nama_usaha}</TableCell>
                  <TableCell className="text-center">{u.kategori}</TableCell>
                  <TableCell className="text-center">
                    <Button className="bg-[#4E4039]">Lihat Konten</Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-10">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-red-600 hover:bg-red-50 p-2 bg-red-600 w-20"
                        onClick={() => handleReject(u.id, u.email)}
                      >
                        Tolak
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-green-600 hover:bg-green-50 bg-green-600 w-20"
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
              ))}
            </TableBody>
          </Table>
        </section>

        {/* ====== RESPONSIVE MOBILE CARD VIEW ====== */}
        <section className="block lg:hidden mt-10 space-y-6">
          {filteredData.map((u) => (
            <div
              key={u.id}
              className="bg-white shadow-md rounded-xl p-4 border flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <Button>Lihat Konten</Button>

                <div>
                  <h3 className="font-semibold text-lg">{u.nama_usaha}</h3>
                  <p className="text-sm text-gray-600">{u.kategori}</p>
                  <div className="mt-1">
                    <StatusBadge status={u.status} />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4 sm:mt-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-red-600 hover:bg-red-50 p-2 bg-red-600 w-20"
                  onClick={() => handleReject(u.id, u.email)}
                >
                  Tolak
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-green-600 hover:bg-green-50 bg-green-600 w-20"
                  onClick={() => handleApprove(u.id)}
                >
                  Izinkan
                </Button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
