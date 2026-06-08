import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "./Icons";
import { DMG_MACOS } from "../lib/links";

const LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Runtime", href: "#runtime" },
  { label: "How it thinks", href: "#thinks" },
  { label: "Surface", href: "#ecosystem" },
];

export default function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-[80rem] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "glass-strong"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
            <Search className="h-4 w-4 text-electric-bright" />
            <span className="absolute inset-0 rounded-lg bg-electric/20 blur-md" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-fg">
            Super<span className="text-soft">Search</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-soft transition-colors hover:bg-white/[0.04] hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-soft transition-colors hover:border-white/20 hover:text-fg sm:flex"
          >
            <span className="font-mono text-[12px]">⌥</span>
            <span className="font-mono text-[12px]">Space</span>
          </button>
          <a
            href={DMG_MACOS}
            download
            className="btn-primary !px-4 !py-2 text-[13px]"
          >
            Download
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
