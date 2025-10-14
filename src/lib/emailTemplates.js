export function adminNewsletterTemplate({ fname, email }) {
  return {
    subject: "New Newsletter Signup",
    text: `A new user signed up for the newsletter.\n\nName: ${fname}\nEmail: ${email}`,
    html: `<p><strong>Name:</strong> ${fname}</p><p><strong>Email:</strong> ${email}</p>`,
  };
}

export function customerNewsletterTemplate({ fname }) {
  return {
    subject: "Thank you for signing up!",
    text: `Hi ${fname},\n\nThank you for signing up for the Dreamland Athletics newsletter! We'll keep you updated.`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e5e5e5; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <!-- Header -->
  <div style="background-color: #000; text-align: center; padding: 20px;">
    <img src="https://res.cloudinary.com/dzhgubztu/image/upload/v1760465879/dl_white_empty_secondary_zznkbl.png" alt="Dreamland Athletics" style="max-width: 160px; height: auto;" />
  </div>

  <!-- Greeting -->
  <div style="background-color: #f1c419; text-align: center; padding: 20px;">
    <h2 style="margin: 0; color: #000; font-size: 24px;">Hi ${fname},</h2>
  </div>

  <!-- Body -->
  <div style="padding: 30px 24px; color: #333; text-align: center; line-height: 1.6;">
    <h3 style="margin-bottom: 12px; font-size: 20px;">Welcome to Dreamland Athletics!</h3>
    <p style="margin: 0; font-size: 15px; color: #555;">
      Thank you for signing up for our newsletter! You’re now part of the Dreamland community —
      where ambition meets discipline and dreams turn into milestones.
    </p>
    <p style="margin-top: 16px; font-size: 15px; color: #555;">
      Stay tuned for updates, exclusive offers, and inspiring stories from athletes like you.
    </p>
  </div>

  <!-- Divider -->
  <hr style="border: none; border-top: 1px solid #eee; margin: 0;" />

  <!-- Footer -->
  <div style="background-color: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
    <p style="margin: 0;">This message was sent by the Dreamland Athletics Team.</p>
    <p style="margin: 4px 0 0;">© ${new Date().getFullYear()} Dreamland Athletics. All rights reserved.</p>
  </div>
</div>`,
  };
}

export function contactTemplate({ fname, email, phone, message }) {
  return {
    subject: "We have recieved your request",
    text: `Name: ${fname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #FFD700; padding: 16px; text-align: center;">
              <h2 style="margin: 0; color: #000;">We have recieved your request</h2>
            </div>
            <div style="padding: 24px; background-color: #fff; color: #333;">
              <p><strong>Name:</strong> ${fname}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong><br/>${message.replace(
                /\n/g,
                "<br/>"
              )}</p>
            </div>
            <div style="background-color: #f9f9f9; padding: 12px; text-align: center; font-size: 12px; color: #777;">
              <p>This message was sent via Dreamland Athletics.</p>
            </div>
          </div>
        `,
  };
}
