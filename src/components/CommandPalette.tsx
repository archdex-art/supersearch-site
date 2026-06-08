import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Spark, Brain, Globe, Code, Doc, Compass, Bolt, Arrow } from "./Icons";

type Item = { icon: typeof Search; label: string; hint: string };

const ITEMS: Item[] = [
  { icon: Compass, label: "open brave in incognito and search rust", hint: "Intent" },
  { icon: Brain, label: "/chatgpt draft a standup update", hint: "App" },
  { icon: Code, label: "$ cargo build --release", hint: "Terminal" },
  { icon: Doc, label: "find files modified today", hint: "Spotlight" },
  { icon: Globe, label: "launch spotify and play lo-fi", hint: "Intent" },
  { icon: Bolt, label: "empty trash", hint: "System" },
  { icon: Spark, label: "/notes new note: groceries", hint: "App" },
];

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return ITEMS;
    return ITEMS.filter(
      (i) => i.label.toLowerCase().includes(t) || i.hint.toLowerCase().includes(t),
    );
  }, [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, results.length]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={onClose}
        >
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-md" />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="glass-strong relative w-full max-w-[640px] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="edge-top flex items-center gap-3 border-b border-white/[0.07] px-5 py-4">
              <Search className="h-5 w-5 text-electric-bright" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setActive(0);
                }}
                placeholder="Type an intent, /app, or $ command…"
                className="w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-faint"
              />
              <span className="kbd">esc</span>
            </div>

            <div className="max-h-[46vh] overflow-y-auto p-2">
              <div className="px-3 py-2">
                <span className="label">Suggestions</span>
              </div>
              {results.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-faint">
                  No matches — SuperSearch will reason from intent instead.
                </div>
              )}
              {results.map((it, i) => {
                const Icon = it.icon;
                const on = i === active;
                return (
                  <button
                    key={it.label}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      on ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        on
                          ? "border-electric/40 bg-electric/15 text-electric-bright"
                          : "border-white/10 bg-white/[0.03] text-soft"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 truncate text-sm text-fg/90">{it.label}</span>
                    <span className="chip hidden sm:inline-flex">{it.hint}</span>
                    <Arrow
                      className={`h-4 w-4 shrink-0 transition-all ${
                        on ? "translate-x-0 text-electric-bright opacity-100" : "-translate-x-1 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3 text-[11px] text-faint">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5"><span className="kbd">↑</span><span className="kbd">↓</span> navigate</span>
                <span className="flex items-center gap-1.5"><span className="kbd">↵</span> open</span>
              </div>
              <span className="flex items-center gap-1.5 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseGlow" /> SuperSearch runtime
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
