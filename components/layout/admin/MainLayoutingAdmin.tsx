"use client"

import Footer from "./Footer";
import { NavbarAdmin } from "./Navbar";

export function MainLayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main className="bg-[#EFEFEF]">
                <NavbarAdmin />
                {children}
            </main>
            <Footer />
        </div>
    );
}