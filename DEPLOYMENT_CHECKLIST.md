# Deployment Checklist

Quick checklist before deploying to Vercel:

## Pre-Deployment

- [ ] All code is committed to Git
- [ ] No environment variables in code (using `.env.local` locally)
- [ ] No sensitive data in version control
- [ ] Run `npm run build` locally to verify build succeeds
- [ ] Test newsletter form at `/about`
- [ ] Test contact form at `/about`
- [ ] Test admin dashboard at `/admin`

## Deployment

### Step 1: GitHub
- [ ] Push code to GitHub: `git push origin main`
- [ ] Verify all files are in repository

### Step 2: Vercel Setup
- [ ] Create/log into Vercel account
- [ ] Import your GitHub repository
- [ ] Select the correct branch (main)
- [ ] Framework is set to "Next.js"
- [ ] Build settings are correct

### Step 3: Environment & Storage
- [ ] Enable Vercel Blob integration (or manually set BLOB_READ_WRITE_TOKEN)
- [ ] Verify environment variables are set:
  - [ ] `BLOB_READ_WRITE_TOKEN` - Vercel Blob token
- [ ] Redeploy if environment variables were added

## Post-Deployment

- [ ] Visit your live site at Vercel domain
- [ ] Test newsletter form on live site
- [ ] Test contact form on live site
- [ ] Check admin dashboard at `/admin`
- [ ] Verify data is being saved to Blob
- [ ] Monitor logs for any errors

## Optional

- [ ] Set up custom domain
- [ ] Enable Vercel Analytics
- [ ] Set up email notifications for form submissions
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Set up backups for critical data

## Troubleshooting

If something doesn't work:

1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Check that Blob storage is enabled
4. Review browser console for client-side errors
5. Check server logs in Vercel dashboard

## Rollback

To rollback to a previous deployment:

1. Go to Vercel Dashboard → Deployments
2. Find the working deployment
3. Click "..."
4. Select "Promote to Production"

## Security Notes

- Keep `BLOB_READ_WRITE_TOKEN` secure (never commit to Git)
- Consider adding password protection to `/admin` page
- Monitor data requests and storage usage
- Regular backups of important data

---

**Ready to Deploy?** See DEPLOYMENT.md for detailed instructions.
