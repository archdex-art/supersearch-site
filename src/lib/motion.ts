import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.95, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const viewportOnce = { once: true, margin: "-80px" };
