"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import Typography from "../Typography";
import { ExternalLink, Github } from "lucide-react";

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
        <Typography.Lead className="font-prompt text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mt-2">
          Showcase of innovative software built and maintained by our community
          members.
        </Typography.Lead>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl border-2 border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Project Preview Image */}
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <Typography.H3 className="font-sketch-block text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {project.name}
                </Typography.H3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                  {project.Work}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {project.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Built by{" "}
                  <span className="font-medium text-gray-600">
                    {project.owner}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                {project.Deployment && (
                  <Link
                    href={project.Deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-primary text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Link>
                )}
                {project.GithubRepo && (
                  <Link
                    href={project.GithubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    aria-label={`${project.name} GitHub Repository`}
                  >
                    <Github size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
