"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function ScrollToTopOnMount() {
  const lenis = useLenis();

  useEffect(() => {
    const reset = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };

    reset();
    const af = requestAnimationFrame(reset);
    const timeout = setTimeout(reset, 60);

    return () => {
      cancelAnimationFrame(af);
      clearTimeout(timeout);
    };
  }, [lenis]);

  return null;
}
