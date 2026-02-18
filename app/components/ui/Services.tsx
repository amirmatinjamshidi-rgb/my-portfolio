"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Layout, Layers } from "lucide-react";

const myServices = [
  {
    id: 1,
    name: "Web Development",
    icon: Code2,
    desc: "Building high-performance, scalable web applications with Next.js and modern stacks.",
  },
  {
    id: 2,
    name: "Design Patterns",
    icon: Cpu,
    desc: "Designing scalable design patterns to create the best user experience.",
  },
  {
    id: 3,
    name: "UI/UX Co-operation",
    icon: Layout,
    desc: "Co-operation with UI/UX designers to create the best pixel perfect user experience.",
  },
  {
    id: 4,
    name: "Architecture",
    icon: Layers,
    desc: "Designing reliable system architectures bridging frontend and backend seamlessly.",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
      {myServices.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          className="group p-8 rounded-4xl bg-linear-to-b from-white/3 to-transparent border border-white/5 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
        >
          <div className="mb-6 bg-emerald-500/10 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-[#010206] transition-all duration-300">
            <service.icon size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
            {service.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
