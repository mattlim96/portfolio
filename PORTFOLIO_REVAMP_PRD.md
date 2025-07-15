# Portfolio Website Revamp - Product Requirements Document

## 📋 Project Overview

**Project Name:** Portfolio Website Revamp from Hugo to Next.js  
**Developer:** Mattheus Lim  
**Current Status:** Hugo-based static site hosted on GitHub Pages  
**Target Status:** Next.js 14 + React with modern UI/UX hosted on GitHub Pages  

### 🎯 Project Goals

1. **Learning Objective:** Gain hands-on experience with Next.js 14 and modern front-end development
2. **Technical Modernization:** Migrate from Hugo to a React-based stack with improved developer experience
3. **UI/UX Enhancement:** Create a more modern, interactive, and visually appealing portfolio
4. **Performance Optimization:** Leverage Next.js features for better performance and SEO
5. **Maintainability:** Establish a more maintainable codebase with TypeScript and modern tooling

## 🛠️ Technical Stack

### Current Stack (Hugo)
- **Framework:** Hugo static site generator
- **Styling:** Bootstrap 5 + Custom CSS
- **Icons:** Font Awesome 5
- **Fonts:** Google Fonts (Alata, Lora, Roboto)
- **Hosting:** GitHub Pages

### Target Stack (Next.js)
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript (for type safety and better development experience)
- **Styling:** Tailwind CSS (utility-first CSS framework)
- **UI Components:** shadcn/UI (modern, accessible React components)
- **Icons:** Lucide React (modern icon library, used by shadcn/ui)
- **Fonts:** Next.js Font Optimization with Google Fonts
- **Hosting:** GitHub Pages with GitHub Actions for deployment
- **Animation:** Framer Motion (for smooth animations and transitions)

## 🏗️ Directory Structure

```
portfolio/                  # Your project root
├── hugo-version/          # Current Hugo website (reference)
├── app/                   # Next.js pages and routing
│   ├── page.tsx          # Homepage (replaces index.html)
│   ├── layout.tsx        # Shared layout (header, footer)
│   └── blog/             # Blog section
│       └── page.tsx      # Blog listing page
├── components/           # Reusable UI components
│   ├── sections/        # Main page sections
│   │   ├── Hero.tsx    # Hero section with intro
│   │   ├── About.tsx   # About section
│   │   ├── Projects.tsx # Projects grid
│   │   └── Contact.tsx # Contact section
│   └── ui/             # Small, reusable pieces
│       ├── Button.tsx  # Custom button component
│       └── Card.tsx    # Card for projects/posts
├── data/                # Your content as data
│   ├── projects.ts     # Projects information
│   ├── experience.ts   # Work experience
│   └── education.ts    # Education details
├── public/             # Static files (images, etc.)
│   ├── images/        # Images from hugo-version
│   └── fonts/         # Custom fonts if needed
└── styles/            # CSS and styling
    └── globals.css    # Global styles & Tailwind

```

### Directory Structure Explained for Beginners

1. **`app/` - Pages & Routing**
   - This replaces your current HTML files
   - `page.tsx` is like your `index.html`
   - Next.js automatically creates URLs based on folder names
   - Much simpler than managing multiple HTML files

2. **`components/` - Reusable Pieces**
   - Instead of repeating HTML, create reusable components
   - `sections/`: Big pieces of your pages (Hero, About, etc.)
   - `ui/`: Small, reusable elements (buttons, cards)
   - Makes updating your site much easier

3. **`data/` - Your Content**
   - Store your information (projects, experience) as data
   - Easy to update without touching code
   - TypeScript helps prevent errors
   - Similar to Hugo's content management but more flexible

4. **`public/` - Static Files**
   - Just like your current images and assets
   - Directly copied to the built website
   - No processing needed

5. **`styles/` - CSS & Styling**
   - Global styles and Tailwind CSS
   - Replaces your current CSS folder
   - More maintainable with Tailwind's utility classes

### Why This Structure is Better

