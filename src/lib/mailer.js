import nodemailer from "nodemailer";
const port = Number(process.env.EMAIL_PORT || 465);
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, port, secure: port === 465,
  connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});
