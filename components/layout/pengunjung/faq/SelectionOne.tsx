export default function SectionOne({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <section className="relative py-30">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl text-center font-semibold mb-2">Frequently Asked Questions</h1>
                        <p className="text-gray-600 mb-6 text-center">Pertanyaan yang sering diajukan tentang penggunaan LapakKito.</p>
                        {/* FAQ */}
                        <div className="grid grid-cols-2 gap-x-3">
                            {(() => {
                                const left = faqs.filter((_, i) => i % 2 === 0);
                                const right = faqs.filter((_, i) => i % 2 === 1);

                                return (
                                    <>
                                        {/* KOLOM KIRI */}
                                        <div className="space-y-3">
                                            {left.map((faq, idx) => (
                                                <details
                                                    key={idx}
                                                    className="group bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                                >
                                                    <summary className="cursor-pointer flex justify-between items-center list-none min-h-10">
                                                        <span className="font-medium text-gray-800">{faq.q}</span>
                                                        <span className="ml-3 text-gray-500 transition-transform group-open:rotate-180">▾</span>
                                                    </summary>
                                                    <div className="mt-3 text-gray-700">{faq.a}</div>
                                                </details>
                                            ))}
                                        </div>

                                        {/* KOLOM KANAN */}
                                        <div className="space-y-3">
                                            {right.map((faq, idx) => (
                                                <details
                                                    key={idx}
                                                    className="group bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                                >
                                                    <summary className="cursor-pointer flex justify-between items-center list-none min-h-10">
                                                        <span className="font-medium text-gray-800">{faq.q}</span>
                                                        <span className="ml-3 text-gray-500 transition-transform group-open:rotate-180">▾</span>
                                                    </summary>
                                                    <div className="mt-3 text-gray-700">{faq.a}</div>
                                                </details>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </section>
    )
}