1. **Easier Updates**
   - Want to change your job description? Just update `data/experience.ts`
   - Need to modify all project cards? Change one component
   - No more copy-pasting HTML

2. **Better Development Experience**
   - TypeScript catches errors as you type
   - Components are self-contained and reusable
   - Hot reload shows changes instantly

3. **Improved Performance**
   - Next.js optimizes everything automatically
   - Images are optimized on build
   - Code is split into smaller chunks

4. **Easier to Learn**
   - Each folder has a clear purpose
   - Components are like building blocks
   - Data is separated from presentation

## 📊 Current Website Content Analysis

### 1. Homepage Sections
- **Hero Section:** Name, tagline, CTA button, social links, profile image
- **About Section:** Bio text, secondary profile image
- **Experience Section:** Tabbed interface with 2 jobs (GetHarley, Shopee)
- **Education Section:** 2 degrees with descriptions
- **Projects Section:** 7 projects in card grid layout
- **Achievements Section:** 2 achievements

### 2. Blog Section
- **Blog Listing:** 4 sample posts with dates and descriptions
- **Individual Posts:** Full markdown content with metadata
- **Tags System:** Post categorization
- **RSS Feed:** XML feed for blog posts

### 3. Key Features
- **Dark/Light Theme Toggle:** User preference persistence
- **Responsive Design:** Mobile-first approach
- **Single-Page Navigation:** Smooth scrolling between sections
- **Social Media Integration:** GitHub, LinkedIn, SoundCloud, Spotify
- **External Links:** CV/Resume, project repositories

## 🎨 UI/UX Requirements

### Design Principles
1. **Modern & Clean:** Minimalist design with strategic use of whitespace
2. **Accessibility-First:** WCAG 2.1 AA compliance with shadcn/ui components
3. **Performance-Focused:** Optimized images, lazy loading, and efficient animations
4. **Mobile-Responsive:** Seamless experience across all device sizes
5. **Interactive Elements:** Subtle animations and hover effects

### Color Scheme & Theming
- **Light Theme:** Clean whites, soft grays, and accent colors
- **Dark Theme:** Dark backgrounds with high contrast text
- **Accent Colors:** Professional blue/teal palette for CTAs and highlights
- **Typography:** Modern font stack with proper hierarchy

### Component Design System
- **Buttons:** Primary, secondary, and ghost variants
- **Cards:** Consistent styling for projects, experience, and education
- **Navigation:** Sticky header with smooth scroll-to-section
- **Forms:** Contact form with validation (future enhancement)

## 🔧 Technical Requirements

### Core Functionality
1. **Static Site Generation (SSG):** Pre-render all pages at build time
2. **SEO Optimization:** Meta tags, structured data, and sitemap
3. **Performance:** Core Web Vitals optimization
4. **TypeScript:** Strict typing for better development experience
5. **Accessibility:** Keyboard navigation, ARIA labels, and screen reader support

### Content Management
- **Blog Posts:** Markdown files with frontmatter metadata
- **Dynamic Data:** JSON/TypeScript files for easy content updates
- **Image Optimization:** Next.js Image component with proper sizing
- **Asset Management:** Optimized static asset delivery

### Development Experience
- **Hot Reload:** Fast development with Next.js dev server
- **Code Quality:** ESLint, Prettier, and TypeScript strict mode
- **Component Documentation:** Well-commented code for learning
- **Error Handling:** Proper error boundaries and loading states

## 📱 Responsive Design Specifications

### Breakpoints (Tailwind CSS)
- **Mobile:** 320px - 768px (sm:)
- **Tablet:** 768px - 1024px (md:)
- **Desktop:** 1024px+ (lg:, xl:, 2xl:)

### Layout Adaptations
- **Hero Section:** Stacked on mobile, side-by-side on desktop
- **Navigation:** Hamburger menu on mobile, horizontal on desktop
- **Project Grid:** 1 column on mobile, 2 on tablet, 3 on desktop
- **Experience Tabs:** Vertical stack on mobile, horizontal on desktop

## 🚀 Deployment Strategy

