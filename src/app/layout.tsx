import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from '../components/ClientThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteName = "Patcharapon Sangsatra Portfolio";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills & Technologies", href: "/skills" },
  { label: "Project Portfolio", href: "/project-portfolio" },
  { label: "Showcase", href: "/showcase" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: "Patcharapon Sangsatra - Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in web development, enterprise solutions, and modern technologies. Explore projects in React, Next.js, .NET, and more.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", ".NET Developer", "Web Development", "Portfolio", "Patcharapon Sangsatra"],
  authors: [{ name: "Patcharapon Sangsatra" }],
  creator: "Patcharapon Sangsatra",
  publisher: "Patcharapon Sangsatra",
  openGraph: {
    title: "Patcharapon Sangsatra - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in web development, enterprise solutions, and modern technologies. View my portfolio of successful projects and technical expertise.",
    type: "website",
    url: "https://patcharapon-san.github.io/",
    siteName: "Patcharapon Sangsatra Portfolio",
    images: [
      {
        url: "https://patcharapon-san.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patcharapon Sangsatra - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patcharapon Sangsatra - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in web development, enterprise solutions, and modern technologies. View my portfolio and technical expertise.",
    images: ["https://patcharapon-san.github.io/og-image.jpg"],
    creator: "@patcharapon_san",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientThemeProvider>
          <Navbar title={websiteName} navLinks={navLinks} />
          {children}
          <Footer title={websiteName} />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
