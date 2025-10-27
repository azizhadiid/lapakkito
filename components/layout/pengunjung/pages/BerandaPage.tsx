"use client"

import SectionOne from "../beranda/SectionOne";
import SectionThree from "../beranda/SectionThree";
import SectionTwo from "../beranda/SectionTwo";
import { MainLayoutPengungjung } from "../MainLayoutPengunjung";

export default function BerandaPage() {
    return (
        <MainLayoutPengungjung>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </MainLayoutPengungjung>
    );
}