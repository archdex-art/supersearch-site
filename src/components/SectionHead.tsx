import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function SectionHead({
  kicker,
  title,
  sub,
  center = true,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col ${center ? "mx-auto items-center text-center" : "items-start text-left"}`}
    >
      <motion.span variants={fadeUp} className="label flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseGlow" />
        {kicker}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-balance text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} className="mt-4 text-balance text-[17px] leading-relaxed text-soft">
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}
