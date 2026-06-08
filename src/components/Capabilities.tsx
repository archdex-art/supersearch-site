import { useRef } from "react";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { Brain, Layers, Compass, Code, Shield, Search } from "./Icons";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const CARDS = [
  {
    icon: Brain,
    title: "Intent-driven runtime",
    body: "Type a sentence. SuperSearch classifies it into a deterministic intent, compiles an execution graph, and runs it — no scripting required.",
    accent: "electric",
    span: "lg:col-span-2",
  },
  {
    icon: Layers,
    title: "Replayable task graphs",
    body: "Every query becomes an inspectable DAG of OS operations. No black-box agent loops.",
    accent: "cyan",
    span: "",
  },
  {
    icon: Compass,
    title: "App command injection",
    body: "/chatgpt, /brave, /notes — inject keystrokes into any app, waking it if it's closed.",
    accent: "violet",
    span: "",
  },
  {
    icon: Code,
    title: "Instant terminal hooks",
    body: "$ cargo build or /terminal python3 server.py pipes straight into a live shell session.",
    accent: "cyan",
    span: "lg:col-span-2",
  },
  {
    icon: Search,
    title: "Unified fuzzy search",
    body: "Apps, Spotlight files, and system toggles in one blazing-fast local index.",
    accent: "electric",
    span: "",
  },
  {
    icon: Shield,
    title: "Capability-gated",
    body: "Every action checks a revocable token before it touches the OS — argv spawns, never sh -c. Local-first, fully auditable.",
    accent: "crimson",
    span: "lg:col-span-2",
  },
];

const ACCENT: Record<string, { text: string; glow: string; border: string }> = {
  electric: { text: "text-electric-bright", glow: "bg-electric/20", border: "group-hover:border-electric/40" },
  cyan: { text: "text-cyan", glow: "bg-cyan/20", border: "group-hover:border-cyan/40" },
  violet: { text: "text-violet-bright", glow: "bg-violet/20", border: "group-hover:border-violet/40" },
  crimson: { text: "text-crimson-bright", glow: "bg-crimson/20", border: "group-hover:border-crimson/40" },
};

function Card({ c }: { c: (typeof CARDS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const a = ACCENT[c.accent];
  const Icon = c.icon;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div variants={fadeUp} className={c.span}>
      <div
        ref={ref}
        onMouseMove={onMove}
        className={`group glass relative h-full overflow-hidden rounded-2xl p-6 transition-colors duration-300 ${a.border}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(280px circle at var(--mx) var(--my), rgba(255,255,255,0.07), transparent 60%)",
          }}
        />
        <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl ${a.glow} opacity-60`} />
        <div className="relative">
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${a.text}`}>
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{c.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-soft">{c.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28">
      <div className="container-w">
        <SectionHead
          kicker="Capabilities"
          title={<>A launcher that <span className="glow-text">executes</span>, not just searches</>}
          sub="Six primitives that turn a search box into an operating layer for your whole Mac."
        />

        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((c) => (
            <Card key={c.title} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
