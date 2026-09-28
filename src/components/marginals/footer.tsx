import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components";
import TechText from "@/components/ui/tech-text";
import { FOOTER_TEXT, SOCIALS } from "@/config/marginals";
import { sketchBlock } from "@/fonts";

export default function Footer() {
  const leftSocials = SOCIALS.slice(0, 2);
  const rightSocials = SOCIALS.slice(2);

  return (
    <footer
      id="footer"
      className="relative w-full flex flex-col justify-end mt-14 md:mt-20 pb-6"
    >
      {/* Desktop Social Links */}
      <div className="hidden lg:flex w-full justify-center items-center gap-[20vw] mb-3 md:mb-4">
        {/* Left Socials */}
        <div className="flex gap-6 lg:gap-8">
          {leftSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-white/90">
                {social.name.toUpperCase()}
              </Typography.P>
            </Link>
          ))}
        </div>

        {/* Right Socials */}
        <div className="flex gap-6 lg:gap-8">
          {rightSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-white/90">
                {social.name.toUpperCase()}
              </Typography.P>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="flex lg:hidden w-full justify-center items-center gap-8 mb-3">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-75 transition-opacity"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={28}
              height={28}
              className="w-6 h-6 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
        ))}
      </div>

      {/* Main Brand Typography Section */}
      <div className="w-full flex items-center justify-center relative">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div
            style={{ width: "100%", position: "relative" }}
            className="h-[120px] sm:h-[160px] md:h-[190px] lg:h-[210px] flex items-center justify-center"
          >
            <TechText
              text="ANVESHAN"
              fontFamily={sketchBlock.style.fontFamily}
              fontWeight={600}
              fontSize={150}
              color="#FFBE0D"
              accentColor="#FFBE0D"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
            />
          </div>
          <Typography.Lead className="font-prompt text-xs sm:text-sm md:text-base text-white/70 mt-0 sm:mt-1 tracking-widest uppercase z-10">
            Bhagwan Parshuram Institute of Technology
          </Typography.Lead>
        </div>
      </div>

      {/* Footer Text */}
      <Typography.Lead className="text-xs sm:text-sm text-white/60 text-center mt-3 sm:mt-4">
        {FOOTER_TEXT}
      </Typography.Lead>
    </footer>
  );
}
