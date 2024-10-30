import React from 'react';

const YouTubeCard = ({ videoId }) => {
  return (
    <div className='mt-10'>
      <iframe
        className='sm:w-[420px] sm:h-[236px] xl:w-[560px] xl:h-[315px] rounded-md '
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
        style={{ zIndex: 10, position: 'relative' }}
      ></iframe>
    </div>
  );
};

export default YouTubeCard;
