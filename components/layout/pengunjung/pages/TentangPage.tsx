import { MainLayoutPengungjung } from "../MainLayoutPengunjung";
import SectionOne from "../tentang/SectionOne";
import SectionTwo from "../tentang/SectionTwo";

export default function TentangPage() {
    return (
        <MainLayoutPengungjung>
            <section className="relative py-23 md:py-30">
                <div className="max-w-xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionOne />
                    <SectionTwo />
                </div>
            </section>
        </MainLayoutPengungjung>
    )
}