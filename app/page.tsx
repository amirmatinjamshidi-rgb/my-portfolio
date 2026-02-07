import Navbar from "./components/Layout/navbar";
import Landing from "./components/ui/Landing";
import TechStack from "./components/ui/about";
import Projects from "./components/ui/projects";
import Services from "./components/ui/services";
import Contact from "./components/ui/contact";
// import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden ">
      <Navbar />

      <main>
        <Landing />

        <section id="About" className="py-32 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="text-center text-3xl md:text-6xl font-black uppercase italic">
              Tech <span className="text-[#006466]">Environment</span>
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="Projects" className="py-32 px-6">
          <div className="max-w-6xl mx-auto space-y-16 text-center">
            <h2 className="text-3xl md:text-6xl font-black uppercase">
              Selected Works
            </h2>
            <Projects />
          </div>
        </section>

        <section id="Services" className="py-32 px-6">
          <div className="max-w-6xl mx-auto space-y-16 text-center">
            <h2 className="text-3xl md:text-6xl font-black uppercase">
              Capabilities
            </h2>
            <Services />
          </div>
        </section>

        <section id="Contact" className="py-32 px-6">
          <Contact />
        </section>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
