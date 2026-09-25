"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { seniorCouncil, juniorCouncil, TeamMember } from "@/config/team";
import Typography from "../Typography";
import { Github, Linkedin, Code2, Globe } from "lucide-react";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"senior" | "junior">("senior");

  const members: TeamMember[] =
    activeTab === "senior" ? seniorCouncil : juniorCouncil;

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <Typography.Display className="font-sketch-block font-normal text-primary text-5xl sm:text-6xl md:text-7xl leading-tight">
          OUR TEAM
        </Typography.Display>
        <Typography.Lead className="font-prompt text-white/80 text-base sm:text-lg max-w-2xl mx-auto mt-2">
          Meet the minds and leaders powering Anveshan at BPIT.
        </Typography.Lead>

        {/* Tab Switcher */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setActiveTab("senior")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "senior"
                ? "bg-primary text-black font-bold shadow-lg"
                : "bg-[#1a1a1a] text-white/80 hover:bg-[#262626] hover:text-white border border-white/10"
            }`}
          >
            Senior Council
          </button>
          <button
            onClick={() => setActiveTab("junior")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "junior"
                ? "bg-primary text-black font-bold shadow-lg"
                : "bg-[#1a1a1a] text-white/80 hover:bg-[#262626] hover:text-white border border-white/10"
            }`}
          >
            Junior Council
          </button>
        </div>
      </div>

      {/* Members Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-[#141414] rounded-2xl border border-white/10 hover:border-primary/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 text-center"
            >
              {/* Profile Image with outline */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 mb-4 group-hover:scale-105 transition-transform duration-300 bg-[#1c1c1c]">
                <Image
                  src={member.image || '/assets/team-photos/avatar-placeholder.svg'}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 144px, 160px"
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <Typography.H3 className="font-sketch-block text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {member.name}
              </Typography.H3>
              {member.position && member.position !== "Junior Council" ? (
                <Typography.P className="text-sm font-medium text-white/70 mt-1 mb-4">
                  {member.position}
                </Typography.P>
              ) : (
                <div className="mb-4" />
              )}

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-auto pt-2 border-t border-white/10 w-full">
                {member.LinkedinLink && (
                  <Link
                    href={member.LinkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors p-1"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </Link>
                )}
                {member.GithubLink && (
                  <Link
                    href={member.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors p-1"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github size={18} />
                  </Link>
                )}
                {member.LeetcodeLink && (
                  <Link
                    href={member.LeetcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors p-1"
                    aria-label={`${member.name} LeetCode`}
                  >
                    <Code2 size={18} />
                  </Link>
                )}
                {member.CodolioLink && (
                  <Link
                    href={member.CodolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors p-1"
                    aria-label={`${member.name} Codolio`}
                  >
                    <Globe size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
