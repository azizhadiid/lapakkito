'use client'; // Tambahkan ini jika Anda menggunakan App Router (Next.js 13+)

import { useState, FormEvent } from 'react';

// Tipe untuk status pengiriman
type StatusType = 'idle' | 'loading' | 'success' | 'error';

export default function SelectionOne() {
    // State untuk data form
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    // State untuk status pengiriman
    const [status, setStatus] = useState<StatusType>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    // Handler untuk mengubah input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handler untuk submit form
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Mencegah refresh halaman
        setStatus('loading');
        setResponseMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResponseMessage(data.message || 'Pesan berhasil terkirim!');
                // Kosongkan form setelah berhasil
                setFormData({ email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setResponseMessage(data.error || 'Terjadi kesalahan.');
            }
        } catch (error) {
            console.error('Error on submit:', error);
            setStatus('error');
            setResponseMessage('Tidak dapat terhubung ke server.');
        }
    };

    return (
        <>
            <section className="relative py-23 md:py-30">
                <div className="max-w-xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#4E4039] mb-4 text-center">
                        Hubungi Kami
                    </h1>
                    <p className="mb-8 text-lg text-[#4E4039] text-center">
                        Silahkan hubungi kami apabila terdapat saran, kritikan, kendala dan lainnya.
                    </p>

                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
                        {/* Kolom Kiri: Kirim Email */}
                        <div>
                            <h2 className="text-xl font-semibold text-[#4E4039] mb-4">Kirim Pesan</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#E65A4B] focus:border-[#E65A4B]"
                                        placeholder="Masukkan email Anda"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        required 
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#E65A4B] focus:border-[#E65A4B]"
                                        placeholder="Subjek pesan"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        required 
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        placeholder="Tulis pesan Anda di sini"
                                    ></textarea>
                                </div>

                                {/* Tombol Kirim dengan status loading */}
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E65A4B] hover:bg-[#C9302C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E65A4B] disabled:opacity-50"
                                    disabled={status === 'loading'} // Nonaktifkan tombol saat loading
                                >
                                    {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                                </button>

                                {/* Pesan Feedback untuk User */}
                                {status === 'success' && (
                                    <p className="mt-2 text-sm text-center text-green-600">{responseMessage}</p>
                                )}
                                {status === 'error' && (
                                    <p className="mt-2 text-sm text-center text-red-600">{responseMessage}</p>
                                )}
                            </form>
                        </div>

                        {/* Kolom Kanan: Informasi Kontak (Tidak berubah) */}
                        <div className="relative md:before:content-[''] md:before:absolute md:before:w-px md:before:h-full md:before:bg-gray-300 md:before:top-0 md:before:-left-4 md:pl-4">
                            <h2 className="text-xl font-semibold text-[#4E4039] mb-4">Informasi Kontak</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="h-6 w-6 text-[#E65A4B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-[#4E4039]">lapakkito@gmail.com</p>
                                </div>
                                <div className="flex items-start">
                                    <svg
                                        className="h-6 w-6 text-[#E65A4B] mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 1.5a9 9 0 00-9 9c0 5.25 9 12 9 12s9-6.75 9-12a9 9 0 00-9-9zm0 12a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-[#4E4039]">Jl. Jambi - Muara Bulian No.KM. 15, Mendalo Darat</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-6 w-6 text-[#E65A4B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="text-[#4E4039]">+62 812-3456-7890</p>
                                </div>

                                <div className="mt-4 flex flex-col items-center justify-center">
                                    <h3 className="text-lg font-medium text-[#4E4039] mb-2">Lokasi Kami</h3>
                                    <div className="w-full aspect-w-16 aspect-h-9">
                                        <iframe className="rounded-md w-full"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.238671169846!2d103.51557997553417!3d-1.6123366360705578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588f48ba4d2f3%3A0x3595db7f5bb6e995!2sUniversity%20of%20Jambi!5e0!3m2!1sen!2sid!4v1761898187248!5m2!1sen!2sid"
                                            width="100%"
                                            style={{ border: 0 }}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}