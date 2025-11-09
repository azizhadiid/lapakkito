import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Tipe untuk data yang diharapkan dari body
interface RequestBody {
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: NextRequest) {
    try {
        // Ambil data dari body request
        const body: RequestBody = await req.json();
        const { email, subject, message } = body;

        // Validasi sederhana
        if (!email || !subject || !message) {
            return NextResponse.json({ error: 'Email, subject, and message are required' }, { status: 400 });
        }

        // Setup Nodemailer transporter
        // Pastikan environment variables Anda ada di .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        // Setup isi email
        const mailOptions = {
            from: `"${email}" <${process.env.EMAIL_USER}>`, 
            replyTo: email, 
            to: process.env.ADMIN_EMAIL, 
            subject: `Pesan Kontak Baru: ${subject}`, 
            html: `
        <h2>Pesan Baru dari Formulir Kontak</h2>
        <p><strong>Email Pengirim:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <hr>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Kirim email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        // Kirim respons sukses
        return NextResponse.json({ message: 'Pesan Anda telah berhasil terkirim!' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);

        // Berikan pesan error yang lebih spesifik
        const errorMessage = error instanceof Error ? error.message : 'Gagal mengirim email.';
        return NextResponse.json({ error: `Gagal mengirim email: ${errorMessage}` }, { status: 500 });
    }
}