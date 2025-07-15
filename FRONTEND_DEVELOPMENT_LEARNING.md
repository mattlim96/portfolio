# Frontend Development Learning Guide

## 🚀 Project Overview

This document serves as a guide to understand the current setup of our Next.js portfolio project, explaining the directory structure, packages used, and their purposes. This guide is particularly helpful for beginners learning Next.js and modern frontend development.

## 📁 Directory Structure Explained

```
portfolio/
├── src/                    # Source code directory
│   ├── app/               # Next.js 14 App Router
│   │   ├── layout.tsx    # Root layout (applies to all pages)
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   │
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (navbar, etc.)
│   │   ├── sections/     # Page sections (hero, about, etc.)
│   │   ├── ui/           # UI components (button, input, etc.)
│   │   └── theme-provider.tsx  # Theme context provider
│   │
│   ├── data/             # Data files
│   │   ├── portfolio.ts  # Portfolio content
│   │   └── types.ts      # TypeScript types
│   │
│   └── lib/              # Utility functions
│       └── utils.ts      # Helper functions
│
├── public/               # Static files
│   └── images/          # Image assets
│
└── [Configuration Files] # Various config files in root
    ├── next.config.mjs      # Next.js configuration
    ├── tailwind.config.ts   # Tailwind CSS configuration
    ├── tsconfig.json        # TypeScript configuration
    ├── eslint.config.mjs    # ESLint linting rules
    ├── postcss.config.mjs   # PostCSS configuration
    ├── components.json      # shadcn/ui configuration
    ├── package.json         # Dependencies and scripts
    └── .gitignore          # Git ignore rules
```

### Key Directories Explained

1. **`src/app/`**: 
   - Uses Next.js 14 App Router
   - Each folder represents a route
   - `layout.tsx` defines the common layout
   - `page.tsx` is the main content of each route

2. **`src/components/`**:
   - Organized by function and scope
   - `layout/`: Components used in the main layout
   - `sections/`: Large page sections
   - `ui/`: Reusable UI components
   - Components use TypeScript for type safety

3. **`src/data/`**:
   - Contains structured data
   - Uses TypeScript for type definitions
   - Separates content from presentation

4. **`public/`**:
   - Static assets like images
   - Directly accessible in production

## 📦 Current Package Dependencies

### Core Dependencies
```json
{
  // Framework and React
  "next": "^14.2.30",              // Next.js framework with App Router
  "react": "^18.2.0",              // React library
  "react-dom": "^18.2.0",          // React DOM
  
  // UI Components (Radix UI)
  "@radix-ui/react-dropdown-menu": "^2.1.15",  // Accessible dropdown menus
  "@radix-ui/react-slot": "^1.0.2",           // Component composition
  "@radix-ui/react-tabs": "^1.1.12",          // Tab interface
  "@radix-ui/react-toast": "^1.2.14",         // Toast notifications
  
  // Styling and UI Utilities
  "class-variance-authority": "^0.7.0",       // Dynamic className generation
  "clsx": "^2.0.0",                          // className utility
  "tailwind-merge": "^2.1.0",                // Tailwind class merging
  "tailwindcss-animate": "^1.0.7",           // Animation utilities
  
  // Animation and Icons
  "framer-motion": "^12.23.5",               // Animation library
  "lucide-react": "^0.294.0",                // Icon library
  "next-themes": "^0.2.1"                    // Theme management
}
```

### Development Dependencies
```json
{
  // TypeScript Support
  "typescript": "^5",                        // TypeScript language
  "@types/node": "^20",                     // Node.js type definitions
  "@types/react": "^18",                    // React type definitions
  "@types/react-dom": "^18",                // React DOM type definitions
  
  // CSS Processing
  "autoprefixer": "^10.0.1",                // CSS vendor prefixing
  "postcss": "^8",                          // CSS transformation
  "tailwindcss": "^3.3.0",                  // Utility-first CSS
  
  // Code Quality
  "eslint": "^8",                           // Code linting
  "eslint-config-next": "14.0.4"            // Next.js ESLint config
}
```

