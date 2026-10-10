import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { contactTemplate } from "@/lib/emailTemplates";
import { z } from "zod";

const contactSchema = z.object({
  fname: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(1).max(5000),
  location: z.enum(["Canada", "India"]).optional().default("Canada"),
});

export async function POST(req) {
  try {
    const parsed = contactSchema.safeParse(await req.json().catch(() => null));

    // Basic validation
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please enter your name, a valid email address, and a message." },
        { status: 400 }
      );
    }
    const { fname, email, phone, message, location } = parsed.data;
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_HOST) {
      return NextResponse.json({ error: "Online messaging is temporarily unavailable. Please email or call the studio using the contact links below." }, { status: 503 });
    }

    // Admin email (where you want to receive contact form messages)
    const adminEmail = "dreamlandathletics@gmail.com";

    // Email sender identity
    const fromMail = `Dreamland Athletics <${process.env.EMAIL_USER}>`;
    const customerMail = contactTemplate({ fname, email, phone, message });

    // Generate email content from your template
    const { text, html } = contactTemplate({
      fname,
      email,
      phone,
      message,
    });

    // Send email to admin
    await transporter.sendMail({
      from: fromMail,
      to: adminEmail,
      subject: `New ${location} studio enquiry`,
      replyTo: email,
      text,
      html,
    });

    await transporter.sendMail({
      from: fromMail,
      to: email,
      subject: customerMail.subject,
      text: customerMail.text,
      html: customerMail.html,
    }).catch(() => console.warn("Contact acknowledgement could not be sent; the enquiry was delivered."));

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
