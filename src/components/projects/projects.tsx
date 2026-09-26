"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import Typography from "../Typography";
import FlipCard from "../ui/flip-card";
import { ExternalLink, Github, RotateCw } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <Typography.Display className="font-sketch-block font-normal text-primary text-5xl sm:text-6xl md:text-7xl leading-tight">
          PROJECTS
        </Typography.Display>
        <Typography.Lead className="font-prompt text-white/80 text-base sm:text-lg max-w-2xl mx-auto mt-2">
          Showcase of innovative software built and maintained by our community
          members. Click or drag any card to preview the project screenshot.
        </Typography.Lead>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="w-full">
            <FlipCard
              width="100%"
              height={480}
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
              className="w-full group"
              front={
                <div className="relative p-6 pt-5 pb-5 h-full flex flex-col justify-between bg-gradient-to-b from-[#181818] to-[#121212] select-none rounded-[18px]">
                  <div>
                    {/* Header: Category Eyebrow & Subtle Flip Hint */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-cabin-sketch text-xs tracking-[0.16em] uppercase text-primary font-bold">
                        // {project.Work}
                      </span>
                      <span className="font-cabin-sketch text-xs text-neutral-400 group-hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider select-none shrink-0">
                        <RotateCw size={11} className="transition-transform duration-500 group-hover:rotate-180" />
                        flip
                      </span>
                    </div>

                    {/* Title with Hand-Drawn Scribble Underline */}
                    <div className="mt-2">
                      <Typography.H3 className="font-sketch-block text-3xl sm:text-4xl text-white group-hover:text-primary transition-colors tracking-wide">
                        {project.name}
                      </Typography.H3>
                      <svg
                        className="w-full max-w-[210px] h-3 my-1.5 text-primary/80 overflow-visible"
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
                    <div className="relative pl-3 my-3 border-l-2 border-[#FFBE0D]/50">
                      <p className="text-sm text-neutral-300 font-averta-std leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Owner in Sketch Font */}
                    <div className="flex items-center gap-2 mt-3">
                      <span className="font-cabin-sketch text-xs uppercase tracking-wider text-neutral-400">
                        Sketch by:
                      </span>
                      <span className="font-cabin-sketch text-base font-bold text-white tracking-wide underline decoration-wavy decoration-[#FFBE0D]/70">
                        {project.owner}
                      </span>
                    </div>
                  </div>

                  {/* Footer Action Buttons & Flip Hint */}
                  <div className="pt-3 border-t border-neutral-800">
                    <div className="flex items-center gap-3">
                      {project.Deployment && (
                        <Link
                          href={project.Deployment}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 px-4 bg-primary text-black font-cabin-sketch text-base font-bold tracking-wider uppercase border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] flex items-center justify-center gap-1.5 transition-all"
                        >
                          <ExternalLink size={15} strokeWidth={2.5} />
                          Live Demo
                        </Link>
                      )}
                      {project.GithubRepo && (
                        <Link
                          href={project.GithubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 bg-neutral-900 text-neutral-200 border-2 border-neutral-700 rounded-lg shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:border-primary hover:text-white transition-all"
                          aria-label={`${project.name} GitHub Repository`}
                        >
                          <Github size={18} strokeWidth={2} />
                        </Link>
                      )}
                    </div>
                    <div className="text-center mt-2.5 flex items-center justify-center gap-2">
                      <span className="text-[#FFBE0D] text-xs">✎</span>
                      <span className="font-cabin-sketch text-xs text-neutral-400 tracking-widest uppercase">
                        CLICK OR DRAG TO REVEAL SCREENSHOT
                      </span>
                      <span className="text-[#FFBE0D] text-xs">✎</span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="relative w-full h-full bg-[#141414] overflow-hidden flex flex-col justify-between select-none p-5 rounded-[18px]">
                  {/* Top Bar: Category Eyebrow, Title & Flip back button */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="truncate max-w-[70%]">
                      <span className="font-cabin-sketch text-[10px] tracking-[0.16em] uppercase text-primary font-bold block">
                        // {project.Work}
                      </span>
                      <span className="font-sketch-block text-xl font-bold text-white truncate block">
                        {project.name}
                      </span>
                    </div>
                    <span className="font-cabin-sketch text-xs font-bold text-black bg-primary px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-1 shrink-0">
                      <RotateCw size={11} strokeWidth={2.5} /> Flip back
                    </span>
                  </div>

                  {/* Framed Project Screenshot (flex-1 min-h-0 prevents bottom overflow) */}
                  <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden border border-neutral-700/80 bg-black my-1">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom Action Bar: Always fully visible and comfortable */}
                  <div className="pt-3 border-t border-neutral-800 mt-2">
                    <div className="flex items-center gap-2">
                      {project.Deployment && (
                        <Link
                          href={project.Deployment}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 px-3 bg-primary text-black font-cabin-sketch text-sm font-bold tracking-wider uppercase border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] flex items-center justify-center gap-1.5 transition-all"
                        >
                          <ExternalLink size={14} strokeWidth={2.5} />
                          Live Demo
                        </Link>
                      )}
                      {project.GithubRepo && (
                        <Link
                          href={project.GithubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-neutral-900 border-2 border-neutral-700 rounded-lg text-white shadow-[2px_2px_0px_0px_#000000] hover:border-primary transition-all"
                          aria-label={`${project.name} GitHub Repository`}
                        >
                          <Github size={16} strokeWidth={2} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
