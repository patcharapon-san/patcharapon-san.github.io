# Patcharapon Sangsatra Portfolio

A modern, professional portfolio website built with Next.js showcasing full-stack development expertise across multiple industries. This static site is optimized for GitHub Pages deployment and features a comprehensive project portfolio with specialized category sections.

## 🌐 Live Demo

Visit the live website: [patcharapon-san.github.io](https://patcharapon-san.github.io)

## 🚀 Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach using Material-UI components
- **Consistent Theme**: Centralized color palette system with CSS custom properties
- **Smooth Animations**: Hover effects and transitions throughout the interface
- **Professional Typography**: Geist Sans and Geist Mono fonts for modern aesthetics

### 🛠️ Technical Excellence
- **Next.js 15** with App Router for optimal performance
- **Static Site Generation**: Configured for GitHub Pages deployment
- **TypeScript**: Full type safety across the codebase
- **Material-UI v7**: Latest component library with Emotion styling
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

### 📱 Portfolio Showcase
- **Multi-Category Portfolio**: Enterprise Solutions, Web Platforms, Desktop Systems
- **Interactive Navigation**: Breadcrumb navigation and intuitive category browsing
- **Project Galleries**: 2-column and 3-column responsive layouts
- **Detailed Case Studies**: Comprehensive project descriptions with technical highlights

## 🗂️ Website Structure

### Main Pages
1. **Home** (`/`) - Professional landing page with core competencies and client success stories
2. **About** (`/about`) - Detailed professional journey, experience across 7 industries
3. **Project Portfolio** (`/project-portfolio`) - Central hub with category overview and featured projects

### Portfolio Categories
- **Enterprise Solutions** - AWS Lambda microservices, government systems, large-scale applications
- **Web Platforms** - Modern web applications, e-commerce solutions, marketing platforms  
- **Desktop Systems** - WPF applications, manufacturing systems, 3D visualization tools

## 🛠️ Technologies Used

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Static type checking

### UI & Styling
- **Material-UI 7.3.2** - Modern React component library
- **Emotion** - CSS-in-JS styling solution
- **Tailwind CSS 4** - Utility-first CSS framework
- **Material Icons** - Consistent iconography

### Development Tools
- **ESLint 9** - Code linting and formatting
- **Turbopack** - Fast development bundler
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Development Server

```bash
# Clone the repository
git clone https://github.com/patcharapon-san/patcharapon-san.github.io.git
cd patcharapon-san.github.io

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run build:turbo  # Build with Turbopack
npm start           # Start production server
npm run lint        # Run ESLint
```

## 📁 Project Structure

```
patcharapon-san.github.io/
├── 📁 public/                          # Static assets
│   ├── 🖼️ *.png, *.jpg                 # Project images and screenshots
│   └── 🖼️ *.svg                        # Icons and logos
├── 📁 src/
│   ├── 📁 app/                         # Next.js App Router pages
│   │   ├── 📄 layout.tsx               # Root layout with navigation
│   │   ├── 📄 globals.css              # Global styles and CSS variables
│   │   ├── 🏠 page.tsx                 # Home page - landing with competencies
│   │   ├── 📁 skills/
│   │   │   └── 📄 page.tsx             # Technical skills, technologies, achievements
│   │   ├── 📁 about/
│   │   │   └── 📄 page.tsx             # Professional journey and experience
│   │   └── 📁 project-portfolio/
│   │       ├── 📄 page.tsx             # Portfolio hub with category overview
│   │       ├── 📁 enterprise-solutions/
│   │       │   └── 📄 page.tsx         # AWS Lambda, Government systems
│   │       ├── 📁 web-platforms/
│   │       │   └── 📄 page.tsx         # E-commerce, Marketing platforms
│   │       └── 📁 desktop-systems/
│   │           └── 📄 page.tsx         # WPF, Manufacturing systems
│   ├── 📁 components/                  # Reusable React components
│   │   ├── 🧭 Navbar.tsx               # Main navigation with responsive design
│   │   ├── 🧭 PortfolioNavigation.tsx  # Portfolio breadcrumb navigation
│   │   ├── 🎯 HeroSection.tsx          # Primary hero component
│   │   ├── 🎯 HeroSection2.tsx         # Alternative hero layout
│   │   ├── 📝 ContentFullWidth.tsx     # Full-width content blocks
│   │   ├── 🖼️ Gallery2xN.tsx           # 2-column responsive gallery
│   │   ├── 🖼️ Gallery3xN.tsx           # 3-column responsive gallery
│   │   ├── 🖼️ LargeImage.tsx           # Optimized image component
│   │   ├── 📞 CallToAction.tsx         # CTA sections with contact forms
│   │   ├── 🎨 ClientThemeProvider.tsx  # Material-UI theme configuration
│   │   └── 🦶 Footer.tsx               # Site footer with links
│   └── 📁 utils/
│       └── 🎨 colors.ts                # Centralized color palette system
├── ⚙️ next.config.ts                   # Next.js configuration for static export
├── ⚙️ package.json                     # Dependencies and scripts
├── ⚙️ tsconfig.json                   # TypeScript configuration
└── 📖 README.md                       # This file
```

## 🎨 Design System

### Color Palette
The project uses a comprehensive color system defined in `src/utils/colors.ts`:
- **Primary**: Blue tones for main branding and CTAs
- **Secondary**: Gray tones for supporting content
- **Accent**: Purple tones for highlights and special elements
- **Semantic**: Success, warning, error, and info colors

### Component Library
- **Galleries**: Responsive project showcases (2x2, 3x3 layouts)
- **Hero Sections**: Multiple variants for different page types
- **Navigation**: Consistent navigation with breadcrumbs for portfolio
- **Content Blocks**: Full-width content sections with image support

## 🚀 Deployment

This project is configured for **GitHub Pages** deployment with static site generation.

### Automatic Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment
```bash
# Build the static site
npm run build

# The build output will be in the 'out' directory
# GitHub Pages will serve from this directory
```

### Configuration
- `next.config.ts` is configured with `output: 'export'` for static generation
- Images are unoptimized for static hosting compatibility
- Trailing slashes are enabled for better static hosting support

## 🏗️ Development Notes

### Key Features Implemented
- ✅ **Static Site Generation**: Optimized for GitHub Pages
- ✅ **Responsive Design**: Mobile-first Material-UI components
- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **SEO Optimization**: Meta tags and Open Graph support
- ✅ **Performance**: Turbopack bundling for fast development
- ✅ **Color System**: Centralized theme management
- ✅ **Component Reusability**: Modular, reusable React components

### Recent Updates
- Fixed hydration issues with GridLegacy components
- Implemented centralized color palette system
- Added comprehensive project portfolio structure
- Optimized for static export and GitHub Pages deployment

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is personal portfolio code. Feel free to reference the structure and techniques, but please don't copy the content directly.

## 📞 Contact

**Patcharapon Sangsatra**
- Portfolio: [patcharapon-san.github.io](https://patcharapon-san.github.io)
- LinkedIn: [Connect with me](https://linkedin.com/in/patcharapon-sangsatra)
- GitHub: [@patcharapon-san](https://github.com/patcharapon-san)

---

*Built with ❤️ using Next.js, React, and Material-UI*
