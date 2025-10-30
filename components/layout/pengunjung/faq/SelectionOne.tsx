export default function SectionOne({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <section className="relative py-23 md:py-30">
            <div className="max-w-xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl md:text-3xl text-center font-semibold text-[#4E4039] mb-2">Frequently Asked Questions</h1>
                <p className=" mb-6 text-center text-sm md:text-base text-[#4E4039]">Pertanyaan yang sering diajukan tentang penggunaan LapakKito.</p>
                
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-2 gap-x-3">
                    {(() => {
                        // Logic
                        const left = faqs.filter((_, i) => i % 2 === 0);
                        const right = faqs.filter((_, i) => i % 2 === 1);

                        return (
                            <>
                                {/* KOLOM KIRI (Desktop) */}
                                <div className="space-y-3">
                                    {left.map((faq, idx) => (
                                        <details
                                            key={idx}
                                            className="group bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                        >
                                            <summary className="cursor-pointer flex justify-between items-center list-none min-h-10">
                                                <span className="font-medium text-[#4E4039]">{faq.q}</span>
                                                <span className="ml-3 text-[#4E4039] transition-transform group-open:rotate-180">▾</span>
                                            </summary>
                                            <div className="mt-3 text-[#4E4039]">{faq.a}</div>
                                        </details>
                                    ))}
                                </div>

                                {/* KOLOM KANAN (Desktop) */}
                                <div className="space-y-3">
                                    {right.map((faq, idx) => (
                                        <details
                                            key={idx}
                                            className="group bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                        >
                                            <summary className="cursor-pointer flex justify-between items-center list-none min-h-10">
                                                <span className="font-medium text-[#4E4039]">{faq.q}</span>
                                                <span className="ml-3 text-[#4E4039] transition-transform group-open:rotate-180">▾</span>
                                            </summary>
                                            <div className="mt-3 text-[#4E4039]">{faq.a}</div>
                                        </details>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>

                {/* Mobile */}
                <div className="block md:hidden space-y-3">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                        >
                            <summary className="cursor-pointer flex justify-between items-center list-none">
                                <span className="font-medium text-[#4E4039]">{faq.q}</span>
                                <span className="ml-3 text-[#4E4039] transition-transform group-open:rotate-180">▾</span>
                            </summary>
                            <div className="mt-3 text-[#4E4039]">{faq.a}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}