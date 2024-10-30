import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import YouTubeCard from '../../cards/youtubecard'

function Technovation() {
  return (
    <div className="min-h-screen bg-black pb-10">
      <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          TECHNOVATION 2K23
      </h1>
      <p className="text-white text-center mx-auto w-4/5 md:w-3/5">Technovation is Anveshan's annual learning series, dedicated to igniting passion and sparking innovation in tech. Over the course of an immersive week, juniors have the unique opportunity to learn from experienced seniors and alumni across multiple domains, including App Development, Open Source, Machine Learning, Web Development, Cloud Computing, and DevOps.This event bridges the gap between theoretical knowledge and practical application, with sessions designed to provide hands-on experience, insider tips, and career guidance directly from those who've walked the path before. Technovation is a platform for juniors to explore emerging technologies, gain clarity on career paths, and connect with mentors who inspire growth and ambition.</p>
      <p className="text-gray-300 text-sm text-center mt-4">25-09-2023 to 29-09-2023</p>
      <h3 className=" pt-6 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-3xl md:text-5xl font-bold">
          SESSIONS
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 lg:px-16 justify-items-center'>
        <YouTubeCard videoId='q0fZjr9AmU8'/>
        <YouTubeCard videoId='2F5wlEWb7eg'/>
        <YouTubeCard videoId='TlcDLsYF5GI'/>
        <YouTubeCard videoId='RO-Hw-bm8WU'/>
        <div className='col-span-1 lg:col-span-2 flex justify-center'>
          <YouTubeCard videoId='s1Raan64Ses'/>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Technovation