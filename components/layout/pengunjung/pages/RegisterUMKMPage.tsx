import { MainLayoutPengungjung } from "../MainLayoutPengunjung";
import SelectionFour from "../register-umkm/SelectionFour";
import SelectionOne from "../register-umkm/SelectionOne";
import SelectionThree from "../register-umkm/SelectionThree";
import SelectionTwo from "../register-umkm/SelectionTwo";

export default function RegisterUMKMPage() {
    return (
        <MainLayoutPengungjung>
            <section className="relative py-23 md:py-30">
                <div className="max-w-xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-start mb-10">
                        <h1 className="text-3xl font-bold text-[#4E4039]">
                            Daftarkan UMKM Anda!
                        </h1>
                        <p className="mt-2 text-[#4E4039]">
                            Selamat datang di LAPAK KITO! Daftarkan UMKM anda untuk menjangkau pasar yang lebih luas bersama kami 👋
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 md:p-10">
                        <form action="#" method="POST">
                            <div className="space-y-10">

                                <SelectionOne />
                                <SelectionTwo />
                                <SelectionThree/>
                                <SelectionFour/>

                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </MainLayoutPengungjung>
    )
}