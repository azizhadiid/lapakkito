"use client"

import { useState, useEffect } from "react"

type PreviewState = Record<string, string>;

export default function SelectionThree() {

    const [previews, setPreviews] = useState<PreviewState>({});

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;

        if (files && files[0]) {
            const file = files[0];
            
            // Buat URL lokal untuk file yang baru dipilih
            const newPreviewUrl = URL.createObjectURL(file);

            // Update state
            setPreviews(prev => {
                // Hapus URL preview lama jika ada (mencegah memory leak)
                if (prev[name]) {
                    URL.revokeObjectURL(prev[name]);
                }
                // Tambahkan/update URL preview yang baru
                return {
                    ...prev,
                    [name]: newPreviewUrl
                };
            });
        }
    };

    // Efek untuk membersihkan semua URL saat komponen 'dibongkar'
    useEffect(() => {
        return () => {
            Object.values(previews).forEach(url => URL.revokeObjectURL(url));
        };
    }, [previews]);

    return (
        <>
            {/* === 3. Foto UMKM === */}
            <section>
                <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 md:mb-4">
                    3. Foto UMKM
                </h2>
                <p className="md:hidden text-xs text-[#4E4039] mb-6">
                    *Ketentuan: Format JPG/PNG, ukuran maksimal 2MB/foto
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Foto 1 */}
                    <div>
                        <label htmlFor="foto-1" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 1</label>
                        <label
                            htmlFor="foto-1"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >

                            {/* Logika Tampilan Preview 1 */}
                            {previews['foto-1'] ? (
                                <img src={previews['foto-1']} alt="Foto 1 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-1"
                                name="foto-1"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept (hanya gambar)
                            />
                        </label>
                    </div>

                    {/* Foto 2 */}
                    <div>
                        <label htmlFor="foto-2" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 2</label>
                        <label
                            htmlFor="foto-2"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >
                            {/* Logika Tampilan Preview */}
                            {previews['foto-2'] ? (
                                <img src={previews['foto-2']} alt="Foto 2 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-2"
                                name="foto-2"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept
                            />
                        </label>
                    </div>

                    {/* Foto 3 */}
                    <div>
                        <label htmlFor="foto-3" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 3</label>
                        <label
                            htmlFor="foto-3"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >
                            {/* Logika Tampilan Preview */}
                            {previews['foto-3'] ? (
                                <img src={previews['foto-3']} alt="Foto 3 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-3"
                                name="foto-3"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept
                            />
                        </label>
                    </div>

                    {/* Foto 4 */}
                    <div>
                        <label htmlFor="foto-4" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 4</label>
                        <label
                            htmlFor="foto-4"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >
                            {/* Logika Tampilan Preview */}
                            {previews['foto-4'] ? (
                                <img src={previews['foto-4']} alt="Foto 4 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-4"
                                name="foto-4"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept
                            />
                        </label>
                    </div>

                    {/* Foto 5 */}
                    <div>
                        <label htmlFor="foto-5" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 5</label>
                        <label
                            htmlFor="foto-5"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >
                            {/* Logika Tampilan Preview */}
                            {previews['foto-5'] ? (
                                <img src={previews['foto-5']} alt="Foto 5 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-5"
                                name="foto-5"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept
                            />
                        </label>
                    </div>

                    {/* Foto 6 */}
                    <div>
                        <label htmlFor="foto-6" className="text-sm font-medium text-[#4E4039] mb-1 block">Foto 6</label>
                        <label
                            htmlFor="foto-6"
                            className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" // Tambah overflow-hidden
                        >
                            {/* Logika Tampilan Preview */}
                            {previews['foto-6'] ? (
                                <img src={previews['foto-6']} alt="Foto 6 Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload File</span>
                            )}

                            <input
                                id="foto-6"
                                name="foto-6"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange} // Tambah onChange
                                accept="image/*"           // Tambah accept
                            />
                        </label>
                    </div>
                </div>

                <p className="hidden md:block mt-4 text-xs text-[#4E4039]">
                    *Ketentuan: Format JPG/PNG, ukuran maksimal 2MB/foto
                </p>
            </section>
        </>
    )
}