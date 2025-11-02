# Orthon.AI Landing Page

A modern, responsive landing page for Orthon.AI - an autonomous compliance and audit platform powered by artificial intelligence.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom brand colors
- **Inter Font** - Professional typography via Google Fonts

## 🎨 Brand Colors

- **Primary**: `#3a64a8` (Blue)
- **Secondary**: `#5c6972` (Gray-Blue)
- **Accent**: `#ffffff` (White)

## 📁 Project Structure

```
orthon-ai/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Features.tsx        # Features grid
│   ├── HowItWorks.tsx      # Process steps
│   ├── Benefits.tsx        # Benefits showcase
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── logo.svg            # Orthon.AI logo
│   └── favicon.ico         # Site favicon
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🛠️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## ✨ Features

- ⚡ **Fast & Optimized** - Built with Next.js 14 App Router
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌙 **Dark Mode** - Full dark mode support
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant components
- 🔒 **Type-Safe** - Full TypeScript coverage

## 🧩 Components

### Hero
Eye-catching hero section with headline, subheadline, and dual CTAs.

### Features
Grid layout showcasing 6 key features with icons and descriptions.

### How It Works
4-step process visualization explaining the platform workflow.

### Benefits
Highlight section with statistics and key value propositions.

### CTA
Conversion-focused call-to-action with free trial offer.

### Footer
Comprehensive footer with links, social media, and legal pages.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#3a64a8',
    // ... color variants
  },
}
```

### Typography
Change fonts in `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'
```

### Content
Update component files in the `components/` directory to modify text, icons, and layout.

## 📝 License

© 2025 Orthon.AI. All rights reserved.

## 🤝 Contributing

This is a landing page project. For contributions or questions, please contact the development team.

