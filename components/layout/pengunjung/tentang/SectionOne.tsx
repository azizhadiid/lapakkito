import Image from "next/image";

export default function SectionOne() {
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg px-7 py-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h2 className="text-xl md:text-2xl font-semibold text-[#4E4039] mb-4">Apa itu Lapak Kito?</h2>
                <p className="text-[#4E4039] leading-relaxed mb-4">
                    Lapak Kito adalah platform inovatif yang dirancang untuk mempermudah proses jual beli produk digital dan fisik.
                    Kami percaya bahwa setiap individu memiliki potensi untuk berkreasi dan berbisnis, dan Lapak Kito hadir
                    untuk menjadi jembatan yang menghubungkan para kreator, penjual, dan pembeli dalam ekosistem yang aman dan nyaman.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#4E4039] mb-4">Visi</h2>
                <p className="text-[#4E4039] leading-relaxed mb-4">

                    Menjadi platform terdepan yang memberdayakan UMKM lokal dengan menyediakan sarana digital untuk menampilkan profil dan detail usaha mereka, menghubungkan mereka dengan pelanggan potensial, dan mendorong pertumbuhan ekonomi komunitas.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#4E4039] mb-4">Misi</h2>
                <ul className="list-disc list-inside text-[#4E4039] leading-relaxed space-y-2 ms-3">
                    <li>Mendukung kreator lokal dan UMKM untuk memasarkan produk mereka ke audiens yang lebih luas.</li>
                    <li>Membangun komunitas yang solid dan saling mendukung antar pengguna Lapak Kito.</li>
                    <li>Terus berinovasi dengan fitur-fitur baru untuk memenuhi kebutuhan pasar yang berkembang.</li>
                </ul>
            </div>

        </>
    )
}