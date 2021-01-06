import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (options) => {
  console.log(process.env.SMTP_EMAIL);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: 'noreply@ffs.com',
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message,
    html: options.html, // plain text body
    // html body html: '<b>Hello world?</b>',
  };

  const info = await transporter.sendMail(message);

  console.log(info);
};

export default sendEmail;
