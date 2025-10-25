"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function DaftarUmkmPage() {
    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-10">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">
                        Form Pendaftaran UMKM
                    </CardTitle>
                    <CardDescription className="text-center">
                        Daftarkan usaha Anda untuk tampil di direktori kami.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-10">
                        {/* --- Bagian Informasi Dasar --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Informasi Dasar
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Nama Usaha *
                                    </label>
                                    <Input placeholder="Contoh: Kedai Kopi Senja" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Nama Pemilik Usaha *
                                    </label>
                                    <Input placeholder="Contoh: Budi Setiawan" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Kategori *
                                    </label>
                                    <Input placeholder="Contoh: FnB" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Tahun Berdiri *
                                    </label>
                                    <Input type="number" placeholder="Contoh: 2019" />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Deskripsi Usaha *
                                    </label>
                                    <Textarea
                                        placeholder="Jelaskan sedikit tentang usaha Anda (maks 500 karakter)"
                                        className="min-h-[120px]"
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">
                                        0 / 500 karakter
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* --- Bagian Upload Foto --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Media (Foto Usaha)
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Upload foto-foto yang mewakili usaha Anda (opsional).
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium mb-1">
                                            Foto {i} {i === 1 && "(Utama)"}
                                        </label>
                                        <Input type="file" accept="image/*" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- Bagian Tautan Platform --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Tautan Platform (Opsional)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {["Gojek", "Grab", "Maxim", "Shopee", "Tokopedia"].map(
                                    (platform) => (
                                        <div key={platform}>
                                            <label className="block text-sm font-medium mb-1">
                                                {platform}
                                            </label>
                                            <Input placeholder="https://..." />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* --- Bagian Tautan Sosial Media --- */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold border-b pb-2">
                                Tautan Sosial Media (Opsional)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {["Instagram", "Tiktok", "Facebook"].map((social) => (
                                    <div key={social}>
                                        <label className="block text-sm font-medium mb-1">
                                            {social}
                                        </label>
                                        <Input placeholder="https://..." />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <CardFooter className="flex justify-end p-0 pt-6">
                            <Button type="submit" size="lg" className="w-full md:w-auto">
                                Kirim Pendaftaran
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
