import React from 'react'
import Navbar from './components/navbar'
import TeamMain from './components/teamMain'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <main className='pt-16'>
        <TeamMain />
      </main>
    </div>
  )
}

export default App
