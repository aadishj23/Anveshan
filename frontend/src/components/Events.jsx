import React from 'react';
import EventCard from '../cards/eventcard';
import EventsData from '../data/EventsData';
import events_bg from '../assets/events_bg.png';

function Events() {
  const events = EventsData.map((event) => (
    <EventCard
      key={event.id}
      title={event.name}
      description={event.description}
      date={event.date}
      className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      // photos={[event.image]}
    />
  ));

  return (
    <div
      className="relative bg-cover bg-center p-4 min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${events_bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mt-5 pt-12 mb-12 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          EVENTS
        </h1>
        <div className="grid gap-6 max-w-6xl w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {events}
        </div>
      </div>
    </div>
  );
}

export default Events;
