import React from 'react';
import EventCard from '../cards/eventcard';
import EventsData from '../data/EventsData';
import events_bg from '../assets/events_bg.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../custom css/corousel.css';

function Events() {
  const events = EventsData.map((event) => (
    <EventCard
      key={event.id}
      title={event.name}
      description={event.description}
      date={event.date}
      photos={event.image}
      // className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  };

  return (
    <div
      className="bg-cover bg-center p-4 min-h-screen flex flex-col items-center justify-center pb-20"
      style={{ backgroundImage: `url(${events_bg})` }}
    >
      <div className="inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="mt-5 pt-12 mb-12 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          EVENTS
        </h1>
        <div className="w-full max-w-7xl px-4 lg:px-0">
          <Slider {...settings} >
            {events}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Events;