### GitHub Pages Setup
1. **Repository Structure:** Separate branch for deployment (`gh-pages`)
2. **Build Process:** GitHub Actions workflow for automated deployment
3. **Custom Domain:** Support for custom domain if needed
4. **Asset Optimization:** Compressed images and minified code

### CI/CD Pipeline
```yaml
# Example GitHub Actions workflow
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

## 📝 Content Migration Plan

### 1. Personal Information
- **Name:** Mattheus Lim
- **Tagline:** "I live to code and code to live"
- **Bio:** Statistics graduate, Data Scientist, specializing in Business Analytics
- **Skills:** Python, R, SQL, JavaScript, Git, Data Science, Blockchain Development
- **Location:** UCL graduate, Bayes Business School postgraduate

### 2. Work Experience
```typescript
// Example data structure
interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  website: string;
  achievements: string[];
  type: 'full-time' | 'part-time' | 'contract';
}
```

### 3. Education
```typescript
interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  website: string;
  achievements?: string[];
}
```

### 4. Projects
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured: boolean;
}
```

### 5. Blog Posts
```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  readTime: number;
}
```

## 🎓 Learning Objectives & Code Education

### Next.js 14 Concepts to Learn
1. **App Router:** Understanding the new routing system
2. **Server Components:** Difference between server and client components
3. **Layouts:** Nested layouts and route groups
4. **Data Fetching:** Static generation vs. server-side rendering
5. **Metadata API:** SEO optimization with Next.js

### React Concepts to Practice
1. **Hooks:** useState, useEffect, useContext, custom hooks
2. **Component Composition:** Reusable and composable components
3. **Props & State Management:** Proper data flow patterns
4. **Event Handling:** User interactions and form handling
5. **Conditional Rendering:** Dynamic content based on state

### TypeScript Learning Points
1. **Type Definitions:** Interfaces and type aliases
2. **Generic Types:** Reusable type definitions
3. **Props Typing:** Component prop validation
4. **API Response Types:** Type-safe data fetching
5. **Utility Types:** Pick, Omit, Partial, Required

### Modern CSS with Tailwind
1. **Utility-First Approach:** Composing designs with utility classes
2. **Responsive Design:** Mobile-first responsive utilities
3. **Custom Themes:** Tailwind configuration and customization
4. **Component Variants:** Creating reusable component styles
5. **Animation:** Smooth transitions and micro-interactions

## 📋 Development Phases

### Phase 1: Project Setup & Foundation (Week 1)
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS and shadcn/ui
- [ ] Set up basic project structure and routing
- [ ] Create basic layout components (Header, Footer)
- [ ] Implement dark/light theme toggle
- [ ] Set up GitHub repository and initial deployment

### Phase 2: Core Components Development (Week 2)
- [ ] Build reusable UI components (Button, Card, Badge, etc.)
- [ ] Create data structures for content
- [ ] Implement Hero section with animations
- [ ] Build About section with responsive layout
- [ ] Create responsive navigation component
- [ ] Add social media integration

### Phase 3: Content Sections (Week 3)
- [ ] Implement Experience section with tabs
- [ ] Build Education section with cards
- [ ] Create Projects grid with filtering
- [ ] Add Achievements section
- [ ] Implement smooth scrolling navigation
- [ ] Add loading states and error handling

### Phase 4: Blog System (Week 4)
- [ ] Set up markdown processing for blog posts
- [ ] Create blog listing page
- [ ] Build individual blog post pages
- [ ] Implement tags and categories
- [ ] Add search functionality
- [ ] Create RSS feed generation

### Phase 5: Polish & Optimization (Week 5)
- [ ] Performance optimization and Core Web Vitals
- [ ] SEO enhancements (meta tags, structured data)
- [ ] Accessibility improvements
- [ ] Cross-browser testing and bug fixes
- [ ] Add animations and micro-interactions
- [ ] Documentation and code comments

### Phase 6: Deployment & Launch (Week 6)
- [ ] GitHub Pages deployment setup
- [ ] GitHub Actions CI/CD pipeline
- [ ] Custom domain configuration (if needed)
- [ ] Final testing and quality assurance
- [ ] Launch and monitoring setup

