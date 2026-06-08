import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { Arrow, Code, Check } from "./Icons";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { REPO, DMG_MACOS, RELEASE } from "../lib/links";

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
          A native macOS app — no terminal, no cloud, no LLM in the loop. Download the
          build, or compile it yourself from source.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={DMG_MACOS} download className="btn-primary">
            Download for macOS <Arrow className="h-4 w-4" />
          </a>
          <a href={REPO} className="btn-ghost">
            <Code className="h-4 w-4" /> View source
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-4 text-[13px] text-faint">
          Universal .dmg ·{" "}
          <a href={RELEASE} className="text-soft underline-offset-4 transition-colors hover:text-fg hover:underline">
            Linux &amp; Windows builds
          </a>
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-faint">
          {["Apple Silicon & Intel", "macOS 13 Ventura+", "Open source"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-cyan" /> {t}
            </span>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 max-w-md text-balance font-mono text-[12px] leading-relaxed text-faint/80">
          Builds are currently unsigned — on first launch, right-click the app → Open → Open.
        </motion.p>
      </motion.div>
    </section>
  );
}
