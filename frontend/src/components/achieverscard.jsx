import React from 'react'

function Achieverscard({ name, image,batch, role, exrole , achieve}) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
        <img
            className="w-64 h-64 object-cover rounded-t-lg"
            src={image}
            alt={`${name}'s photo`}
        />
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
            <p className="mt-2 text-lg text-gray-500">{batch}</p>
            <p className="mt-2 text-lg text-gray-500">{role}</p>
            {exrole && <p className="mt-2 text-lg text-gray-500">{`Ex- ${exrole}`}</p>}
            {achieve && <p className="mt-2 text-lg text-gray-500">{`Achievements: ${achieve}`}</p>}
        </div>
    </div>
  )
}

export default Achieverscard