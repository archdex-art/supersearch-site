import { Search } from "./Icons";

const REPO = "https://github.com/archdex-art/SuperSearch";

const COLS = [
  {
    h: "Product",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Live runtime", href: "#runtime" },
      { label: "How it thinks", href: "#thinks" },
      { label: "Surface area", href: "#ecosystem" },
      { label: "Releases", href: `${REPO}/releases` },
    ],
  },
  {
    h: "Source",
    links: [
      { label: "GitHub", href: REPO },
      { label: "README", href: `${REPO}#readme` },
      { label: "Architecture", href: `${REPO}/blob/main/SuperSearch_CrossPlatform_Architecture.md` },
      { label: "Issues", href: `${REPO}/issues` },
      { label: "Releasing", href: `${REPO}/blob/main/RELEASING.md` },
    ],
  },
  {
    h: "Built with",
    links: [
      { label: "Tauri + Rust", href: "#" },
      { label: "Apple Events", href: "#" },
      { label: "Capability model", href: "#" },
      { label: "WASM extensions", href: "#" },
      { label: "macOS native", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-14">
      <div className="container-w">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Search className="h-4 w-4 text-electric-bright" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-fg">
                Super<span className="text-soft">Search</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-soft">
              The intent-driven runtime for macOS. Plain language in, deterministic
              actions out — all on your machine.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[12px] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseGlow" />
              Local-first · no telemetry
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.h}>
              <div className="label mb-4">{c.h}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14px] text-soft transition-colors hover:text-fg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <span className="font-mono text-[12px] text-faint">© 2026 SuperSearch</span>
          <span className="font-mono text-[12px] text-faint">Driven by intent, executed locally.</span>
        </div>
      </div>
    </footer>
  );
}
