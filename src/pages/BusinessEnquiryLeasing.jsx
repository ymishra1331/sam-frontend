import FormTemplate from "../components/FormTemplate"
import { IoIosPerson } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';


import TwoWheeler from '../assets/Advertising/2wheeler.webp';
import TwoWheeler2 from '../assets/Advertising/2wheelereplaza.webp';
import FourWheeler from '../assets/Advertising/4wheeler.webp';
import Dangler from '../assets/Advertising/dangler.webp';
import DigitalLed from '../assets/Advertising/digitalled.webp';
import DigitalLed2 from '../assets/Advertising/digitalledscreenmainwall.webp';
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

const BusinessEnquiryLeasing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isToggled, setIsToggled] = useState(false);


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

      {/* Lease Section  */}
      <div className="w-full bg-gray-100 py-10 md:py-20">
        <div className="w-11/12 lg:w-10/12 flex flex-col-reverse xl:flex-row items-center mx-auto gap-10 lg:gap-20">
          <div className="w-full lg:w-8/12">
            <FormTemplate type="lease rental space" />
          </div>
          <div className="w-full lg:w-7/12">
            <h1 className="text-xl sm:text-3xl md:text-5xl uppercase mb-2 sm:mb-8 tracking-wider">Lease Rental Space</h1>
            <p className="text-gray-800 text-sm md:text-lg">Unlock the potential of your business by leasing a prime rental space at South Avenue Mall. Situated in Jabalpur’s premier shopping and entertainment destination, our mall offers a range of versatile spaces ideal for retail, dining, and commercial ventures. Benefit from high foot traffic, exceptional visibility, and a vibrant environment that attracts a diverse clientele. <br /><br />
              Our well-designed spaces come with modern amenities and ample support to help your business thrive. Whether you’re looking for a retail outlet, a restaurant location, or a promotional space, South Avenue Mall provides the perfect setting for your success. Contact us today to explore available options and secure your spot in Jabalpur’s leading mall.</p>
            <div className="flex flex-wrap sm:flex-nowrap">
              <div className="relative w-full sm:min-w-[200px] mr-2 min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><IoIosPerson size={25} /></div>
                <div className="flex flex-col ">
                  <a className="text-sm mt-1 flex items-center text-blue-600" href="mailto:dgcommercial@southavenuemall.com">dgcommercial@southavenuemall.com</a>
                </div>
              </div>
              <div className="relative mr-2 w-full sm:w-[200px] min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><IoIosCall size={25} /></div>
                <div className="flex flex-col items-center">
                  <p className="text-xs mt-1 flex items-center text-gray-600"> +91-9425807505</p>
                  <p className="text-xs mt-1 flex items-center text-gray-600">+91-761-2668800</p>
                </div>
              </div>
              <div className="relative w-full sm:w-[200px] min-h-20 pb-5 pt-5 rounded mt-14 bg-gray-200 flex flex-col items-center justify-center">
                <div className="absolute rounded-full border bg-gray-100 h-14 w-14 top-[-35px] flex items-center justify-center text-gray-500"><Ri24HoursFill size={25} /></div>
                <div className="flex flex-col px-2">
                  <p className="text-xs mt-1 flex items-center text-gray-600">11:00AM to 8:00PM (Mon -to- Sat)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lease Section  */}

      <div className="w-full mx-auto py-6 md:py-10">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-6 md:gap-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl uppercase ">About Space</h1>
          <p className="text-sm sm:text-base  leading-relaxed">
            South Avenue Mall, situated on the upscale Narmada Gwarighat Road in Jabalpur, M.P., is the city's first and most prestigious mall, offering a quality family outing venue for over 15 years. As a premier shopping destination, our mall boasts a carefully curated mix of both vanilla and anchor brands, including Reliance Digital, Trends, Smart Bazaar, Pantaloons, Levis, UCB, Puma, Nykaa, The Body Shop, Sketchers, Meena Bazaar, Apple Inext, CCD, KFC, Pizza Hut, Dominos, Max, and many more. Located in a preferred and premium residential area, South Avenue Mall provides an exceptional platform for brands to connect with a discerning audience. Explore our available spaces and join our vibrant retail community. A detailed presentation of our brand mix and floor plan is available upon request.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl ">Type: Kiosk & Shop/Store Spaces Available</p>
          <p className="text-sm sm:text-base  leading-relaxed">
            South Avenue Mall offers prime kiosk and shop/store spaces for lease, perfect for establishing a brand presence in Jabalpur’s most prestigious shopping destination. Whether you're looking for a compact kiosk or a spacious storefront, our mall provides an ideal platform for showcasing your products to a discerning audience.
          </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default BusinessEnquiryLeasing
