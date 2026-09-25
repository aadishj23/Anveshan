"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";

import { text, textItems } from "@/config/gallery/background";
import { GALLERY_PARALLAX_IMAGES } from "@/config/gallery/parallax";

import Typography from "../Typography";
import { ParallaxScroll } from "../ui/parallax-scroll";

interface GalleryWordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const GalleryWord: React.FC<GalleryWordProps> = ({
  children,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mx-[0.16em]">
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

export default function Gallery() {
  const words = text.desc.split(/\s+/).filter(Boolean);

  const renderOverlay = (progress: MotionValue<number>) => (
    <div
      className="w-full max-w-screen px-4 sm:px-[5vw] pt-0 pb-0 md:pt-32 lg:pt-50 md:pb-36 lg:pb-50 relative z-20"
      id="gallery"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 sm:gap-6 md:gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-center pt-19 sm:pt-31 md:pt-28 lg:pt-27 xl:pt-33 w-[clamp(1.5rem,6vw,6rem)]">
          <div className="relative w-[clamp(2rem,6vw,6rem)] h-[clamp(2rem,6vw,6rem)]">
            <div className="absolute top-0 left-[40%] w-[clamp(0.8rem,2.5vw,2.75rem)] h-[clamp(0.8rem,3vw,2.75rem)] bg-[#262626]" />
            <div className="absolute bottom-0 right-[60%] w-[clamp(0.8rem,2.5vw,2.75rem)] h-[clamp(0.8rem,3vw,2.75rem)] bg-[#262626]" />
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto px-1 sm:px-2">
          <div className="mb-3 sm:mb-10 md:mb-5 lg:mb-9 xl:mb-1 w-full px-1 sm:px-2">
            <Typography.H2
              className="font-wc-rough-trad font-normal text-white leading-[0.95] tracking-tight 
                         text-[clamp(3rem,9vw,9rem)]
                         sm:text-[clamp(5rem,8vw,10rem)] 
                         md:text-[clamp(5rem,8vw,10rem)] 
                         lg:text-[clamp(5rem,7.5vw,10rem)] 
                         xl:text-[clamp(4rem,6.4vw,8rem)]
                         flex flex-col pt-[1.2em] md:pt-[1.2em] lg:pt-[1.2em]"
            >
              <span className="block">HOW'S THE</span>
              <span className="block text-primary">JOURNEY</span>
              <span className="block">SO FAR</span>
            </Typography.H2>
          </div>
          <div
            className="text-center font-averta-std font-normal leading-[1.6] 
            text-[clamp(0.75rem,1.4vw,1.15rem)] max-w-[65ch] mx-auto px-2 sm:px-4 lg:pb-[0.5em]"
          >
            {words.map((word, i) => {
              const start = 0.06 + (i / words.length) * 0.58;
              const end = start + (1 / words.length) * 1.5;
              return (
                <GalleryWord key={i} progress={progress} range={[start, end]}>
                  {word}
                </GalleryWord>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center font-averta-std pt-19 sm:pt-31 md:pt-28 lg:pt-27 xl:pt-33 w-[clamp(1.2rem,6vw,6rem)]">
          <div className="flex flex-col items-center gap-2 sm:gap-2 xl:gap-5">
            {textItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.text.split("").map((char, charIndex) => (
                  <div
                    key={charIndex}
                    className={`text-[#E2E2E2] text-center 
                      text-[clamp(0.4rem,1.2vw,0.9rem)] 
                      leading-snug ${item.isBold ? "font-bold" : "font-light"}`}
                  >
                    {char}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-10 sm:py-40 md:py-52 lg:py-70">
      <ParallaxScroll images={GALLERY_PARALLAX_IMAGES} overlay={renderOverlay} />
    </div>
  );
}

