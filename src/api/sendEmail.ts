import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password for Gmail
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
    from: process.env.GMAIL_USER,
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