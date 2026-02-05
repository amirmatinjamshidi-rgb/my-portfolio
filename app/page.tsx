/* eslint-disable @typescript-eslint/no-unused-vars */
/** @format */
import Image from "next/image";
import Navbar from "./components/Layout/navbar";
import TechStack from "./components/ui/about";
import Projects from "./components/ui/projects";
import Services from "./components/ui/services";
import Contact from "./components/ui/contact";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#010206]">
        <Navbar />

        <main>
          <section
            id="Home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 gap-12"
          >
            <div className="text-center md:text-left space-y-6 max-w-4xl order-2 md:order-1">
              <h1 className="hero-text text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
                Amir Matin
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-[#006466] green-glow">
                  Jamshidi
                </span>
              </h1>
              <p className="hero-text text-lg md:text-2xl font-medium uppercase tracking-widest text-[#9d00ff] purple-glow">
                Front-End Engineer & UI Architect
              </p>
            </div>

            <div className="hero-text order-1 md:order-2 flex justify-center">
              <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(157,0,255,0.4)]">
                <Image
                  src="/shinji.png"
                  alt="pfp"
                  width={300}
                  height={300}
                  priority
                  fetchPriority="high"
                  loading="eager"
                  className="w-48 h-48 md:w-75 md:h-75 object-cover "
                />
              </div>
            </div>
          </section>

          <section id="About" className="reveal-section py-32 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
              <h2 className="text-center text-3xl md:text-6xl font-black uppercase italic">
                Tech <span className="text-[#006466]">Environment</span>
              </h2>
              <TechStack />
            </div>
          </section>

          <section id="Projects" className="reveal-section py-32 px-6">
            <div className="max-w-6xl mx-auto space-y-16 text-center">
              <h2 className="text-3xl md:text-6xl font-black uppercase">
                Selected Works
              </h2>
              <Projects />
            </div>
          </section>

          <section id="Services" className="reveal-section py-32 px-6">
            <div className="max-w-6xl mx-auto space-y-16 text-center">
              <h2 className="text-3xl md:text-6xl font-black uppercase">
                Capabilities
              </h2>
              <Services />
            </div>
          </section>

          <section id="Contact" className="reveal-section py-32 px-6">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
