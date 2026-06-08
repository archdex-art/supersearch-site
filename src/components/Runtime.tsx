import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { Search, Compass, Layers, Code, Spark, Check } from "./Icons";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../lib/motion";

const STEPS = [
  { icon: Compass, label: "classify", op: "intent", w: "30%", c: "electric" },
  { icon: Code, label: "open", op: "open -na Brave", w: "62%", c: "cyan" },
  { icon: Layers, label: "osascript", op: "new incognito window", w: "88%", c: "violet" },
  { icon: Spark, label: "keystroke", op: "type \"rust\" ⏎", w: "44%", c: "cyan" },
];

const BAR: Record<string, string> = {
  electric: "from-electric/80 to-electric/20",
  cyan: "from-cyan/80 to-cyan/20",
  violet: "from-violet/80 to-violet/20",
};

export default function Runtime() {
  return (
    <section id="runtime" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-electric/10 blur-[140px]" />
      <div className="container-w relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              center={false}
              kicker="Live runtime"
              title={<>Watch a sentence <span className="glow-text">compile</span> into actions</>}
              sub="SuperSearch parses your intent, compiles it into a DAG of OS operations, and executes each node as a direct argv process — open, mdfind, osascript — with a hard 15-second guard."
            />
            <motion.ul
              variants={stagger(0.09)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 space-y-3"
            >
              {[
                "Fixed intent taxonomy — never synthesizes arbitrary scripts",
                "No shell interpolation of your input",
                "Every gate decision written to an append-only journal",
              ].map((t) => (
                <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 text-[15px] text-soft">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-cyan/30 bg-cyan/10 text-cyan">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* visualization panel */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass-strong scanlines relative overflow-hidden rounded-2xl p-5"
          >
            <div className="edge-top absolute inset-x-0 top-0" />
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Search className="h-4 w-4 text-electric-bright" />
              <span className="font-mono text-[13px] text-fg/90">
                open brave in incognito and search rust
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="label">Compiling task graph</span>
                <span className="font-mono text-[11px] text-cyan">198ms</span>
              </div>
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-soft">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="w-20 shrink-0 font-mono text-[12px] text-soft">{s.label}</span>
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: s.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${BAR[s.c]}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-5 rounded-xl border border-electric/25 bg-electric/[0.06] p-4"
            >
              <div className="flex items-center gap-2">
                <Spark className="h-4 w-4 text-electric-bright" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-electric-bright">Executed</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-faint">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseGlow" /> 4 nodes · 0 errors
                </span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg/90">
                Brave launched in a private window searching
                <span className="text-cyan"> "rust"</span> — driven entirely by local
                <span className="text-electric-bright"> argv</span> spawns.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["open", "osascript", "keystroke", "capability ✓"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
