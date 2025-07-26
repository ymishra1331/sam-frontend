import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { GetEvents } from '../actions/event.action';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import Dine1 from '../assets/team.webp';
import Dine2 from '../assets/about.webp';
import Dine3 from '../assets/1.mall pic-full drone.jpg';
import Dine4 from '../assets/dine4.webp';
import { FaChevronDown } from 'react-icons/fa'
import Loader from '../components/Loader';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  const [events, setEvents] = useState(null);
  const allevents = useSelector(state => state.events.allevents);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    dispatch(GetEvents("", limit));
  }, [dispatch, limit]);

  useEffect(() => {
    if (allevents) {
      setEvents(allevents);
    }
  }, [allevents]);

  useEffect(() => {
    if (events && events.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % events[currentEventIndex]?.images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [events, currentEventIndex]);

  const handleEventChange = (index) => {
    setCurrentEventIndex(index);
    setCurrentImageIndex(0);
    setIsModalOpen(true); // Open the modal
  };

  const handleEventFilter = (e) => {
    const { value } = e.target;
    dispatch(GetEvents(value));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % events[currentEventIndex]?.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + events[currentEventIndex]?.images.length) % events[currentEventIndex]?.images.length
    );
  };

  const handleViewMore = (e) => {
    e.preventDefault();
    setLoading(true);
    setLimit(limit + 6);
    dispatch(GetEvents("", limit)).then(() => {
      setLoading(false);
    });
  }



  useEffect(() => {
    if (startDate && endDate) {
      dispatch(GetEvents("", limit, startDate, endDate));
    }
  }, [startDate, endDate]);



  return (
    <div className="w-full">
      <header className="header-space h-20 sm:h-20"></header>

      <motion.div
        className="relative w-full flex flex-col items-center justify-center overflow-hidden h-[50vh] md:h-[40vh] lg:h-[50vh] gap-4 md:gap-6 bg-[#F1F0F0] p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid bg-[#000] grid-cols-1 lg:grid-cols-1 absolute h-full z-[0] object-cover w-full">
          {/* <img src={Dine1} className="w-full h-full brightness-[20%]" alt="Dine 1" />
          <img src={Dine2} className="w-full h-full brightness-[20%]" alt="Dine 2" /> */}
          <img src={Dine3} className="w-full h-full brightness-[20%]" alt="Dine 3" />
          {/* <img src={Dine4} className="w-full h-full brightness-[20%]" alt="Dine 4" /> */}
        </div>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white z-[1000] mt-4"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          Events
        </motion.h1>
        <motion.p
          className="text-xs sm:text-base md:text lg:text text-center w-full md:w-8/12 lg:w-6/12 z-[10] text-gray-200"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
         At South Avenue Mall, we create memorable experiences with live music, cultural festivals, movie screenings, and family-friendly activities. Whether you’re looking to relax or be entertained, our events offer something for everyone. Stay tuned to our calendar for the latest updates and join the fun at South Avenue Mall!

        </motion.p>

        <div className="flex flex-row gap-1 w-full  justify-center  items-center space-y-4 sm:space-y-0  mt-4 sm:mt-0 z-[100]">
          {/* Date Filter Inputs */}
          <div className="flex flex-col">
            <label htmlFor="eventType" className=" text-xs font-semibold uppercase px-2 rounded py-1 text-white">
              Event Type
            </label>
            <select name="eventType" className="mt-1 border border-gray-300 rounded text-sm px-1 py-2" onChange={handleEventFilter} id="">
              <option value="">All Events</option>
              <option value="past">Past Events</option>
              <option value="upcoming">Upcoming Events</option>
            </select>
          </div>
          <div className="flex flex-col pb-4 sm:pb-0">
            <label htmlFor="startDate" className=" text-[10px] sm:text-xs w-[80px] font-semibold uppercase  rounded py-1 text-white">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 border border-gray-300 rounded text-sm px-1 py-2 max-w-16 md:max-w-36"
            />
          </div>

          <div className="flex flex-col pb-4 sm:pb-0">
            <label htmlFor="endDate" className="text-[10px] sm:text-xs text-white w-[80px] px-2 rounded  font-semibold uppercase py-1">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 border border-gray-300 rounded px-1 text-sm  py-2 max-w-16 md:max-w-36"
            />
          </div>


        </div>

      </motion.div>




      <section className="flex flex-col items-center justify-center  w-full bg-gray-100 sm:pt-10 pb-16 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5 place-items-center">
          {events?.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-full group items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.01 }}Indu
            >
              <div onClick={() => handleEventChange(index)}>
                <motion.div
                  className="w-[300px] sm:w-[380px] mb-5 h-[238px] md:h-[300px] overflow-hidden rounded relative cursor-pointer flex items-center justify-center "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={(event?.images[currentImageIndex]?.img) ? event?.images[currentImageIndex]?.img : event?.images[0]?.img}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Event"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
              <div className="text-center px-5 capitalize flex w-[300px] sm:w-[380px] justify-between">
                <p className="text-customblack font-semibold text-xl">
                  {event.text}
                </p>
                <span className="text-xs font-light">
                  {event?.eventDate?.split('T')[0]}
                </span>
              </div>
              <div className="px-5 text-xs text-gray-500 w-[300px] sm:w-[380px] ">
                {event?.description.slice(0, 100) + '...'}
              </div>
            </motion.div>
          ))}
        </div>
        {events?.length == 0 && <div>
          No matching data found!
        </div>}


        {loading && <div className="mt-10">
          <Loader />
        </div>}
        <motion.div
          className="mt-10 md:mt-20 capitalize bg-custombrown text-white rounded-full py-2 px-6 md:px-10 flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={handleViewMore}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View More<FaChevronDown className="ml-2" />
        </motion.div>
      </section>

      {/* Modal for Event Details */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          className="flex justify-center items-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-[0.6] flex justify-center items-center z-[6000] px-5 sm:px-0"
        >
          <div className="bg-white p-5 rounded-lg max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-3xl font-bold text-white">&times;</button>
            <h2 className="text-xl  mb-4 capitalize">{events[currentEventIndex].eventType}</h2>
            <div className="relative w-full flex items-center justify-center">
              <motion.img
                src={events[currentEventIndex].images[currentImageIndex].img}
                className="w-full h-auto object-cover rounded max-w-full min-w-full min-h-[300px] max-h-[300px] sm:min-w-[500px] sm:min-h-[400px] sm:max-w-[500px] sm:max-h-[500px]"
                alt="Event"
              />
              {events[currentEventIndex].images.length > 1 && (
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <button onClick={handlePrevImage} className="bg-gray-800 text-white p-2 rounded-full">❮</button>
                  <button onClick={handleNextImage} className="bg-gray-800 text-white p-2 rounded-full">❯</button>
                </div>
              )}
            </div>
            <p className="mt-4 text-sm">{events[currentEventIndex].description}</p>
            <p className="mt-2 text-sm text-gray-500">{events[currentEventIndex].createdAt.split('T')[0]}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Events;
