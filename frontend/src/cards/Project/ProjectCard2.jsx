import React from 'react'

function ProjectCard2() {
  return (
    <div className='text-white border'>
         <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-transparent to-transparent"></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Title Here</h1>
          <p className="text-lg md:text-xl">Description or subtitle goes here.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard2