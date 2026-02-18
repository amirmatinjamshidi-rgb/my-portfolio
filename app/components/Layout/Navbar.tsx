"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useScrollSpy } from "../hooks/UseScrollSpy";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Projects", id: "Projects" },
  { name: "Services", id: "Services" },
  { name: "Contact", id: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((i) => i.id));
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-4 top-6 z-50 mx-auto max-w-5xl" ref={menuRef}>
      <nav
        className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#1b3a4b]/80 px-6 py-3 backdrop-blur-md shadow-2xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          onClick={() => handleScroll("Home")}
          aria-label="Scroll to top"
          className="transition-opacity hover:opacity-80"
        >
          <Image
            src="/batman-icon.jpg"
            alt="Amir Matin Logo"
            width={40}
            height={40}
            priority
            className="rounded-full border-2 border-[#006466]"
          />
        </button>

        <div className="hidden gap-1 md:flex" role="menubar">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              role="menuitem"
              onClick={() => handleScroll(item.id)}
              aria-label={`Navigate to ${item.name}`}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-[#006466] text-white shadow-lg shadow-[#006466]/40"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="text-white md:hidden p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X stroke="white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu stroke="white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#1b3a4b]/95 backdrop-blur-lg p-3 shadow-xl md:hidden"
            role="menu"
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                role="menuitem"
                onClick={() => handleScroll(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#006466] text-white"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
