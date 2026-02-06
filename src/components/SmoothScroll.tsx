"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only enable Lenis on desktop (screens wider than 768px)
    const isDesktop = window.innerWidth >= 768;
    
    if (!isDesktop) {
      // Use native scrolling on mobile
      return;
    }

    // Add lenis class to html element
    document.documentElement.classList.add("lenis");

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
