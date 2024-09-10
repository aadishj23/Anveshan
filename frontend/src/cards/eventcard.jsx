import React from 'react';

const EventCard = ({ title, description, date, photos }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 bg-white">
      <div className="p-4">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>

      {/* <div className="grid grid-cols-3 gap-2 p-4">
        {photos.map((photo, index) => (
          <img 
            key={index} 
            src={photo} 
            alt={`Event photo ${index + 1}`} 
            className="w-full h-24 object-cover rounded-md"
          />
        ))}
      </div> */}
    </div>
  );
};

export default EventCard;