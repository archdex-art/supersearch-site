import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const Search = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);
export const Spark = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5 13.4 12 12 15.5 10.6 12 12 8.5Z" />
  </svg>
);
export const Brain = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A2.5 2.5 0 0 0 7 17a2.5 2.5 0 0 0 5 0V5a1.5 1.5 0 0 0-3 0" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A2.5 2.5 0 0 1 17 17a2.5 2.5 0 0 1-5 0" />
  </svg>
);
export const Bolt = (p: P) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);
export const Layers = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 16.5l9 5 9-5" opacity=".55" />
  </svg>
);
export const Shield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const Globe = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);
export const Compass = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);
export const Plug = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" />
  </svg>
);
export const Code = (p: P) => (
  <svg {...base(p)}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
  </svg>
);
export const Doc = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 3h7l4 4v14H7zM14 3v4h4" />
    <path d="M10 13h5M10 16h5" opacity=".6" />
  </svg>
);
export const Image = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path d="m4 17 5-5 4 4 3-3 4 4" />
  </svg>
);
export const Slack = (p: P) => (
  <svg {...base(p)}>
    <rect x="10" y="3" width="4" height="9" rx="2" />
    <rect x="3" y="10" width="9" height="4" rx="2" />
    <rect x="12" y="10" width="9" height="4" rx="2" opacity=".55" />
  </svg>
);
export const Arrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12 4 4 10-10" />
  </svg>
);
export const Command = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 9h6v6H9z" />
    <path d="M9 9V7a2 2 0 1 0-2 2h2Zm6 0h2a2 2 0 1 0-2-2v2Zm0 6v2a2 2 0 1 0 2-2h-2Zm-6 0H7a2 2 0 1 0 2 2v-2Z" />
  </svg>
);
