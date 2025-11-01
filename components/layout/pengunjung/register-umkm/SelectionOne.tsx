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

// Helper komponen untuk membungkus Label + Input
function FormField({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("space-y-2", className)}>
            {children}
        </div>
    )
}

export default function SelectionOne() {
    return (
        <section>
            <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 mb-6">
                1. Informasi Dasar UMKM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4E4039]">
                <FormField>
                    <Label htmlFor="nama_pemilik_umkm">Nama Pemilik UMKM</Label>
                    <Input type="text" id="nama_pemilik_umkm" name="nama_pemilik_umkm" placeholder="John Doe" />
                </FormField>

                <FormField>
                    <Label htmlFor="nama_umkm">Nama UMKM / Usaha</Label>
                    <Input type="text" id="nama_umkm" name="nama_umkm" placeholder="Kopi Kito" />
                </FormField>

                <FormField>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="contoh@gmail.com" />
                </FormField>

                <FormField>
                    <Label htmlFor="no_handphone">No. Handphone (WhatsApp)</Label>
                    <Input type="tel" id="no_handphone" name="no_handphone" placeholder="0812..." />
                </FormField>

                <FormField>
                    <Label htmlFor="kategori">Kategori Usaha</Label>
                    <Select name="kategori">
                        <SelectTrigger id="kategori" className="w-full">
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="kuliner">Makanan & Minuman</SelectItem>
                            <SelectItem value="fashion">Fashion & Pakaian</SelectItem>
                            <SelectItem value="jasa">Jasa & Layanan</SelectItem>
                            <SelectItem value="kriya">Kriya & Kerajinan</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField>
                    <Label htmlFor="tahun_berdiri">Tanggal dan Tahun Berdiri</Label>
                    <Input type="date" id="tahun_berdiri" name="tahun_berdiri" placeholder="2020" />
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="deskripsi_umkm">Deskripsi Singkat UMKM</Label>
                    <Textarea
                        id="deskripsi_umkm"
                        name="deskripsi_umkm"
                        placeholder="Jelaskan secara singkat tentang usaha Anda (maks 500 karakter)..."
                        rows={5}
                    />
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="alamat">Alamat Lengkap Usaha</Label>
                    <Textarea
                        id="alamat"
                        name="alamat"
                        placeholder="Tuliskan alamat lengkap usaha Anda..."
                        rows={3}
                    />
                </FormField>

                <FormField className="md:col-span-2">
                    <Label htmlFor="lokasi_gmaps">Link Google Maps</Label>
                    <Input
                        type="url"
                        id="lokasi_gmaps"
                        name="lokasi_gmaps"
                        placeholder="https://maps.app.goo.gl/..."
                    />
                </FormField>
            </div>
        </section>
    )
}