import { Eye, Rocket, Users } from "lucide-react";
import Image from "next/image";

export default function SectionTwo() {
    return (
        <>
            <section className="relative py-20 md:py-32 bg-[#E2E0DD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Pengantar (Tidak berubah) */}
                    <div className="max-w-3xl mx-auto text-center mb-20 animate-in fade-in zoom-in-95 duration-500">
                        <h2 className="text-4xl font-bold text-[#4E4039] mb-6">
                            Platform Gotong Royong Digital
                        </h2>
                        <p className="text-lg text-[#4E4039] leading-relaxed">
                            Lapak Kito adalah jembatan yang menghubungkan kreator, penjual, dan pembeli dalam
                            ekosistem yang aman dan nyaman. Kami percaya setiap individu memiliki potensi
                            untuk berkreasi dan berbisnis.
                        </p>
                    </div>

                    {/* Visi (Gambar Kiri, Teks Kanan) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-3 items-center mb-20">

                        <div className="max-w-sm mx-auto animate-in fade-in slide-in-from-left-10 duration-700 delay-100 lg:mr-56">
                            <Image
                                src="/images/tentang/tentang2.png"
                                alt="Visualisasi Visi"
                                width={400}
                                height={400}
                                className="w-full h-auto object-cover animate-float-custom"
                            />
                        </div>

                        {/* Teks Visi */}
                        <div className="animate-in fade-in slide-in-from-right-10 duration-700 delay-100 text-center md:text-left">
                            <Eye className="w-12 h-12 text-[#E65A4B] mb-4 mx-auto md:mx-0" />
                            <h3 className="text-3xl font-bold text-[#E65A4B] mb-4 ">Visi Kami</h3>
                            <p className="text-lg text-[#4E4039] leading-relaxed">
                                Menjadi platform terdepan yang memberdayakan UMKM lokal untuk menampilkan profil dan detail usaha mereka, menghubungkan mereka dengan pelanggan potensial, dan mendorong pertumbuhan ekonomi komunitas.
                            </p>
                        </div>
                    </div>

                    {/* Misi (Teks Kiri, Gambar Kanan) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                        <div className="md:order-2 max-w-sm mx-auto animate-in fade-in slide-in-from-right-10 duration-700 delay-200 lg:ml-48">
                            <Image
                                src="/images/tentang/tentang3.png"
                                alt="Visualisasi Misi"
                                width={600}
                                height={400}
                                className="animate-float-custom w-full h-auto object-cover"
                            />
                        </div>

                        {/* Teks Misi */}
                        <div className="md:order-1 animate-in fade-in slide-in-from-left-10 duration-700 delay-200 text-center md:text-left">
                            <Rocket className="w-12 h-12 text-[#E65A4B] mb-4 mx-auto md:mx-0" />
                            <h3 className="text-3xl font-bold text-[#E65A4B] mb-6 ">Misi Kami</h3>
                            <ul className="space-y-4">
                                {/* ... (list misi tidak berubah) ... */}
                                <li className="flex items-start text-left">
                                    <span className="text-[#E65A4B] mt-1 mr-3 text-2xl leading-none">
                                        &bull;
                                    </span>
                                    <span className="text-lg text-[#4E4039]">Mendukung kreator lokal dan UMKM untuk memasarkan produk mereka.</span>
                                </li>
                                <li className="flex items-start text-left">
                                    <span className="text-[#E65A4B] mt-1 mr-3 text-2xl leading-none">
                                        &bull;
                                    </span>
                                    <span className="text-lg text-[#4E4039]">Membangun komunitas yang solid dan saling mendukung.</span>
                                </li>
                                <li className="flex items-start text-left">
                                    <span className="text-[#E65A4B] mt-1 mr-3 text-2xl leading-none">
                                        &bull;
                                    </span>
                                    <span className="text-lg text-[#4E4039]">Terus berinovasi dengan fitur baru untuk memenuhi kebutuhan pasar.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}