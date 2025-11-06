"use client"

import { Suspense, useState } from "react";
import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import UmkmHeroSection from "../umkm/UmkmHeroSection";
import UmkmPageSectionSkeletonCard from "@/components/skeletons/UmkmSectionSkeletonForPage";
import UMKMCardSection from "../umkm/UMKMCardSection";

export default function UMKMPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("Semua Kategori");
    return (
        <MainLayoutPengunjung>
            <UmkmHeroSection
                setSearchQuery={setSearchQuery}
                setCategory={setCategory}
                selectedCategory={category}
            />
            <Suspense fallback={<UmkmPageSectionSkeletonCard />}>
                <UMKMCardSection
                    searchQuery={searchQuery}
                    category={category}
                />
            </Suspense>
        </MainLayoutPengunjung>
    );
}