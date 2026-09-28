"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import Typography from "../Typography";
import FlipCard from "../ui/flip-card";
import { ExternalLink, Github, RotateCw, ChevronDown } from "lucide-react";

export default function ProjectsSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      <div className="text-center mb-8 sm:mb-12">
        <Typography.Display className="font-sketch-block font-normal text-primary text-4xl sm:text-6xl md:text-7xl leading-tight">
          PROJECTS
        </Typography.Display>
        <Typography.Lead className="font-prompt text-white/80 text-sm sm:text-lg max-w-2xl mx-auto mt-2 px-2">
          Showcase of innovative software built and maintained by our community
          members. Click or drag any card to preview the project screenshot.
        </Typography.Lead>
      </div>

      {/* Grid: 2 projects per row on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {projectsData.map((project, index) => {
          const isHiddenOnMobile = index >= 4 && !showAllMobile;

          return (
            <div
              key={project.id}
              className={`w-full ${isHiddenOnMobile ? "hidden lg:block" : "block"}`}
            >
              <FlipCard
                width="100%"
                height={490}
                radius={18}
                background="#141414"
                color="#f5f5f5"
                tilt={true}
                tiltMax={6}
                glare={false}
                hoverScale={1.02}
                perspective={1200}
                stiffness={160}
                damping={18}
                shadow={true}
                className="w-full group !h-[260px] sm:!h-[380px] lg:!h-[490px]"
                front={
                  <div className="relative p-2.5 sm:p-4 lg:p-5 pt-2.5 sm:pt-4 pb-2 sm:pb-4 h-full flex flex-col justify-between bg-gradient-to-b from-[#181818] to-[#121212] select-none rounded-[18px]">
                    <div>
                      {/* Header: Category Eyebrow & Subtle Flip Hint */}
                      <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1.5">
                        <span className="font-cabin-sketch text-[8px] sm:text-xs tracking-wider uppercase text-primary font-bold truncate max-w-[80%]">
                          // {project.Work}
                        </span>
                        <span className="font-cabin-sketch text-[8px] sm:text-xs text-neutral-400 group-hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider select-none shrink-0">
                          <RotateCw size={9} className="transition-transform duration-500 group-hover:rotate-180" />
                          <span className="hidden sm:inline">flip</span>
                        </span>
                      </div>

                      {/* Title with Hand-Drawn Scribble Underline */}
                      <div className="mt-0.5">
                        <Typography.H3 className="font-sketch-block text-sm sm:text-2xl lg:text-2xl xl:text-3xl text-white group-hover:text-primary transition-colors tracking-wide leading-tight line-clamp-1 sm:line-clamp-2">
                          {project.name}
                        </Typography.H3>
                        <svg
                          className="w-full max-w-[90px] sm:max-w-[180px] h-1.5 sm:h-2.5 my-0.5 sm:my-1 text-primary/80 overflow-visible"
                          viewBox="0 0 200 10"
                          fill="none"
                        >
                          <path
                            d="M 2 5 Q 50 1, 100 6 T 198 4"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Description with Sketchy Left Margin Rule */}
                      <div className="relative pl-1.5 sm:pl-3 my-1 sm:my-2.5 border-l-2 border-[#FFBE0D]/50">
                        <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-300 font-averta-std leading-tight line-clamp-2 sm:line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Owner in Sketch Font */}
                      <div className="flex items-center gap-1 mt-0.5 sm:mt-2">
                        <span className="font-cabin-sketch text-[8px] sm:text-xs uppercase tracking-wider text-neutral-400">
                          Sketch by:
                        </span>
                        <span className="font-cabin-sketch text-[10px] sm:text-sm lg:text-base font-bold text-white tracking-wide underline decoration-wavy decoration-[#FFBE0D]/70 truncate">
                          {project.owner}
                        </span>
                      </div>
                    </div>

                    {/* Footer Action Buttons & Flip Hint */}
                    <div className="pt-1.5 sm:pt-2.5 border-t border-neutral-800">
                      <div className="flex items-center gap-1.5 sm:gap-2.5">
                        {project.Deployment && (
                          <Link
                            href={project.Deployment}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 py-1 sm:py-2 px-1.5 sm:px-3 bg-primary text-black font-cabin-sketch text-[11px] sm:text-sm font-bold tracking-wider uppercase border border-black sm:border-2 rounded-lg shadow-[1px_1px_0px_0px_#000000] sm:shadow-[2px_2px_0px_0px_#000000] hover:shadow-none active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-1 transition-all"
                          >
                            <ExternalLink size={11} strokeWidth={2.5} />
                            <span className="truncate">Demo</span>
                          </Link>
                        )}
                        {project.GithubRepo && (
                          <Link
                            href={project.GithubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 sm:p-2 bg-neutral-900 text-neutral-200 border border-neutral-700 sm:border-2 rounded-lg shadow-[1px_1px_0px_0px_#000000] sm:shadow-[2px_2px_0px_0px_#000000] hover:border-primary hover:text-white transition-all shrink-0"
                            aria-label={`${project.name} GitHub Repository`}
                          >
                            <Github size={12} strokeWidth={2} />
                          </Link>
                        )}
                      </div>
                      <div className="text-center mt-0.5 sm:mt-1.5 flex items-center justify-center gap-1">
                        <span className="text-[#FFBE0D] text-[7px] sm:text-[10px]">✎</span>
                        <span className="font-cabin-sketch text-[7px] sm:text-[10px] text-neutral-400 tracking-wider uppercase">
                          CLICK TO FLIP
                        </span>
                        <span className="text-[#FFBE0D] text-[7px] sm:text-[10px]">✎</span>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="relative w-full h-full bg-[#141414] overflow-hidden flex flex-col justify-between select-none p-2.5 sm:p-4 rounded-[18px]">
                    {/* Top Bar: Category Eyebrow, Title & Flip back button */}
                    <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-2">
                      <div className="truncate max-w-[65%]">
                        <span className="font-cabin-sketch text-[8px] sm:text-[10px] tracking-wider uppercase text-primary font-bold block truncate">
                          // {project.Work}
                        </span>
                        <span className="font-sketch-block text-[11px] sm:text-base lg:text-lg font-bold text-white truncate block">
                          {project.name}
                        </span>
                      </div>
                      <span className="font-cabin-sketch text-[8px] sm:text-xs font-bold text-black bg-primary px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-black sm:border-2 shadow-[1px_1px_0px_0px_#000] flex items-center gap-1 shrink-0">
                        <RotateCw size={8} strokeWidth={2.5} /> <span className="hidden sm:inline">Flip back</span><span className="sm:hidden">Back</span>
                      </span>
                    </div>

                    {/* Framed Project Screenshot */}
                    <div className="relative flex-1 min-h-0 rounded-lg sm:rounded-xl overflow-hidden border border-neutral-700/80 bg-black my-1">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-1 sm:pt-2 border-t border-neutral-800 mt-0.5 sm:mt-1">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {project.Deployment && (
                          <Link
                            href={project.Deployment}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 py-1 sm:py-1.5 px-1.5 sm:px-3 bg-primary text-black font-cabin-sketch text-[11px] sm:text-sm font-bold tracking-wider uppercase border border-black sm:border-2 rounded-lg shadow-[1px_1px_0px_0px_#000000] sm:shadow-[2px_2px_0px_0px_#000000] hover:shadow-none active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-1 transition-all"
                          >
                            <ExternalLink size={11} strokeWidth={2.5} />
                            <span className="truncate">Demo</span>
                          </Link>
                        )}
                        {project.GithubRepo && (
                          <Link
                            href={project.GithubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 sm:p-1.5 bg-neutral-900 border border-neutral-700 sm:border-2 rounded-lg text-white shadow-[1px_1px_0px_0px_#000000] sm:shadow-[2px_2px_0px_0px_#000000] hover:border-primary transition-all shrink-0"
                            aria-label={`${project.name} GitHub Repository`}
                          >
                            <Github size={12} strokeWidth={2} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>

      {/* View More / View Less button specifically for phone & tablet screens */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:hidden">
        <button
          onClick={() => setShowAllMobile(!showAllMobile)}
          className="px-5 py-2 rounded-xl bg-[#141414] border-2 border-neutral-700 hover:border-primary text-white hover:text-primary font-cabin-sketch text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          aria-expanded={showAllMobile}
        >
          <span>{showAllMobile ? "View Less Projects" : "View More Projects"}</span>
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${
              showAllMobile ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
}