## 🔍 Code Learning Examples

### Example 1: Modern React Component with TypeScript
```typescript
// components/sections/Hero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Music } from 'lucide-react';

interface HeroProps {
  name: string;
  tagline: string;
  resumeUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    soundcloud: string;
    spotify: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ 
  name, 
  tagline, 
  resumeUrl, 
  socialLinks 
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                Hello, my name is
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                {tagline}
              </h2>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  CV / Resume
                </a>
              </Button>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {platform === 'github' && <Github className="h-5 w-5" />}
                      {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                      {/* Add other social icons */}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20"></div>
              <img
                src="/images/profile-photo.jpg"
                alt={`${name} - Profile Photo`}
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Example 2: Data Management with TypeScript
```typescript
// data/portfolio.ts
export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  profileImage: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    soundcloud: string;
    spotify: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  website: string;
  achievements: string[];
  type: 'full-time' | 'part-time' | 'contract';
  current: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured: boolean;
  category: string;
}

// Static data that can be easily updated
export const personalInfo: PersonalInfo = {
  name: "Mattheus Lim",
  tagline: "I live to code and code to live",
  bio: "BSc Statistics graduate from UCL who worked as a Data Scientist at Shopee Malaysia. Postgraduate student at Bayes Business School (formerly Cass) specializing in Business Analytics. Interested in Automation, Data Science, and Blockchain Development within Decentralized Finance.",
  location: "London, UK",
  email: "your.email@example.com",
  resumeUrl: "https://drive.google.com/file/d/1VO0K7LjIOq_WC6o0yZyW2Mac49joFcJ0/view?usp=sharing",
  profileImage: "/images/profile-photo.jpg",
  skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "React", "Next.js", "Data Science", "Machine Learning"],
  socialLinks: {
    github: "https://github.com/mattlim96",
    linkedin: "https://www.linkedin.com/in/mattheus-lim/",
    soundcloud: "https://soundcloud.com/mattjensern",
    spotify: "https://open.spotify.com/user/1126372814?si=7814f74de4014e0f"
  }
};

export const experiences: Experience[] = [
  {
    id: "getharley",
    company: "GetHarley",
    position: "Senior Data Analyst (Part-Time)",
    period: "Nov 2021 - present",
    location: "London, UK",
    description: "GetHarley is an Aesthetic Dermatology Digital Platform",
    website: "https://www.getharley.com/",
    achievements: [
      "Appointed as Interim Manager of data team to on-board, supervise and coach 2 part-time Data Analysts",
      "Developed and deployed Python and SQL scripts to Heroku through GitHub for monthly reports",
      "Built data pipelines from Stripe, Calendly, Acuity and Google Calendar APIs to Google Sheets for performance tracking",
      "Queried data from PostgreSQL database for ad-hoc reports and data analyses using SQL, Python and Google Sheets"
    ],
    type: "part-time",
    current: true
  },
  {
    id: "shopee",
    company: "Shopee",
    position: "Data Scientist / Data Analyst (Full Time)",
    period: "May 2019 - Aug 2021",
    location: "Kuala Lumpur, Malaysia",
    description: "Shopee is a leading SEA E-Commerce Platform",
    website: "https://www.shopee.com.my/",
    achievements: [
      "Awarded highest rating in final performance review (1 of 100 employees); promoted to Senior Associate within 1.6 years",
      "Mentored and guided 3 interns from the Shopee Apprentice Program (3 months)",
      "Extracted keyword trends (2 to 3 n-grams) from products added to cart using Scikit-learn for Hot Products curation",
      "Optimised product negotiation process through Google API; preventing price tagging errors costing c.£15k from recurring"
    ],
    type: "full-time",
    current: false
  }
];

