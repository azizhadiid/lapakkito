import Image from "next/image";

export default function SectionOne() {
    return (
        <section className="mt-8 relative py-20 md:py-32 bg-[#EFEFEF] md:mt-0 lg:mt-0">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Kolom Teks Hero (Tidak berubah) */}
                    <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#4E4039]">
                            Tentang <span className="text-[#E65A4B]">Lapak Kito</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#4E4039] max-w-lg">
                            Menghubungkan UMKM lokal dengan dunia digital, mendorong pertumbuhan ekonomi komunitas.
                        </p>
                    </div>

                    {/* Kolom Visual Hero */}
                    <div className="
                        animate-in fade-in slide-in-from-right-10 duration-700
                        flex justify-center items-center lg:justify-end lg:ml-48
                    ">
                        <div className="max-w-md mx-auto">
                            <Image
                                src="/images/tentang/tentang1.png"
                                alt="Ilustrasi UMKM Lokal"
                                width={600}
                                height={400}
                                className="
                                    w-full h-auto 
                                    animate-float-custom
                                "
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}