## 🛠️ Key Technologies Explained

### 1. Next.js 14
- **What**: Full-stack React framework
- **Why**: Provides routing, optimization, and development features
- **Key Features**:
  - App Router
  - Server Components
  - API Routes
  - Image Optimization

### 2. React 18
- **What**: UI library
- **Why**: Component-based development
- **Key Features**:
  - Hooks
  - Virtual DOM
  - Component Lifecycle
  - Concurrent Features

### 3. TypeScript
- **What**: JavaScript with types
- **Why**: Better development experience and error catching
- **Key Features**:
  - Static Type Checking
  - Interface Definitions
  - Enhanced IDE Support

### 4. Tailwind CSS
- **What**: Utility-first CSS framework
- **Why**: Rapid styling without writing CSS
- **Key Features**:
  - Utility Classes
  - JIT Compiler
  - Responsive Design
  - Dark Mode

### 5. Radix UI
- **What**: Unstyled, accessible components
- **Why**: Building blocks for custom UI
- **Components Used**:
  - Dropdown Menu
  - Tabs
  - Toast
  - Slot

## 🎨 Styling System

We use a combination of:
1. **Tailwind CSS**: Utility classes
2. **class-variance-authority**: Component variants
3. **clsx**: Conditional classes
4. **tailwind-merge**: Class conflict resolution

Example component styling:
```tsx
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

## 🔧 Development Tools

1. **ESLint**
   - Code quality checking
   - Next.js specific rules
   - TypeScript integration

2. **PostCSS**
   - CSS processing
   - Autoprefixer
   - Tailwind CSS processing

3. **TypeScript**
   - Static type checking
   - Better IDE support
   - Code documentation

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Examples](https://github.com/vercel/next.js/tree/canary/examples)

### React
- [React Documentation](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Hooks Guide](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Radix UI
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Component Examples](https://www.radix-ui.com/primitives/docs/components/accordion)

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

## 🔍 Common Development Tasks

### 1. Creating a New Component
```tsx
// src/components/ui/MyComponent.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
}
```

### 2. Adding a New Route
```tsx
// src/app/new-route/page.tsx
export default function NewRoutePage() {
  return (
    <div className="container mx-auto py-8">
      <h1>New Route</h1>
    </div>
  );
}
```

### 3. Using Theme Provider
```tsx
// In your component
'use client';

import { useTheme } from 'next-themes';

export function ThemeAwareComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## 🎯 Best Practices

1. **Component Organization**
   - One component per file
   - Use TypeScript interfaces
   - Keep components focused

2. **State Management**
   - Use hooks appropriately
   - Lift state when needed
   - Consider context for global state

3. **Performance**
   - Use Next.js Image component
   - Implement proper loading states
   - Optimize component re-renders

4. **Accessibility**
   - Use semantic HTML
   - Include ARIA attributes
   - Test with keyboard navigation

## 🐛 Troubleshooting

Common issues and solutions:

1. **TypeScript Errors**
   - Check type definitions
   - Update dependencies
   - Use proper interfaces

2. **Styling Issues**
   - Check Tailwind configuration
   - Use proper class ordering
   - Verify CSS specificity

3. **Build Errors**
   - Clear `.next` directory
   - Update dependencies
   - Check for circular dependencies

## 🔄 Update Process

To keep dependencies up to date:

1. Check for updates:
   ```bash
   npm outdated
   ```

2. Update packages:
   ```bash
   npm update
   ```

3. For major versions:
   ```bash
   npm install package@latest
   ```

Remember to test thoroughly after updates!

## ⚙️ Configuration Files Deep Dive

Understanding configuration files is crucial for frontend development. Here's what each file does:

