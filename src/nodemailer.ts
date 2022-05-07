import nodemailer  from "nodemailer";
const DESTINATARY = process.env.MAILER_DESTINATARY ?? '';
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "23e16e3d073f93",
    pass: "7567ec6130e2df"
  }
});

export { transport, DESTINATARY };
