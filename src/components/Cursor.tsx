import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DOT = 6;
const RING = 32;

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 360, damping: 28, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 360, damping: 28, mass: 0.4 });
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setOn(true);
    document.documentElement.classList.add("cursor-none");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setHover(!!t?.closest('a, button, [role="button"], input, label, summary, [data-hover]'));
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", dn);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", dn);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [x, y]);

  if (!on) return null;
  return (
    <>
      <motion.div
        aria-hidden
        style={{ left: x, top: y, marginLeft: -DOT / 2, marginTop: -DOT / 2 }}
        className="pointer-events-none fixed z-[95] h-1.5 w-1.5 rounded-full bg-cyan"
      />
      <motion.div
        aria-hidden
        style={{ left: rx, top: ry, marginLeft: -RING / 2, marginTop: -RING / 2, transformOrigin: "center" }}
        animate={{ scale: hover ? 1.6 : down ? 0.78 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`pointer-events-none fixed z-[95] h-8 w-8 rounded-full border transition-colors duration-200 ${
          hover ? "border-cyan bg-cyan/10" : "border-white/30"
        }`}
      />
    </>
  );
}
