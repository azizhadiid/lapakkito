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

// Ganti ini dengan path ke ilustrasi Anda
// Anda bisa download ilustrasi dari situs seperti undraw.co
const ILLUSTRATION_PATH = "/iconlogin.svg";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#E2E0DD]">
      <div className="bg-[#4E4039] absolute w-280 h-screen"></div>
      <div className="p-4 z-10 relative">
        <div className="h-screen flex items-center justify-end">
          <Card className="max-w-md md:mr-20 w-120 h-150 p-4 shadow-zinc-900 shadow-2xl">
            <div className="mt-12">
              <section className="mb-10">
                <CardTitle className="text-center text-[#4E4039] text-4xl mb-5 font-bold">
                  Login
                </CardTitle>
                <CardTitle className="text-center text-[#4E4039] text-2xl">
                  Admin
                </CardTitle>
              </section>
              <form action="">
                <section className="space-y-5 text-center">
                  <div className="text-center px-2">
                    <label
                      htmlFor="Username"
                      className="w-100 flex justify-start text-[#4E4039]"
                    >
                      Username
                    </label>
                  </div>
                  <div className="text-center">
                    <input
                      type="text"
                      id="username"
                      placeholder="Inputkan username"
                      value={FormData.username}
                      className="w-100 py-3 rounded-xl p-5 border-[#4E4039] border-1"
                    />
                  </div>
                  <div className="text-center px-2">
                    <label
                      htmlFor="Password"
                      className="w-100 flex justify-start text-[#4E4039]"
                    >
                      Password
                    </label>
                  </div>
                  <div className="text-center">
                    <input
                      type="password"
                      id="password"
                      placeholder="Inputkan password"
                      value={FormData.username}
                      className="w-100 py-3 rounded-xl p-5 border-[#4E4039] border-1"
                    />
                  </div>
                  <Button className="mt-5 w-30 py-5 bg-[#4E4039] hover:scale-105 transition duration-150 ease-in-out">
                    Login
                  </Button>
                </section>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
