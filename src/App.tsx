import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Runtime from "./components/Runtime";
import Thinks from "./components/Thinks";
import Stats from "./components/Stats";
import Ecosystem from "./components/Ecosystem";
import Demo from "./components/Demo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const metaK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      // ⌥Space — SuperSearch's real summon shortcut
      const altSpace = e.altKey && (e.code === "Space" || e.key === " ");
      if (metaK || altSpace) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grain" />
      <Cursor />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className="relative">
        <Hero onOpenPalette={() => setPaletteOpen(true)} />
        <Capabilities />
        <Runtime />
        <Thinks />
        <Stats />
        <Ecosystem />
        <Demo />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
