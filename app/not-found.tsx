"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import Magnetic from "./components/hooks/Magnetic";

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[20vw] font-black italic">ERROR 404</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center space-y-8"
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
          <div className="relative bg-[#1b3a4b]/20 border border-emerald-500/30 p-6 rounded-3xl backdrop-blur-sm">
            <AlertTriangle size={48} className="text-emerald-400" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter">
            ROUTE{" "}
            <span className="text-emerald-500 underline decoration-emerald-500/30">
              UNDEFINED
            </span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-mono text-sm leading-relaxed">
            [SYSTEM_LOG]: Requested packet could not be routed to the specified
            directory. The resource may have been moved, deleted, or never
            existed in this architecture.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Magnetic>
            <Link
              href="/"
              className="group flex items-center gap-3 bg-emerald-500 text-dark-bg px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              <Home size={20} />
              Return to Base
            </Link>
          </Magnetic>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20 font-mono text-[10px] text-emerald-500 space-y-1">
        <p>{`> status: 404_NOT_FOUND`}</p>
        <p>{`> client_id: AMIR_MATIN_CORE`}</p>
        <p>{`> tracing: error_stack_trace_v4.0.1`}</p>
      </div>
    </div>
  );
}
