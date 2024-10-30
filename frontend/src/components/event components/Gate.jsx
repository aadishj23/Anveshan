import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import Image1 from '../../assets/event-photos/Gate Session by Unacademy/image copy.png'
import Image2 from '../../assets/event-photos/Gate Session by Unacademy/image.png'
import Image3 from '../../assets/event-photos/Gate Session by Unacademy/Image3.jpg'

function Gate() {
  return (
    <div className="min-h-screen bg-black">
      <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          CRACKING GATE BY UNACADEMY
      </h1>
      <p className="text-white text-center mx-auto w-4/5 md:w-3/5">Anveshan, in collaboration with Unacademy, hosted a focused session on GATE Preparation led by Mr. Gurupal Singh Chawla, a renowned GATE educator at Unacademy. This event provided students with essential insights into the GATE examination, covering preparation strategies, study resources, and tips for excelling in one of the most competitive exams in India.Mr. Chawla shared his expertise on effective time management, key areas to focus on, and how to approach complex topics, giving attendees a solid foundation for their GATE journey. The session was an excellent opportunity for students to gain guidance from a leading educator and enhance their preparation approach.</p>
      <p className="text-gray-300 text-sm text-center mt-4">28-03-2023</p>
      <div className="grid grid-cols-1 md:grid-cols-2  p-5 md:p-10 lg:p-16 space-y-8 justify-items-center items-center">
        <img src={Image1} alt="image1" className="w-96 rounded-lg" />
        <div className="col-span-1 md:row-span-2 flex justify-center">
          <img src={Image3} alt="image3" className="w-96 rounded-lg" />
        </div>
        <img src={Image2} alt="image2" className="w-96 rounded-lg" />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Gate