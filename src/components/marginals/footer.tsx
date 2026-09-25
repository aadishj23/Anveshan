import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components";
import { FOOTER_TEXT, SOCIALS } from "@/config/marginals";

export default function Footer() {
  const leftSocials = SOCIALS.slice(0, 2);
  const rightSocials = SOCIALS.slice(2);

  return (
    <footer
      id="footer"
      className="relative w-full flex flex-col justify-end mt-24 md:mt-32 pb-8"
    >
      {/* Desktop Social Links */}
      <div className="hidden lg:flex w-full justify-center items-center gap-[20vw] mb-8">
        {/* Left Socials */}
        <div className="flex gap-6 lg:gap-8">
          {leftSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-black">
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
              className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-black">
                {social.name.toUpperCase()}
              </Typography.P>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="flex lg:hidden w-full justify-center items-center gap-8 mb-6">
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
            />
          </Link>
        ))}
      </div>

      {/* Main Brand Typography Section */}
      <div className="w-full flex items-center justify-center relative">
        <div className="relative flex flex-col items-center justify-center">
          <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[14vw] sm:text-[12vw] leading-none tracking-wider">
            ANVESHAN
          </Typography.Display>
          <Typography.Lead className="font-prompt text-xs sm:text-sm md:text-base text-black/70 -mt-2 tracking-widest uppercase">
            Bhagwan Parshuram Institute of Technology
          </Typography.Lead>
        </div>
      </div>

      {/* Footer Text */}
      <Typography.Lead className="text-xs sm:text-sm text-black/80 text-center mt-6">
        {FOOTER_TEXT}
      </Typography.Lead>
    </footer>
  );
}
