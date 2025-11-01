import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Helper komponen untuk membungkus Label + Input
function FormField({ children }: { children: React.ReactNode }) {
    return <div className="space-y-2">{children}</div>
}

export default function SelectionTwo() {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold text-[#4E4039] border-b pb-2 mb-6">
                    2. Tautan & Sosial Media (Opsional)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#4E4039]">

                    {/* --- Kolom 1: Sosial Media --- */}
                    <div className="space-y-6">
                        <FormField>
                            <Label htmlFor="instagram">Link Instagram</Label>
                            <Input type="url" id="instagram" name="instagram" placeholder="https://www.instagram.com/..." />
                        </FormField>

                        <FormField>
                            <Label htmlFor="tiktok">Link Tiktok</Label>
                            <Input type="url" id="tiktok" name="tiktok" placeholder="https://www.tiktok.com/@..." />
                        </FormField>

                        <FormField>
                            <Label htmlFor="facebook">Link Facebook</Label>
                            <Input type="url" id="facebook" name="facebook" placeholder="https://www.facebook.com/..." />
                        </FormField>
                    </div>

                    {/* --- Kolom 2: E-Commerce --- */}
                    <div className="space-y-6">
                        <FormField>
                            <Label htmlFor="shopee">Link Shopee / ShopeeFood</Label>
                            <Input type="url" id="shopee" name="shopee" placeholder="https://shopee.co.id/..." />
                        </FormField>

                        <FormField>
                            <Label htmlFor="tokopedia">Link Tokopedia</Label>
                            <Input type="url" id="tokopedia" name="tokopedia" placeholder="https://www.tokopedia.com/..." />
                        </FormField>
                    </div>

                    {/* --- Kolom 3: Pesan Antar --- */}
                    <div className="space-y-6">
                        <FormField>
                            <Label htmlFor="gojek">Link Gojek / GoFood</Label>
                            <Input type="url" id="gojek" name="gojek" placeholder="https://gofood.link/..." />
                        </FormField>

                        <FormField>
                            <Label htmlFor="grab">Link Grab / GrabFood</Label>
                            <Input type="url" id="grab" name="grab" placeholder="https://food.grab.com/..." />
                        </FormField>

                        <FormField>
                            <Label htmlFor="maxim">Link Maxim</Label>
                            <Input type="url" id="maxim" name="maxim" placeholder="https://taximaxim.com/..." />
                        </FormField>
                    </div>
                </div>
            </section>
        </>
    )
}