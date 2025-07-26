import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiningCarousel = ({ dining }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    centerMode: true,
    centerPadding: '0', // Ensure no padding on the sides
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
          centerPadding: '20px', // Add padding on the sides for single slide
        },
      },
    ],
  };

  return (
    <div className="relative py-10 bg-gray-100 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {dining?.map((item, index) => (
            <div key={index} className="px-2 flex justify-center">
              <Link to="/dine">
                <div className="flex flex-col w-full max-w-xs md:max-w-sm lg:max-w-md h-auto group">
                  <div className="overflow-hidden rounded-lg relative cursor-pointer">
                    <img
                      src={item?.images[0]}
                      alt={item.description || "Event Image"}
                      className="w-full h-48 sm:h-[300px] object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-5 text-start px-2 md:px-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-gray-800 uppercase">
                        {item.name}
                      </p>
                      <span className="bg-yellow-400 text-white capitalize rounded-full px-3 py-1 text-sm font-medium">
                        {item.floor}&nbsp;
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.text}
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

export default DiningCarousel;
