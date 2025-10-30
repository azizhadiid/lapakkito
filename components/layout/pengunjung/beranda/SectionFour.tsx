import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// --- Data dummy untuk testimoni ---
const testimonialData = [
    {
        quote: "Saya sudah menggunakan LapakKito selama lebih dari setahun, dan sangat terbantu dalam mempromosikan usaha saya. Banyak pelanggan baru yang menemukan kami lewat direktori ini, dan tampilannya sangat mudah digunakan. Sangat direkomendasikan untuk pelaku UMKM yang ingin lebih dikenal!",
        name: "Jane Smith",
        role: "Freelance Designer",
        avatar: "/images/avatars/1.jpg"
    },
    {
        quote: "LapakKito sangat membantu saya menemukan berbagai UMKM di Jambi yang sebelumnya belum saya kenal. Informasinya lengkap dan mudah diakses, jadi saya bisa langsung hubungi mereka tanpa harus cari-cari di media sosial. Platform ini benar-benar memudahkan!",
        name: "Tom Williams",
        role: "Programmer",
        avatar: "/images/avatars/2.jpg"
    },
    {
        quote: "Sebagai pelaku usaha kecil, saya merasa LapakKito memberi panggung yang selama ini sulit didapat. Banyak pelanggan baru datang setelah usaha saya muncul di direktori ini. Fitur-fitur yang disediakan juga sangat mendukung promosi lokal.",
        name: "Sarah Jhonson", // Nama di gambar 'Jhonshon', saya perbaiki
        role: "Pedagang",
        avatar: "/images/avatars/3.jpg"
    }
];

export default function SectionFour() {
    return (
        <section className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* === Header Section === */}
                <div className="
                    max-w-2xl mb-12 md:mb-16 
                    text-center min-[800px]:text-left
                ">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4E4039]">
                        Testimonial
                    </h2>
                    <p className="mt-4 text-lg text-[#4E4039]">
                        Jangan hanya percaya begitu saja. Lihat apa yang sebenarnya dikatakan pengguna layanan kami tentang pengalaman mereka.
                    </p>
                </div>

                {/* === Grid untuk Card Testimoni === */}
                <div className="flex flex-wrap items-stretch justify-center gap-8">

                    {testimonialData.map((item) => (
                        <Card
                            key={item.name}
                            className="bg-[#E2E0DD] rounded-2xl shadow-lg p-8 flex flex-col 
                                transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                                w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
                        >
                            <CardContent className="flex flex-col flex-grow p-0">

                                {/* 1. Kutipan Testimoni */}
                                <p className="text-[#4E4039] text-center flex-grow">
                                    {item.quote}
                                </p>

                                {/* 2. Bintang */}
                                <div className="flex justify-center gap-1 my-6">
                                    {/* Trik untuk loop 5x membuat bintang */}
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star
                                            key={i}
                                            // 'fill-' digunakan untuk mengisi warna bintang
                                            className="w-5 h-5 text-[#E65A4B] fill-[#E65A4B]"
                                        />
                                    ))}
                                </div>

                                {/* 3. Info Pengguna (Avatar, Nama, Role) */}
                                <div className="text-center">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-full mx-auto"
                                    />
                                    <h4 className="mt-4 text-lg font-semibold text-[#4E4039]">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-[#4E4039]">
                                        {item.role}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                </div>

            </div>
        </section>
    );
}