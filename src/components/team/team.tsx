"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { seniorCouncil, juniorCouncil, TeamMember } from "@/config/team";
import Typography from "../Typography";
import { Github, Linkedin, Code2, Globe } from "lucide-react";
import TeamDivider from "./team-divider";

interface TeamCardProps {
  member: TeamMember;
  index: number;
  showPosition: boolean;
}

function TeamCard({ member, index, showPosition }: TeamCardProps) {
  // Alternating rest tilt: -1.5deg, 1.5deg, -1.2deg, 1.4deg, etc.
  const tilts = [-1.5, 1.5, -1.2, 1.4, -1.4, 1.2];
  const restTilt = tilts[index % tilts.length];

  return (
    <div className="group relative w-[250px] sm:w-[270px] select-none py-3">
      {/* Sliding bottom lip in Anveshan's signature Golden Yellow (#FFBE0D) */}
      <div className="absolute bottom-1 left-5 right-5 h-7 rounded-b-[1.75rem] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-2 pointer-events-none bg-primary shadow-xs" />

      {/* Main Architectural Drafting Card Body (Dark Grey matching Project Card) */}
      <div
        className="relative z-10 rounded-[2rem] p-4 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-gradient-to-b from-[#222222] to-[#181818] border-2 border-neutral-700/80 shadow-md group-hover:shadow-2xl group-hover:border-primary/60 group-hover:-translate-y-2 group-hover:!rotate-0 group-hover:scale-[1.02]"
        style={{
          transform: `rotate(${restTilt}deg)`,
        }}
      >
        {/* Photo Container - Square (1:1 ratio) with dark grey framing */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-800/80 border border-neutral-700/80 shadow-inner">
          <Image
            src={member.image || "/assets/team-photos/avatar-placeholder.svg"}
            alt={member.name}
            fill
            sizes="270px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Social Icons row + Blueprint Index */}
        <div className="flex items-center gap-2 mt-3 mb-2 min-h-[30px]">
          {member.LinkedinLink && (
            <Link
              href={member.LinkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-full bg-neutral-800/90 text-neutral-200 border border-neutral-700 transition-all duration-200 hover:scale-115 hover:bg-primary hover:text-black hover:border-primary flex items-center justify-center shadow-xs"
              title="LinkedIn"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin size={13} className="shrink-0" />
            </Link>
          )}

          {member.GithubLink && (
            <Link
              href={member.GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-full bg-neutral-800/90 text-neutral-200 border border-neutral-700 transition-all duration-200 hover:scale-115 hover:bg-primary hover:text-black hover:border-primary flex items-center justify-center shadow-xs"
              title="GitHub"
              aria-label={`${member.name} GitHub`}
            >
              <Github size={13} className="shrink-0" />
            </Link>
          )}

          {member.LeetcodeLink && (
            <Link
              href={member.LeetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-full bg-neutral-800/90 text-neutral-200 border border-neutral-700 transition-all duration-200 hover:scale-115 hover:bg-primary hover:text-black hover:border-primary flex items-center justify-center shadow-xs"
              title="LeetCode"
              aria-label={`${member.name} LeetCode`}
            >
              <Code2 size={13} className="shrink-0" />
            </Link>
          )}

          {member.CodolioLink && (
            <Link
              href={member.CodolioLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-full bg-neutral-800/90 text-neutral-200 border border-neutral-700 transition-all duration-200 hover:scale-115 hover:bg-primary hover:text-black hover:border-primary flex items-center justify-center shadow-xs"
              title="Codolio"
              aria-label={`${member.name} Codolio`}
            >
              <Globe size={13} className="shrink-0" />
            </Link>
          )}

          {/* Architectural Index Number */}
          <span className="ml-auto font-cabin-sketch text-xs font-bold text-neutral-400 group-hover:text-primary transition-colors tracking-wider select-none">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Heading & Description */}
        <div className="flex flex-col text-left mt-auto pt-1">
          <h3 className="font-sketch-block text-2xl font-bold tracking-tight leading-snug line-clamp-1 text-white group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          {showPosition && member.position && member.position !== "Junior Council" ? (
            <p className="text-xs sm:text-sm font-semibold mt-0.5 line-clamp-1 text-neutral-300 font-prompt">
              {member.position}
            </p>
          ) : (
            <div className="h-1" />
          )}
        </div>
      </div>
    </div>
  );
}
export default function TeamSection() {
  return (
    <div id="team-section" className="relative w-full text-neutral-900 pt-20 overflow-x-clip bg-white">
      {/* Exact grainy white page texture from original project (project-yogurt) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "var(--bg-img)",
          backgroundRepeat: "repeat",
          opacity: 0.4,
        }}
      />
      <div className="relative z-10">
        <section id="team" className="w-full">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12">
          <Typography.Display className="font-sketch-block font-normal text-neutral-950 text-5xl sm:text-6xl md:text-7xl leading-tight">
            OUR TEAM
          </Typography.Display>
          <Typography.Lead className="font-prompt text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto mt-2">
            Meet the minds and leaders powering Anveshan at BPIT.
          </Typography.Lead>

          {/* Council Selection Option - Commented out as requested; displaying both SC and JC by default */}
          {/*
          <div className="flex justify-center items-center gap-3 mt-8">
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-primary text-black font-bold shadow-md">
              All Councils
            </button>
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-neutral-100 text-neutral-700">
              Senior Council
            </button>
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-neutral-100 text-neutral-700">
              Junior Council
            </button>
          </div>
          */}
        </div>

        {/* Senior Council Auto-Scrolling Showcase */}
        <div className="w-full mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <h4 className="font-sketch-block text-xl sm:text-2xl font-bold text-neutral-900 tracking-wide">
                Senior Council
              </h4>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100/90 text-neutral-600 border border-neutral-200">
                {seniorCouncil.length} Leads
              </span>
            </div>
            <span className="text-xs font-medium text-neutral-500 hidden sm:inline-block">
              Hover to pause & connect
            </span>
          </div>

          {/* Marquee with scrollbars completely hidden */}
          <div className="w-full overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Marquee
              pauseOnHover={true}
              speed={36}
              gradient={false}
              autoFill={true}
              className="py-6 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {seniorCouncil.map((member, index) => (
                <div key={`sc-${member.id}`} className="px-3">
                  <TeamCard
                    member={member}
                    index={index}
                    showPosition={true}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Junior Council Auto-Scrolling Showcase */}
        <div className="w-full mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h4 className="font-sketch-block text-xl sm:text-2xl font-bold text-neutral-900 tracking-wide">
                Junior Council
              </h4>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100/90 text-neutral-600 border border-neutral-200">
                {juniorCouncil.length} Members
              </span>
            </div>
            <span className="text-xs font-medium text-neutral-500 hidden sm:inline-block">
              Hover to pause & connect
            </span>
          </div>

          {/* Marquee with scrollbars completely hidden */}
          <div className="w-full overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Marquee
              pauseOnHover={true}
              speed={32}
              direction="right"
              gradient={false}
              autoFill={true}
              className="py-6 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {juniorCouncil.map((member, index) => (
                <div key={`jc-${member.id}`} className="px-3">
                  <TeamCard
                    member={member}
                    index={index}
                    showPosition={false}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

        {/* Mountain Divider leading seamlessly into Hall of Fame */}
        <TeamDivider />
      </div>
    </div>
  );
}
