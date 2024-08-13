import nodemailer from "nodemailer";

const sendEmail = async ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  // Create a transporter object using the SMTP details
  const transporter = nodemailer.createTransport({
    host: "mail.rftechnologies.com.pk",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "contact-us@rftechnologies.com.pk",
      pass: "Master$123@@@",
    },
  });

  // Define the email options
  const mailOptions = {
    from: '"RF Technologies" <contact-us@rftechnologies.com.pk>', // sender address
    to, // list of receivers (comma separated if multiple)
    subject, // Subject line
    text, // plain text body
    html, // html body
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
