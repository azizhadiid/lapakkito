"use client"

import Footer from "./Footer";
import { Navbar } from "./Navbar";

export function MainLayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main className="bg-[#EFEFEF]">
                <Navbar />
                {children}
            </main>
            <Footer />
        </div>
    );
}