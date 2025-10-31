"use client"

import { Suspense } from "react";
import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import UmkmHeroSection from "../umkm/UmkmHeroSection";
import UmkmPageSectionSkeletonCard from "@/components/skeletons/UmkmSectionSkeletonForPage";
import UMKMCardSection from "../umkm/UMKMCardSection";

export default function UMKMPage() {
    return (
        <MainLayoutPengunjung>
            <UmkmHeroSection />
            <Suspense fallback={<UmkmPageSectionSkeletonCard />}>
                <UMKMCardSection />
            </Suspense>
        </MainLayoutPengunjung>
    );
}