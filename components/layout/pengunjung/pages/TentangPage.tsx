import { MainLayoutPengunjung } from "../MainLayoutPengunjung";
import SectionOne from "../tentang/SectionOne";
import SectionThree from "../tentang/SectionThree";
import SectionTwo from "../tentang/SectionTwo";

export default function TentangPage() {
    return (
        <MainLayoutPengunjung>
            <SectionOne />
            <SectionTwo />
            <SectionThree/>
        </MainLayoutPengunjung>
    )
}