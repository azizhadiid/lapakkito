"use client"

import { Suspense } from "react";
import { MainLayoutPengungjung } from "../MainLayoutPengunjung";
import UmkmHeroSection from "../umkm/UmkmHeroSection";
import UmkmPageSectionSkeletonCard from "@/components/skeletons/UmkmSectionSkeletonForPage";
import UMKMCardSection from "../umkm/UMKMCardSection";

export default function UMKMPage() {
    return (
        <MainLayoutPengungjung>
            <UmkmHeroSection />
            <Suspense fallback={<UmkmPageSectionSkeletonCard />}>
                <UMKMCardSection />
            </Suspense>
        </MainLayoutPengungjung>
    );
}