"use client"

import { Suspense } from "react";
import SectionFive from "../beranda/SectionFive";
import SectionFour from "../beranda/SectionFour";
import SectionOne from "../beranda/SectionOne";
import SectionThree from "../beranda/SectionThree";
import SectionTwo from "../beranda/SectionTwo";
import { MainLayoutPengungjung } from "../MainLayoutPengunjung";
import UmkmSectionSkeleton from "@/components/skeletons/UmkmSectionSkeleton";

export default function BerandaPage() {
    return (
        <MainLayoutPengungjung>
            <SectionOne />
            <SectionTwo />
            {/* === INI KUNCINYA === */}
            <Suspense fallback={<UmkmSectionSkeleton />}>
                {/* Next.js akan menunggu komponen async ini selesai */}
                <SectionThree />
            </Suspense>
            <SectionFour />
            <SectionFive />
        </MainLayoutPengungjung>
    );
}