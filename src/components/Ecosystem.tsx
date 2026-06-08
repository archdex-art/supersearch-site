import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { Search, Doc, Code, Globe, Brain, Image, Plug, Layers } from "./Icons";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../lib/motion";

const NODES = [
  { icon: Image, label: "macOS Apps", sub: "launch · activate" },
  { icon: Doc, label: "Spotlight", sub: "mdfind files" },
  { icon: Code, label: "Terminal", sub: "$ live shell" },
  { icon: Plug, label: "AppleScript", sub: "osascript events" },
  { icon: Brain, label: "ChatGPT", sub: "/chatgpt inject" },
  { icon: Globe, label: "Browser", sub: "/brave open" },
  { icon: Layers, label: "Extensions", sub: "script · wasm" },
];

// Evenly distribute nodes around the circle, starting at the top (-90°).
const STEP = 360 / NODES.length;

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-28">
      <div className="container-w relative">
        <SectionHead
          kicker="Surface area"
          title={<>One palette for your <span className="glow-text">whole Mac</span></>}
          sub="SuperSearch sits between you and macOS — every app, file, shell, and AppleScript hook reachable from a single line, plus capability-gated extensions."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* orbital diagram */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[460px]"
          >
            {/* concentric rings — the orbit ring (inset 9% → radius 41%) is exactly
                where the nodes sit, so the icons read as a perfect circle */}
            <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
            <div className="absolute rounded-full border border-white/[0.13]" style={{ inset: "9%" }} />
            <div className="absolute rounded-full border border-white/[0.06]" style={{ inset: "23%" }} />
            <div className="absolute rounded-full border border-white/[0.05]" style={{ inset: "36%" }} />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            >
              {NODES.map((n, i) => {
                const Icon = n.icon;
                const rad = ((STEP * i - 90) * Math.PI) / 180;
                const r = 41;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <motion.div
                    key={n.label}
                    className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl glass"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon className="h-5 w-5 text-soft" />
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-electric/30 blur-2xl animate-pulseGlow" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-ink-700 to-ink-900 shadow-2xl">
                <Search className="h-7 w-7 text-electric-bright" />
              </span>
            </div>
          </motion.div>

          {/* surface list */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-3"
          >
            {NODES.map((n) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.label}
                  variants={fadeUp}
                  className="group glass flex items-center gap-3 rounded-xl p-3.5 transition-colors hover:border-white/20"
                  data-hover
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-soft transition-colors group-hover:text-cyan">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-fg">{n.label}</div>
                    <div className="truncate font-mono text-[10px] uppercase tracking-wider text-faint">{n.sub}</div>
                  </div>
                </motion.div>
              );
            })}
            <motion.div variants={fadeUp} className="flex items-center justify-center rounded-xl border border-dashed border-white/15 p-3.5 text-sm text-faint">
              + your own
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
