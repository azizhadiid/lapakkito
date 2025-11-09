"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import IlsLogin from "@/public/iconlogin.svg";
import Logo from "@/public/images/logo-vertikal.png";
import Swal from "sweetalert2";
import supabase from "@/lib/db";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    // Mencegah form reload halaman
    e.preventDefault();
    setErrorMsg("");

    // Validasi input dasar
    if (!email || !password) {
      setErrorMsg("Email dan password tidak boleh kosong.");
      return;
    }

    try {
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password);

      if (error) {
        console.error("Supabase error:", error.message);
        setErrorMsg("Terjadi kesalahan pada server. Silakan coba lagi.");
        return;
      }

      if (users && users.length > 0) {
        console.log("Login berhasil:", users[0]);

        Swal.fire({
          title: "Berhasil!",
          text: "Login berhasil, Anda akan diarahkan ke dashboard.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Tunggu sedikit agar SweetAlert tampil sebelum redirect
        setTimeout(() => {
          router.push("/dashboard"); // arahkan ke /dashboard
        }, 1500);
      } else {
        Swal.fire({
          title: "Login Gagal",
          text: "Email atau password salah.",
          icon: "warning",
          confirmButtonColor: "#E65A4B",
        });
      }
    } catch (err) {
      console.error("Login exception:", err);
      setErrorMsg("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <main className="min-h-screen bg-[#4E4039] lg:bg-[rgb(226,224,221)]  flex items-center justify-center lg:justify-end p-4">
      <section className="w-full max-w-md lg:mr-50">
        {/* Uncomment jika ingin menggunakan ilustrasi background */}
        <div className="bg-[#4E4039] absolute left-0 top-0 bottom-0 w-2/3 overflow-hidden">
          <Image
            src={IlsLogin}
            alt="ilustrator admin"
            className="mt-30 hidden md:hidden lg:block"
          />
        </div>

        <Card className="w-full shadow-2xl shadow-zinc-900/50 relative">
          <CardContent className="pt-8 pb-6 px-6 sm:px-8">
            <section className="mb-8 sm:mb-10 *:text-center">
              <CardTitle className="flex justify-center mb-10">
                <Image src={Logo} alt="logo" className="w-50" />
              </CardTitle>

              <CardTitle className="text-[#4E4039] text-3xl sm:text-4xl mb-3 sm:mb-5 font-bold">
                Login
              </CardTitle>
              <CardTitle className="text-[#4E4039] text-xl sm:text-2xl">
                Admin
              </CardTitle>
            </section>

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="block text-[#4E4039] mb-2 text-sm sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Inputkan email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 px-4 sm:px-5 rounded-xl border border-[#4E4039] focus:outline-none focus:ring-2 focus:ring-[#4E4039] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-[#4E4039] mb-2 text-sm sm:text-base"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Inputkan password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 sm:px-5 rounded-xl border border-[#4E4039] focus:outline-none focus:ring-2 focus:ring-[#4E4039] focus:border-transparent transition-all"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-50 mt-6 py-5 bg-[#4E4039] hover:bg-[#3d332d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-in-out text-sm sm:text-base"
                >
                  Login
                </Button>
              </div>
              <p className="text-sm text-red-600 text-center">{errorMsg}</p>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
