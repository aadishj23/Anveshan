import React from "react";
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import Image1 from '../../assets/event-photos/Meet Your Alumni/3.png'
import Image2 from '../../assets/event-photos/Meet Your Alumni/4.png'
import Image4 from '../../assets/event-photos/Meet Your Alumni/7.jpg'
import Image6 from '../../assets/event-photos/Meet Your Alumni/9.jpg'
import Image7 from '../../assets/event-photos/Meet Your Alumni/10.jpg'

function MeetAlumni() {
  return (
    <div className="min-h-screen bg-black">
      <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          MEET YOUR ALUMNI: SAWARNEE SETHI
      </h1>
      <p className="text-white text-center mx-auto w-4/5 md:w-3/5">Meet Your Alumni is a special event by Anveshan, designed to connect BPIT students with accomplished alumni for invaluable career guidance. Recently, we hosted Mr. Sawarnee Sethi, a Cloud Engineer at AWS, who shared his expertise on Internships and Placements.In this session, Mr. Sethi offered strategies for navigating the internship and placement process, preparing for interviews, and building a standout profile. With his firsthand industry insights, students gained practical knowledge on transitioning from academic life to a successful tech career.</p>
      <p className="text-gray-300 text-sm text-center mt-4">18-03-2024</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-16 space-y-8 justify-items-center items-center">
        <div className="col-span-1 md:row-span-2 flex justify-center">
          <img src={Image6} alt="image6" className="w-96 rounded-lg" />
        </div>
        <img src={Image1} alt="image1" className="w-96 rounded-lg" />
        <img src={Image2} alt="image2" className="w-96 rounded-lg" />
        <img src={Image7} alt="image7" className="w-96 rounded-lg" />
        <img src={Image4} alt="image4" className="w-96 rounded-lg" />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default MeetAlumni