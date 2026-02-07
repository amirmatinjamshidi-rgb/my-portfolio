/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Github, Linkedin, ArrowUp, Copy, Instagram } from "lucide-react";
import { toast } from "react-toastify";

export default function Footer() {
  const phoneNumber: string = "+98 912 074 2295";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Copied to clipboard!", {
        icon: <Copy size={16} className="text-emerald-500" />,
        toastId: "copy-phone",
      });
    } catch (err) {
      toast.error("Failed to copy.");
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 bg-dark-bg py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Section */}
        <div className="space-y-2 text-center md:text-left">
          <p className="text-white font-black italic tracking-tighter text-xl">
            AMIR<span className="text-emerald-500">MATIN</span>
          </p>

          <button
            onClick={copyToClipboard}
            className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-xs tracking-widest uppercase focus:outline-none"
          >
            call me {phoneNumber}
            <Copy
              size={12}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
            />
          </button>
        </div>

        <div className="flex gap-6">
          <SocialLink
            label="github"
            href="http://github.com/amirmatinjamshidi-rgb/"
            Icon={Github}
          />
          <SocialLink
            label="linkedin"
            href="https://www.linkedin.com/in/matin-jamshidy"
            Icon={Linkedin}
          />
          <SocialLink label="instagram" href="#" Icon={Instagram} />
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          Back to top
          <ArrowUp
            size={16}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-emerald-500 transition-colors p-2 bg-white/5 rounded-xl border border-white/5"
    >
      <Icon size={20} />
    </a>
  );
}
