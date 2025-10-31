import Image from "next/image";

export default function SectionTwo() {
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg px-7 py-6 shadow-lg hover:shadow-xl transition-shadow duration-200 mt-8">
                <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#4E4039] mb-4">Web Developer</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    <div className="flex flex-col items-center text-center order-2 md:order-1">
                        <Image className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
                            src={'/images/team/Zikra Zana.jpg'}
                            alt={'Zikra Zana'}
                            width={128}
                            height={128}
                        />
                        <h3 className="text-lg font-medium text-[#4E4039]">Zikra Zana</h3>
                    </div>
                    <div className="flex flex-col items-center text-center order-1 col-span-2 justify-self-center md:order-2 md:col-span-1 md:justify-self-auto">
                        <Image className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
                            src={'/images/team/Aziz Alhadiid.jpg'}
                            alt={'Aziz Alhadiid'}
                            width={128}
                            height={128}
                        />
                        <h3 className="text-lg font-medium text-[#4E4039]">Aziz Alhadiid</h3>
                    </div>
                    <div className="flex flex-col items-center text-center order-3 md:order-3">
                        <Image className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
                            src={'/images/team/Arfun Ali Yafie.jpg'}
                            alt={'Arfun Ali Yafie'}
                            width={128}
                            height={128}
                        />
                        <h3 className="text-lg font-medium text-[#4E4039]">Arfun Ali Yafie</h3>
                    </div>
                </div>
            </div>
        </>
    )
}