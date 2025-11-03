"use client"

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { ChangeEvent } from "react";
import { FormData } from "@/lib/type";

// Helper komponen untuk membungkus Label + Input
function FormField({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("space-y-2", className)}>
            {children}
        </div>
    )
}

// Tipe props
interface SelectionOneProps {
    formData: FormData;
    handleTextChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSelectChange: (name: string, value: string) => void;
    deskripsiCount: number;
}

export default function SelectionOne({
    formData,
    handleTextChange,
    handleSelectChange,
    deskripsiCount
}: SelectionOneProps) {
    return (
        <section>
            <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 mb-6">
                1. Informasi Dasar UMKM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4E4039]">
                <FormField>
                    <Label htmlFor="nama_pemilik">Nama Pemilik UMKM</Label>
                    <Input
                        type="text"
                        id="nama_pemilik"
                        name="nama_pemilik"
                        placeholder="John Doe"
                        value={formData.nama_pemilik}
                        onChange={handleTextChange} />
                </FormField>

                <FormField>
                    <Label htmlFor="nama_usaha">Nama UMKM / Usaha</Label>
                    <Input
                        type="text"
                        id="nama_usaha"
                        name="nama_usaha"
                        placeholder="Kopi Kito"
                        value={formData.nama_usaha}
                        onChange={handleTextChange} />
                </FormField>

                <FormField>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="contoh@gmail.com"
                        value={formData.email}
                        onChange={handleTextChange}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="no_handphone">No. Handphone (WhatsApp)</Label>
                    <Input
                        type="tel"
                        id="nomor_hp"
                        name="nomor_hp"
                        placeholder="0812..."
                        value={formData.nomor_hp}
                        onChange={handleTextChange}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="kategori">Kategori Usaha</Label>
                    <Select
                        name="kategori"
                        value={formData.kategori}
                        onValueChange={(value) => handleSelectChange('kategori', value)}
                    >
                        <SelectTrigger id="kategori" className="w-full">
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Kuliner (FnB)">Kuliner (FnB)</SelectItem>
                            <SelectItem value="Fashion (Pakaian)">Fashion (Pakaian)</SelectItem>
                            <SelectItem value="Kriya (Kerajinan)">Kriya (Kerajinan)</SelectItem>
                            <SelectItem value="Jasa">Jasa (Contoh: Laundry, Bengkel)</SelectItem>
                            <SelectItem value="Agribisnis">Agribisnis (Contoh: Sayur, Buah)</SelectItem>
                            <SelectItem value="Kesehatan & Kecantikan">Kesehatan & Kecantikan</SelectItem>
                            <SelectItem value="Lainnya">Lainnya</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField>
                    <Label htmlFor="tahun_berdiri">Tanggal dan Tahun Berdiri</Label>
                    <Input
                        type="date"
                        id="tahun_berdiri"
                        name="tahun_berdiri"
                        value={formData.tahun_berdiri}
                        onChange={handleTextChange}
                    />
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="deskripsi">Deskripsi Singkat UMKM</Label>
                    <Textarea
                        id="deskripsi"
                        name="deskripsi"
                        placeholder="Jelaskan secara singkat tentang usaha Anda (min 10, maks 1000 karakter)..."
                        rows={5}
                        value={formData.deskripsi}
                        onChange={handleTextChange}
                        maxLength={1000}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                        {deskripsiCount} / 1000 karakter
                    </p>
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="alamat">Alamat Lengkap Usaha</Label>
                    <Textarea
                        id="alamat"
                        name="alamat"
                        placeholder="Tuliskan alamat lengkap usaha Anda..."
                        rows={3}
                        value={formData.alamat}
                        onChange={handleTextChange}
                    />
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="lokasi_gmaps">Link Embed Google Maps</Label>
                    <Input
                        type="url"
                        id="lokasi_gmap"
                        name="lokasi_gmap"
                        placeholder="https://maps.app.goo.gl/..."
                        value={formData.lokasi_gmap}
                        onChange={handleTextChange}
                    />
                </FormField>
            </div>
        </section>
    )
}