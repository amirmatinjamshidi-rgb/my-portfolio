"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  color: string;
  look?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Shop Now",
    desc: "A training E-commerce shop with real products, payment system, and Firebase authentication.",
    tech: ["React", "JavaScript", "Tailwind"],
    link: "#",
    github: "#",
    image: "/Shopnow.png",
    color: "group-hover:shadow-[#006466]/40",
  },
  {
    id: 2,
    title: "Concepto",
    desc: "A professional platform to search companies and access detailed corporate intelligence.",
    tech: ["React", "Redux", "SCSS"],
    link: "#",
    github: "#",
    image: "/Thumbnail.jpg",
    color: "group-hover:shadow-[#4d194d]/40",
  },
  {
    id: 3,
    title: "Hotel Mojan",
    desc: "Full-stack hospitality solution in Chabahar with a focus on responsive UX and performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React hook forms",
      "zod / resolvers",
      "lottiefiles",
      "Material UI",
      "leaflet",
      "lucide-react",
    ],
    link: "#",
    github: "#",
    image: "/Hotel.png",
    color: "group-hover:shadow-[#0b525b]/40",
  },
  {
    id: 4,
    title: "Mojan Admin",
    desc: "Enterprise-grade dashboard with a perfect 100 Lighthouse score for internal management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React hook forms",
      "zod / resolvers",
      "lottiefiles",
      "Material UI",
      "lucide-react",
    ],
    link: "#",
    github: "#",
    image: "/Admin.png",
    color: "group-hover:shadow-[#0b525b]/40",
  },
  {
    id: 5,
    title: "Portfolio++",
    desc: "Strong portfolio page with 3d animations and hand scroll with real time loading and hand lock.",
    tech: [
      "Next.js",
      "TypeScript",
      "3js",
      "GSAP",
      "motion",
      "Material UI",
      "tailwind",
      "resend",
      "Mediapipe",
      "axios",
    ],
    link: "https://amirmatinjamshidi.vercel.app",
    github: "https://github.com/amirmatinjamshidi-rgb/profile",
    image: "/portfolioPro.png",
    color: "group-hover:shadow-[#0b525b]/40",
  },
  {
    id: 6,
    title: "Portfolio",
    look: "(You're here btw)",
    desc: "Simple portfolio with all 100 lighthouse score, also provided with custom effects.",
    tech: [
      "Next.js",
      "TypeScript",
      "motion",
      "tailwind",
      "resend",
      "axios",
      "lucide-react",
    ],
    link: "#",
    github: "https://github.com/amirmatinjamshidi-rgb/my-profile",
    image: "/portfolio.png",
    color: "group-hover:shadow-[#0b525b]/40",
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 w-full overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg/40 z-10 group-hover:bg-transparent transition-colors duration-500" />

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1b3a4b]/30 animate-pulse z-[5]">
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
          </div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transform group-hover:scale-105 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

function ProjectLink({
  href,
  children,
  label,
  className,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  className: string;
}) {
  const isExternal = href !== "#" && href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`group relative rounded-[2.5rem] bg-[#1b3a4b]/10 border border-white/5 overflow-hidden hover:bg-[#1b3a4b]/20 transition-all duration-500 shadow-2xl ${project.color}`}
        >
          <ProjectImage src={project.image} alt={project.title} />

          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black text-white tracking-tighter italic">
                {project.title}
              </h3>
              <div className="flex gap-4">
                <ProjectLink
                  href={project.github}
                  label={`${project.title} GitHub repository`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </ProjectLink>
                <ProjectLink
                  href={project.link}
                  label={`${project.title} live demo`}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </ProjectLink>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed min-h-12">
              {project.desc}{" "}
              {project.look && (
                <code className="text-emerald-400 animate-pulse">
                  {project.look}
                </code>
              )}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
