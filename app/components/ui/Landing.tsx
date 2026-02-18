"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import Magnetic from "../hooks/Magnetic";

const TITLES = [
  "Front-End Engineer",
  "UI Architect",
  "Systems Engineer",
  "Next.js Developer",
];

function useTypingAnimation(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length === currentWord.length) {
            pauseTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Landing() {
  const typedTitle = useTypingAnimation(TITLES);

  const scrollToContact = () => {
    const el = document.getElementById("Contact");
    if (el) {
      el.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left space-y-6 max-w-4xl order-2 md:order-1"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Amir Matin
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-[#006466] green-glow">
            Jamshidi
          </span>
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center md:justify-start">
          <p className="text-lg md:text-2xl font-medium uppercase tracking-widest text-[#9d00ff] purple-glow">
            {typedTitle}
            <span className="animate-blink ml-0.5 text-[#9d00ff]">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start pt-4">
          <Magnetic>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 bg-[#006466] hover:bg-[#00b4d8] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-[#006466]/30"
            >
              <Download
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Download CV
            </a>
          </Magnetic>

          <Magnetic>
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 border border-white/10 hover:border-emerald-500/50 text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all duration-300"
            >
              Get in Touch
            </button>
          </Magnetic>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="order-1 md:order-2 flex justify-center"
      >
        <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(157,0,255,0.4)] bg-[#010206]">
          <Image
            src="/shinji.png"
            alt="Amir Matin Jamshidi Portrait"
            width={300}
            height={300}
            priority
            fetchPriority="high"
            className="w-48 h-auto md:w-75 object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs uppercase tracking-[0.3em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-emerald-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
