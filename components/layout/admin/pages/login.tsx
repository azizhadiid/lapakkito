import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IlsLogin from "@/public/iconlogin.svg";
import Logo from "@/public/images/logo-vertikal.png";

export default function Login() {
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

            <form action="" className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="block text-[#4E4039] mb-2 text-sm sm:text-base"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Inputkan username"
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
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
