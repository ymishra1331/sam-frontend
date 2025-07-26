import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import HomeTemplate1 from "../components/HomeTemplate1";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { GetBanners } from '../actions/banner.action';
import { GetBrands } from '../actions/brand.action';
import { GetEvents } from '../actions/event.action';
import { GetOffers } from '../actions/offer.action';
import { Link } from 'react-router-dom';
import BrandsCarousel from '../components/BrandsCarousel';
import AboutImage from '../../public/samaboutpic.jpg';
import { FaChevronRight, FaChevronLeft, FaX } from 'react-icons/fa6';
import MovieMagic from '../assets/moviemagic.webp'
import GamePlanet from '../assets/gameplanet.webp'
import HorroHouse from '../assets/horrorhouse.webp'
import axios from 'axios';
import { motion } from 'framer-motion';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import DiningCarousel from '../components/DiningCarousel';
import EventCarousel from '../components/EventCarousel';

import Dominos from '../assets/dominos.webp';
import CCD from '../assets/ccd.webp';
import KFC from '../assets/kfc.webp';
import EntCarousel from '../components/EntCarousel';
const Home = () => {
  const dispatch = useDispatch();
  const [banners, setBanners] = useState(null);
  const [brands, setBrands] = useState(null);
  const allbrands = useSelector(state => state.brands.allbrands);
  const allbanners = useSelector(state => state.banners.allbanners);
  const [events, setEvents] = useState(null);
  const allevents = useSelector(state => state.events.allevents);
  const [offers, setOffers] = useState(null);
  const alloffers = useSelector(state => state.offers.alloffers);
  const [reels, setReels] = useState(null);
  const videoRefs = useRef([]);
  const [dineBrands, setDineBrands] = useState(null);

  useEffect(() => {
    dispatch(GetBanners(0));
    dispatch(GetBrands(0));
    dispatch(GetEvents(0));
    dispatch(GetOffers(0));
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchReels = async () => {
  //     try {
  //       const accessToken = 'IGQWRNNXl6T1p1YjFJcnBhVmQ0d1Bud1B0YjlmMTZAZAdEdkMndvN0VCQzhVUjluMjFOelNvVERWUF9xMnhydC0ycnRvbnlpdENtZAVRLUGh5Y2VLQjFFMDRIMEZA3OWJtcXVMQ2ZALQUQ0NWpaekx5U3A2emhQOHNOdGcZD';
  //       const userId = '7979275072189805';
  //       const url = `https://graph.facebook.com/v22.0/17841447086237778/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=EAAP5gIMF5T0BO8LzoAZA7xy3aFhwTphQi7TnaM9Rqx9V44fW8vxOa7R8XRcEisfrmfyRh0yD8c4FvMs8fhc95KmdQzuf9o1hSU8EItDTX8vuErVB36MPOJftDybKV882ixgs1khCZBI354teJ9J7IXJWAeyTMUOf2PQAvtv3cp2V2okzwWm86mqC6H3Lh0Gr1IapYJ`
  //       // const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`;

  //       const response = await axios.get(url);
  //       console.log("Reels Response = ",response);
  //       const latestReels = response.data.data
  //         .filter(item => item.media_type === 'VIDEO')
  //         .slice(0, 3);

  //       setReels(latestReels);
  //       console.log("LAtest reels",latestReels);
  //       console.log("reels",reels);
  //     } catch (error) {
  //       console.error('Error fetching Instagram reels:', error);
  //     }
  //   };

  //   fetchReels();
  // }, []);


  useEffect(() => {
    const fetchReels = async () => {
      try {
        const accessToken = 'IGQWROb2YyeUxEODZAObUUtN2wzTVEtb0xfQ1JNclMwb1J3c29UeGM5by1tU1dsSl9GQW1HMEFqVWcxMUd1cFg3QTkwamhFQlloSGRlMDJxNng0UVEzQzVReFEydEViTGpSOU5PUTFabWYtNWVRSTZAOTEJZAb3FwbmcZD';
        const userId = '7979275072189805';
        const url = `https://graph.facebook.com/v22.0/17841447086237778/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=EAAP5gIMF5T0BPGB7SW65IZA9kNea00kKC5ZBOAKxIcmMAZCJ4GOOhyj7bXZCAwQQHb1G67ZAwooDZBgIQvh1bS2YwlWXzZA6FZCZBhgUa98ZCBf5eZAJICZARIwiWqZCN8jB0ApnsR4efdEB0APuDatu3T94zAXwJiT5mxM5CgktRuZBupv1tJM5ZBDGb9DhxaEaC8FMklSZAgphoDlDEQWvWgZDZD`;

        const response = await axios.get(url);
        const latestReels = response.data.data
          .filter(item => item.media_type === 'VIDEO' && item.media_url != null
          )
          .slice(0, 3); // Ensure it selects 4 reels

        setReels(latestReels);
        // console.log(latestReels, 'Latest Reels'); 
      } catch (error) {
        console.error('Error fetching Instagram reels:', error);
      }
    };

    fetchReels();
  }, []);

  useEffect(() => {
    if (allbanners) {
      setBanners(allbanners);
    }
  }, [allbanners]);
  useEffect(() => {
    if (allbrands) {
      setBrands(allbrands);
      const filterBrands = allbrands.filter(brand => brand.category.toLowerCase() === "food");
      setDineBrands(filterBrands);
    }
  }, [allbrands]);
  useEffect(() => {
    if (allevents) {
      setEvents(allevents);
    }
  }, [allevents]);
  useEffect(() => {
    if (alloffers) {
      setOffers(alloffers);
    }

  }, [alloffers]);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isOfferActive, setIsOfferActive] = useState(true);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left'); // State to manage slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners?.length]);

  const [currentImageIndices, setCurrentImageIndices] = useState([]);

  useEffect(() => {
    if (events && events.length > 0) {
      const interval = setInterval(() => {
        setSlideDirection('left'); // Set slide direction
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % events[currentEventIndex].images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [events, currentEventIndex]);



  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      closeOfferPopup();
    }, 3000);
    return () => clearTimeout(timer);
  }, [offers]);

  const closeOfferPopup = () => {
    setTimeout(() => {
      setIsOfferActive(false);
    }, 5000);
  };



  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    // Increment the fadeKey to trigger the fade effect
    setFadeKey((prev) => prev + 1);
  }, [currentBannerIndex]);


  return (
    <div>
      <header className="header-space h-20 sm:h-[95px]"></header>
      {/* Banner Section */}
      <motion.div
        className="max-w-full min-w-full h-[40vw] sm:h-[380px] md:h-[500px] lg:h-[750px] flex items-start justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          key={fadeKey} // This key prop will help framer-motion recognize the change
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }} // Adjust the duration for the fade effect
          className="w-full h-full  object-contain sm:object-fill transition-all duration-300"
          src={banners ? banners[currentBannerIndex]?.image : ""}
          alt=""
        />
      </motion.div>

      {/* <div className=" sm:h-[650px] w-full bg-[#D9D9D9] overflow-hidden object-contain">
      </div> */}

      {/* About Section */}
      <div className="h-10 bg-gray-100 w-full"></div>
      <div className="w-full flex  relative bg-gray-100 items-center  text-2xl sm:text-4xl">
        
        <p className="min-w-[190px] sm:min-w-[300px] px-2 sm:px-10 flex items-center justify-center">
          About Us
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-[#23232389]"></div>
        </div>
      </div>

      <motion.div
        id='headline'
        className="w-full  bg-gray-100  mx-auto flex flex-col-reverse md:flex-row justify-end items-center  pt-12 px-4 sm:pl-0 sm:py-20 "
        initial={{ opacity: 1 }}
        animate={{ opacityy: 0.8 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className=" w-full md:w-6/12 flex justify-center flex-col "
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sm:bg-gray-300 flex flex-col items-center sm:items-start  sm:px-20 py-6">
            {/* <h1 className="text-xl md:text-4xl text-customblack">About Us</h1> */}
            <p className="text-customblack text-sm text-center sm:text-start sm:text-[18px] sm:leading-[24px] ">
              Welcome to South Avenue Mall, the premier shopping and entertainment destination in Jabalpur! Opened in 2009, South Avenue Mall is the city's first mall and multiplex, bringing a modern lifestyle experience to the heart of Jabalpur, the third largest city in Madhya Pradesh.
            </p>
            <Link to="/about">
              <div className="h-[38px] group w-[160px] bg-custombrown sm:bg-white cursor-pointer shadow rounded-md flex text-white sm:text-black items-center justify-center mt-4 sm:mt-10 transition-all duration-300 text-[15px] relative overflow-hidden">
                <span className="z-10 flex items-center group-hover:text-white">Know more <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
                <div className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="h-[250px] md:h-[492px] w-full md:w-5/12 bg-[#D9D9D9] shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="h-full w-full" src={AboutImage} alt="" />
        </motion.div>
      </motion.div>

      {/* Brands Section */}
      <div id='ExploreTheBrand' className="h-auto mt-10  w-full bg-white flex flex-col justify-center items-center  gap-0  md:px-32">
        <div className="flex flex-col md:flex-row justify-between sm:gap-4 w-10/12 mx-auto">
          <h1 className="text-2xl md:text-4xl ">Explore the Brands</h1>
          <Link to="/brands">
            <div className="h-[38px] group w-[160px] bg-custombrown cursor-pointer shadow rounded-md hidden sm:flex text-white  items-center justify-center  transition-all duration-300 text-[15px] relative mt-5 sm:mt-0 overflow-hidden ">
              <span className="z-10  flex items-center group-hover:text-white">View All Stores <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
              <div className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            </div>
          </Link>
        </div>
        <div className="w-full px-1  md:px-20">
          <BrandsCarousel brands={brands} />
        </div>
        <Link to="/brands"><div className="text-custombrown  py-1 px-5 flex sm:hidden items-center  rounded mb-9">View All Stores<FaChevronRight size={12} className="ml-2" /></div></Link>
      </div>

      {/* Dining Section */}
      <div className="h-10 bg-gray-100 w-full"></div>
      <div className="w-full flex  relative bg-gray-100 items-center text-2xl sm:text-4xl">
        <p className="min-w-[250px] sm:min-w-[340px] px-10 flex items-center justify-center">
          Explore Dining
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      {/* <section className="flex flex-col items-center w-full bg-gray-100 pt-10 pb-10">
        <div className="flex flex-wrap justify-center mt-10 gap-8 sm:gap-20">
          <div className="flex flex-col">
            <Link to="/dine"><div className="w-[320px] h-[200px] md:w-[360px] group md:h-[250px] overflow-hidden rounded cursor-pointer">
              <img src={KFC} className="h-full w-full group-hover:scale-110 duration-500" alt="" />
            </div></Link>
            <Link to="/dine">
              <p className=" mt-2 cursor-pointer font-semibold text-xl text-center">KFC</p>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="/dine"><div className="w-[320px] h-[200px] md:w-[360px] md:h-[250px] overflow-hidden rounded cursor-pointer">
              <img src={Dominos} className="h-full w-full hover:scale-110 duration-500" alt="" />
            </div></Link>
            <Link to="/dine">
              <p className="text-xl font-semibold mt-2 cursor-pointer text-center">Dominos</p>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="/dine"><div className="w-[320px] h-[200px] md:w-[360px] md:h-[250px] overflow-hidden rounded cursor-pointer">
              <img src={CCD} className="h-full w-full hover:scale-110 duration-500" alt="" />
            </div></Link>
            <Link to="/dine">
              <p className="text-xm font-semibold mt-2 cursor-pointer text-center">Cafe Coffee Day</p>
            </Link>
          </div>
        </div>
      </section> */}

      <div>
        <DiningCarousel dining={dineBrands} />
      </div>



      <div className="w-full flex items-center justify-center bg-gray-100 py-3 sm:py-10">
        <Link to="/dine">
          <div className="h-[41px] group w-[250px] bg-custombrown cursor-pointer shadow rounded flex text-white  items-center justify-center  transition-all duration-300 text-[15px] relative overflow-hidden ">
            <span className="z-10  flex items-center group-hover:text-white">View All Restaurants <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
            <div className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </div>
        </Link>
      </div>

      {/* Dining Section */}


      {/* Entertainments Section */}
      <div className="h-10  w-full"></div>
      <div className="w-full flex  relative  items-center  text-2xl sm:text-4xl">
        <p className=" min-w-[240px] sm:min-w-[340px] px-10 flex items-center justify-center">
          Entertainment
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>


      <section className="flex flex-col items-center w-full bg-white pt-5  sm:mt-5">
        {/* <p className="text-2xl md:text-3xl uppercase tracking-wide">Entertainments</p> */}
        {/* <div className="flex flex-wrap justify-center mt-10 gap-8 sm:gap-16">
          <Link to="/entertainments">
            <div className="relative w-[310px] h-[280px] md:w-[350px] md:h-[280px] rounded-t cursor-pointer overflow-hidden group">
              <img src={MovieMagic} className="h-full w-full object-cover group-hover:scale-110 duration-500" alt="Movie Magic" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500">
                <p className="text-white text-3xl uppercase font-semibold">Movie Magic</p>
              </div>
            </div>
            <div className="bg-gray-200 relative w-[310px] gap-2 sm:h-[280px] md:w-[350px] md:h-[180px] rounded-b cursor-pointer overflow-hidden flex flex-col items-center py-3">
              <p className="text-4xl uppercase">Movie  Magic</p>
              <p className="text-center px-4 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, suscipit!</p>
            </div>
          </Link>
          <Link to="/entertainments">
            <div className="relative w-[310px] h-[280px] md:w-[350px] md:h-[280px] rounded cursor-pointer overflow-hidden group">
              <img src={HorroHouse} className="h-full w-full object-cover group-hover:scale-110 duration-500" alt="Movie Magic" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500">
                <p className="text-white text-3xl uppercase font-semibold">Horror House</p>
              </div>
            </div>
            <div className="bg-gray-200 relative w-[310px] gap-2 sm:h-[280px] md:w-[350px] md:h-[180px] rounded-b cursor-pointer overflow-hidden flex flex-col items-center py-3">
              <p className="text-4xl uppercase">Horror Planet</p>
              <p className="text-center px-4 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, suscipit!</p>
            </div>
          </Link>
          <Link to="/entertainments">
            <div className="relative w-[310px] h-[280px] md:w-[350px] md:h-[280px] rounded cursor-pointer overflow-hidden group">
              <img src={GamePlanet} className="h-full w-full object-cover group-hover:scale-110 duration-500" alt="Movie Magic" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500">
                <p className="text-white text-3xl uppercase font-semibold text-center">Hungama <br /> Game Planet</p>
              </div>
            </div>
            <div className="bg-gray-200 relative w-[310px] gap-2 sm:h-[280px] md:w-[350px] md:h-[180px] rounded-b cursor-pointer overflow-hidden flex flex-col items-center py-3">
              <p className="text-4xl uppercase text-center">Hungama Game Zone</p>
              <p className="text-center px-4 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, suscipit!</p>
            </div>
          </Link>
        </div> */}
        <EntCarousel />
      </section>

      <div className="w-full flex items-center justify-center  py-12">
        <Link to="/entertainments">
          <div className="h-[41px] group w-[150px] bg-custombrown cursor-pointer shadow rounded flex text-white  items-center justify-center  transition-all duration-300 text-[15px] relative overflow-hidden ">
            <span className="z-10  flex items-center group-hover:text-white">View All <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
            <div className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </div>
        </Link>
      </div>

      {/* Entertainments Section */}

      {/* Events Section */}
      <div className="h-10 bg-gray-100 w-full"></div>
      <div className="w-full flex  relative bg-gray-100  items-center text-2xl sm:text-4xl">

        <p className="min-w-[160px] sm:min-w-[240px] px-10 flex items-center justify-center">
          Events
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      <section className="flex flex-col items-center w-full bg-gray-100 pt-10 ">
        {/* <p className="text-2xl md:text-3xl uppercase tracking-wide">Events</p> */}
        {/* <div className="flex flex-wrap justify-center mt-10 gap-8 sm:gap-10">
          {events?.map((event, index) => (
            <Link to="/events"><div className="flex  group flex-col w-[350px] md:w-[380px]" key={index}>
              <div className="w-full mb-5 h-[200px] md:h-[340px] overflow-hidden rounded relative cursor-pointer">
                <img
                  src={(event.images.length > 1) ? event.images[currentImageIndex].img : event.images[0].img}
                  className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110`}
                  alt="Event"
                />
              </div>
              <div className="pl-6 flex flex-col items-start">
                <span className="bg-customyellow rounded capitalize px-4  ">
                  {event?.eventType}
                </span>
                <p className="text-center capitalize font-semibold  text-black mt-3">
                  {event.description}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {event?.createdAt.split("T")[0]}
                </p>
              </div>
            </div></Link>
          ))}
        </div> */}
      </section>
      <div className="w-full overflow-hidden">
        <EventCarousel events={events} />
      </div>
      <div className="w-full flex items-center justify-center bg-gray-100  py-12">
        <Link to="/events">
          <div className="h-[41px] group w-[250px] bg-custombrown cursor-pointer shadow rounded flex text-white  items-center justify-center  transition-all duration-300 text-[15px] relative overflow-hidden ">
            <span className="z-10  flex items-center group-hover:text-white">View All Events<MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
            <div className="absolute inset-0 bg-black transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </div>
        </Link>
      </div>


      {/* Social Media Section */}
       <div className="h-10  w-full"></div>
      <div className="w-full flex relative b items-center  text-2xl sm:text-4xl">
     
        <p className="min-w-[290px] sm:min-w-[400px] px-10 flex items-center justify-center">
          Our Social Media
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div> 


      <section className="flex flex-col items-center w-full bg-white pt-10 sm:mt-0 mb-24"> 
        <p className="text-2xl md:text-3xl uppercase tracking-wide">Our Social Media</p>
         <div className="w-full font-semibold items-center px-10 sm:px-[300px] flex cursor-pointer"
          onClick={() => window.open('https://www.instagram.com/southavenuemall/', '_blank')}
        >
          <p className="mr-2 w-10 h-10 bg-gray-700 rounded-full text-white flex items-center justify-center">
            <FaInstagram size={22} />
          </p>
          <p className="text-[#ff0088]">
            southavenuemall
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-4 sm:gap-6 lg:gap-8">
          {reels != null && reels.length > 0 ? (
            reels.map((reel, index) => (
              <div className="flex flex-col" key={reel.id}>
                <div className="w-[150px]  h-[250px] sm:w-[320px] sm:h-[300px] md:w-[300px] md:h-[400px] overflow-hidden rounded cursor-pointer">
                  <a href={reel.permalink} target="_blank" rel="noopener noreferrer">
                    <video
                      ref={(el) => videoRefs.current[index] = el}
                      src={reel.media_url}
                      alt="Instagram Reel"
                      className="h-full w-full"
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                  </a>
                </div>
              </div>
            ))
          ) : (
            [1, 2, 3].map(index => (
              <div className="flex flex-col" key={index}>
                <div className="w-[50px] h-[450px] sm:w-[320px] sm:h-[300px] md:w-[380px] md:h-[400px] overflow-hidden rounded cursor-pointer bg-gray-200 animate-pulse" />
              </div>
            ))
          )}
        </div>
      </section> 


      {(offers && offers[0]?.active && isOfferActive && !localStorage.getItem('isOfferActive') && showPopup) && <div className="fixed z-[5000] flex items-center justify-center top-0 left-0 w-full h-full bg-[#1a1a1d7a] p-5 sm:p-0">
        <div className=" relative w-[700px] overflow-hidden sm:h-[450px] bg-white rounded-3xl ">
          <div className="absolute object-contain right-5 top-5 text-white cursor-pointer" onClick={() => {
            setIsOfferActive(false);
            localStorage.setItem('isOfferActive', true);
          }}><FaX size={16} /></div>
          <img src={offers[0]?.image} className="object-cover h-full w-full" alt="" />
        </div>
      </div>}
    </div>
  );
};

export default Home;
