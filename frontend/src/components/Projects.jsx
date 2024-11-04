import React from 'react';
import Projectscard from '../cards/Project/Projectscard';
import ProjectCard2 from '../cards/Project/ProjectCard2';
import visual1 from '../assets/projects/Visual.png';
import visual2 from '../assets/projects/Visual 2.png';
import ProjectsData from '../data/ProjectsData';
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

function Projects({ limit }) {
  const projectsToDisplay = limit ? ProjectsData.slice(0, limit) : ProjectsData;

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="mt-5 pt-16 mb-12 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
            PROJECTS
          </h1>
          {projectsToDisplay.map((project, i) => (
            i % 2 === 0 && (
              <div key={i} className='flex flex-col'>
                <div className='flex space-x-5'>
                  <Projectscard vis={visual1} name={project.name} GithubRepo={project.GithubRepo} Deployment={project.Deployment} owner={project.owner} work={project.Work} description={project.description} />
                  <ProjectCard2 image={project.image} work={project.Work} description={project.description} />
                </div>
                {projectsToDisplay[i + 1] && (
                  <div className='flex space-x-5'>
                    <ProjectCard2 image={projectsToDisplay[i + 1].image} work={projectsToDisplay[i + 1].Work} description={projectsToDisplay[i + 1].description} />
                    <Projectscard vis={visual2} name={projectsToDisplay[i + 1].name} GithubRepo={projectsToDisplay[i + 1].GithubRepo} Deployment={projectsToDisplay[i + 1].Deployment} owner={projectsToDisplay[i + 1].owner} work={projectsToDisplay[i + 1].Work} description={projectsToDisplay[i + 1].description} />
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default Projects;
