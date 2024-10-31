import React from 'react';
import EventCard from '../cards/eventcard';
import EventsData from '../data/EventsData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../custom css/events.css';
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

function Events() {
  const events = EventsData.map((event) => (
    <EventCard
      key={event.id}
      title={event.name}
      description={event.description}
      date={event.date}
      photos={event.image}
    />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true, 
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px', 
        }
      }
    ]
  };

  return (
    <BackgroundBeamsWithCollision className="pb-16">
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="mt-5 pt-16 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
          EVENTS
        </h1>
        <div className="w-full max-w-7xl px-4 lg:px-0">
          <Slider {...settings} >
            {events}
          </Slider>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Events;