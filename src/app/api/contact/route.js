// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "shantanux001@gmail.com",
      pass: "trvzfcmxusumikpv",
    },
  });

  
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;


    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await transporter.sendMail({
        from: `"Dreamland Athletics" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We have recieved your request',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #FFD700; padding: 16px; text-align: center;">
              <h2 style="margin: 0; color: #000;">We have recieved your request</h2>
            </div>
            <div style="padding: 24px; background-color: #fff; color: #333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <div style="background-color: #f9f9f9; padding: 12px; text-align: center; font-size: 12px; color: #777;">
              <p>This message was sent via Dreamland Athletics.</p>
            </div>
          </div>
        `,
      });
      
        console.log('New Contact Submission:', { name, email, phone, message });

    // TODO: Replace with your actual processing logic (email, DB, etc.)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}
