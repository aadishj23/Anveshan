"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

import Footer from "../marginals/footer";
import Navbar from "../marginals/navbar";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;

      // Only scroll to top if not targeting a specific section hash on the page
      if (typeof window !== "undefined" && !window.location.hash) {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }
    }
  }, [pathname, lenis]);

  return null;
}

function HOC({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ReactLenis
        root
        options={{
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
        }}
      >
        <ScrollReset />
        {children}
      </ReactLenis>
      <Footer />
    </>
  );
}

export default HOC;
