"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { achieversData } from "@/config/achievers";
import Typography from "../Typography";
import { Linkedin, Award, Briefcase } from "lucide-react";

export default function AchieversSection() {
  return (
    <section
      id="achievers"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <Typography.Display className="font-sketch-block font-normal text-primary text-5xl sm:text-6xl md:text-7xl leading-tight">
          HALL OF FAME
        </Typography.Display>
        <Typography.Lead className="font-prompt text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mt-2">
          Celebrating the exceptional placements, internships, and career
          milestones of our members.
        </Typography.Lead>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {achieversData.map((achiever) => (
          <div
            key={achiever.id}
            className="group bg-white rounded-2xl border-2 border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-6 text-center"
          >
            {/* Achiever Image */}
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-primary/20 mb-4 bg-gray-50 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={achiever.image}
                alt={achiever.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>

            <Typography.H3 className="font-sketch-block text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {achiever.name}
            </Typography.H3>
            <p className="text-xs text-gray-500 font-medium mb-3">
              Batch: {achiever.batch}
            </p>

            <div className="flex items-start justify-center gap-1.5 text-xs font-semibold text-gray-800 mb-2">
              <Briefcase size={14} className="text-primary shrink-0 mt-0.5" />
              <span>{achiever.role}</span>
            </div>

            {achiever.achievements && (
              <div className="flex items-start justify-center gap-1.5 text-xs text-amber-700 bg-amber-50 rounded-lg p-2 mb-2">
                <Award size={14} className="shrink-0 mt-0.5" />
                <span>{achiever.achievements}</span>
              </div>
            )}

            {achiever.exrole && (
              <p className="text-[11px] text-gray-500 mb-3">
                Ex: {achiever.exrole}
              </p>
            )}

            {/* LinkedIn Link */}
            {achiever.linkedin && (
              <div className="mt-auto pt-3 border-t border-gray-100 flex justify-center">
                <Link
                  href={achiever.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:text-blue-700 flex items-center gap-1"
                >
                  <Linkedin size={14} />
                  Connect
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
