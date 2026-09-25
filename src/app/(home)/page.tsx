"use client";
import React from "react";

import About from "@/components/about/about";
import AsciiLogger from "@/components/ASCII/ASCIIlog";
import { FaqList } from "@/components/faq/faq-list";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import Stats from "@/components/stats/stats";
import Testimonials from "@/components/testimonials/testimonials";
import { Timeline } from "@/components/timeline/timeline";
import ScrollMarquee from "@/components/ui/marquee";
import TeamSection from "@/components/team/team";
import ProjectsSection from "@/components/projects/projects";
import AchieversSection from "@/components/achievers/achievers";
import ContactSection from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />

      <div id="events">
        <Timeline />
      </div>

      <div className="bg-on-black">
        <Gallery />
      </div>
      <ScrollMarquee />

      <ProjectsSection />
      <ScrollMarquee />

      <TeamSection />
      <ScrollMarquee />

      <AchieversSection />

      <div className="bg-on-black">
        <Testimonials />
        <div className="py-20">
          <ScrollMarquee />
        </div>
        <FaqList />
      </div>
      <ScrollMarquee />

      <ContactSection />
      <AsciiLogger />
    </>
  );
}
