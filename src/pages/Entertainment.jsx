import React, { useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from 'framer-motion';  // Import Framer Motion
import Slider from "react-slick";
import AllBrands from "../assets/IMG_20250305_163048.jpg";
import Ent1 from '../assets/ent1.webp';
import Ent2 from '../assets/ent2.webp';
import Ent3 from '../assets/ent3.webp';
import Ent4 from '../assets/ent4.webp';
import Horror1 from '../assets/Entertainment/Horror1.jpg';
import Horror2 from '../assets/Entertainment/Horror2.jpg';
import Horror3 from '../assets/Entertainment/Horror3.jpg';
import Horror4 from '../assets/Entertainment/Horror4.jpg';
import Horror5 from '../assets/Entertainment/Horror5.jpg';
import Horror6 from '../assets/Entertainment/Horror6.jpg';
import Horror7 from '../assets/Entertainment/Horror7.jpg';
import Horror8 from '../assets/Entertainment/Horror8.jpg';
import NineDi1 from '../assets/Entertainment/9di1.avif';
import NineDi2 from '../assets/Entertainment/9di2.avif';
import CarRide1 from '../assets/Entertainment/carride1.avif';
import CarRide2 from '../assets/Entertainment/carride2.avif';
import Hungama1 from '../assets/Entertainment/hungama1.jpg';
import Hungama2 from '../assets/Entertainment/hungama2.jpg';
import Hungama3 from '../assets/Entertainment/hungama3.jpg';
import Hungama4 from '../assets/Entertainment/hungama4.jpg';
import Hungama5 from '../assets/Entertainment/hungama5.jpg';
import Hungama6 from '../assets/Entertainment/hungama6.jpg';
import Hungama7 from '../assets/Entertainment/hungama7.jpg';
import MovieMagic1 from '../assets/1.avif';
import MovieMagic2 from '../assets/2.avif';
import MovieMagic3 from '../assets/Entertainment/moviemagic3.avif';
import MovieMagic4 from '../assets/4.avif';
import MovieMagic5 from '../assets/5.avif';
import MovieMagic6 from '../assets/Entertainment/moviemagic6.avif';
import MovieMagic7 from '../assets/7.avif';
import Ruby1 from '../assets/Entertainment/Ruby1.webp';
import Ruby2 from '../assets/Entertainment/Ruby2.webp';
import Ruby3 from '../assets/Entertainment/Ruby3.webp';
import Ruby4 from '../assets/Entertainment/Ruby4.webp';
import Ruby5 from '../assets/Entertainment/Ruby5.webp';
import Ruby6 from '../assets/Entertainment/Ruby6.webp';
import Ruby7 from '../assets/Entertainment/Ruby7.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaChevronDown} from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Entertainment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      name: "Movie Magic",
      description: "Movie Magic Multiplex, the premier cinematic destination in Jabalpur since 2009, offers an unparalleled movie experience with luxurious seating and stunning visuals. We provide state-of-the-art Dolby Digital sound and Laser Screen Projections for an immersive 3D experience. Our easy-to-use Movie Magic app offers hassle-free, zero-convenience fee bookings and exclusive F&B offers. Enjoy freshly-prepared snacks and a diverse range of films in multiple languages while experiencing the ultimate in comfort with our VIP Premium Recliners.",
      location: "second floor",
      phone: "9425807509",
      isButton:true,
      images: [MovieMagic1, MovieMagic2, MovieMagic4, MovieMagic5, MovieMagic7]
    },
    {
      name: "RUBY MOVIE MAGIC – Luxe Theatre",
      description: "Ruby Movie Magic, an exclusive luxury cinema experience now open at South Avenue Mall, Jabalpur - brings with it a redefined movie-watching experience that blends elegance, comfort, and cutting-edge technology. From Premium recliners and Gourmet food to Laser projection and Dolby sound system, every element of Ruby is thoughtfully designed to make movie time more magical than ever before. The moment you enter, expect a seamless blend of comfort, luxury, and personalized service, making Ruby Movie Magic a bold new benchmark to Jabalpur's  entertainment scene. Ruby is purely an experience - providing an atmosphere that feels more like a private lounge than a theatre. Whether it’s a family outing, a date night, or a solo escape into your favourite film - Ruby offers the perfect ambience for every movie lover. With premium interiors and carefully curated services, each screening at Ruby Movie Magic is not just a movie, but a memory in the making.\nVisit South Avenue Mall and experience this luxury yourself!",
      location: "third floor",
      phone: "0761-2669900, 9425807508",
      isButton:true,
      images: [Ruby1, Ruby2, Ruby3, Ruby4, Ruby5, Ruby6, Ruby7]
    },
    {
      name: "Hungama Game Planet",
      description: "Experience endless fun and excitement at Hungama Game Planet, where a world of entertainment awaits! With a fresh new look and a wide range of thrilling games, it's the perfect place for all ages to play, explore, and enjoy. Whether you're a fan of arcade games, VR experiences, or interactive play, there's something for everyone. Come and rediscover the joy of gaming with us!",
      location: "second floor",
      phone: "0761-269994, 9993886252",
      images: [Horror1, Horror2, Horror3, Horror4, Horror5, Horror6, Horror7, Horror8]
    },
    {
      name: "Soft Play by Hungama",
      description: "Introducing Soft Play by Hungama, a safe and engaging play zone designed specifically for young children! This area offers a range of interactive and soft play equipment, providing a perfect environment for kids to explore, play, and develop new skills. Let your little ones have fun in a secure and joyful space while you relax and enjoy the mall.",
      location: "second floor",
      phone: "0761-269994, 9993886252",
      images: [Hungama1, Hungama2, Hungama3, Hungama4, Hungama5, Hungama6, Hungama7]
    },
    // {
    //   name: "9Di",
    //   description: "Experience the ultimate cinematic thrill with 9D movies at South Avenue Mall. Feel every twist, turn, and sensation as you're immersed in a fully interactive and multisensory adventure like never before.",
    //   location: "second floor",
    //   phone: "0761-269994, 9993886252",
    //   images: [NineDi1, NineDi2]
    // },
    {
      name: "Kids Car Rides",
      description: "Enjoy a fun-filled adventure with our exciting kids' car rides at South Avenue Mall! Perfect for little drivers, these safe and thrilling rides provide endless entertainment and smiles for children of all ages.",
      location: "lower ground floor",
      phone: "9630632219",
      images: [CarRide1, CarRide2]
    },
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };


  return (
    <div className="w-full mx-auto">
      <header className="header-space h-20 sm:h-20"></header>
      <motion.div
        className="relative w-full flex flex-col items-center justify-center overflow-hidden h-[40vh] md:h-[40vh] lg:h-[50vh] gap-4 md:gap-6 bg-[#F1F0F0] p-4 md:p-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-1 bg-[#000] absolute h-full z-[0] object-cover w-full">
          <img rel='preload' className="w-full h-full brightness-[20%]" src={AllBrands} alt="" />
          {/* <img rel='preload' className="w-full h-full brightness-[20%]" src={Ent2} alt="" />
          <img rel='preload' className="w-full h-full brightness-[20%]" src={Ent3} alt="" />
          <img rel='preload' className="w-full h-full brightness-[20%]" src={Ent4} alt="" /> */}
        </div>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white z-[10]"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          Entertainment
        </motion.h1>
        <motion.p
          className="text-xs sm:text-base md:text lg:text text-center w-full md:w-8/12 lg:w-6/12 z-[10] text-gray-200"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          Experience the ultimate entertainment at South Avenue Mall! Our vibrant entertainment zone offers a variety of games, perfect for kids and the young at heart. Enjoy the latest blockbusters in our state-of-the-art cinema, featuring comfortable seating and immersive sound. Whether you're looking for thrilling games or a cinematic experience, South Avenue Mall is the go-to destination for fun and excitement!
        </motion.p>
      </motion.div>

      <motion.div
        className="w-11/12 mx-auto flex flex-col gap-8 md:gap-12 mb-24 p-4 md:p-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        {data?.map((item, key) => (
          <motion.div
            key={key}
            className={`w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center mt-8 ${key % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1  overflow-hidden max-w-full min-w-[300px] sm:max-w-[500px] h-[400px]"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <Slider {...settings}>
                {item.images.map((image, idx) => (
                  <img rel='preload' key={idx} src={image} className="w-full h-full object-cover " alt={`Slide ${idx + 1}`} />
                ))}
              </Slider>
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col justify-center items-start gap-4 sm:p-4 bg-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider">{item.name}</h1>
              <p className="text-xs sm:text-base">
                {item.description}
              </p>
              <div className="flex items-center font-semibold text-customblack capitalize">
                <FaLocationDot size={20} className="mr-1" />{item.location}
              </div>
              <div className="flex items-center font-semibold text-customblack capitalize">
                <BiSolidPhoneCall size={20} className="mr-1" />{item.phone}
              </div>
              {
                item.isButton && 
                <div className="flex items-center hover:scale-105 transition-all duration-300 capitalize cursor-pointer border rounded-lg py-3 px-6 border-[#000]"
                  onClick={() => {window.open("https://movie-magic.in/AppDownload", '_blank')}}
                >
                book movie ticket at zero convinience fee
                <FaChevronDown className="rotate-[-90deg] ml-1"/>
                </div>
              }
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Entertainment;
