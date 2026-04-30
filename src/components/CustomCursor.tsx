"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let visible = false;

    const setState = (state: "default" | "hover" | "press" | "hidden") => {
      const v = state === "default" ? "" : state;
      if (v) {
        dot.dataset.state = v;
        ring.dataset.state = v;
      } else {
        delete dot.dataset.state;
        delete ring.dataset.state;
      }
    };

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      const target = e.target as Element | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) {
        setState("hover");
      } else {
        setState("default");
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onDown = () => setState("press");
    const onUp = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) setState("hover");
      else setState("default");
    };
    const onLeave = () => setState("hidden");
    const onEnter = () => setState("default");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden className="tnm-cursor-ring" />
      <div ref={dotRef} aria-hidden className="tnm-cursor" />
    </>
  );
}
