import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { Arrow, Code, Check, Apple, Windows, Linux } from "./Icons";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { REPO, DMG_MACOS, EXE_WINDOWS, DEB_LINUX, RELEASE } from "../lib/links";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <ParticleField className="opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/14 blur-[160px]" />
        <div className="absolute left-[30%] top-[60%] h-[300px] w-[300px] rounded-full bg-violet/14 blur-[120px]" />
        <div className="absolute right-[28%] top-[20%] h-[280px] w-[280px] rounded-full bg-cyan/12 blur-[120px]" />
      </div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-w relative z-10 flex flex-col items-center text-center"
      >
        <motion.span variants={fadeUp} className="label">Get SuperSearch</motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-3xl text-balance text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-tightest"
        >
          <span className="metal">Intent. Plan.</span>{" "}
          <span className="glow-text">Execute.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-balance text-lg text-soft">
          A native desktop app — no terminal, no cloud, no LLM in the loop. Grab the
          build for your platform, or compile it yourself from source.
        </motion.p>

        {/* per-platform downloads */}
        <motion.div variants={fadeUp} className="mt-9 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { os: "macOS", icon: Apple, href: DMG_MACOS, fmt: ".dmg · universal" },
            { os: "Windows", icon: Windows, href: EXE_WINDOWS, fmt: ".exe · x64" },
            { os: "Linux", icon: Linux, href: DEB_LINUX, fmt: ".deb · x64" },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.os}
                href={p.href}
                download
                className="group glass-strong flex flex-col items-center gap-1.5 rounded-2xl px-4 py-5 text-center transition-all hover:border-white/20 hover:-translate-y-0.5"
              >
                <Icon className="h-7 w-7 text-fg transition-colors group-hover:text-electric-bright" />
                <span className="mt-1 flex items-center gap-1 text-[15px] font-semibold text-fg">
                  {p.os} <Arrow className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </span>
                <span className="font-mono text-[11px] text-faint">{p.fmt}</span>
              </a>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-faint">
          <a href={RELEASE} className="text-soft underline-offset-4 transition-colors hover:text-fg hover:underline">
            All installers &amp; checksums
          </a>
          <span className="opacity-40">·</span>
          <a href={REPO} className="flex items-center gap-1.5 text-soft underline-offset-4 transition-colors hover:text-fg hover:underline">
            <Code className="h-3.5 w-3.5" /> Build from source
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-faint">
          {["Apple Silicon & Intel", "Windows 10/11", "Debian & Ubuntu", "Open source"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-cyan" /> {t}
            </span>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 max-w-md text-balance font-mono text-[12px] leading-relaxed text-faint/80">
          Builds are currently unsigned — macOS: right-click → Open · Windows: “More info” → Run anyway.
        </motion.p>
      </motion.div>
    </section>
  );
}
