# A&J Mobile Detailing Services - Deployment Guide

## Deploy to Vercel

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure build settings

3. **Environment Variables**
   - No environment variables needed for basic deployment
   - If you want to use Formspree for contact forms, add `NEXT_PUBLIC_FORMSPREE_ID`

## Customization

### Update Contact Information
- Edit `app/layout.tsx` for metadata and schema
- Update contact details in `components/contact.tsx`
- Modify footer information in `components/footer.tsx`

### Replace Logo
- Replace `/public/images/logo.png` with your actual logo
- Update logo references in `components/navbar.tsx` and `components/footer.tsx`

### Connect Contact Form (Optional)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace the mailto functionality in `components/contact.tsx` with Formspree integration

### Update Images
- Replace placeholder images with actual photos of your work
- Update image queries in components to match your brand

## SEO Optimization

### Update Metadata
- Edit `app/layout.tsx` for title, description, and keywords
- Update Open Graph tags for social media sharing
- Modify JSON-LD structured data for local business SEO

### Add Google Analytics (Optional)
1. Create a Google Analytics account
2. Add the tracking code to `app/layout.tsx`

## Performance Tips

- Images are automatically optimized by Next.js
- The site uses modern CSS with Tailwind for fast loading
- All animations respect `prefers-reduced-motion`
- Semantic HTML ensures good accessibility

## Domain Setup

1. **Custom Domain**
   - In Vercel dashboard, go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Your site will be available at `https://your-domain.com`

## Maintenance

- Update pricing and services as needed
- Add new before/after photos to the gallery
- Update testimonials with new customer reviews
- Keep contact information current

## Support

For technical issues with deployment, contact Vercel support or refer to their documentation at [vercel.com/docs](https://vercel.com/docs).
