import React from 'react';
import EventCard from '../cards/eventcard';
import EventsData from '../data/EventsData';
import events_bg from '../assets/events_bg.jpg';

function Events() {
  const events = EventsData.map((event) => (
    <EventCard
      key={event.id}
      title={event.name}
      description={event.description}
      date={event.date}
      className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      // photos={[event.image]}
    />
  ));

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${events_bg})` }}
    >
      <div className="flex flex-wrap gap-4 max-w-5xl w-full">
        {events}
      </div>
    </div>
  );
}

export default Events;