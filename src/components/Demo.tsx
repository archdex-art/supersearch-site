import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { Search, Compass, Code, Brain, Spark, Arrow } from "./Icons";
import { scaleIn, viewportOnce } from "../lib/motion";

const TABS = [
  {
    id: "intent",
    label: "Intent",
    icon: Compass,
    mode: "Natural language",
    q: "open chrome incognito and search rust",
    answer: "Compiled a 3-node task graph and executed it locally.",
    rows: [
      { t: "open -na \"Google Chrome\"", s: "launch · activate", c: "electric" },
      { t: "osascript → new incognito window", s: "Apple Events", c: "cyan" },
      { t: "keystroke \"rust\" ⏎", s: "argv, no shell", c: "violet" },
    ],
  },
  {
    id: "app",
    label: "/ App",
    icon: Brain,
    mode: "App injection",
    q: "/chatgpt summarize this file",
    answer: "Activated ChatGPT (launching it if closed) and injected your prompt.",
    rows: [
      { t: "activate com.openai.chat", s: "woke the app", c: "cyan" },
      { t: "inject keystrokes", s: "prompt delivered", c: "electric" },
      { t: "context: last file remembered", s: "from the journal", c: "violet" },
    ],
  },
  {
    id: "term",
    label: "$ Terminal",
    icon: Code,
    mode: "Shell hook",
    q: "$ cargo build --release",
    answer: "Opened Terminal and piped the command into a live session.",
    rows: [
      { t: "spawn Terminal.app", s: "live session", c: "cyan" },
      { t: "run: cargo build --release", s: "argv vector", c: "electric" },
      { t: "streams stdout in place", s: "no string eval", c: "crimson" },
    ],
  },
];

const DOT: Record<string, string> = {
  crimson: "bg-crimson",
  cyan: "bg-cyan",
  electric: "bg-electric",
  violet: "bg-violet",
};

export default function Demo() {
  const [tab, setTab] = useState(0);
  const active = TABS[tab];

  return (
    <section className="relative py-28">
      <div className="container-w">
        <SectionHead
          kicker="See it move"
          title={<>One bar, <span className="glow-text">three modes</span></>}
          sub="Plain language, /app injection, or $ shell — SuperSearch routes each prefix to the right execution path."
        />

        <div className="mt-12 flex justify-center gap-2">
          {TABS.map((t, i) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(i)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                  i === tab
                    ? "border-electric/40 bg-electric/10 text-fg"
                    : "border-white/10 bg-white/[0.02] text-soft hover:text-fg"
                }`}
              >
                <Icon className="h-4 w-4" /> {t.label}
              </button>
            );
          })}
        </div>

        {/* layered palette mockup */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto mt-10 max-w-3xl"
        >
          <div className="absolute inset-x-8 -top-4 h-full rounded-2xl border border-white/[0.05] bg-white/[0.01]" />
          <div className="absolute inset-x-4 -top-2 h-full rounded-2xl border border-white/[0.06] bg-white/[0.015]" />

          <div className="glass-strong relative overflow-hidden rounded-2xl">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-crimson/70" />
              <span className="h-3 w-3 rounded-full bg-cyan/60" />
              <span className="h-3 w-3 rounded-full bg-violet/60" />
              <div className="ml-3 flex flex-1 items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-[12px] text-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseGlow" />
                  SuperSearch
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active.mode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="chip"
                  >
                    {active.mode}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* body */}
            <div className="p-6">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <Search className="h-4 w-4 text-electric-bright" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active.q}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-[14px] text-fg/90"
                  >
                    {active.q}
                  </motion.span>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-electric/25 bg-electric/[0.06] p-4">
                    <Spark className="mt-0.5 h-4 w-4 shrink-0 text-electric-bright" />
                    <p className="text-[14px] leading-relaxed text-fg/90">{active.answer}</p>
                  </div>

                  <div className="mt-3 space-y-2">
                    {active.rows.map((r) => (
                      <div
                        key={r.t}
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <span className={`h-2 w-2 shrink-0 rounded-full ${DOT[r.c]}`} />
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-mono text-[13px] text-fg/90">{r.t}</div>
                          <div className="truncate font-mono text-[11px] text-faint">{r.s}</div>
                        </div>
                        <Arrow className="h-4 w-4 -translate-x-1 text-soft opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
