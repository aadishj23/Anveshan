import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
        Welcome to <span className="text-yellow-300">Anveshan</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic bg-black bg-opacity-20 px-4 py-2 rounded-lg shadow-md">
        {'<Powered By Code />'}
      </p>
    </div>
  );
}

export default Home;
