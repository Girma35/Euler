# Euler Website

A production-ready website for Euler digital services built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** in strict mode
- **Static Export** ready for Vercel deployment
- **SEO Optimized** with metadata and JSON-LD schema
- **Responsive Design** with mobile-first approach
- **Social Media Integration** with your profiles
- **Custom 404 Page** for better UX

## 📁 Project Structure

```
├── app/
│   ├── (marketing)/          # Marketing pages
│   │   ├── page.tsx          # Homepage
│   │   ├── services/         # Service pages
│   │   ├── packages/         # Packages page
│   │   ├── case-studies/     # Case studies
│   │   ├── about/            # About page
│   │   └── contact/          # Contact page
│   ├── components/           # Reusable components
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── not-found.tsx         # 404 page
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── lib/
│   ├── data/                 # Static data
│   └── utils/                # Utility functions
├── public/
│   ├── business Logo.png     # Company logo
│   └── 404.html              # Static 404 page
└── scripts/
    └── copy-404.sh           # Build script
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Build for production
pnpm build

# The build process automatically:
# 1. Generates static files
# 2. Copies 404.html to output directory
# 3. Creates optimized bundle
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import your GitHub repository to Vercel
   - Vercel will auto-detect Next.js settings

2. **Deploy Settings**
   - Build Command: `pnpm build`
   - Output Directory: `out`
   - Install Command: `pnpm install`

3. **Environment Variables**
   - No environment variables needed for static export

4. **Deploy**
   - Click "Deploy" and Vercel handles the rest
   - Your site will be live at `https://your-project.vercel.app`

### Manual Static Hosting

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Upload `out/` directory**
   - Upload the entire `out/` folder to your static host
   - Ensure `404.html` is in the root directory

3. **Configure your host**
   - Set up custom domain (optional)
   - Configure SSL certificate
   - Set up redirects if needed

## 📊 SEO & Performance

### SEO Features
- ✅ Meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs

### Performance Features
- ✅ Static site generation (SSG)
- ✅ Optimized images with Next.js Image
- ✅ Critical CSS inlined
- ✅ Minimal JavaScript bundle
- ✅ Lighthouse score ≥90

## 🔧 Configuration

### Branding
- **Company**: Euler
- **Primary Color**: #0E7490 (cyan-700)
- **Accent Color**: #F59E0B (amber-500)
- **Font**: Inter (Google Fonts)

### Contact Information
- **Email**: girmawakeyo4@gmail.com
- **X (Twitter)**: @Girma880731631
- **LinkedIn**: www.linkedin.com/in/girma-w-8812aa378
- **GitHub**: https://github.com/Girma35

### Service Delivery
- **Delivery Time**: 48 hrs
- **Calendly**: https://calendly.com/euler/15min

## 📝 Content Management

### Adding New Services
1. Update `lib/data/packages.ts`
2. Create service page in `app/(marketing)/services/`
3. Update navigation in `app/components/Header.tsx`

### Adding Case Studies
1. Update `lib/data/case-studies.ts`
2. Create case study page in `app/(marketing)/case-studies/`

### Updating FAQs
1. Update `lib/data/faqs.ts`
2. FAQs automatically appear on relevant pages

## 🐛 Troubleshooting

### Common Issues

**404 Errors on Static Host**
- Ensure `404.html` is in the root directory
- Check that all internal links use trailing slashes
- Verify `trailingSlash: true` in `next.config.js`

**Build Errors**
- Run `pnpm lint` to check for TypeScript errors
- Ensure all imports are correct
- Check that all required files exist

**Performance Issues**
- Run Lighthouse audit
- Check image optimization
- Verify static generation is working

## 📞 Support

For technical support or questions:
- **Email**: girmawakeyo4@gmail.com
- **GitHub**: https://github.com/Girma35

## 📄 License

This project is proprietary to Euler. All rights reserved.

---

**Ready for deployment!** 🎉
# Euler
