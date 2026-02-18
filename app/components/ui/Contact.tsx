"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "react-toastify";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message transmitted successfully.", {
        icon: <CheckCircle2 size={16} className="text-emerald-500" />,
      });
      reset();
    } catch (err) {
      const axiosError = err as AxiosError<{ error: string }>;
      toast.error(
        axiosError.response?.data?.error || "Connection failed. Try again.",
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start py-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:w-1/3 space-y-6"
      >
        <h2 className="text-5xl font-black text-white tracking-tighter italic">
          Let&apos;s{" "}
          <span className="text-purple-500 purple-glow">Connect</span>
        </h2>
        <p className="text-slate-400 leading-relaxed text-lg">
          Building high-performance systems requires a bridge between ideas and
          execution. Reach out to start the process.
        </p>

        <div className="space-y-6 pt-6 border-l-2 border-[#4d194d] pl-6">
          <ContactDetail Icon={Mail} label="amirmatinjamshidi@gmail.com" />
          <ContactDetail Icon={MapPin} label="Tehran, Iran" />
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 w-full space-y-5 bg-[#1b3a4b]/20 p-8 md:p-12 rounded-4xl border border-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className={`bg-dark-bg/50 border ${errors.name ? "border-pink-500" : "border-white/10"} p-4 rounded-2xl outline-none focus:border-[#006466] text-white w-full transition-all`}
            />
            <ErrorMessage message={errors.name?.message} />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/i,
                  message: "Invalid email",
                },
              })}
              placeholder="Email Address"
              className={`bg-dark-bg/50 border ${errors.email ? "border-pink-500" : "border-white/10"} p-4 rounded-2xl outline-none focus:border-[#006466] text-white w-full transition-all`}
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">
            Project details
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            placeholder="Project details..."
            rows={5}
            className={`bg-dark-bg/50 border ${errors.message ? "border-pink-500" : "border-white/10"} p-4 rounded-2xl outline-none focus:border-[#006466] text-white w-full resize-none transition-all`}
          />
          <ErrorMessage message={errors.message?.message} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message" : "Send message"}
          className="relative w-full py-5 bg-[#006466] hover:bg-[#00b4d8] text-white font-black rounded-2xl transition-all disabled:opacity-50 uppercase tracking-widest text-sm shadow-lg shadow-[#006466]/20 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {isSubmitting ? "Transmitting..." : "Send Message"}
        </button>
      </motion.form>
    </div>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          role="alert"
          className="text-pink-400 text-xs font-bold pl-2"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function ContactDetail({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-4 text-slate-300 group">
      <div className="w-12 h-12 rounded-2xl bg-[#006466]/20 flex items-center justify-center text-[#006466] group-hover:bg-[#006466] group-hover:text-white transition-all border border-[#006466]/20">
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
