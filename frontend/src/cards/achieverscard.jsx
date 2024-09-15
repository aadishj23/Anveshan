import React from 'react'
import person_card from '../assets/person_card.png'

function Achieverscard({ name, image,batch, role, exrole , achieve}) {
  return (
    <div className="max-w-sm rounded-lg shadow-2xl shadow-zinc-700 hover:shadow-lg hover:shadow-zinc-600 transition-shadow duration-300 transform hover:scale-105" style={{ backgroundImage: `url(${person_card})` }}>
        <img
            className="w-80 h-64 object-cover rounded-t-lg p-2"
            src={image}
            alt={`${name}'s photo`}
        />
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-lg text-white">{batch}</p>
            <p className=" max-w-64 mt-2 text-lg text-white">{role}</p>
            {exrole && <p className=" max-w-64 mt-2 text-lg text-white">{`Ex- ${exrole}`}</p>}
            {achieve && <p className="max-w-64 mt-2 text-lg text-white">{achieve}</p>}
        </div>
    </div>
  )
}

export default Achieverscard