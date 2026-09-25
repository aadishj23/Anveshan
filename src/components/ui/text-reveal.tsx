"use client";

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import Typography from "../Typography";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(/\s+/).filter(Boolean);

  return (
    <div ref={targetRef} className={cn("relative h-[200vh] w-full", className)}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 sm:space-y-8 px-6 sm:px-8 text-center">
          <div className="w-full select-none">
            <Typography.H1 className="text-center font-wc-rough-trad text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white">
              <span className="block sm:inline">What is</span>
              <span className="font-wc-rough-trad text-primary block sm:inline font-normal">
                {" "}
                Anveshan &#63;
              </span>
            </Typography.H1>
          </div>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2.5 text-center font-averta-std text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl">
            {words.map((word, i) => {
              const start = 0.05 + (i / words.length) * 0.68;
              const end = start + (1 / words.length) * 1.5;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span className="text-white/20 select-none">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-white font-normal select-none pointer-events-none"
      >
        {children}
      </motion.span>
    </span>
  );
};

