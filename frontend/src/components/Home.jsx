import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const words = "Anveshan is a premier technical society focused on providing personal mentorship to equip students with essential tech skills, knowledge, and hands-on experience. We cultivate a collaborative environment for innovation in areas such as Data Structures and Algorithms, Development, and emerging technologies. Our community, driven by curiosity and mentorship, supports learners at all levels, from beginners to advanced coders, promoting continuous growth and success.";

  return (
    <div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <h1 className="text-3xl sm:text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          Welcome to 
            <span className="text-yellow-400 font-bold">
              <Typewriter
                words={[' Anveshan']}
                loop={1}
                cursor
                typeSpeed={200}
                delaySpeed={1000}
              />
            </span>
        </h1>
        <p className="text-base text-black w-48 md:w-96 ml-auto mr-auto text-center sm:text-lg md:text-xl lg:text-2xl italic bg-white bg-opacity-50 px-4 py-2 rounded-lg shadow-md mb-20 mt-5 md:mt-10">
          {'<Powered By Code />'}
        </p>
        <p className="text-2xl w-full text-center md:w-3/5 block mr-auto ml-auto px-4 md:px-6">
          <TextGenerateEffect words={words} />
        </p>
      </motion.h1>
    </LampContainer>
    <ShootingStars />
    <StarsBackground />
    </div>
  );
}

export default Home;
