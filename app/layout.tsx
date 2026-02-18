import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/hooks/CustomCursor";
import Footer from "./components/Layout/Footer";
import PageLoader from "./components/ui/PageLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://my-portfolio-azure-xi.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: "Amir Matin | UI Architect & Systems Engineer",
    template: "%s | Amir Matin",
  },
  description:
    "Portfolio of Amir Matin Jamshidi — a high-performance front-end engineer specializing in Next.js, React, and modern web systems.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Front-End Engineer",
    "UI Architect",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Amir Matin Jamshidi",
  ],
  authors: [{ name: "Amir Matin Jamshidi" }],
  creator: "Amir Matin Jamshidi",
  openGraph: {
    title: "Amir Matin Jamshidi — Front-End Engineer & UI Architect",
    description:
      "Building high-performance, scalable web applications with Next.js and modern stacks.",
    url: SITE_URL,
    siteName: "Amir Matin Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amir Matin Jamshidi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Matin Jamshidi — Front-End Engineer & UI Architect",
    description:
      "Building high-performance, scalable web applications with Next.js and modern stacks.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-slate-200 antialiased selection:bg-emerald-500/30`}
      >
        <PageLoader />
        <CustomCursor />

        <main className="relative z-10 min-h-screen">{children}</main>

        <Footer />
        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastStyle={{
            backgroundColor: "#010206",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            color: "#fff",
          }}
        />
      </body>
    </html>
  );
}
