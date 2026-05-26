require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Security ───────────────────────────────────────────────
app.use(helmet());

// ─── CORS ───────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

// ─── Body Parser ────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));

// ─── Rate Limiting ──────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP per window
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Email Transporter ──────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10) || 587,
  secure: parseInt(process.env.SMTP_PORT, 10) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error('⚠️  SMTP connection failed:', error.message);
  } else {
    console.log('✅ SMTP connection verified — ready to send emails');
  }
});

// ─── Validation Helper ──────────────────────────────────────
function validateContactInput(body) {
  const { name, email, message } = body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required (min 2 characters)');
  }
  if (name && name.length > 100) {
    errors.push('Name is too long (max 100 characters)');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('A valid email is required');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message is required (min 10 characters)');
  }
  if (message && message.length > 5000) {
    errors.push('Message is too long (max 5000 characters)');
  }

  return errors;
}

// ─── Contact Endpoint ───────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const errors = validateContactInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(', ') });
    }

    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"InfinityPoint Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `🔔 New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid #222;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #e11d48, #be123c); padding: 32px 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">
              📬 New Message Received
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">
              From your InfinityPoint website contact form
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px;">
            <!-- Sender Info -->
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0; width: 80px;">Name</td>
                  <td style="color: #fff; font-size: 16px; font-weight: 600; padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0;">Email</td>
                  <td style="color: #fff; font-size: 16px; padding: 8px 0;">
                    <a href="mailto:${email}" style="color: #e11d48; text-decoration: none;">${email}</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Message</p>
              <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <!-- Reply Button -->
            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #e11d48, #be123c); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                Reply to ${name}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 16px 24px; border-top: 1px solid #222; text-align: center;">
            <p style="color: #555; font-size: 12px; margin: 0;">
              Sent via InfinityPoint Website • ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`📧 Contact form email sent — from: ${email}, name: ${name}`);
    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// ─── Health Check ───────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── 404 ────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// ─── Start Server ───────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 InfinityPoint Contact API running on port ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Contact: POST http://localhost:${PORT}/api/contact\n`);
});
