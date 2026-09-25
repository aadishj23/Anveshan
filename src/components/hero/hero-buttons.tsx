"use client";

import Button from "@/components/ui/button";
import Typography from "../Typography";
import { Calendar, Users } from "lucide-react";

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
  if (type === "discord" || type === "contact") {
    handleScrollTo("contact");
  } else {
    handleScrollTo("events");
  }
}

export default function DevfolioAndDiscordButtons() {
  return (
    <div
      className={`relative z-40 flex flex-col mt-10 xs:mt-5 xs:flex-row justify-center w-full scale-90 items-center gap-4`}
    >
      <Button
        className={
          "h-14 lg:h-16 xs:mb-0.5 !px-8 min-w-[260px] my-auto flex flex-row items-center justify-center gap-3 cursor-pointer"
        }
        onClick={() => handleScrollTo("events")}
      >
        <Calendar className="size-6 text-white" />
        <Typography.P className="text-white !text-[1.10rem] md:!text-xl font-semibold text-center mb-0">
          Explore Events
        </Typography.P>
      </Button>

      <Button
        className={
          "h-14 lg:h-16 xs:mb-0.5 !px-8 min-w-[260px] my-auto flex flex-row items-center justify-center gap-3 cursor-pointer bg-neutral-900 border-neutral-700 hover:bg-neutral-800"
        }
        onClick={() => handleScrollTo("team")}
      >
        <Users className="size-6 text-white" />
        <Typography.P className="text-white !text-[1.10rem] md:!text-xl font-semibold text-center mb-0">
          Meet The Team
        </Typography.P>
      </Button>
    </div>
  );
}
