import React from 'react'
import Navbar from './components/navbar'
import TeamMain from './components/team';
import Home from './components/Home';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/contact';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: "/team",
    element: 
    <div>
      <Navbar />
      <main className='pt-16'>
        <TeamMain />
      </main>
    </div>
  },
  {
    path: "/events",
    element: 
      <div>
        <Navbar />
        <Events />
      </div>
  },
  {
    path: "/achievements",
    element: 
      <div>
        <Navbar />
        <Achievements />
      </div>
  },
  {
    path: "/contact",
    element: 
      <div>
        <Navbar />
        <Contact />
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
