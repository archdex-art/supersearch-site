/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // matte black -> deep navy -> graphite
        ink: {
          950: "#050507",
          900: "#07090F",
          850: "#0A0D16",
          800: "#0E121D",
          750: "#141925",
          700: "#1B2130",
          600: "#28303F",
        },
        navy: {
          900: "#060B18",
          800: "#0A1124",
          700: "#0F1A33",
        },
        // accent glows
        electric: { DEFAULT: "#3B82F6", deep: "#2563EB", bright: "#7DB0FF" },
        cyan: { DEFAULT: "#22D3EE", deep: "#06B6D4", bright: "#7DF0FF" },
        crimson: { DEFAULT: "#FB3B5C", deep: "#E11D48", bright: "#FF7A93" },
        violet: { DEFAULT: "#8B5CF6", deep: "#7C3AED", bright: "#B79CFF" },
        fg: "#E8ECF5",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        tighter2: "-0.03em",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%,-2%,0) scale(1.08)" },
          "100%": { transform: "translate3d(-2%,1%,0) scale(1.04)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sweep: {
          "0%,100%": { opacity: "0.35", transform: "translateX(-30%)" },
          "50%": { opacity: "1", transform: "translateX(30%)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        floaty: "floaty 8s ease-in-out infinite",
        drift: "drift 32s ease-in-out infinite alternate",
        scan: "scan 7s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        sweep: "sweep 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
