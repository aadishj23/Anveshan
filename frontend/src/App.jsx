import React from 'react'
import Navbar from './components/navbar'
import TeamMain from './components/team';
import Home from './components/Home';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/contact';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HackBPIT from './event components/HackBPIT';
import Fraz from './event components/Fraz';
import Google from './event components/Google';
import Gate from './event components/Gate';
import MeetAlumni from './event components/MeetAlumni';
import TechStarter from './event components/TechStarter';
import Technovation from './event components/Technovation';


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
        <Events />
        <TeamMain />
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
  {
    path: "/achievements",
    element: 
      <div>
        <Navbar />
        <Achievements />
        <Footer />
      </div>
  },
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
        {/* <Navbar /> */}
        <HackBPIT />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Succesfull Engineer ft Fraz",
    element: 
      <div>
        {/* <Navbar /> */}
        <Fraz />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Placements @Google",
    element: 
      <div>
        {/* <Navbar /> */}
        <Google />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Cracking Gate by Unacademy",
    element: 
      <div>
        {/* <Navbar /> */}
        <Gate />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Meet Your Alumni: Sawarnee Sethi",
    element: 
      <div>
        {/* <Navbar /> */}
        <MeetAlumni />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Tech Starter 2k24",
    element: 
      <div>
        {/* <Navbar /> */}
        <TechStarter />
        {/* <Footer /> */}
      </div>
  },
  {
    path: "/events/Technovation 2k23",
    element: 
      <div>
        {/* <Navbar /> */}
        <Technovation />
        {/* <Footer /> */}
      </div>
  }
])
  return (
    <div className='bg-gray-100 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
