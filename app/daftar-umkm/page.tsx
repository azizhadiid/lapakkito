"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Impor komponen shadcn/ui yang Anda perlukan
// Pastikan Anda sudah menginstalnya (mis: npx shadcn-ui@latest add form button input textarea card)
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
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

// 1. Definisikan skema validasi menggunakan Zod
const formSchema = z.object({
    namaUsaha: z.string().min(3, {
        message: "Nama usaha minimal 3 karakter.",
    }),
    namaPemilik: z.string().min(3, {
        message: "Nama pemilik minimal 3 karakter.",
    }),
    tahunBerdiri: z.coerce
        .number({ invalid_type_message: "Tahun harus berupa angka." })
        .int()
        .min(1900, { message: "Tahun berdiri minimal 1900." })
        .max(new Date().getFullYear(), {
            message: "Tahun berdiri tidak boleh di masa depan.",
        }),
    deskripsi: z.string().min(10, {
        message: "Deskripsi minimal 10 karakter.",
    }).max(500, {
        message: "Deskripsi maksimal 500 karakter."
    }),

    // FileList adalah tipe data yang diberikan oleh <input type="file">
    foto1: z.instanceof(FileList).optional(),
    foto2: z.instanceof(FileList).optional(),
    foto3: z.instanceof(FileList).optional(),
    foto4: z.instanceof(FileList).optional(),
    foto5: z.instanceof(FileList).optional(),

    // Tautan (opsional, tapi jika diisi harus valid URL)
    linkInstagram: z.string().url({ message: "URL Instagram tidak valid." }).optional().or(z.literal('')),
    linkTiktok: z.string().url({ message: "URL TikTok tidak valid." }).optional().or(z.literal('')),
    linkFacebook: z.string().url({ message: "URL Facebook tidak valid." }).optional().or(z.literal('')),
    linkGojek: z.string().url({ message: "URL Gojek tidak valid." }).optional().or(z.literal('')),
    linkGrab: z.string().url({ message: "URL Grab tidak valid." }).optional().or(z.literal('')),
    linkMaxim: z.string().url({ message: "URL Maxim tidak valid." }).optional().or(z.literal('')),
    linkShopee: z.string().url({ message: "URL Shopee tidak valid." }).optional().or(z.literal('')),
    linkTokopedia: z.string().url({ message: "URL Tokopedia tidak valid." }).optional().or(z.literal('')),
});

// Tipe untuk data form, diambil dari skema Zod
type FormValues = z.infer<typeof formSchema>;

export default function DaftarUmkmPage() {

    // 2. Definisikan form menggunakan react-hook-form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            namaUsaha: "",
            namaPemilik: "",
            tahunBerdiri: new Date().getFullYear(),
            deskripsi: "",
            linkInstagram: "",
            linkTiktok: "",
            linkFacebook: "",
            linkGojek: "",
            linkGrab: "",
            linkMaxim: "",
            linkShopee: "",
            linkTokopedia: "",
            // file inputs tidak perlu default value
        },
    });

    // 3. Definisikan handler untuk submit
    function onSubmit(values: FormValues) {
        // Di sini Anda akan menangani data form,
        // misalnya mengirim ke API atau FormData untuk upload file.
        console.log("Data Form:", values);

        // Contoh membuat FormData untuk upload file
        const formData = new FormData();
        formData.append("namaUsaha", values.namaUsaha);
        formData.append("namaPemilik", values.namaPemilik);
        formData.append("tahunBerdiri", values.tahunBerdiri.toString());
        formData.append("deskripsi", values.deskripsi);

        // Tambahkan file jika ada
        if (values.foto1 && values.foto1.length > 0) {
            formData.append("foto1", values.foto1[0]);
        }
        if (values.foto2 && values.foto2.length > 0) {
            formData.append("foto2", values.foto2[0]);
        }
        // ... (ulangi untuk foto 3, 4, 5)

        // Tambahkan link
        formData.append("linkInstagram", values.linkInstagram || "");
        formData.append("linkTiktok", values.linkTiktok || "");
        // ... (ulangi untuk semua link)

        // Tampilkan notifikasi (gunakan toast shadcn di aplikasi nyata)
        alert("Pendaftaran Terkirim! Cek console log untuk melihat data.");
    }

    // Fungsi helper untuk mendaftarkan file input
    // Ini diperlukan karena react-hook-form perlu handle 'onChange'
    // secara manual untuk file input.
    const fileRef = (name: keyof FormValues) => {
        const { ref, ...rest } = form.register(name);
        return {
            ...rest,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                form.setValue(name, event.target.files || undefined);
            },
            ref: (instance: HTMLInputElement | null) => {
                ref(instance);
                // Hubungkan ref internal react-hook-form
            },
        };
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-10">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Form Pendaftaran UMKM</CardTitle>
                    <CardDescription className="text-center">
                        Daftarkan usaha Anda untuk tampil di direktori kami.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

                            {/* --- Bagian Informasi Dasar --- */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold border-b pb-2">Informasi Dasar</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="namaUsaha"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Usaha *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Contoh: Kedai Kopi Senja" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="namaPemilik"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Pemilik Usaha *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Contoh: Budi Setiawan" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="tahunBerdiri"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tahun Berdiri *</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Contoh: 2019" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="deskripsi"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-2">
                                                <FormLabel>Deskripsi Usaha *</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Jelaskan sedikit tentang usaha Anda (maks 500 karakter)"
                                                        className="min-h-[120px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    {field.value?.length || 0} / 500 karakter
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* --- Bagian Upload Foto --- */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold border-b pb-2">Media (Foto Usaha)</h3>
                                <p className="text-sm text-muted-foreground">
                                    Upload foto-foto yang mewakili usaha Anda (opsional).
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <FormItem>
                                        <FormLabel>Foto 1 (Utama)</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...fileRef("foto1")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <FormItem>
                                        <FormLabel>Foto 2</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...fileRef("foto2")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <FormItem>
                                        <FormLabel>Foto 3</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...fileRef("foto3")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <FormItem>
                                        <FormLabel>Foto 4</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...fileRef("foto4")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <FormItem>
                                        <FormLabel>Foto 5</FormLabel>
                                        <FormControl>
                                            <Input type="file" accept="image/*" {...fileRef("foto5")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </div>
                            </div>

                            {/* --- Bagian Tautan Platform --- */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold border-b pb-2">Tautan Platform (Opsional)</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Daftar Tautan Platform */}
                                    {(['linkGojek', 'linkGrab', 'linkMaxim', 'linkShopee', 'linkTokopedia'] as const).map((linkName) => (
                                        <FormField
                                            key={linkName}
                                            control={form.control}
                                            name={linkName}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="capitalize">{linkName.replace('link', '')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={`https://...`} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* --- Bagian Tautan Sosial Media --- */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold border-b pb-2">Tautan Sosial Media (Opsional)</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Daftar Tautan Sosmed */}
                                    {(['linkInstagram', 'linkTiktok', 'linkFacebook'] as const).map((linkName) => (
                                        <FormField
                                            key={linkName}
                                            control={form.control}
                                            name={linkName}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="capitalize">{linkName.replace('link', '')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={`https://...`} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            <CardFooter className="flex justify-end p-0 pt-6">
                                <Button type="submit" size="lg" className="w-full md:w-auto">
                                    Kirim Pendaftaran
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

