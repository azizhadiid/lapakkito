"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Tentukan tipe props
interface SelectionFourProps {
    isLoading: boolean;
    termsAccepted: boolean;
    onTermsChange: (checked: boolean) => void;
}

export default function SelectionFour({
    isLoading,
    termsAccepted,
    onTermsChange
}: SelectionFourProps) {
    return (
        <>
            {/* === Footer & Submit === */}
            <section className="space-y-6 pt-6 border-t">
                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="terms"
                        name="terms"
                        checked={termsAccepted}
                        onCheckedChange={onTermsChange} // Hubungkan ke state induk
                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label
                            htmlFor="terms"
                            className="text-sm font-medium text-[#4E4039] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Saya telah membaca dan menyetujui.
                        </Label>
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full text-zinc-100 bg-[#E65A4B] hover:bg-[#C9302C] transition-all duration-200 ease-in-out hover:scale-105"
                    // Tombol akan nonaktif jika sedang loading ATAU terms belum diceklis
                    disabled={isLoading || !termsAccepted}
                >
                    {/* Ubah teks tombol saat loading */}
                    {isLoading ? "Mengirim Pendaftaran..." : "Daftar Sekarang"}
                </Button>
            </section>
        </>
    )
}