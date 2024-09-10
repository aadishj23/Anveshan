import React from 'react'

function TeamCard({ name, position, image }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <img
                className="w-64 h-64 object-cover rounded-t-lg"
                src={image}
                alt={`${name}'s photo`}
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                {position && (
                    <p className="mt-2 text-lg text-gray-500">{position}</p>
                )}
            </div>
        </div>
    )
}

export default TeamCard
