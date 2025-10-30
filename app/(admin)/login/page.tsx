import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// Ganti ini dengan path ke ilustrasi Anda
// Anda bisa download ilustrasi dari situs seperti undraw.co
const ILLUSTRATION_PATH = '/iconlogin.svg'; 

const AdminLoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login Admin</title>
      </Head>

      <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        
        {/* === Kolom Kiri (Ilustrasi) === */}
        {/* Tersembunyi di mobile, tampil di desktop */}
        <div className="hidden md:flex items-center justify-center bg-stone-800 p-10">
          {/* GANTI BAGIAN INI DENGAN ILUSTRASI ANDA 
            Saya menggunakan placeholder di sini.
            Gunakan komponen next/image untuk performa terbaik.
          */}
          <div className="text-stone-300">
            <Image src={ILLUSTRATION_PATH} width={600} height={400} alt="Admin Illustration" className='mt-70'/>
          </div>
        </div>

        {/* === Kolom Kanan (Form Login) === */}
        {/* Latar belakang berubah berdasarkan ukuran layar:
          - Mobile: bg-stone-800 (gelap)
          - Desktop: md:bg-white (putih)
        */}
        <div className="flex items-center justify-center bg-stone-800 p-8 md:bg-white">
          
          {/* === Kartu Form === */}
          <div className="w-full max-w-sm rounded-lg bg-stone-200 p-8 shadow-lg">
            
            {/* --- Judul --- */}
            <h1 className="text-center text-3xl font-bold text-stone-800">
              Login
            </h1>
            <h2 className="mb-6 text-center text-xl text-stone-600">
              Admin
            </h2>

            {/* --- Form --- */}
            <form className="space-y-5">
              
              {/* --- Input Username --- */}
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  className="w-full rounded-md border-2 border-stone-700 bg-transparent px-4 py-2.5 text-stone-800 placeholder-stone-500 transition focus:border-stone-500 focus:outline-none focus:ring-0"
                />
              </div>

              {/* --- Input Password --- */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="w-full rounded-md border-2 border-stone-700 bg-transparent px-4 py-2.5 text-stone-800 placeholder-stone-500 transition focus:border-stone-500 focus:outline-none focus:ring-0"
                />
              </div>

              {/* --- Tombol Submit --- */}
              <button
                type="submit"
                className="w-full rounded-md bg-stone-700 py-3 font-semibold text-stone-100 transition hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-200"
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLoginPage;
