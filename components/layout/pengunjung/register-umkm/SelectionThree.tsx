"use client"

import { useState, useEffect } from "react"
import { UploadCloud } from "lucide-react";

type PreviewState = Record<string, string>;

// Componen untuk kotak upload gambar
function ImageUploadBox({
    name,
    label,
    previewUrl,
    onChange
}: {
    name: string;
    label: string;
    previewUrl: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="w-full md:w-[calc((100%-3rem)/3)] space-y-2">
            <label htmlFor={name} className="text-sm font-medium text-[#4E4039] block">
                {label}
            </label>
            <label
                htmlFor={name}
                className="flex flex-col items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden relative"
            >
                {previewUrl ? (
                    // Tampilan jika gambar sudah dipilih
                    <img src={previewUrl} alt={`${label} Preview`} className="w-full h-full object-cover" />
                ) : (
                    // Tampilan default (placeholder)
                    <div className="flex flex-col items-center justify-center text-gray-500">
                        <UploadCloud className="w-8 h-8 mb-2" />
                        <span className="text-sm font-semibold">Upload File</span>
                    </div>
                )}
                <input
                    id={name}
                    name={name}
                    type="file"
                    className="sr-only"
                    onChange={onChange}
                    accept="image/png, image/jpeg"
                />
            </label>
        </div>
    )
}


export default function SelectionThree() {

    const [previews, setPreviews] = useState<PreviewState>({});

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            const newPreviewUrl = URL.createObjectURL(file);

            setPreviews(prev => {
                if (prev[name]) {
                    URL.revokeObjectURL(prev[name]);
                }
                return {
                    ...prev,
                    [name]: newPreviewUrl
                };
            });
        }
    };

    useEffect(() => {
        return () => {
            Object.values(previews).forEach(url => URL.revokeObjectURL(url));
        };
    }, [previews]);

    const uploadSlots = [
        { id: "foto-1", label: "Foto 1 (Cover)" },
        { id: "foto-2", label: "Foto 2" },
        { id: "foto-3", label: "Foto 3" },
        { id: "foto-4", label: "Foto 4" },
        { id: "foto-5", label: "Foto 5" },
    ];

    return (
        <section>
            <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 md:mb-4">
                3. Foto UMKM
            </h2>
            <p className="md:hidden text-xs text-[#4E4039] mb-6">
                *Ketentuan: Format JPG/PNG, ukuran maksimal 2MB/foto
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-[#4E4039]">
                {uploadSlots.map((slot) => (
                    <ImageUploadBox
                        key={slot.id}
                        name={slot.id}
                        label={slot.label}
                        previewUrl={previews[slot.id]}
                        onChange={handleFileChange}
                    />
                ))}
            </div>

            <p className="hidden md:block mt-4 text-xs text-[#4E4039]">
                *Ketentuan: Format JPG/PNG, ukuran maksimal 2MB/foto
            </p>
        </section>
    )
}