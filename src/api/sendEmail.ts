import nodemailer from 'nodemailer';

// Create a transporter using Zoho Mail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.ZOHO_SMTP_USER || 'info@arrotechsolutions.com',
    pass: process.env.ZOHO_SMTP_PASSWORD,
  },
});

// Email routing based on subject
const getRecipientEmail = (subject: string): string => {
  switch (subject) {
    case 'support':
      return 'support@arrotechsolutions.com';
    case 'sales':
    case 'partnership':
      return 'sales@arrotechsolutions.com';
    case 'general':
    default:
      return 'info@arrotechsolutions.com';
  }
};

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const { name, email, phone, subject, message } = formData;

  const mailOptions = {
    from: process.env.ZOHO_SMTP_USER || 'info@arrotechsolutions.com',
    to: getRecipientEmail(subject),
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 