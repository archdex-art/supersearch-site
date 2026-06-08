import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { Compass, Layers, Bolt, Brain } from "./Icons";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const STEPS = [
  {
    icon: Compass,
    n: "01",
    title: "Classify intent",
    body: "A fully local, rule-based classifier maps your sentence to one of a fixed set of intents. No LLM, no network.",
    file: "patterns.rs",
    c: "text-electric-bright",
  },
  {
    icon: Layers,
    n: "02",
    title: "Compile task graph",
    body: "The intent becomes a DAG of OS operations — open, mdfind, osascript — with dependencies and safe limits.",
    file: "planner.rs",
    c: "text-cyan",
  },
  {
    icon: Bolt,
    n: "03",
    title: "Execute safely",
    body: "Each node checks a capability token, then spawns as an argv process — never a shell — under a hard 15s guard.",
    file: "executor.rs",
    c: "text-violet-bright",
  },
  {
    icon: Brain,
    n: "04",
    title: "Remember context",
    body: "An append-only journal plus spatial awareness lets the next command infer its target intelligently.",
    file: "memory.rs",
    c: "text-crimson-bright",
  },
];

export default function Thinks() {
  return (
    <section id="thinks" className="relative py-28">
      <div className="container-w">
        <SectionHead
          kicker="How it thinks"
          title={<>From sentence to action in <span className="ember-text">four moves</span></>}
          sub="A deterministic kernel that runs in milliseconds — transparent enough to trust, fast enough to feel instant."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-electric/10 via-white/15 to-crimson/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-0 h-full bg-gradient-to-r from-electric via-cyan to-violet opacity-60"
            />
          </div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.n} variants={fadeUp} className="relative">
                  <div className="relative z-10 mb-5 flex h-[68px] w-[68px] items-center justify-center">
                    <span className="absolute inset-0 rounded-2xl border border-white/10 bg-ink-900" />
                    <span className={`absolute inset-0 rounded-2xl ${s.c} opacity-20 blur-md`} />
                    <span className={`relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${s.c}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] tracking-widest text-faint">{s.n}</span>
                    <span className="font-mono text-[11px] text-faint/70">{s.file}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-fg">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
