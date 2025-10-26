# Query SQL untuk Supabase

```bash
-- Membuat tabel untuk menyimpan data UMKM
CREATE TABLE public.umkm (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Informasi Dasar (Wajib)
  nama_usaha text NOT NULL CHECK (char_length(nama_usaha) >= 3),
  nama_pemilik text NOT NULL CHECK (char_length(nama_pemilik) >= 3),
  kategori text NOT NULL CHECK (char_length(kategori) >= 3),
  tahun_berdiri smallint NOT NULL CHECK (tahun_berdiri >= 1900 AND tahun_berdiri <= extract(year from now())),
  deskripsi text NOT NULL CHECK (char_length(deskripsi) >= 10 AND char_length(deskripsi) <= 500),

  -- Tautan ke Foto (Opsional)
  -- Ini akan menyimpan URL PUBLIK dari Supabase Storage
  foto_1 text,
  foto_2 text,
  foto_3 text,
  foto_4 text,
  foto_5 text,

  -- Tautan Platform & Sosmed (Opsional)
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

DROP TABLE public.umkm;

-- Memberi komentar pada kolom untuk kejelasan
COMMENT ON COLUMN public.umkm.user_id IS 'Pemilik data UMKM, terhubung ke auth.users';
COMMENT ON COLUMN public.umkm.foto_1 IS 'URL publik atau path file dari Supabase Storage';
```