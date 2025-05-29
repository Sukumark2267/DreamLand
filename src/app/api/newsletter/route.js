import { transporter } from "@/lib/mailer";
import {
  adminNewsletterTemplate,
  customerNewsletterTemplate,
} from "@/lib/emailTemplates";

export default async function POST(request) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email } = req.body;

  const adminEmail = "dreamlandathletics@gmail.com";

  const fromMail = "Dreamland Athletics <dreamlandathletics@gmail.com>";
  const adminMail = adminNewsletterTemplate({ name, email });
  const customerMail = customerNewsletterTemplate({ name });

  try {
    await transporter.sendMail({
      from: fromMail,
      to: adminEmail,
      subject: adminMail.subject,
      text: adminMail.text,
      html: adminMail.html,
    });

    await transporter.sendMail({
      from: fromMail,
      to: email,
      subject: customerMail.subject,
      text: customerMail.text,
      html: customerMail.html,
    });

    res.status(200).json({ message: "Success" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error sending email", error: err.message });
  }
}
