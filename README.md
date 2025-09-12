# MyAgency - Multi-Page Portfolio Website

This is a [Next.js](https://nextjs.org) project showcasing a professional agency website with multiple pages and a comprehensive project portfolio section.

## Website Structure

The website includes the following pages:

### Main Navigation
1. **Home** (`/`) - Landing page with hero section, services overview, and call-to-action
2. **About** (`/about`) - Detailed information about the agency, mission, and team
3. **Project Portfolio** (`/project-portfolio`) - Comprehensive portfolio with category navigation and featured projects overview

### Project Portfolio Sub-pages
- **Enterprise Solutions** (`/project-portfolio/enterprise-solutions`) - Large-scale enterprise applications
- **Web Platforms** (`/project-portfolio/web-platforms`) - Modern web applications and platforms  
- **Desktop Systems** (`/project-portfolio/desktop-systems`) - Desktop applications and system solutions

## Key Features

- **Responsive Design**: Mobile-first design using Material-UI components
- **Next.js App Router**: Modern routing with nested routes for portfolio sections
- **Interactive Navigation**: Breadcrumb navigation and category chips in portfolio sections
- **Reusable Components**: Modular components for consistent design across pages
- **SEO Optimized**: Proper page structure and metadata for search engines

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                                    # Home page
│   ├── about/
│   │   └── page.tsx                               # About page
│   └── project-portfolio/
│       ├── page.tsx                               # Main portfolio page with overview
│       ├── enterprise-solutions/
│       │   └── page.tsx                          # Enterprise projects
│       ├── web-platforms/
│       │   └── page.tsx                          # Web platform projects
│       └── desktop-systems/
│           └── page.tsx                          # Desktop system projects
├── components/
│   ├── Navbar.tsx                                # Main navigation
│   ├── PortfolioNavigation.tsx                   # Portfolio sub-navigation
│   ├── HeroSection.tsx                           # Hero sections
│   ├── ContentFullWidth.tsx                      # Content blocks
│   ├── Gallery2xN.tsx                            # 2-column galleries
│   ├── Gallery3xN.tsx                            # 3-column galleries
│   └── Footer.tsx                                # Footer component
└── utils/
    └── colors.ts                                  # Color theme configuration
```

## Technologies Used

- **Next.js 15** with App Router
- **React 19**
- **Material-UI (MUI)** for components and styling
- **TypeScript** for type safety
- **Tailwind CSS** for additional styling

You can start editing the pages by modifying files in the `src/app/` directory. The pages auto-update as you edit the files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