### 1. `next.config.mjs` - Next.js Configuration
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
```

**Purpose**: Controls how Next.js builds and runs your application
**Currently**: Basic setup (can be extended for GitHub Pages deployment)
**Common additions**:
- `output: 'export'` for static site generation
- `basePath` for subdirectory hosting
- `images.unoptimized: true` for static hosting

### 2. `tailwind.config.ts` - Tailwind CSS Configuration
```typescript
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { /* Custom color system */ },
      borderRadius: { /* Custom border radius */ },
      fontFamily: { /* Custom fonts */ },
      keyframes: { /* Custom animations */ }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

**Purpose**: Customizes Tailwind CSS for your design system
**Key features**:
- **Dark mode**: Class-based theme switching
- **Content paths**: Where to look for Tailwind classes
- **Custom colors**: Design system colors using CSS variables
- **Animations**: Custom keyframes for smooth transitions
- **Plugins**: Additional functionality like animations

### 3. `tsconfig.json` - TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2017",           // JavaScript version to compile to
    "strict": true,               // Enable all strict type checking
    "jsx": "preserve",            // How to handle JSX
    "paths": {
      "@/*": ["./src/*"]         // Import alias (@/components/...)
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

**Purpose**: Controls TypeScript compilation and type checking
**Key settings**:
- **Strict mode**: Catches more potential errors
- **Path mapping**: Use `@/` instead of relative imports
- **JSX**: Preserve JSX for Next.js to handle
- **Include/Exclude**: Which files to process

### 4. `eslint.config.mjs` - Code Quality Rules
```javascript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
```

**Purpose**: Enforces code quality and consistency
**Current setup**:
- **Next.js rules**: Best practices for Next.js development
- **Core Web Vitals**: Performance optimization rules
- **TypeScript**: Type-aware linting rules

### 5. `postcss.config.mjs` - CSS Processing
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};
```

**Purpose**: Processes CSS files before they're used
**Current setup**:
- **Tailwind PostCSS**: Processes Tailwind utility classes
- **Future additions**: Could include autoprefixer, CSS minification

### 6. `components.json` - shadcn/ui Configuration
```json
{
  "style": "default",
  "rsc": true,                    // React Server Components
  "tsx": true,                    // Use TypeScript
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true          // Use CSS variables for theming
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**Purpose**: Configures shadcn/ui component generation
**Key settings**:
- **Style**: Component style variant
- **RSC**: React Server Components support
- **Aliases**: Import path shortcuts
- **CSS Variables**: Theme system using CSS custom properties

### 7. `package.json` - Project Metadata
```json
{
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",       // Production build
    "start": "next start",       // Production server
    "lint": "next lint"          // Code linting
  },
  "dependencies": { /* Runtime packages */ },
  "devDependencies": { /* Development tools */ }
}
```

**Purpose**: Defines project metadata, scripts, and dependencies
**Scripts explained**:
- **dev**: Start development server with hot reload
- **build**: Create optimized production build
- **start**: Run production build locally
- **lint**: Check code quality issues

### 8. `.gitignore` - Version Control Rules
```
# Dependencies
/node_modules

# Build outputs
/.next/
/out/

# Environment files
.env*

# System files
.DS_Store
```

**Purpose**: Tells Git which files to ignore
**Key exclusions**:
- **node_modules**: Dependencies (huge, reinstallable)
- **.next**: Build cache (regenerated on build)
- **Environment files**: May contain secrets
- **System files**: OS-specific files

## 🔧 Configuration Best Practices

### 1. Environment-Specific Configs
```javascript
// next.config.mjs for different environments
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};
```

### 2. TypeScript Path Mapping
```json
// tsconfig.json - Clean imports
{
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"],
    "@/data/*": ["./src/data/*"]
  }
}
```

### 3. Tailwind Custom Design System
```typescript
// tailwind.config.ts - Consistent design
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## 🚨 Common Configuration Issues

### 1. Import Path Errors
**Problem**: `Cannot resolve '@/components'`
**Solution**: Check `tsconfig.json` paths and restart your editor

### 2. Tailwind Classes Not Working
**Problem**: Classes not being applied
**Solution**: Check `tailwind.config.ts` content paths include your files

### 3. ESLint Errors
**Problem**: Unexpected linting errors
**Solution**: Check `eslint.config.mjs` extends the right configurations

### 4. Build Failures
**Problem**: Production build fails
**Solution**: Check `next.config.mjs` for GitHub Pages specific settings

## 🛠️ When to Modify Configuration Files

### Immediate needs:
- **`next.config.mjs`**: When deploying to GitHub Pages
- **`tailwind.config.ts`**: When customizing colors/fonts
- **`components.json`**: When adding new shadcn/ui components

### Future enhancements:
- **ESLint**: Add custom rules for your coding standards
- **TypeScript**: Adjust strictness as you learn
- **PostCSS**: Add CSS optimization plugins

## 📖 Configuration Learning Path

1. **Start with**: Understanding what each file does (this guide)
2. **Next**: Modify Tailwind config for custom colors
3. **Then**: Add TypeScript path aliases as your project grows
4. **Finally**: Customize Next.js config for deployment

### Quick Reference Commands
```bash
# Install new shadcn/ui component
npx shadcn-ui@latest add button

# Update TypeScript config check
npx tsc --noEmit

# Check ESLint issues
npm run lint

# Test production build
npm run build && npm run start
``` 

## Data Management

### Project Data Structure
- Updated project data structure in TypeScript to maintain type safety
- Each project requires specific fields as defined in the Project interface:
  - `id`: Unique identifier for the project
  - `title`: Project title
  - `description`: Brief description of the project
  - `image`: Path to project image
  - `githubUrl`: Link to GitHub repository
  - `liveUrl`: Optional link to live demo (if available)
  - `technologies`: Array of technologies used
  - `featured`: Boolean to highlight important projects
  - `category`: Project category for filtering

### Learning Points
- Using TypeScript interfaces ensures data consistency across the application
- Organizing projects by category helps with filtering and navigation
- Maintaining consistent image paths in the public directory
- Using optional properties (like liveUrl) for flexibility in project data structure 

## Layout Techniques

### Flex Layout for Card Components
- Used flex layout to create consistent card heights and bottom-aligned content
- Key Tailwind CSS classes used:
  - `flex flex-col h-full`: Creates a full-height flex container with column direction
  - `flex-grow`: Allows content to expand and fill available space
  - `mt-auto`: Pushes content to the bottom of the container
  - `space-y-4`: Adds consistent vertical spacing between elements

### Learning Points
- Flex layout is powerful for creating responsive and aligned card layouts
- Using `flex-grow` helps maintain consistent heights across cards with varying content
- Combining `mt-auto` with flex layout ensures bottom alignment of elements
- Grouping related elements in flex containers helps with spacing and organization 

### Mobile-Friendly Navigation
- Implemented horizontally scrollable tabs for better mobile experience
- Key techniques:
  - `overflow-x-auto`: Enables horizontal scrolling
  - `min-w-[120px]`: Sets consistent minimum tab width
  - `whitespace-nowrap`: Prevents text wrapping in tabs
  - `space-x-2`: Maintains consistent spacing between tabs 

### Text Overflow Handling
- Implemented text truncation and wrapping strategies for mobile layouts
- Key techniques:
  - `truncate`: Ellipsis for long text in fixed-width containers
  - `break-words`: Proper word wrapping for long content
  - `min-w-[140px] max-w-[200px]`: Controlled width constraints
  - `title` attribute: Shows full text on hover when truncated 

### UI/UX Improvements
- Simplified theme toggle for better user experience
- Key techniques:
  - Single button cycle instead of dropdown for faster theme switching
  - Icon transitions using Tailwind's scale and rotate transforms
  - Tooltip for current theme feedback
  - Accessibility preserved with sr-only text 