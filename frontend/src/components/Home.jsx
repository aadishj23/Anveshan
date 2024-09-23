import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div>
    <LampContainer >
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
                typeSpeed={100}
                delaySpeed={1000}
              />
            </span>
        </h1>
        <p className="text-base text-black w-48 md:w-96 ml-auto mr-auto text-center sm:text-lg md:text-xl lg:text-2xl italic bg-white bg-opacity-50 px-4 py-2 rounded-lg shadow-md mb-20 mt-5 md:mt-10">
          {'<Powered By Code />'}
        </p>
        <p className="text-2xl w-full text-center md:w-3/5 block mr-auto ml-auto p-6">
          Anveshan is the community where focus is on your growth and learning via persoalized mentorship and support theroughout your journey. At Anveshan, we believe in the power of community and the impact it can have on your learning journey. We are here to help you grow and learn in the best possible way.
        </p>
      </motion.h1>
    </LampContainer>
    <ShootingStars />
    <StarsBackground />
    </div>
  );
}

export default Home;
