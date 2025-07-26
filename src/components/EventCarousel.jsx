import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventCarousel = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Center mode enabled
    centerPadding: '0', // No padding on sides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true, // Center mode for single slide on mobile
          centerPadding: '20px', // Padding on sides for single slide on mobile
        },
      },
    ],
  };

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    if (events && events.length > 0) {
      const interval = setInterval(() => {
        setCurrentEventIndex(
          (prevIndex) => (prevIndex + 1) % events[currentEventIndex]?.images.length
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [events, currentEventIndex]);

  return (
    <div className="relative py-10 bg-gray-100 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {events?.slice(0,4)?.map((event, index) => (
            <div key={index} className="px-4 flex justify-center">
              <Link to="/events">
                <div className="flex flex-col items-center group">
                  <div className="max-w-[260px] max-h-52 sm:h-64 sm:min-w-[350px]  md:min-h-[310px] overflow-hidden rounded-lg relative cursor-pointer">
                    <img
                      src={
                        (event?.images[currentEventIndex]?.img)
                          ? event?.images[currentEventIndex]?.img
                          : event?.images[0]?.img
                      }
                      alt={event.description || "Event Image"}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-5 text-start w-full px-4">
                    <span className="bg-yellow-400 text-white rounded-full px-4 py-1 capitalize text-sm font-medium">
                      {event.eventType || "Event Type"}
                    </span>
                    <p className="text-md font-semibold text-gray-800 mt-3 capitalize">
                      {event.description.slice(0,110)+"..." || "Event Description"}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {event.eventDate?.split('T')[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventCarousel;
