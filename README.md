# 🌐 Lapak Kito

Lapak Kito adalah platform direktori digital yang didedikasikan untuk mempromosikan dan mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) lokal di Jambi.

---

# 🎯 Tujuan & Dampak

* ✅ Membangun Etalase Digital
* ✅ Meningkatkan Visibilitas
* ✅ Menjadi Pusat Informasi

---

# 🧩 Fitur Utama

* ✅ Register UMKM - Bagi pelaku UMKM bisa melakukan pendaftaran terhadap usahanya di website.
* ✅ Upload Konten (Foto) - Pelaku UMKM bisa mengupload konten foto mereka di website.
* ✅ Search UMKM - Pengguna bisa mencari UMKM sesuai dengan kategori yang tersedia.
* ✅ Integrasi dengan Website UMKM - Adanya linked dengan UMKM yang telah memiliki website sendiri.
* ✅ Integrasi MAPS - Pengguna bisa melihat lokasi UMKM yang terintergrasi dengan maps.
* ✅ Login Admin - Admin dapat login kedalam sistem.
* ✅ Verifikasi Konten oleh UMKM - Admin dapat memverifikasi konten yang diupload oleh pelaku UMKM.

---

## 🚀 Tech Stack

Project ini dibangun menggunakan teknologi web modern untuk memastikan performa, skalabilitas, dan pengalaman developer yang baik.

* **Framework:** [Next.js](https://nextjs.org/) 15 (App Router & Turbopack)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
* **Animasi:** `tailwindcss-animate`
* **Ikon:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Loading UI:** React Suspense & Komponen Skeleton

---

## 💻 Cara Menjalankan Project

Untuk menjalankan proyek ini secara lokal di komputer Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/azizhadiid/lapakkito.git
    cd Folder_Tempat Clone
    ```

2.  **Install dependencies:**
    (Gunakan `npm`, `yarn`, atau `pnpm` sesuai preferensi Anda)
    ```bash
    npm install
    ```

3.  **Buat file environment:**
    Salin file `.env.example` (jika ada) menjadi `.env.local` dan isi variabel yang diperlukan (misal: koneksi database, dll).
    ```bash
    cp .env.example .env.local
    ```

4.  **Jalankan development server:**
    ```bash
    npm run dev
    ```

5.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

### 🔑 Konfigurasi Environment

Project ini membutuhkan beberapa kunci API untuk terhubung ke layanan eksternal (Supabase).

1.  Buat file `.env.local` di root proyek Anda:
    ```bash
    cp .env.example .env.local
    ```

2.  Buka file `.env.local` dan isi variabel yang diperlukan.

    | Variabel | Deskripsi | Contoh |
    | :--- | :--- | :--- |
    | `NEXT_PUBLIC_SUPABASE_URL` | URL publik untuk proyek Supabase Anda. | `https://[nama-proyek-anda].supabase.co` |
    | `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Kunci `anon` (publik) untuk proyek Supabase Anda. | `ey...[kunci-panjang]...` |
    | `EMAIL_HOST` | Host server email yang digunakan untuk mengirim pesan. | `smtp.gmail.com` |
    | `EMAIL_PORT` | Port server email yang digunakan untuk koneksi. | `465` |
    | `EMAIL_SECURE` | Gunakan true jika koneksi email menggunakan SSL/TLS. | `true` |
    | `EMAIL_USER` | Alamat email yang digunakan untuk mengirim pesan. | `namaemail@gmail.com` |
    | `EMAIL_PASS` | Kata sandi atau app password dari email pengirim. | `password-anda` |
    | `ADMIN_EMAIL` | Alamat email admin yang akan menerima notifikasi. | `admin@domain.com` |

---

## 🗃️ Query Database (Supabase)
```bash
    -- Membuat tabel untuk menyimpan data UMKM
    CREATE TABLE public.umkm (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

      -- Informasi Dasar (Wajib)
      nama_usaha text NOT NULL CHECK (char_length(nama_usaha) >= 3),
      nama_pemilik text NOT NULL CHECK (char_length(nama_pemilik) >= 3),
      nomor_hp text,
      email text,
      alamat text,
      lokasi_gmap text,
      status boolean DEFAULT false NOT NULL,
      kategori text NOT NULL CHECK (char_length(kategori) >= 3),
      tahun_berdiri smallint NOT NULL CHECK (tahun_berdiri >= 1900 AND tahun_berdiri <= extract(year from now())),
      deskripsi text NOT NULL CHECK (char_length(deskripsi) >= 10 AND char_length(deskripsi) <= 500),

      -- Tautan ke Foto 
      -- Ini akan menyimpan URL PUBLIK dari Supabase Storage
      foto_1 text,
      foto_2 text,
      foto_3 text,
      foto_4 text,
      foto_5 text,

      -- Tautan Platform & Sosmed 
      link_instagram text,
      link_tiktok text,
      link_facebook text,
      link_gojek text,
      link_grab text,
      link_maxim text,
      link_shopee text,
      link_tokopedia text,

      created_at timestamp with time zone DEFAULT now()
    );

    -- Memberi komentar pada kolom untuk kejelasan
    COMMENT ON COLUMN public.umkm.user_id IS 'Pemilik data UMKM, terhubung ke auth.users';
    COMMENT ON COLUMN public.umkm.foto_1 IS 'URL publik atau path file dari Supabase Storage';

    -- Tabel User untuk Admin Login
    CREATE TABLE public.users (
        id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
    );
```
---

### 👥 Tim Pengembang

    | Nama | Peran | Fokus |
    | :--- | :--- | :--- |
    | Aziz Alhadiid | Project Lead. | Memanajemen proyek dan memimpin pembuatan proyek |
    | Zikra Zana | UIUX Design and Front End | Membuat desain dan tampilan antar muka yang interaktif |
    | Arfun Ali Yafie | Back End | Menerapkan sistem database pada website |

---

## 🎥 Demo & Video Pitching

Untuk pemahaman yang lebih baik tentang proyek kami, silakan tonton video demo dan presentasi pitching kami.

[**➡️ Tonton Video Demo & Pitching di YouTube**](https://youtu.be/_56qK9zg_CQ)

---

## 🖥️ Tampilan Website (Live Demo)

Anda dapat mencoba aplikasi kami secara langsung melalui tautan berikut:

[**➡️ Kunjungi Website Live**](https://lapakkito.vercel.app/)

Bagian untuk login admin:
username: admin@gmail.com
password: admin#123

### Pratinjau (Preview)

Berikut adalah beberapa tampilan utama dari website kami. Klik pada gambar untuk mengunjungi halaman live.

| Halaman Utama (Beranda) | Halaman Directory UMKM | Halaman Registrasi UMKM |
| :---: | :---: | :---: |
| [![Pratinjau Beranda](/public/images/screenshot/ss1.png)](https://lapakkito.vercel.app/) | [![Pratinjau Halaman Directory UMKM](/public/images/screenshot/ss2.png)](https://lapakkito.vercel.app/umkm) | [![Pratinjau Registrasi UMKM](/public/images/screenshot/ss5.png)](https://lapakkito.vercel.app/register-umkm) |

---