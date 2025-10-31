import { Suspense } from "react";
import SectionFive from "../beranda/SectionFive";
import SectionFour from "../beranda/SectionFour";
import SectionOne from "../beranda/SectionOne";
import SectionThree from "../beranda/SectionThree";
import SectionTwo from "../beranda/SectionTwo";
import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import UmkmSectionSkeleton from "@/components/skeletons/UmkmSectionSkeleton";

export default function BerandaPage() {
    return (
        <MainLayoutPengunjung>
            <SectionOne />
            <SectionTwo />
            {/* Untuk Skaleton UMKM Card */}
            <Suspense fallback={<UmkmSectionSkeleton />}>
                <SectionThree />
            </Suspense>
            <SectionFour />
            <SectionFive />
        </MainLayoutPengunjung>
    );
}