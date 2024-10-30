import React from 'react'
import Projectscard from '../cards/Project/Projectscard'
import ProjectCard2 from '../cards/Project/ProjectCard2'
import visual1 from '../assets/projects/Visual.png'
import visual2 from '../assets/projects/Visual 2.png'
import ProjectsData from '../data/ProjectsData'
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

function Projects() {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <h1 className="mt-5 pt-12 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          PROJECTS
        </h1>
        <Projectscard vis={visual1} name={ProjectsData[0].name} GithubRepo={ProjectsData[0].name}  Deployment= {ProjectsData[0].name} owner={ProjectsData[0].owner} />
        <ProjectCard2 />
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Projects