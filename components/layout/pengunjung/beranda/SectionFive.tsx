import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SectionFive() {
    return (
        <section className="py-16 md:py-24 bg-[#E2E0DD]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    {/* Judul */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4E4039] leading-snug md:leading-tight">
                        Temukan dan hubungi UMKM Jambi dengan mudah semua informasi usaha dalam satu platform.
                    </h2>

                    {/* Tombol */}
                    <Button className="mt-8 bg-[#E65A4B] text-[#EFEFEF] hover:bg-[#C9302C] rounded-lg px-8 py-3 text-lg font-semibold transition-transform hover:scale-105">
                        Ayo Mulai Sekarang
                    </Button>

                </div>
            </div>
        </section>
    )
}