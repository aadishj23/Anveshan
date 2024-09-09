import React from 'react'
import Achieverscard from './achieverscard'
import AchieversData from '../data/AchieversData'

function Achievements() {

  const achievers = AchieversData.map((member) => {
    return (
      <Achieverscard
        key={member.id}
        name={member.name}
        batch={member.batch}
        role={member.role}
        exrole={member.exrole}
        achieve={member.achievements}
        image={member.image}
      />
    )
  })

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <h1 className='text-5xl font-bold text-center mb-4 text-gray-800'>Achievers</h1>
          <p className='text-lg text-gray-600 text-center mb-10'>
            Meet the proud achievers of Anveshan
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center text-center'>
            {achievers}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements