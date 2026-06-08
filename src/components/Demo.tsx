import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SVGProps } from "react";
import SectionHead from "./SectionHead";
import { Search, Compass, Code, Brain, Bolt, Globe, Doc, Spark, Layers } from "./Icons";
import { scaleIn, viewportOnce } from "../lib/motion";

/* ------------------------------------------------------------------ *
 * A faithful replica of the real SuperSearch palette (ui/index.html):
 * 56px rounded search pill + "⌥ Space" badge, telemetry strip,
 * Spotlight-style title-only rows with a selected-row action hint,
 * composer toolbar (Deep search / Search + green submit), shortcut bar.
 * Tokens mirror ui/styles/main.css.
 * ------------------------------------------------------------------ */

// design tokens from the app
const GLASS =
  "bg-[hsla(225,18%,14%,0.72)] backdrop-blur-[40px] backdrop-saturate-[1.8] border border-[hsla(225,15%,30%,0.35)] shadow-[0_25px_60px_-12px_hsla(0,0%,0%,0.6)]";
const T_PRIMARY = "text-[hsl(0,0%,93%)]";
const T_SECONDARY = "text-[hsl(225,10%,62%)]";
const T_TERTIARY = "text-[hsl(225,10%,42%)]";

type Row = { icon: typeof Search; title: string };
type Mode = {
  id: string;
  label: string;
  tab: typeof Search;
  query: string;
  rows: Row[];
};

const MODES: Mode[] = [
  {
    id: "intent",
    label: "Intent",
    tab: Compass,
    query: "open brave in incognito and search rust",
    rows: [
      { icon: Globe, title: "Open Brave · Incognito → “rust”" },
      { icon: Compass, title: "Plan task graph · 3 nodes" },
      { icon: Bolt, title: "Run via Apple Events" },
    ],
  },
  {
    id: "app",
    label: "/ App",
    tab: Brain,
    query: "/chatgpt summarize this file",
    rows: [
      { icon: Brain, title: "ChatGPT — inject prompt" },
      { icon: Doc, title: "Use last file as context" },
      { icon: Spark, title: "Activate app if it’s closed" },
    ],
  },
  {
    id: "term",
    label: "$ Terminal",
    tab: Code,
    query: "$ cargo build --release",
    rows: [
      { icon: Code, title: "Terminal — cargo build --release" },
      { icon: Bolt, title: "Open a live session" },
      { icon: Layers, title: "Stream stdout in place" },
    ],
  },
];

// composer-toolbar icons not in the shared set
const Attach = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21.44 11.05l-9.19 9.19a5 5 0 0 1-7.07-7.07l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);
const Voice = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...p}>
    <path d="M5 11v2M9 7v10M13 4v16M17 8v8M21 11v2" />
  </svg>
);
const SubmitArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const TELEMETRY = [
  { dot: "bg-[hsl(145,70%,50%)]", label: "Scheduler", value: "128 ticks" },
  { dot: "bg-[hsl(220,85%,60%)]", label: "Capabilities", value: "1 active" },
  { dot: "bg-[hsl(258,80%,65%)]", label: "Uptime", value: "4m 12s" },
  { dot: "bg-[hsl(185,75%,55%)]", label: "Boot", value: "180ms" },
];

const SHORTCUTS = [
  { key: "↑↓", label: "Navigate" },
  { key: "↵", label: "Execute" },
  { key: "⌘↵", label: "Reveal" },
  { key: "Tab", label: "Preview" },
  { key: "Esc", label: "Close" },
];

export default function Demo() {
  const [tab, setTab] = useState(0);
  const active = MODES[tab];

  return (
    <section className="relative py-28">
      <div className="container-w">
        <SectionHead
          kicker="The real interface"
          title={<>This is the <span className="glow-text">actual palette</span></>}
          sub="Pixel-for-pixel the SuperSearch window — search pill, Spotlight results, composer, and shortcuts. Switch the prefix to see each execution path."
        />

        {/* mode switcher */}
        <div className="mt-12 flex justify-center gap-2">
          {MODES.map((m, i) => {
            const Icon = m.tab;
            return (
              <button
                key={m.id}
                onClick={() => setTab(i)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                  i === tab
                    ? "border-electric/40 bg-electric/10 text-fg"
                    : "border-white/10 bg-white/[0.02] text-soft hover:text-fg"
                }`}
              >
                <Icon className="h-4 w-4" /> {m.label}
              </button>
            );
          })}
        </div>

        {/* the app window */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-10 w-full max-w-[620px]"
        >
          {/* search pill */}
          <div className={`flex h-14 items-center gap-3 rounded-[28px] px-5 ${GLASS}`}>
            <Search className={`h-5 w-5 shrink-0 text-[hsl(185,75%,55%)]`} />
            <AnimatePresence mode="wait">
              <motion.span
                key={active.query}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className={`flex-1 truncate text-[17px] font-light tracking-[-0.01em] ${T_PRIMARY}`}
              >
                {active.query}
                <span className="ml-0.5 inline-block h-[1.05em] w-[2px] -translate-y-[1px] bg-[hsl(185,75%,55%)] align-middle animate-blink" />
              </motion.span>
            </AnimatePresence>
            <span className={`flex items-center gap-1 rounded-md border border-[hsla(225,15%,30%,0.35)] bg-[hsla(225,16%,18%,0.6)] px-2 py-0.5 text-[11px] font-medium ${T_SECONDARY}`}>
              ⌥ Space
            </span>
          </div>

          {/* results palette */}
          <div className={`mt-4 overflow-hidden rounded-[20px] ${GLASS}`}>
            {/* telemetry strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[hsla(225,15%,30%,0.35)] px-4 py-2.5">
              {TELEMETRY.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${t.dot} animate-pulseGlow`} />
                  <span className={`text-[11px] font-medium ${T_SECONDARY}`}>{t.label}</span>
                  <span className={`font-mono text-[11px] font-semibold ${T_PRIMARY}`}>{t.value}</span>
                </div>
              ))}
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(145,70%,50%)] animate-pulseGlow" />
                <span className={`text-[11px] font-medium ${T_SECONDARY}`}>Kernel Active</span>
              </div>
            </div>

            {/* results */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="p-3"
              >
                {active.rows.map((r, i) => {
                  const Icon = r.icon;
                  const selected = i === 0;
                  return (
                    <div
                      key={r.title}
                      className={`flex min-h-[60px] items-center gap-[15px] rounded-xl px-3.5 ${
                        selected ? "bg-white/[0.14]" : "hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] border border-white/10 bg-white/[0.05] text-[hsl(185,75%,55%)]">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className={`flex-1 truncate text-[18px] font-medium tracking-[-0.012em] ${T_PRIMARY}`}>
                        {r.title}
                      </span>
                      {selected && (
                        <span className="flex shrink-0 items-center gap-2.5 pl-3">
                          <span className="text-[14px] text-white/60">Run</span>
                          <span className="inline-flex h-[22px] min-w-[24px] items-center justify-center rounded-md border border-white/20 bg-white/[0.16] px-2 font-mono text-[12px] text-white/85">
                            ↵
                          </span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* composer toolbar */}
            <div className="flex items-center gap-2.5 px-4 pb-4 pt-2.5">
              <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.12] text-white/[0.94] transition-colors hover:bg-white/20">
                <Attach className="h-[18px] w-[18px]" />
              </button>
              <button className="flex h-[42px] items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.12] px-[18px] text-[14px] font-medium text-white/[0.94] transition-colors hover:bg-white/20">
                <Search className="h-[18px] w-[18px]" /> Deep search
              </button>
              <button className="hidden h-[42px] items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.12] px-[18px] text-[14px] font-medium text-white/[0.94] transition-colors hover:bg-white/20 sm:flex">
                <Globe className="h-[18px] w-[18px]" /> Search
              </button>
              <span className="flex-1" />
              <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.12] text-white/[0.94] transition-colors hover:bg-white/20">
                <Voice className="h-[18px] w-[18px]" />
              </button>
              <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-b from-[#8ff09d] to-[#5fd97a] text-[#0a2c14] shadow-[0_4px_14px_-2px_hsla(140,70%,45%,0.5)] transition-all hover:brightness-105">
                <SubmitArrow className="h-[18px] w-[18px]" />
              </button>
            </div>

            {/* shortcut bar */}
            <div className="flex items-center gap-5 overflow-x-auto border-t border-[hsla(225,15%,30%,0.35)] px-5 py-2">
              {SHORTCUTS.map((s) => (
                <div key={s.label} className="flex shrink-0 items-center gap-1.5">
                  <span className={`inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[3px] border border-[hsla(225,15%,30%,0.35)] bg-[hsl(225,14%,11%)] px-1 text-[10px] font-semibold ${T_SECONDARY}`}>
                    {s.key}
                  </span>
                  <span className={`text-[11px] ${T_TERTIARY}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
