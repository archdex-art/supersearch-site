import { useEffect, useRef } from "react";

/**
 * Drifting constellation network: nodes linked by lines that fade with
 * distance, with a soft parallax pull toward the cursor. Colors shift
 * between electric blue and cyan for an AI-runtime atmosphere.
 */
export default function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.min(95, Math.floor((w * h) / 15000));
      pts = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
      }));
    };

    const LINK = 132;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 190) {
          p.x += (dx / d) * 0.26;
          p.y += (dy / d) * 0.26;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK) {
            const o = (1 - dist / LINK) * 0.4;
            ctx.strokeStyle = `rgba(90,170,255,${o})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150,225,255,0.8)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden />;
}
