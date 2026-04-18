# 🎨 Your Awesome Portfolio Website - Quick Start Guide

## ✨ What Was Created

Your portfolio is now ready to showcase in interviews and your professional profiles! Here's what's included:

### 📁 Project Structure
```
portfolio/
├── app/
│   ├── globals.css         # Dark theme with neon accents
│   ├── layout.tsx          # Main layout component
│   ├── page.tsx            # Home page with all sections
│   └── api/contact/route.ts # Contact form API endpoint
├── src/
│   ├── components/         # All React components
│   ├── lib/                # Data files (projects, skills, experience)
│   └── types/              # TypeScript types
└── public/                 # Static assets
```

## 🚀 How to Run

**Start the development server:**
```bash
cd /c/Users/potha/portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Features Included

### ✅ Sections
- **Hero Section**: Eye-catching intro with call-to-action buttons
- **About**: Professional bio and key stats
- **Skills**: Organized by categories (Languages, Frontend, Backend, Tools, Soft Skills)
- **Projects**: Featured projects showcase with tech stack
- **Experience**: Timeline view of work and education
- **Contact**: Email form + social media links

### ✨ Design Features
- **Dark & Bold Theme**: Deep slate background with neon cyan, purple, and pink accents
- **Smooth Animations**: Framer Motion animations on scroll and hover
- **Responsive Design**: Mobile-first, works on all devices
- **Modern Typography**: Professional sans-serif fonts
- **Glassmorphism Effects**: Subtle frosted glass effects on cards

### 🔧 Interactive Features
- **Mobile Navigation**: Hamburger menu for smaller screens
- **Sticky Navbar**: Scrolls with smooth effects
- **Hover Effects**: Cards and buttons have smooth transitions
- **Contact Form**: Collects name, email, subject, and message
- **Social Links**: GitHub, LinkedIn, Twitter, and email integration

## 📝 Customization Tips

### 1. Update Your Information
Edit these files with your actual information:

**Skills** (`src/lib/skills.ts`):
```typescript
export const skills: Skill[] = [
  {
    category: "Languages",
    skills: ["Your", "Skills", "Here"],
  },
  // Add more categories
];
```

**Projects** (`src/lib/projects.ts`):
- Add your project details, GitHub links, and live demos
- Update project images in `/public/projects/`

**Experience** (`src/lib/experience.ts`):
- Add your work experience and education
- Include dates, descriptions, and key achievements

**Metadata** (`app/layout.tsx`):
- Update page title and description
- Add your name in the metadata

### 2. Configure Email (Optional)
To enable the contact form to send emails:

Create `.env.local` in your project root:
```
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=you@example.com
```

Uncomment the email configuration in `app/api/contact/route.ts`.

### 3. Add Project Images
Place project images in `/public/projects/` and reference them in `src/lib/projects.ts`.

### 4. Update Social Links
Edit the social links in:
- `src/components/Contact.tsx` (Contact section)
- `src/components/Footer.tsx` (Footer)

## 🎨 Color Customization

The theme colors are defined in `app/globals.css`:
```css
:root {
  --background: #0f0f0f;
  --foreground: #f5f5f5;
  --accent-cyan: #00d9ff;
  --accent-purple: #d946ef;
  --accent-pink: #ff006e;
}
```

Modify these to match your brand!

## 📦 Build & Deploy

**Production build:**
```bash
npm run build
npm start
```

**Deploy to Vercel (Recommended for Next.js):**
```bash
npm install -g vercel
vercel
```

**Deploy to Netlify:**
1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 🔑 Key Tech Stack

- ⚛️ **React 19** - UI components
- ⬜ **Next.js 16** - React framework
- 🎨 **Tailwind CSS v4** - Styling
- ✨ **Framer Motion** - Animations
- 📮 **Nodemailer** - Email support
- 🏷️ **TypeScript** - Type safety

## 📚 Tips for SDE Interviews

1. **Customize Project Descriptions**: Make them detailed and impressive
2. **Highlight Technologies**: Show your tech stack clearly
3. **Add Metrics**: Include stats about your achievements
4. **Personal Touch**: Let your personality shine through
5. **Update Regularly**: Keep projects and experience current
6. **Performance**: Your portfolio itself is an example of your work!

## 🎯 Next Steps

1. ✏️ Update your information in `src/lib/`
2. 🖼️ Add project screenshots to `/public/projects/`
3. 📧 Configure email support (optional)
4. 📱 Test on mobile devices
5. 🚀 Deploy to your hosting platform
6. 🔗 Share your portfolio URL in profiles and interviews!

## 🆘 Troubleshooting

**Dev server won't start:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Animations not working:**
- Check that Framer Motion is installed: `npm list framer-motion`
- Ensure client components have `"use client"` at the top

**Styling issues:**
- Rebuild Tailwind CSS: Delete `.next/` and restart dev server
- Check that PostCSS is configured correctly

## 📞 Support

For more help:
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Your portfolio is ready to impress! 🚀**
