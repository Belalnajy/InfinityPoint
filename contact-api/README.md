# InfinityPoint Contact API

Simple backend to handle contact form submissions and forward them via email.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Fill in your email credentials in `.env`

4. Start the server:
```bash
npm start
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3001) |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username/email |
| `SMTP_PASS` | SMTP password or app password |
| `MAIL_TO` | Recipient email address |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins |

## Deployment

This is a standalone Node.js app. Deploy on any VPS:

```bash
# Using PM2 for process management
npm install -g pm2
pm2 start server.js --name contact-api
pm2 save
pm2 startup
```

## Frontend Integration

Set `NEXT_PUBLIC_CONTACT_API_URL` in your Vercel project environment variables to point to this backend's URL (e.g., `https://api.infinitypoint.cloud`).
