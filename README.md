# BESScareers - Battery Energy Storage Career Guides

A Next.js 14 site with curated career guides, salary benchmarks, and skill-to-career-path information for BESS professionals.

## Build Status ✅

- **Last Build**: 2026-04-16
- **Status**: ✓ Successfully compiled and ready to deploy
- **Articles**: 5 complete MDX guides
- **Pages**: Dynamic article routing + homepage + sitemap

## Structure

```
careers-monorepo/
├── app/
│   ├── layout.tsx              # Root layout (header, nav, footer)
│   ├── page.tsx                # Homepage with article grid
│   ├── [slug]/page.tsx         # Dynamic article page with MDX rendering
│   ├── sitemap.ts              # SEO sitemap generation
│   └── globals.css             # Base styles
├── content/                    # All MDX articles
│   ├── grid-interconnection-guide.mdx
│   ├── ai-storage-optimization.mdx
│   ├── lfp-sodium-ion-chemistry.mdx
│   ├── vpp-management-careers.mdx
│   └── nfpa-855-safety-standards.mdx
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind CSS config
└── README.md                   # This file
```

## Key Features

### 1. Homepage (`app/page.tsx`)
- Hero section with CTA
- Stats grid ($150K+ salary, 40%+ CAGR, 5 guides)
- Article grid with 5 cards (title, role, salary, description)
- Call-to-action to BESSjobs.com

### 2. Dynamic Article Pages (`app/[slug]/page.tsx`)
- Full MDX rendering (no external components - all inline)
- Markdown-to-HTML conversion
- Article metadata display (title, role, salary)
- Mobile-responsive design
- Bottom CTA linking to BESSjobs

### 3. Navigation & Header (`app/layout.tsx`)
- Sticky top navigation
- Logo with "BESS" branding
- Links: Home, Guides
- **BESSjobs link ONLY in footer** (removed from top nav as requested)
- Footer with proper copyright + links structure

### 4. Content (5 Articles)
All articles include:
- Clear salary ranges
- Role descriptions
- Career progression paths
- Real-world examples
- Learning resources

**Articles:**
1. **Grid Interconnection Guide** - $120K-$150K, Grid Engineer
2. **AI Storage Optimization** - $140K-$180K, AI/ML Engineer  
3. **LFP & Sodium-Ion Chemistry** - $130K-$160K, Battery Chemist
4. **VPP Management Careers** - $135K-$175K, VPP Operations Manager
5. **NFPA 855 Safety Standards** - $125K-$155K, Safety Engineer

## Technologies

- **Next.js 14** - React framework with app router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **MDX** - Markdown with JSX (server-side rendered)
- **Static Generation** - All pages pre-generated at build time

## Build & Deploy

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Start server
npm start
```

## SEO

- Dynamic sitemap generation (`sitemap.ts`)
- Meta tags on all pages
- Open Graph support
- Mobile-responsive design
- Fast static rendering

## Design

- Inline Tailwind CSS (no component dependencies)
- Mobile-first responsive design
- Green accent color (#16a34a)
- Dark header, light body
- Hover states via CSS transitions

## Notes for Deployment

- No external component libraries required
- All styling is inline (self-contained)
- Articles are static MDX files
- Build output is pre-rendered HTML
- Ready for Vercel, Netlify, or any static host

## Content Priority

✅ **Content First**: 5 deep, SEO-rich articles ready for indexing
✅ **Accessibility**: Full article navigation, proper heading hierarchy
✅ **Mobile**: Fully responsive, tested on various screen sizes
✅ **Performance**: Static pre-rendering, minimal JavaScript

---

**Ready to push to production** ✨
