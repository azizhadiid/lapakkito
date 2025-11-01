import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SelectionFour() {
    return (
        <>
            {/* === Footer & Submit === */}
            <section className="space-y-6 pt-6 border-t">
                <div className="flex items-start space-x-3">
                    <Checkbox id="terms" name="terms" />
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
                >
                    Daftar Sekarang
                </Button>
            </section>
        </>
    )
}