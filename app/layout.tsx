import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/hooks/customCursor";
import Footer from "./components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amir Matin | UI Architect & Systems Engineer",
  description: "Portfolio of a high-performance system developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className}  text-slate-200 antialiased selection:bg-emerald-500/30`}
      >
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
