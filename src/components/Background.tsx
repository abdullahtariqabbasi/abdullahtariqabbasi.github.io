"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative animated background — "Emerald Matrix":
 * - Matrix-rain canvas (falling binary + katakana-ish glyphs, low-opacity emerald)
 * - Aurora gradient blobs (emerald / teal / amber)
 * - Grid overlay + CRT scanlines + vignette
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Glyph set: binary + a few katakana + symbols for an AI/matrix feel
    const GLYPHS =
      "01ｱｲｳｴｵｶｷｸｹｺ01<>{}#$%&*+=/\\01アイウエオカ".split("");
    const FONT_SIZE = 16;
    let columns = Math.floor(width / FONT_SIZE);
    // Y position of the leading glyph in each column
    let drops: number[] = new Array(columns)
      .fill(0)
      .map(() => Math.random() * -50);

    const recalc = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / FONT_SIZE);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    };

    let raf = 0;
    let last = 0;
    const STEP_MS = 55; // speed of the rain (throttled)

    const drawFrame = () => {
      // Translucent fill creates the fading trail effect
      ctx.fillStyle = "rgba(4, 16, 12, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;
        const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];

        // Leading glyph brighter; trailing glyphs dimmer
        if (Math.random() > 0.975) {
          ctx.fillStyle = "rgba(167, 243, 208, 0.95)"; // brand-200 (bright head)
        } else {
          ctx.fillStyle = "rgba(16, 185, 129, 0.55)"; // brand-500 (trail)
        }
        ctx.fillText(ch, x, y);
      }

      // Advance drops
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * FONT_SIZE > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (t - last < STEP_MS) return;
      last = t;
      drawFrame();
    };

    if (!reduced) {
      raf = requestAnimationFrame(loop);
    } else {
      // One static dim frame so it isn't pure black
      ctx.fillStyle = "rgba(4, 16, 12, 1)";
      ctx.fillRect(0, 0, width, height);
      drawFrame();
      cancelAnimationFrame(raf);
    }

    window.addEventListener("resize", recalc);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", recalc);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950 scanlines">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#06150f_0%,_#04100c_55%)]" />

      {/* Matrix rain */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-40" />

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0" />

      {/* Aurora blobs */}
      <div
        className="aurora left-[-10%] top-[-10%] h-[40rem] w-[40rem] bg-brand-600/30 animate-float"
        style={{ animationDuration: "14s" }}
      />
      <div
        className="aurora right-[-15%] top-[20%] h-[34rem] w-[34rem] bg-accent-500/25 animate-float"
        style={{ animationDuration: "18s", animationDelay: "-4s" }}
      />
      <div
        className="aurora bottom-[-10%] left-[30%] h-[30rem] w-[30rem] bg-amber-500/15 animate-float"
        style={{ animationDuration: "20s", animationDelay: "-8s" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_#04100c_100%)]" />
    </div>
  );
}
