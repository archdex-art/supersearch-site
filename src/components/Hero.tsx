import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ParticleField from "./ParticleField";
import { Search, Spark, Compass, Code, Check, Arrow } from "./Icons";
import { fadeUp, stagger } from "../lib/motion";
import { DMG_MACOS } from "../lib/links";

const PHRASES = [
  "open brave in incognito and search rust",
  "launch spotify and play imagine dragons",
  "/chatgpt draft an email to my team",
  "$ cargo build --release",
];

export default function Hero({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [typed, setTyped] = useState("");
  const [phrase, setPhrase] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(PHRASES[0]);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const cur = PHRASES[phrase];
    const tick = () => {
      i++;
      setTyped(cur.slice(0, i));
      if (i < cur.length) {
        timer = setTimeout(tick, 42 + Math.random() * 40);
      } else {
        timer = setTimeout(() => setPhrase((p) => (p + 1) % PHRASES.length), 2600);
      }
    };
    setTyped("");
    timer = setTimeout(tick, 320);
    return () => clearTimeout(timer);
  }, [phrase]);

  // parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["38%", "62%"]);
  const cardA = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const cardB = useTransform(sx, [-0.5, 0.5], [-26, 26]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-32">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines grid-fade" />
        <ParticleField className="opacity-70" />
        <motion.div
          style={{ left: glowX }}
          className="absolute top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]"
        />
        <div className="absolute right-[8%] top-[40%] h-[360px] w-[360px] rounded-full bg-cyan/12 blur-[110px]" />
        <div className="absolute left-[6%] top-[55%] h-[340px] w-[340px] rounded-full bg-violet/14 blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      </div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="container-w relative z-10 flex flex-col items-center text-center"
      >
        <motion.button
          variants={fadeUp}
          onClick={onOpenPalette}
          className="group mb-7 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm text-soft backdrop-blur transition-colors hover:border-white/20 hover:text-fg"
        >
          <span className="flex h-6 items-center gap-1 rounded-full bg-white/[0.06] px-2 font-mono text-[11px] text-electric-bright">
            <Spark className="h-3 w-3" /> macOS
          </span>
          The intent-driven runtime for your Mac
          <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.button>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-balance text-[clamp(2.7rem,8vw,6.2rem)] font-semibold leading-[0.95] tracking-tightest"
        >
          <span className="metal">Search beyond</span>
          <br />
          <span className="glow-text">keywords.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-soft"
        >
          SuperSearch turns plain language into a deterministic, replayable task graph —
          then drives your Mac to run it. One palette for apps, files, the terminal, and AI.
        </motion.p>

        {/* command bar */}
        <motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl" style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <button
              onClick={onOpenPalette}
              className="glass-strong group flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all hover:border-white/20"
            >
              <Search className="h-5 w-5 shrink-0 text-electric-bright" />
              <span className="flex-1 truncate font-mono text-[15px] text-fg/90">
                {typed}
                <span className="ml-0.5 inline-block h-[1.05em] w-[2px] -translate-y-[1px] bg-cyan align-middle animate-blink" />
              </span>
              <span className="hidden items-center gap-1 sm:flex">
                <span className="kbd">⌥</span>
                <span className="kbd">Space</span>
              </span>
            </button>

            {/* floating task-graph cards in depth */}
            <motion.div
              style={{ x: cardA }}
              className="absolute -right-48 -top-1 hidden w-52 xl:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <ResultCard
                icon={<Compass className="h-3.5 w-3.5" />}
                tag="intent · parsed"
                title="launch + play · Spotify"
                body="Mapped to a 2-node task graph locally."
                accent="cyan"
              />
            </motion.div>
            <motion.div
              style={{ x: cardB }}
              className="absolute -left-48 top-0 hidden w-52 xl:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <ResultCard
                icon={<Code className="h-3.5 w-3.5" />}
                tag="executed · 198ms"
                title="open → osascript → keystroke"
                body="argv spawns, no shell. 0 errors."
                accent="violet"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={DMG_MACOS} download className="btn-primary">Download for macOS <Arrow className="h-4 w-4" /></a>
          <a href="#thinks" className="btn-ghost">See how it works</a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-faint">
          {["100% local", "Rule-based — no LLM", "Capability-gated", "⌥Space anywhere"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-cyan" /> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ResultCard({
  icon,
  tag,
  title,
  body,
  accent,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  body: string;
  accent: "cyan" | "violet";
}) {
  const ring = accent === "cyan" ? "text-cyan" : "text-violet-bright";
  const glow = accent === "cyan" ? "bg-cyan/15" : "bg-violet/15";
  return (
    <div className="glass relative overflow-hidden rounded-xl p-3.5 text-left shadow-2xl">
      <div className={`absolute -right-6 -top-6 h-16 w-16 rounded-full blur-2xl ${glow}`} />
      <div className="relative flex items-center gap-2">
        <span className={`flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] ${ring}`}>
          {icon}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{tag}</span>
      </div>
      <div className="relative mt-2.5 text-[13px] font-medium leading-snug text-fg">{title}</div>
      <div className="relative mt-1 text-[12px] leading-snug text-soft">{body}</div>
    </div>
  );
}
