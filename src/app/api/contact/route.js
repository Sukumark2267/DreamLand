import { transporter } from "@/lib/mailer";
import { contactTemplate } from "@/lib/emailTemplates";
import { NextResponse } from "next/server";

export default async function POST(request) {
  const { subject, text, html } = contactTemplate({
    fname,
    email,
    phone,
    message,
  });
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Dreamland Athletics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      text,
      html,
    });

    console.log("New Contact Submission:", { name, email, phone, message });

    // TODO: Replace with your actual processing logic (email, DB, etc.)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
