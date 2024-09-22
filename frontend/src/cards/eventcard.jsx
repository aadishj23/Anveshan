import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, description, date, photos }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center rounded overflow-hidden shadow-lg md:py-20 md:px-10">
      <div className="p-4 w-full md:w-3/5">
        <h2 className="text-orange-500 font-bold text-3xl md:text-4xl mb-2">{title}</h2>
        <p className="text-white mb-2">{description}</p>
        <p className="text-gray-300 text-sm">{date}</p>
        {/* <button 
          className="bg-orange-500 px-4 py-2 text-white rounded-md mt-5 font-medium hover:bg-orange-600 transition duration-300"
          onClick={()=>{
            navigate(`/events/${title}`)
          }}
        >
          View More
        </button> */}
      </div>
      <img 
        src={photos} 
        alt={`${title}'s photo`} 
        className="border-8 border-zinc-800 shadow-2xl shadow-orange-500 max-w-full md:max-w-sm h-auto mt-4 md:mt-0 md:ml-4 transition-transform duration-300 transform hover:scale-105" 
      />
    </div>
  );
};

export default EventCard;