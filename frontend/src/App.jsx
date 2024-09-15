import React from 'react'
import Navbar from './components/navbar'
import TeamMain from './components/team';
import Home from './components/Home';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/contact';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

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
  }
])
  return (
    <div className='bg-gray-100 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
