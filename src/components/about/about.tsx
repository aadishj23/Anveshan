"use client";
import React from "react";

import { TextReveal } from "@/components/ui/text-reveal";
import { aboutConfig } from "@/config/about";

const About: React.FC = () => {
  return (
    <section
      className="relative z-10 w-full mt-48 sm:mt-64 lg:mt-72"
      id="about"
    >
      <TextReveal className="text-white font-averta-std">
        {aboutConfig.description}
      </TextReveal>
    </section>
  );
};

export default About;

