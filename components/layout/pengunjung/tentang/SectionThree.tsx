import Image from "next/image";

export default function SectionThree() {
    return (
        <>
            <section className="relative py-20 md:py-32 bg-[#EFEFEF]">
                <div className="max-w-xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl text-center font-bold text-[#4E4039] mb-16">
                            Tim <span className="text-[#E65A4B]">Pengembang</span>
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center order-1 lg:order-2">
                                <Image className="rounded-full w-40 h-40 object-cover mb-6 mx-auto border-4 border-[#E65A4B] shadow-lg"
                                    src={'/images/team/Aziz Alhadiid.jpg'}
                                    alt={'Aziz Alhadiid'}
                                    width={160}
                                    height={160}
                                />
                                <h3 className="text-2xl font-bold text-[#4E4039] mb-1">Aziz Alhadiid</h3>
                                <p className="text-[#E65A4B] text-lg font-semibold mb-4">Project Lead</p>
                                <div className="flex justify-center space-x-4 text-gray-400">
                                    <a href="https://www.linkedin.com/in/aziz-alhadiid/" target="_blank" className="hover:text-[#E65A4B] transition-colors">[LinkedIn]</a>
                                    <a href="https://www.instagram.com/alhadiid_aziz?igsh=MWxncnd0bjBuOGt1Mw==" target="_blank" className="hover:text-[#E65A4B] transition-colors">[Instagram]</a>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center order-2 lg:order-1">
                                <Image className="rounded-full w-40 h-40 object-cover mb-6 mx-auto border-4 border-[#E65A4B] shadow-lg"
                                    src={'/images/team/Zikra Zana.jpg'}
                                    alt={'Zikra Zana'}
                                    width={160}
                                    height={160}
                                />
                                <h3 className="text-2xl font-bold text-[#4E4039] mb-1">Zikra Zana</h3>
                                <p className="text-[#E65A4B] text-lg font-semibold mb-4">Web Developer</p>
                                <div className="flex justify-center space-x-4 text-gray-400">
                                    <a href="https://www.linkedin.com/in/zikra-zana-b4964b2b4/" target="_blank" className="hover:text-[#E65A4B] transition-colors">[LinkedIn]</a>
                                    <a href="https://www.instagram.com/zikrazana_" target="_blank" className="hover:text-[#E65A4B] transition-colors">[Instagram]</a>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center order-3">
                                <Image className="rounded-full w-40 h-40 object-cover mb-6 mx-auto border-4 border-[#E65A4B] shadow-lg"
                                    src={'/images/team/Arfun Ali Yafie.jpg'}
                                    alt={'Arfun Ali Yafie'}
                                    width={160}
                                    height={160}
                                />
                                <h3 className="text-2xl font-bold text-[#4E4039] mb-1">Arfun Ali Yafie</h3>
                                <p className="text-[#E65A4B] text-lg font-semibold mb-4">Web Developer</p>
                                <div className="flex justify-center space-x-4 text-gray-400">
                                    <a href="https://www.linkedin.com/in/arfunaliyafie/" target="_blank" className="hover:text-[#E65A4B] transition-colors">[LinkedIn]</a>
                                    <a href="https://www.instagram.com/ar.yaf_?igsh=Z2dxYTBoM2hsZWVy" target="_blank" className="hover:text-[#E65A4B] transition-colors">[Instagram]</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}