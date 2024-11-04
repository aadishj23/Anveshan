import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventCard = ({ title, description, date, photos }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const maxLength = 250; // Adjust this value based on your needs
  
  const shouldShowReadMore = description.length > maxLength;
  const displayText = shouldShowReadMore && !isExpanded 
    ? `${description.slice(0, maxLength)}...` 
    : description;

  return (
    <div className="flex flex-col lg:flex-row items-center rounded-xl overflow-hidden shadow-2xl px-3 pb-3 md:py-20 md:px-10 bg-gradient-to-b from-neutral-800 to-neutral-600">
      <div className="p-4 w-full lg:w-3/5 text-center lg:text-left">
        <h2 className="text-orange-500 font-bold text-3xl md:text-4xl mb-5">{title}</h2>
        <p className="text-white mb-2">
          {displayText}
          {shouldShowReadMore && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-500 hover:text-orange-600 ml-2 underline"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        <p className="text-gray-300 text-sm">{date}</p>
        <button 
          className="bg-orange-500 px-4 py-2 text-white rounded-md mt-7 font-medium hover:bg-orange-600 transition duration-300"
          onClick={()=>{
            navigate(`/events/${title}`)
          }}
        >
          View More
        </button>
      </div>
      <Link to={`/events/${title}`}>
        <img 
          src={photos} 
          alt={`${title}'s photo`} 
          className="border-8 border-zinc-800 shadow-2xl shadow-black max-w-full md:max-w-sm h-auto mt-4 md:mt-0 md:ml-4 transition-transform duration-300 transform hover:scale-105 rounded-lg" 
        />
      </Link>
    </div>
  );
};

export default EventCard;