"use client";
import React, { useEffect } from "react";

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#testimonials" || hash === "#testiminials") {
        window.history.replaceState(null, "", "/#events");
        const element = document.getElementById("events");
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - 80,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Stats />

      <div id="timeline">
        <Timeline />
      </div>

      <div className="bg-on-black">
        <Gallery />
      </div>
      <ScrollMarquee />

      <ProjectsSection />
      <ScrollMarquee />

      <TeamSection />

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
