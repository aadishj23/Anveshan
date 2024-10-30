import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import YouTubeCard from '../../cards/youtubecard'

function TechStarter() {
  return (
    <div className="min-h-screen bg-black pb-10">
      <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          TECH STARTER 2K24
      </h1>
      <p className="text-white text-center mx-auto w-4/5 md:w-3/5">Tech Starter is Anveshan's month-long foundational cohort, specially designed to equip students with essential skills across core tech domains. Led by our Core Team members, this immersive program included hands-on sessions on HTML & CSS, Git and GitHub, JavaScript, C++, Java, and an Introduction to Data Structures and Algorithms.Each session was crafted to provide a practical, beginner-friendly approach, allowing students to build confidence and solidify their understanding of these foundational topics. Tech Starter empowers participants with the knowledge and skills they need to embark on their tech journeys, whether they're diving into web development, coding fundamentals, or programming logic.</p>
      <p className="text-gray-300 text-sm text-center mt-4">14-09-2024 to 17-10-2024</p>
      <h3 className=" pt-6 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-3xl md:text-5xl font-bold">
          SESSIONS
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 lg:px-16 justify-items-center'>
        <YouTubeCard videoId='9CgtsqE4zp8'/>
        <YouTubeCard videoId='FeQdu4G277s'/>
        <YouTubeCard videoId='YRV8HMhtEtI'/>
        <YouTubeCard videoId='poCevLxlVec'/>
        <YouTubeCard videoId='btuqoWA4Grg'/>
        <YouTubeCard videoId='XU8viBxXbJA'/>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default TechStarter