export const projects: Project[] = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation through Machine Learning",
    description: "Customer segmentation using K-Means clustering on customer dataset in R.",
    image: "https://cdn.smartkarrot.com/wp-content/uploads/2020/04/Customer-Segmentation-in-SaaS.png",
    githubUrl: "https://github.com/ba-group-projects/ml-clustering",
    technologies: ["R", "Machine Learning", "K-Means", "Data Analysis"],
    featured: true,
    category: "Machine Learning"
  },
  // ... more projects
];
```

### Example 3: Next.js App Router Usage
```typescript
// app/layout.tsx - Root Layout
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mattheus Lim - Portfolio',
  description: 'Data Scientist & Business Analytics Specialist',
  keywords: ['Data Science', 'Business Analytics', 'Python', 'R', 'SQL', 'Machine Learning'],
  authors: [{ name: 'Mattheus Lim' }],
  creator: 'Mattheus Lim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mattlim96.github.io/portfolio/',
    title: 'Mattheus Lim - Portfolio',
    description: 'Data Scientist & Business Analytics Specialist',
    siteName: 'Mattheus Lim Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mattheus Lim - Portfolio',
    description: 'Data Scientist & Business Analytics Specialist',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background font-sans antialiased">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Example 4: Theme Toggle Implementation
```typescript
// components/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## 🎯 Success Metrics

### Learning Objectives
- [ ] Complete understanding of Next.js 14 App Router
- [ ] Proficiency in TypeScript for React development
- [ ] Mastery of Tailwind CSS utility-first approach
- [ ] Experience with modern React patterns and hooks
- [ ] Knowledge of performance optimization techniques

### Technical Metrics
- [ ] Core Web Vitals scores: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Lighthouse performance score > 90
- [ ] Accessibility score > 95
- [ ] SEO score > 95
- [ ] Bundle size optimization (< 100KB initial JS)

### Feature Completeness
- [ ] All current content successfully migrated
- [ ] Responsive design across all devices
- [ ] Dark/light theme toggle working
- [ ] Blog system fully functional
- [ ] SEO optimization implemented
- [ ] GitHub Pages deployment successful

## 🚨 Potential Challenges & Solutions

### 1. GitHub Pages Deployment
**Challenge:** Next.js requires Node.js server, but GitHub Pages only serves static files  
**Solution:** Use `next export` or static export configuration to generate static HTML files

### 2. Image Optimization
**Challenge:** Next.js Image component requires server-side optimization  
**Solution:** Use `unoptimized` prop or pre-optimize images during build

### 3. Learning Curve
**Challenge:** New to React, TypeScript, and Next.js  
**Solution:** Start with simple components, add comprehensive comments, and iterate gradually

### 4. Content Management
**Challenge:** Migrating from Hugo's content structure  
**Solution:** Create TypeScript data files and markdown processing for blog posts

### 5. Styling Migration
**Challenge:** Converting Bootstrap CSS to Tailwind  
**Solution:** Use Tailwind's responsive utilities and shadcn/ui components

## 📚 Learning Resources

### Official Documentation
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Recommended Tutorials
- Next.js Learn Course (nextjs.org/learn)
- React TypeScript Cheatsheet
- Tailwind CSS Crash Course
- shadcn/ui Component Usage Examples

### Code Quality Tools
- ESLint with Next.js configuration
- Prettier for code formatting
- TypeScript strict mode
- Husky for git hooks

## 🎉 Conclusion

This PRD provides a comprehensive roadmap for migrating your Hugo portfolio to a modern Next.js 14 stack. The project is designed to be educational, with extensive code comments and explanations to help you learn React, TypeScript, and modern web development practices.

The phased approach allows for incremental learning and development, while the detailed technical specifications ensure the final product will be performant, accessible, and maintainable. The GitHub Pages deployment strategy ensures continuity with your current hosting solution.

Remember to commit your progress regularly and don't hesitate to iterate on designs and implementations as you learn new concepts. The goal is not just to migrate the website, but to gain valuable experience with modern web development technologies.

---

**Next Steps:**
1. Review and approve this PRD
2. Set up the development environment
3. Begin Phase 1: Project Setup & Foundation
4. Document your learning journey through the blog system

Happy coding! 🚀 