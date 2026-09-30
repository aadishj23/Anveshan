"use client";

import Typography from "../Typography";
import { Calendar, ExternalLink, Trophy } from "lucide-react";

export function handleScrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}

export function handleRedirect(type: string) {
  if (type === "reforged") {
    window.open(
      "https://reforged.anveshan.dev",
      "_blank",
      "noopener,noreferrer",
    );
  } else if (type === "discord" || type === "contact") {
    handleScrollTo("contact");
  } else {
    handleScrollTo("events");
  }
}

export default function DevfolioAndDiscordButtons() {
  return (
    <div
      className={`relative z-40 flex flex-col mt-10 xs:mt-5 xs:flex-row justify-center w-full scale-90 items-center gap-4 sm:gap-6`}
    >
      <button
        className="group h-14 sm:h-16 lg:h-18 px-8 sm:px-10 min-w-[270px] sm:min-w-[300px] my-auto flex flex-row items-center justify-center gap-3.5 cursor-pointer bg-primary text-black font-bold rounded-2xl border-2 border-[#c79200] shadow-[4px_4px_0px_0px_#8a6500] hover:shadow-[6px_6px_0px_0px_#8a6500] hover:-translate-y-1 active:translate-y-0.5 hover:brightness-105 transition-all duration-200 select-none"
        onClick={() => handleScrollTo("events")}
      >
        <Calendar className="size-6 sm:size-7 text-black shrink-0 group-hover:scale-110 transition-transform duration-200" />
        <Typography.P className="text-black !text-xl sm:!text-2xl font-bold text-center mb-0 tracking-wide">
          Explore Events
        </Typography.P>
      </button>

      <button
        className="group h-14 sm:h-16 lg:h-18 px-8 sm:px-10 min-w-[270px] sm:min-w-[300px] my-auto flex flex-row items-center justify-center gap-3.5 cursor-pointer bg-[#202020] hover:bg-[#2a2618] text-white font-bold rounded-2xl border-2 border-neutral-600 hover:border-[#FFBE0D] shadow-[4px_4px_0px_0px_#000000] hover:shadow-[0_0_30px_rgba(255,190,13,0.35),4px_4px_0px_0px_#FFBE0D] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 select-none"
        onClick={() =>
          window.open(
            "https://reforged.anveshan.dev",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <Trophy className="size-6 sm:size-7 text-[#FFBE0D] shrink-0 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300" />
        <Typography.P className="text-white !text-xl sm:!text-2xl font-bold text-center mb-0 tracking-wide">
          Reforged
        </Typography.P>
        <ExternalLink className="size-4 sm:size-5 text-neutral-400 group-hover:text-[#FFBE0D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
      </button>
    </div>
  );
}
