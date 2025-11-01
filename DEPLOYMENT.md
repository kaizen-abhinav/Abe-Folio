# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## Deploy to Netlify

1. Build your app:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Or connect your Git repository through the Netlify dashboard.

## Deploy to Other Platforms

### Build Output
- Build command: `npm run build`
- Output directory: `.next`
- Start command: `npm start`
- Node version: 18.x or higher

### Environment Variables
No environment variables are required for basic deployment.

## Pre-Deployment Checklist

✅ Build completes successfully (`npm run build`)
✅ No TypeScript errors
✅ All fonts are properly loaded
✅ 3D models and assets are accessible
✅ Production domain configured (if custom domain)

## Post-Deployment

After deployment:
1. Test all interactive elements (buttons, 3D robot)
2. Check responsive design on mobile devices
3. Verify font loading
4. Test page performance with Lighthouse

## Performance Tips

- Images are already optimized with Next.js Image component
- Fonts are self-hosted for better performance
- 3D models use lazy loading
- CSS is automatically optimized by Tailwind

---

Your portfolio is now ready to be deployed! 🚀
