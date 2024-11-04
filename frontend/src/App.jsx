import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import TeamMain from './components/team';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Contact from './components/contact';
import HackBPIT from './components/event components/HackBPIT';
import Fraz from './components/event components/Fraz';
import Google from './components/event components/Google';
import Gate from './components/event components/Gate';
import MeetAlumni from './components/event components/MeetAlumni';
import TechStarter from './components/event components/TechStarter';
import Technovation from './components/event components/Technovation';
import Layout from './Layout'; 

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
          <Events />
          <TeamMain />
          <Projects limit={3}/>
          <Achievements />
          {/* <Blogs /> */}
          <Contact />
        </Layout>
      ),
    },
    {
      path: '/team',
      element: (
        <Layout>
          <TeamMain />
        </Layout>
      ),
    },
    {
      path: '/events',
      element: (
        <Layout>
          <Events />
        </Layout>
      ),
    },
    {
      path: '/projects',
      element: (
        <Layout>
          <Projects />
        </Layout>
      ),
    },
    {
      path: '/achievements',
      element: (
        <Layout>
          <Achievements />
        </Layout>
      ),
    },
    // {
    //   path: '/blogs',
    //   element: (
    //     <Layout>
    //       <Blogs />
    //     </Layout>
    //   ),
    // },
    {
      path: '/contact',
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: '/events/HackBPIT 2k23',
      element: (
        <Layout>
          <HackBPIT />
        </Layout>
      ),
    },
    {
      path: '/events/Successful Engineer ft Fraz',
      element: (
        <Layout>
          <Fraz />
        </Layout>
      ),
    },
    {
      path: '/events/Placements @Google',
      element: (
        <Layout>
          <Google />
        </Layout>
      ),
    },
    {
      path: '/events/Cracking Gate by Unacademy',
      element: (
        <Layout>
          <Gate />
        </Layout>
      ),
    },
    {
      path: '/events/Meet Your Alumni: Sawarnee Sethi',
      element: (
        <Layout>
          <MeetAlumni />
        </Layout>
      ),
    },
    {
      path: '/events/Tech Starter 2k24',
      element: (
        <Layout>
          <TechStarter />
        </Layout>
      ),
    },
    {
      path: '/events/Technovation 2k23',
      element: (
        <Layout>
          <Technovation />
        </Layout>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;