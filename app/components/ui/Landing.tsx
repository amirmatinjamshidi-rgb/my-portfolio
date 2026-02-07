import Image from "next/image";

export default function Landing() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 gap-12"
    >
      <div className="text-center md:text-left space-y-6 max-w-4xl order-2 md:order-1">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Amir Matin
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-[#006466] green-glow">
            Jamshidi
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-medium uppercase tracking-widest text-[#9d00ff] purple-glow">
          Front-End Engineer & UI Architect
        </p>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
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
      </div>
    </section>
  );
}
