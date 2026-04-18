import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | SDE",
  description: "Full-stack developer portfolio showcasing projects and expertise",
  keywords: "portfolio, software engineer, developer, projects",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | SDE",
    description: "Full-stack developer portfolio showcasing projects and expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}
