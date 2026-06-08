import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Stat = {
  to?: number;
  text?: string;
  prefix?: string;
  suffix?: string;
  dec?: number;
  label: string;
  c: string;
};

const STATS: Stat[] = [
  { to: 100, suffix: "%", label: "Runs on your machine", c: "glow-text" },
  { text: "⌥Space", label: "Summon from anywhere", c: "glow-text" },
  { to: 15, suffix: "s", label: "Hard per-action guard", c: "ember-text" },
  { to: 0, label: "LLM calls · telemetry", c: "ember-text" },
];

function Counter({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(to * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{v.toFixed(dec)}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="container-w">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-strong relative grid gap-6 overflow-hidden rounded-3xl px-8 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute inset-0 grid-lines grid-fade opacity-40" />
          <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-electric/15 blur-[90px]" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-violet/15 blur-[90px]" />
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="relative text-center">
              <div className={`text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-none tracking-tighter2 ${s.c}`}>
                {s.text ? (
                  s.text
                ) : (
                  <>
                    {s.prefix}
                    <Counter to={s.to!} dec={s.dec} />
                    {s.suffix}
                  </>
                )}
              </div>
              <div className="mt-3 text-[13px] text-soft">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
