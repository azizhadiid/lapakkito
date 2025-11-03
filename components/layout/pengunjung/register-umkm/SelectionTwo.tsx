"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/lib/type";
import { ChangeEvent } from "react";

// Helper komponen untuk membungkus Label + Input
function FormField({ children }: { children: React.ReactNode }) {
    return <div className="space-y-2">{children}</div>
}

// Tentukan tipe props
interface SelectionTwoProps {
    formData: FormData;
    handleTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectionTwo({ formData, handleTextChange }: SelectionTwoProps) {
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
                            <Label htmlFor="link_instagram">Link Instagram</Label>
                            <Input
                                type="url"
                                id="link_instagram"
                                name="link_instagram"
                                placeholder="https://www.instagram.com/..."
                                value={formData.link_instagram}
                                onChange={handleTextChange}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="link_tiktok">Link Tiktok</Label>
                            <Input
                                type="url"
                                id="link_tiktok"
                                name="link_tiktok"
                                placeholder="https://www.tiktok.com/@..."
                                value={formData.link_tiktok}
                                onChange={handleTextChange}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="link_facebook">Link Facebook</Label>
                            <Input
                                type="url"
                                id="link_facebook"
                                name="link_facebook"
                                placeholder="https://www.facebook.com/..."
                                value={formData.link_facebook}
                                onChange={handleTextChange}
                            />
                        </FormField>
                    </div>

                    {/* --- Kolom 2: E-Commerce --- */}
                    <div className="space-y-6">
                        <FormField>
                            <Label htmlFor="link_shopee">Link Shopee / ShopeeFood</Label>
                            <Input
                                type="url"
                                id="link_shopee"
                                name="link_shopee"
                                placeholder="https://shopee.co.id/..."
                                value={formData.link_shopee}
                                onChange={handleTextChange}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="link_tokopedia">Link Tokopedia</Label>
                            <Input
                                type="url"
                                id="link_tokopedia"
                                name="link_tokopedia"
                                placeholder="https://www.tokopedia.com/..."
                                value={formData.link_tokopedia}
                                onChange={handleTextChange}
                            />
                        </FormField>
                    </div>

                    {/* --- Kolom 3: Pesan Antar --- */}
                    <div className="space-y-6">
                        <FormField>
                            <Label htmlFor="link_gojek">Link Gojek / GoFood</Label>
                            <Input
                                type="url"
                                id="link_gojek"
                                name="link_gojek"
                                placeholder="https://gofood.link/..."
                                value={formData.link_gojek}
                                onChange={handleTextChange}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="link_grab">Link Grab / GrabFood</Label>
                            <Input
                                type="url"
                                id="link_grab"
                                name="link_grab"
                                placeholder="https://food.grab.com/..."
                                value={formData.link_grab}
                                onChange={handleTextChange}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="link_maxim">Link Maxim</Label>
                            <Input
                                type="url"
                                id="link_maxim"
                                name="link_maxim"
                                placeholder="https://taximaxim.com/..."
                                value={formData.link_maxim}
                                onChange={handleTextChange}
                            />
                        </FormField>
                    </div>
                </div>
            </section>
        </>
    )
}