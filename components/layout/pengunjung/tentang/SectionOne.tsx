import Image from "next/image";

export default function SectionOne() {
    return (
        <>
            <section className="relative py-20 md:py-32 bg-[#EFEFEF]">
                <div className="max-w-xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            {/* Kolom Teks Hero */}
                            <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                                    Tentang <span className="text-[#E65A4B]">Lapak Kito</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-700 max-w-lg">
                                    Menghubungkan UMKM lokal dengan dunia digital, mendorong pertumbuhan ekonomi komunitas.
                                </p>
                            </div>

<<<<<<< HEAD
                    Menjadi platform terdepan yang memberdayakan UMKM lokal dengan menyediakan sarana digital untuk menampilkan profil dan detail usaha mereka, menghubungkan mereka dengan pelanggan potensial, dan mendorong pertumbuhan ekonomi komunitas.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#4E4039] mb-4">Misi</h2>
                <ul className="list-disc list-inside text-[#4E4039] leading-relaxed space-y-2 ms-3">
                    <li>Mendukung kreator lokal dan UMKM untuk memasarkan produk mereka ke audiens yang lebih luas.</li>
                    <li>Membangun komunitas yang solid dan saling mendukung antar pengguna Lapak Kito.</li>
                    <li>Terus berinovasi dengan fitur-fitur baru untuk memenuhi kebutuhan pasar yang berkembang.</li>
                </ul>
            </div>
=======
                            {/* Kolom Visual Hero */}
                            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                                <Image
                                    src="/images/tentang/Header.jpg" // Ganti dengan gambar ilustrasi yang relevan
                                    alt="Ilustrasi UMKM Lokal"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

>>>>>>> 83ae878a07a55391ac58c09e70f80f3c7601f1e8
        </>
    )
}