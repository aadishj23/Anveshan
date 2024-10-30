import React from 'react'
import Navbar from './components/navbar'
import TeamMain from './components/team';
import Home from './components/Home';
import Events from './components/Events';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Contact from './components/contact';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import HackBPIT from './components/event components/HackBPIT';
import Fraz from './components/event components/Fraz';
import Google from './components/event components/Google';
import Gate from './components/event components/Gate';
import MeetAlumni from './components/event components/MeetAlumni';
import TechStarter from './components/event components/TechStarter';
import Technovation from './components/event components/Technovation';


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
        <Events />
        <TeamMain />
        {/* <Projects /> */}
        <Achievements />
        <Contact />
        <Footer />
      </div>
  },
  {
    path: "/team",
    element: 
    <div>
      <Navbar />
      <TeamMain />
      <Footer />
    </div>
  },
  {
    path: "/events",
    element: 
      <div>
        <Navbar />
        <Events />
        <Footer />
      </div>
  },
  // {
  //   path: "/projects",
  //   element: 
  //     <div>
  //       <Navbar />
  //       <Projects />
  //       <Footer />
  //     </div>
  // },
  {
    path: "/achievements",
    element: 
      <div>
        <Navbar />
        <Achievements />
        <Footer />
      </div>
  },
  // {
  //   path: "/blogs",
  //   element: 
  //     <div>
  //       <Navbar />
  //       <Blogs />
  //       <Footer />
  //     </div>
  // },
  {
    path: "/contact",
    element: 
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
  },
  {
    path: "/events/HackBPIT 2k23",
    element: 
      <div>
        <Navbar />
        <HackBPIT />
        <Footer />
      </div>
  },
  {
    path: "/events/Successful Engineer ft Fraz",
    element: 
      <div>
        <Navbar />
        <Fraz />
        <Footer />
      </div>
  },
  {
    path: "/events/Placements @Google",
    element: 
      <div>
        <Navbar />
        <Google />
        <Footer />
      </div>
  },
  {
    path: "/events/Cracking Gate by Unacademy",
    element: 
      <div>
        <Navbar />
        <Gate />
        <Footer />
      </div>
  },
  {
    path: "/events/Meet Your Alumni: Sawarnee Sethi",
    element: 
      <div>
        <Navbar />
        <MeetAlumni />
        <Footer />
      </div>
  },
  {
    path: "/events/Tech Starter 2k24",
    element: 
      <div>
        <Navbar />
        <TechStarter />
        <Footer />
      </div>
  },
  {
    path: "/events/Technovation 2k23",
    element: 
      <div>
        <Navbar />
        <Technovation />
        <Footer />
      </div>
  },
  {
    path: '*', 
    element: <Navigate to="/" replace />
  }
])
  return (
    <div className='bg-gray-100 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
