

export default function SelectionOne() {

    

    return (
        <>
            {/* === 1. Informasi Pemilik UMKM === */}
            <section>
                <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 mb-6">
                    1. Informasi Pemilik UMKM
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Row 1 */}
                    <div className="grid grid-rows-3 gap-3">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#4E4039] mb-1">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="nama_pemilik_umkm" className="block text-sm font-medium text-[#4E4039] mb-1">Nama Pemilik UMKM</label>
                            <input type="text" id="nama_pemilik_umkm" name="nama_pemilik_umkm" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="nama_umkm" className="block text-sm font-medium text-[#4E4039] mb-1">Nama UMKM</label>
                            <input type="text" id="nama_umkm" name="nama_umkm" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-rows-3 gap-3">
                        <div>
                            <label htmlFor="no_handphone" className="block text-sm font-medium text-[#4E4039] mb-1">No. Handphone</label>
                            <input type="number" id="no_handphone" name="no_handphone" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div className="row-span-2">
                            <label htmlFor="deskripsi_umkm" className="block text-sm font-medium text-[#4E4039] mb-1">Deskripsi UMKM</label>
                            <textarea id="deskripsi_umkm" name="deskripsi_umkm" rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"></textarea>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-rows-3 gap-3">
                        <div>
                            <label htmlFor="tahun_berdiri" className="block text-sm font-medium text-[#4E4039] mb-1">Tahun Berdiri</label>
                            <input type="number" id="tahun_berdiri" name="tahun_berdiri" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="alamat" className="block text-sm font-medium text-[#4E4039] mb-1">Alamat</label>
                            <input type="text" id="alamat" name="alamat" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="lokasi_gmaps" className="block text-sm font-medium text-[#4E4039] mb-1">Lokasi GMaps (Link)</label>
                            <input type="url" id="lokasi_gmaps" name="lokasi_gmaps" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}