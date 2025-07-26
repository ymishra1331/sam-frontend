import FormTemplate from "../components/FormTemplate"
import { IoIosPerson } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';


import TwoWheeler from '../assets/Advertising/2wheeler.webp';
import TwoWheeler2 from '../assets/Advertising/2wheelereplaza.webp';
import FourWheeler from '../assets/Advertising/4wheeler.webp';
import Dangler from '../assets/Advertising/dangler.webp';
import DigitalLed from '../assets/Advertising/digitalled.webp';
import DigitalLed2 from '../assets/Advertising/horizontalDisplay.webp';
import DigitalLed3 from '../assets/Advertising/digitalscreen.webp';
import FloorWall from '../assets/Advertising/floorwall.webp';
import FrontFascade from '../assets/Advertising/frontfascade.webp';
import FrontFascade2 from '../assets/Advertising/frontfascade2.webp';
import FrontLitBoard from '../assets/Advertising/frontlitboard.webp';
import FrontLitBoard2 from '../assets/Advertising/frontlitboard2floor.webp';
import FrontLitBoard3 from '../assets/Advertising/frontlitboard3.webp';
import FrontLitBoard4 from '../assets/Advertising/frontlitboard4.webp';
import FrontLitBoard5 from '../assets/Advertising/frontlitboardartium.webp';
import FrontLitBoard6 from '../assets/Advertising/frontlitboardff.webp';
import OnFloor from '../assets/Advertising/onfloor.webp';
import Translit from '../assets/Advertising/translit.webp';

const BusinessEnquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isToggled, setIsToggled] = useState(false);
  const data = [
    {
      "title": "Entry Display",
      "name": "On-Floor Advertising at the Mall's main entry",
      "location": "Mall Atrium",
      "size": "4′ x 20′",
      "usp": "Commanding attention from all floors with a standout presence.",
      "images": [FrontLitBoard]
    },
    {
      "title": "Translit Board",
      "name": "Translit board in the basement parking area.",
      "location": "Basement Floor",
      "size": "3′ x 5′",
      "usp": "Bright, vibrant displays available in flexible sizes for maximum impact.",
      "images": [Translit]
    },
    {
      "title": "Floor Walls",
      "name": "Advertising on Floor Walls",
      "location": "Ground & First Floors",
      "size": "8’6″ x 8′ 10″",
      "usp": "Unmissable visibility for every visitor traveling between floors.",
      "images": [FloorWall]
    },
    {
      "title": "Screens",
      "name": "Multiple digital LED screens.",
      "location": "Mall Entry",
      "size": "4′ x 7′",
      "usp": "Perfect venue for showcasing vehicles in a high-visibility area.",
      "images": [DigitalLed]
    },
    {
      "title": "Front-lit Boards",
      "name": "Front-lit boards on every floor",
      "location": "Multiple Floor",
      "size": "4′ x 6′",
      "usp": "Prime spot for high-impact brand promotion.",
      "images": [FrontLitBoard3, FrontLitBoard4, FrontLitBoard5, FrontLitBoard6]
    },
    {
      "title": "Front-lit Boards",
      "name": "Front-lit boards at the Mall's main entrance.",
      "location": "Atrium",
      "size": "6′ x 6′",
      "usp": "Positioned on the mall’s most popular floor for optimal foot traffic.",
      "images": [FrontLitBoard2,FrontLitBoard3, FrontLitBoard4, FrontLitBoard5, FrontLitBoard6, FrontLitBoard2]
    },
    {
      "title": "Front facades",
      "name": "Multiple Advertisements on the Mall's front facade.",
      "location": "Front of Mall",
      "size": "11′ x 11′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [FrontFascade, FrontFascade2]
    },
    {
      "title": "On-floor promotions",
      "name": "On-floor promotions within the Mall.",
      "location": "Atrium",
      "size": "6′ x 6′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [OnFloor]
    },
    {
      "title": "Two & Four-wheeler atriums",
      "name": "Two-wheeler and Four-wheeler atrium advertisements.",
      "location": "Atrium",
      "size": "6′ x 6′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [TwoWheeler, TwoWheeler2, FourWheeler]
    },
    {
      "title": "Danglers",
      "name": "Danglers throughout the Mall.",
      "location": "Hanged from Top Level",
      "size": "4′ x 20′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [Dangler]
    },
    {
      "title": (
    <>
      Movie Magic
      <br />
      (Horizontal Display)
    </>
  ),
      "name": "Digital promotion at Movie Magic.",
      "location": "Second",
      "size": "6.27′ x 3.6′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [DigitalLed2, DigitalLed3, DigitalLed]
    },
    {
      "title": (
    <>
      Movie Magic
      <br />
      (Vertical Display)
    </>
  ),
      "name": "Digital promotion at Movie Magic.",
      "location": "Second",
      "size": "2.3′ x 4.0′",
      "usp": "Strategically placed on a high-traffic floor to capture maximum attention.",
      "images": [DigitalLed3, DigitalLed]
    }
  ]


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };


  return (
    <> <header className="header-space h-20 sm:h-[95px]"></header><div className="w-full mx-auto">


      {/* Advertise section  */}
      <div className="w-full bg-gray-100 py-10 md:py-20">
        <div className="w-11/12 lg:w-10/12 flex flex-col xl:flex-row items-center mx-auto gap-10 lg:gap-20">
          <div className="w-full lg:w-7/12">
            <h1 className="text-xl sm:text-3xl md:text-5xl uppercase mb-2 sm:mb-8 tracking-wider">Advertise with us</h1>
            <p className="text-gray-800  text-sm md:text-lg">Maximize your brand’s visibility by partnering with South Avenue Mall! With a prime location in Jabalpur and a diverse audience, our mall offers unparalleled advertising opportunities. Promote your brand through prominent displays, digital screens, and targeted promotions that reach thousands of visitors daily. Benefit from our premium clientele and high foot traffic to boost your brand's awareness and engagement. Contact us today to explore customized advertising solutions that elevate your business and capture the attention of a thriving audience.</p>
            <div className="flex flex-wrap sm:flex-nowrap ">
              <div className="relative w-full sm:min-w-[190px] mr-2 min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><IoIosPerson size={25} /></div>
                <div className="flex flex-col">
                  <a className="text-sm mt-1 flex items-center  text-blue-600" href="mailto:nitin@southavenuemall.com" >nitin@southavenuemall.com</a>
                </div>
              </div>
              <div className="relative mr-2 w-full sm:w-[190px] min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><IoIosCall size={25} /></div>
                <div className="flex flex-col items-center">
                  <p className="text-xs mt-1 flex items-center text-gray-600"> +91-9425807513</p>
                  <p className="text-xs mt-1 flex items-center text-gray-600">+91-761-2668800</p>
                  {/* <p className="text-xs mt-1 flex items-center text-gray-600">nitin@southavenuemall.com</p> */}
                </div>
              </div>
              <div className="relative w-full sm:w-[190px] min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><Ri24HoursFill size={25} /></div>
                <div className="flex flex-col px-2">
                  <p className="text-xs mt-1 flex items-center text-gray-600">11:00AM to 8:00PM (Mon -to- Sat)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:w-8/12">
            <FormTemplate type="advertising" />
          </div>
        </div>
      </div>
      {/* Advertise section  */}

      <div className="w-full mx-auto flex flex-col gap-10 lg:gap-20 items-center my-10 lg:my-20">
        <h1 className="text-xl sm:text-3xl md:text-4xl uppercase tracking-wider">Advertising Options</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 justify-center items-center mx-auto w-11/12 lg:w-10/12 gap-8 lg:gap-y-12">
          {data.map((item, key) => (
            <div key={key} className="flex flex-col w-full sm:w-[350px]">
              <div
                className="group h-[240px] w-full bg-[#D9D9D9] cursor-pointer rounded overflow-hidden relative flex items-center justify-center"
                onClick={() => openModal(item.images[0])}
              >
                <div className="absolute z-[20] font-bold text-2xl text-white uppercase tracking-wider text-center">{item?.title}</div>
                <div className="absolute w-full h-full bg-[#0000008b] z-[10]"></div>
                <img
                  src={item?.images[0]}
                  className="z-[1] object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  alt={item.name}
                />
              </div>
              <p className="mt-3 font-semibold mb-2">{item.name}</p>
              <div className="flex">
                <p className="text-xs flex items-center font-semibold text-gray-600 mr-5">
                  <FaLocationDot className="mr-1" />{item.location}
                </p>
                <p className="text-xs flex items-center font-semibold text-gray-600">
                  <SlSizeFullscreen className="mr-1" />{item.size}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-[6000] flex items-center justify-center">
            <div className="relative">
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-1 focus:outline-none"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
    </>
  )
}

export default BusinessEnquiry
