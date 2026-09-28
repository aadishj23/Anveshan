import React, { memo, useMemo } from "react";
import Image from "next/image";
import { globeLogo } from "@/config/testimonials";
import ScrollVelocity from "../testimonials/scrollvelocity";

interface MarqueeItem {
  text: string;
  velocity: number;
  className?: string;
  wrapperClassName?: string;
}

const marqueeItems: MarqueeItem[] = [
  {
    text: "student run",
    velocity: -100,
    className: "flex items-center h-16",
    wrapperClassName:
      "w-[110%] -left-5 rotate-2 lg:rotate-[1.5deg] bg-[#111111] text-white border-y border-white/10 relative z-10 shadow-xl",
  },
  {
    text: "the builder society",
    velocity: 100,
    className: "flex items-center h-16",
    wrapperClassName:
      "absolute top-1/2 -translate-y-1/2 -left-5 -rotate-12 lg:-rotate-[5deg] bg-primary text-black font-extrabold w-[110%] shadow-2xl z-30",
  },
];

const MarqueeContent = memo(({ text }: { text: string }) => (
  <div className="flex items-center">
    <Image
      src={globeLogo}
      alt="Globe Logo"
      width={400}
      height={400}
      className="h-8 w-8 ml-4 2xl:ml-6 inline-block"
      priority={false}
      loading="lazy"
    />
    <span className="ml-4 2xl:ml-6 uppercase font-bold font-averta-std text-xl lg:text-3xl py-3 inline-block">
      {text}
    </span>
  </div>
));

MarqueeContent.displayName = "MarqueeContent";

const MarqueeStrip = memo(
  ({ item, index }: { item: MarqueeItem; index: number }) => {
    const texts = useMemo(
      () => [<MarqueeContent key={`${item.text}-${index}`} text={item.text} />],
      [item.text, index],
    );

    return (
      <div className={item.wrapperClassName}>
        <ScrollVelocity
          texts={texts}
          velocity={item.velocity}
          className={item.className}
        />
      </div>
    );
  },
);

MarqueeStrip.displayName = "MarqueeStrip";

const ScrollMarquee = memo(() => {
  return (
    <div className="relative z-30 w-full overflow-x-clip py-4 sm:py-6 -mb-6 sm:-mb-8 pointer-events-auto">
      {marqueeItems.map((item, index) => (
        <MarqueeStrip key={item.text} item={item} index={index} />
      ))}
    </div>
  );
});

ScrollMarquee.displayName = "ScrollMarquee";

export default ScrollMarquee;
