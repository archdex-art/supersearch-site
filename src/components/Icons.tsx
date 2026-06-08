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

export const Github = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
  </svg>
);

/* Platform brand glyphs — filled, so they read at small sizes. */
export const Apple = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M16.37 12.6c.02 2.5 2.18 3.33 2.2 3.34-.02.05-.34 1.18-1.13 2.34-.68 1-1.39 2-2.5 2.02-1.1.02-1.45-.65-2.7-.65-1.26 0-1.65.63-2.69.67-1.08.04-1.9-1.08-2.59-2.08-1.4-2.04-2.47-5.76-1.03-8.28a4 4 0 0 1 3.38-2.06c1.06-.02 2.06.71 2.7.71.65 0 1.86-.88 3.13-.75.53.02 2.02.21 2.98 1.62-.08.05-1.78 1.04-1.76 3.1M14.4 4.84c.57-.69.95-1.65.84-2.61-.82.04-1.82.55-2.41 1.23-.53.61-.99 1.59-.86 2.53.91.07 1.85-.46 2.43-1.15"/>
  </svg>
);
export const Windows = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13L10.5 19.6v-7H3v6Zm8.5 1.3L21 21V12.5h-9.5v7.3Zm0-15.6V11.5H21V3l-9.5 1.2Z"/>
  </svg>
);
export const Linux = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2c-1.7 0-3 1.5-3 3.4 0 1 .1 1.6.1 2.4 0 .8-.6 1.4-1.3 2.5-.8 1.2-1.8 2.6-2.4 4-.4.9-.5 1.8-.2 2.4.2.4.1.8 0 1.2-.2.6-.3 1.2.1 1.6.4.5 1.2.5 2 .4.7-.1 1.3-.2 1.8.1.6.4 1.3.9 2.1.9s1.5-.5 2.1-.9c.5-.3 1.1-.2 1.8-.1.8.1 1.6.1 2-.4.4-.4.3-1 .1-1.6-.1-.4-.2-.8 0-1.2.3-.6.2-1.5-.2-2.4-.6-1.4-1.6-2.8-2.4-4-.7-1.1-1.3-1.7-1.3-2.5 0-.8.1-1.4.1-2.4C15 3.5 13.7 2 12 2Zm-1.4 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm2.8 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm-1.4 2.2c.6 0 1.5.4 1.5.8 0 .2-.4.4-.8.6-.3.1-.5.3-.7.3s-.4-.2-.7-.3c-.4-.2-.8-.4-.8-.6 0-.4.9-.8 1.5-.8Z"/>
  </svg>
);
