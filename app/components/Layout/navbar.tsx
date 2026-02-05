"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollSpy } from "../hooks/userScrollSpy";
import { Menu } from "lucide-react";
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

  const handleScroll = (id: string) => {
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
  };

  return (
    <header className="fixed inset-x-4 top-6 z-50 mx-auto max-w-5xl">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#1b3a4b]/80 px-6 py-3 backdrop-blur-md shadow-2xl">
        <button
          onClick={() => handleScroll("Home")}
          className="transition-opacity hover:opacity-80"
        >
          <Image
            src="/batman-icon.jpg"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="rounded-full border-2 border-[#006466]"
          />
        </button>

        <div className="hidden gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
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
          className="text-white md:hidden"
        >
          <Menu stroke="white" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#1b3a4b] p-4 shadow-xl md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="rounded-lg px-4 py-3 text-left text-slate-200 hover:bg-[#006466]"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
