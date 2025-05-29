export function adminNewsletterTemplate({ name, email }) {
  return {
    subject: "New Newsletter Signup",
    text: `A new user signed up for the newsletter.\n\nName: ${name}\nEmail: ${email}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
  };
}

export function customerNewsletterTemplate({ name }) {
  return {
    subject: "Thank you for signing up!",
    text: `Hi ${name},\n\nThank you for signing up for the Dreamland Athletics newsletter! We'll keep you updated.`,
    html: `<p>Hi ${name},</p><p>Thank you for signing up for the <strong>Dreamland Athletics</strong> newsletter! We'll keep you updated.</p>`,
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
