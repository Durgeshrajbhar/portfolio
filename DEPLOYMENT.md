# Deployment Guide - Vercel

This portfolio is fully configured for deployment on Vercel with persistent data storage using Vercel Blob.

## Prerequisites

- A Vercel account (create one at https://vercel.com)
- Your GitHub account connected to Vercel
- This repository pushed to GitHub

## Deployment Steps

### 1. Push to GitHub

First, make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "feat: add newsletter and contact forms with Vercel Blob storage"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Click "Import"
4. Configure project settings:
   - **Project name**: portfolio (or your preferred name)
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
5. Click "Deploy"
6. After deployment completes, go to project Settings

#### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your project.

### 3. Configure Environment Variables

After deployment, you need to set up Vercel Blob:

1. In Vercel Dashboard, go to your project
2. Click on "Settings" → "Environment Variables"
3. Add the required variable:
   - **Name**: `BLOB_READ_WRITE_TOKEN`
   - **Value**: Your Vercel Blob token (this will be auto-generated or provided by Vercel)

Alternatively, Vercel will automatically set this up when you enable the Blob storage integration.

### 4. Enable Vercel Blob Integration

1. In your Vercel project dashboard
2. Go to "Settings" → "Integrations" or "Storage"
3. Click "Add Integration"
4. Select "Blob"
5. Follow the setup wizard to create a new Blob store
6. The `BLOB_READ_WRITE_TOKEN` will be automatically set

### 5. Redeploy (if needed)

If you manually added the environment variable, trigger a redeployment:

1. In Vercel Dashboard, go to Deployments
2. Click the "..." menu on the latest deployment
3. Select "Redeploy"

## Features After Deployment

Your deployed portfolio includes:

- **Newsletter Signup** (`/about` page)
  - Email validation
  - Duplicate prevention
  - Data stored in Vercel Blob

- **Contact Form** (`/about` page)
  - Name, email, and message fields
  - Input validation
  - Persistent message storage

- **Admin Dashboard** (`/admin` page)
  - View all contact messages
  - View all newsletter subscribers
  - Real-time data fetching

## API Endpoints

- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get all subscribers
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Get all messages

## Data Storage

All data is stored in Vercel Blob:
- Newsletter subscriptions: `newsletter-subscribers.json`
- Contact messages: `contact-messages.json`

Data persists across deployments and is accessible via the Vercel Blob API.

## Monitoring & Debugging

### View Logs in Vercel

1. Go to your Vercel project
2. Click "Deployments"
3. Click on a deployment
4. View logs in real-time

### Check Blob Storage

1. In Vercel Dashboard, go to "Storage" → "Blob"
2. View stored files and metadata

## Custom Domain

To add a custom domain:

1. In Vercel Dashboard, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS configuration instructions

## Troubleshooting

### "BLOB_READ_WRITE_TOKEN not set" Error

- Make sure you've enabled Vercel Blob integration
- Check that environment variable is set in project settings
- Redeploy after setting the variable

### Forms Not Working

- Check browser console for errors
- Verify API endpoints are responding: `curl https://your-domain/api/contact`
- Check Vercel logs for server-side errors

### Data Not Saving

- Verify Blob storage is enabled
- Check that `BLOB_READ_WRITE_TOKEN` is correctly set
- Check Vercel logs for Blob errors

## Next Steps

1. **Customize Content**: Update your portfolio content in the respective pages
2. **Add Email Notifications**: Integrate with SendGrid/Mailgun to notify yourself of new messages
3. **Add Authentication**: Secure the admin page with auth (optional)
4. **Analytics**: Add Vercel Analytics for visitor insights
5. **Custom Domain**: Connect your own domain name

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Blob Storage Docs: https://vercel.com/docs/storage/vercel-blob
