import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { to, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail', // bisa diganti SMTP lain
    auth: {
      user: process.env.EMAIL_USER, // email admin kamu
      pass: process.env.EMAIL_PASS, // app password dari Gmail
    },
  })

  try {
    await transporter.sendMail({
      from: `"Admin Verifikasi Lapakkito" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error })
  }
}
