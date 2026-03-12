import { createElement, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ThemeTone = {
  id: string;
  name: string;
  glow: string;
  wash: string;
};

const tones: ThemeTone[] = [
  { id: "sunset", name: "Sunset", glow: "rgba(255, 106, 87, 0.35)", wash: "rgba(255, 159, 127, 0.2)" },
  { id: "volt", name: "Volt", glow: "rgba(183, 255, 101, 0.32)", wash: "rgba(216, 255, 153, 0.18)" },
  { id: "ice", name: "Ice", glow: "rgba(89, 210, 255, 0.34)", wash: "rgba(155, 231, 255, 0.16)" },
];

export default function Hero() {
  const [activeTone, setActiveTone] = useState(tones[0]);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const scriptId = "spline-viewer-loader";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <motion.div
        className="absolute inset-x-0 top-[-10%] h-[32rem] blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.42, 0.76, 0.42], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: `radial-gradient(circle at center, ${activeTone.glow} 0%, transparent 65%)` }}
      />
      <motion.div
        className="absolute right-[-10%] top-[18%] h-80 w-80 rounded-full blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.14, 0.3, 0.14], scale: [1, 1.16, 1] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: activeTone.wash }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#050816_0%,#09101d_100%)]" />

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 22 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase leading-none tracking-[0.4em] text-white/95">Kixy</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/70 sm:text-lg">
            Live model interaction with a clean storefront layout and tone switching for the hero atmosphere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#shop" className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-white/90">
              Shop Now
            </a>
            <a href="#tone" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/45">
              Change Tone
              </a>
          </div>

          <div id="tone" className="mt-9 flex items-center gap-4">
            {tones.map((tone) => {
              const isActive = tone.id === activeTone.id;
              return (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => setActiveTone(tone)}
                  aria-label={`Switch to ${tone.name}`}
                  className={`h-10 w-10 rounded-full border transition ${isActive ? "scale-110 border-white/80" : "border-white/25"}`}
                  style={{ background: `radial-gradient(circle at 30% 30%, #fff, ${tone.glow})` }}
                />
              );
            })}
            <span className="text-sm uppercase tracking-[0.22em] text-white/70">{activeTone.name}</span>
          </div>
        </motion.div>

        <motion.div
          id="shop"
          className="relative h-[26rem] w-full overflow-hidden lg:h-[42rem]"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 rounded-3xl bg-white/[0.03]" />
          {/* Load Spline through its web component to keep the build lightweight in Vite. */}
          {createElement("spline-viewer", {
            url: "https://prod.spline.design/DhYCPDMuJrtQ6cfb/scene.splinecode",
            className: "h-full w-full",
          })}
        </motion.div>
      </section>
    </main>
  );
}
