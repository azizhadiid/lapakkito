"use client"

import { Navbar } from "./Navbar";

export function MainLayoutPengungjung({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main className="bg-[#EFEFEF]">
                <Navbar />
                {children}
            </main>

            {/* === Footer Section === */}
            <footer className="bg-gray-800 text-gray-300 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Lapak Kito. Dibuat dengan ❤️ di Jambi.</p>
                </div>
            </footer>
        </div>
    );
}