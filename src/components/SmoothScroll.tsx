"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Lenis: any;
  }
}

const SmoothScroll = () => {
  useEffect(() => {
    const waitForLenis = () => {
      if (typeof window !== "undefined" && typeof window.Lenis === "function") {
        const lenis = new window.Lenis();

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } else {
        // Spróbuj ponownie za chwilę, jeśli Lenis jeszcze się nie załadował
        setTimeout(waitForLenis, 100);
      }
    };

    waitForLenis();
  }, []);

  return null;
};

export default SmoothScroll;
