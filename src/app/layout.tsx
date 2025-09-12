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
  { label: "Project Portfolio", href: "/project-portfolio" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: "Professional Web Development & Digital Solutions",
  description: "MyAgency provides top-notch web development services including enterprise solutions, web platforms, and desktop systems. Explore our portfolio of successful projects.",
  openGraph: {
    title: "Professional Web Development & Digital Solutions",
    description: "Provides top-notch web development services including enterprise solutions, web platforms, and desktop systems. Explore our portfolio of successful projects.",
    type: "website",
    url: "https://your-domain.com/",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development & Digital Solutions",
    description: "Provides top-notch web development services including enterprise solutions, web platforms, and desktop systems. Explore our portfolio of successful projects.",
    images: ["https://your-domain.com/og-image.png"],
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
