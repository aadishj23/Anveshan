import React from 'react';
import bg_orange from '../assets/bg_home.png'

function Home() {
  return (
    <div 
      className="flex flex-col justify-center items-center h-screen  px-4 sm:px-8 md:px-16 lg:px-24 bg-cover" 
      style={{ backgroundImage: `url(${bg_orange})`}}
    >
      <h1 className="text-3xl sm:text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
        Welcome to <span className='text-yellow-300'>Anveshan</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic bg-white bg-opacity-50 px-4 py-2 rounded-lg shadow-md">
        {'<Powered By Code />'}
      </p>
    </div>
  );
}

export default Home;
