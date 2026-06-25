import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendVerificationEmail = async (email: string, token: string): Promise<void> => {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: `"Ethiopia Tours" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Ethiopia Tours</h1>
          </div>
          <div class="content">
            <h2>Welcome to Ethiopia Tours!</h2>
            <p>Hi there,</p>
            <p>Thank you for signing up! Please verify your email address to get started.</p>
            <div style="text-align: center;">
              <a href="${verificationUrl}" class="button">Verify Email Address</a>
            </div>
            <p>Or copy and paste this link:</p>
            <p style="background: #eee; padding: 10px; word-break: break-all;">${verificationUrl}</p>
            <p>This link will expire in 24 hours.</p>
            <hr>
            <p style="color: #666; font-size: 14px;">If you didn't create an account, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Ethiopia Tours. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: `"Ethiopia Tours" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Reset Your Password',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Password</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Reset Your Password</h1>
          </div>
          <div class="content">
            <p>Hi there,</p>
            <p>We received a request to reset your password. Click the button below to create a new password:</p>
            <div style="text-align: center;">
              <a href="${resetUrl}" class="button">Reset Password</a>
            </div>
            <p>Or copy and paste this link:</p>
            <p style="background: #eee; padding: 10px; word-break: break-all;">${resetUrl}</p>
            <p>This link will expire in 1 hour.</p>
            <hr>
            <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Ethiopia Tours. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendWelcomeEmail = async (email: string, name: string): Promise<void> => {
  const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL}/login`;

  const mailOptions = {
    from: `"Ethiopia Tours" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Welcome to Ethiopia Tours!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Ethiopia Tours</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome ${name}!</h1>
          </div>
          <div class="content">
            <h2>Thank you for joining Ethiopia Tours!</h2>
            <p>Your email has been successfully verified.</p>
            <p>You can now explore our amazing tours and experiences in Ethiopia.</p>
            <div style="text-align: center;">
              <a href="${loginUrl}" class="button">Start Exploring</a>
            </div>
            <p>Here's what you can do:</p>
            <ul>
              <li>Browse our curated tours and experiences</li>
              <li>Save your favorite destinations</li>
              <li>Get personalized recommendations</li>
              <li>Receive exclusive offers and discounts</li>
            </ul>
            <hr>
            <p style="color: #666; font-size: 14px;">Start your Ethiopian adventure today!</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Ethiopia Tours. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
  

  await transporter.sendMail(mailOptions);
};
// Add these to your existing email.ts file

export const sendInquiryConfirmation = async (email: string, name: string, subject: string, message: string) => {
  const mailOptions = {
    from: `"Southland Ethiopia Tours" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'We received your inquiry - Southland Ethiopia Tours',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Inquiry Received</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #d97706 0%, #ea580c 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 24px; background: #d97706; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${name}!</h1>
          </div>
          <div class="content">
            <p>We have received your inquiry and one of our travel experts will get back to you within 24 hours.</p>
            <p><strong>Your inquiry:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <strong>Subject:</strong> ${subject}<br>
              <strong>Message:</strong> ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
            </div>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Browse our <a href="${process.env.NEXT_PUBLIC_APP_URL}/tours">tours</a></li>
              <li>Read our <a href="${process.env.NEXT_PUBLIC_APP_URL}/blog">travel blog</a></li>
              <li>Check our <a href="${process.env.NEXT_PUBLIC_APP_URL}/faqs">FAQs</a></li>
            </ul>
            <div style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}" class="button">Explore Our Tours</a>
            </div>
            <hr>
            <p style="color: #666; font-size: 14px;">Need immediate assistance? Call us at (+251) 946411758</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Southland Ethiopia Tours. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendInquiryNotification = async (inquiry: any) => {
  const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [process.env.SMTP_USER];
  
  for (const adminEmail of adminEmails) {
    const mailOptions = {
      from: `"Inquiry System" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Inquiry: ${inquiry.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Inquiry Received</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #d97706 0%, #ea580c 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; margin-bottom: 5px; color: #555; }
            .field-value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #ddd; }
            .priority-high { color: #dc2626; font-weight: bold; }
            .priority-medium { color: #f59e0b; font-weight: bold; }
            .priority-low { color: #10b981; font-weight: bold; }
            .button { display: inline-block; padding: 12px 24px; background: #d97706; color: white; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inquiry Received</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Inquiry ID:</div>
                <div class="field-value">${inquiry.id}</div>
              </div>
              <div class="field">
                <div class="field-label">From:</div>
                <div class="field-value">${inquiry.fullName} (${inquiry.email})</div>
              </div>
              ${inquiry.phone ? `
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${inquiry.phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="field-label">Subject:</div>
                <div class="field-value">${inquiry.subject}</div>
              </div>
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${inquiry.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="field-label">Priority:</div>
                <div class="field-value priority-${inquiry.priority}">${inquiry.priority.toUpperCase()}</div>
              </div>
              <div class="field">
                <div class="field-label">Type:</div>
                <div class="field-value">${inquiry.inquiryType}</div>
              </div>
              <div style="text-align: center; margin-top: 30px;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/inquiries/${inquiry.id}" class="button">View Inquiry</a>
              </div>
            </div>
            <div class="footer">
              <p>Southland Ethiopia Tours - Inquiry System</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
};

export const sendInquiryResponse = async (email: string, name: string, responseMessage: string) => {
  const mailOptions = {
    from: `"Southland Ethiopia Tours" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Response to your inquiry - Southland Ethiopia Tours',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Response to Your Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #d97706 0%, #ea580c 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .response-box { background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #d97706; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Response to Your Inquiry</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for your patience. Here is the response from our travel team:</p>
            <div class="response-box">
              ${responseMessage.replace(/\n/g, '<br>')}
            </div>
            <p>If you have any further questions, please don't hesitate to reply to this email or call us directly.</p>
            <p>Safe travels!</p>
            <p><strong>The Southland Ethiopia Tours Team</strong></p>
            <hr>
            <p style="color: #666; font-size: 14px;">Phone: (+251) 946411758 | Email: info@southlandethiopiatours.com</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Southland Ethiopia Tours. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};