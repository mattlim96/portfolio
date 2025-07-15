# Portfolio Website

My personal portfolio website built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: GitHub Pages

## Project Structure

```
portfolio/
├── hugo-version/          # Original Hugo website (reference)
├── src/
│   ├── app/              # Next.js pages and routing
│   ├── components/       # Reusable UI components
│   └── lib/             # Utilities and helpers
├── public/              # Static assets
└── README.md
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Components

This project uses shadcn/ui for components. To add a new component:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
```

## License

MIT
