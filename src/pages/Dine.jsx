import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDineBrands } from "../actions/brand.action";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import GridTemplate from "../components/GridTemplate";
import Dine1 from '../assets/dine1.webp';
import Dine2 from '../assets/dine2.webp';
import Dine3 from '../assets/dine3.webp';
import Dine4 from '../assets/dine4.webp';
import Loader from "../components/Loader";

const Dine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const dispatch = useDispatch();
  const [brands, setBrands] = useState(null);
  const [page, setPage] = useState(0);
  const allbrands = useSelector(state => state.brands.alldinebrands);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);


  useEffect(() => {
    dispatch(GetDineBrands(page));
  }, [dispatch]);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  useEffect(() => {
    if (allbrands) {
      setBrands(allbrands);
    }
  }, [allbrands]);


  useEffect(() => {
    if (brands && brands.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % brands[currentBrandIndex]?.images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [brands, currentBrandIndex]);

  const handleViewMore = (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(page + 1);
    setLimit(limit + 6);
    dispatch(GetDineBrands(limit)).then(() => {
      setLoading(false);
    });
  }


  return (
    <div className="w-full mx-auto mb-14">
      <header className="header-space h-20 sm:h-[90px]"></header>

      {/* Header Image Section */}
      <motion.div
        className="relative w-full flex flex-col items-center justify-center overflow-hidden h-[40vh] md:h-[40vh] lg:h-[50vh] gap-4 md:gap-6 bg-[#F1F0F0] p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid bg-[#000] grid-cols-2 lg:grid-cols-4 absolute h-full z-[0] object-cover w-full">
          <img src={Dine1} className="w-full h-full brightness-[20%]" alt="Dine 1" />
          <img src={Dine2} className="w-full h-full brightness-[20%]" alt="Dine 2" />
          <img src={Dine3} className="w-full h-full brightness-[20%]" alt="Dine 3" />
          <img src={Dine4} className="w-full h-full brightness-[20%]" alt="Dine 4" />
        </div>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white z-[1000]"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          Dining
        </motion.h1>
        <motion.p
          className="text-xs sm:text-base md:text lg:text text-center w-full md:w-8/12 lg:w-6/12 z-[10] text-gray-200"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          Indulge in a culinary journey at South Avenue Mall! Our diverse dining options to every palate, from quick bites to gourmet meals. Savor the flavors of the world with our selection of restaurants, offering everything from local favorites to international cuisines. Whether you're in the mood for a casual meal or a fine dining experience, South Avenue Mall is the perfect place to satisfy your cravings and enjoy a delicious dining experience!
        </motion.p>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="flex w-full mx-auto flex-col gap-5 justify-center items-center mt-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl uppercase mb-5">Explore Dining</h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full md:w-9/12 gap-4 md:gap-7 justify-center place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {brands?.map((brand, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[350px] h-auto flex flex-col items-center px-5 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
            >
              <motion.div
                className="h-[250px] sm:h-[300px] object-fill cursor-pointer w-full mb-2 rounded-lg overflow-hidden border border-[#1a1a1d84] flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="object-fill sm:group-hover:scale-105 transition-all duration-300 h-full w-full"
                  src={(brand?.images?.length > 1) ? brand?.images[currentImageIndex] || brand?.images[0] : brand?.images[0]}
                  alt=""
                />
              </motion.div>
              <div className="w-full flex justify-between items-center">
                <a href="#" className="uppercase font-semibold tracking-wide cursor-pointer">{brand?.name}</a>
                <div className="flex gap-4">
                  <div className="relative group">
                    <div className="rounded-full relative border-[1px] border-[#1a1a1d84] text-customblack p-2 h-8 w-8 flex items-center justify-center cursor-pointer hover:scale-95 transition-all duration-300">
                      <FaLocationDot size={22} />
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 capitalize py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-28">
                      {brand?.location}
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="rounded-full relative border-[1px] border-[#1a1a1d84] text-customblack p-[6px] h-8 w-8 flex items-center justify-center cursor-pointer hover:scale-95 transition-all duration-300">
                      <BiSolidPhoneCall size={25} />
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 capitalize py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-32 min-h-10 flex items-center">
                      +91 {brand?.contact}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
        {
          loading && <Loader />
        }
        <motion.div
          className="mt-10 md:mt-20 capitalize bg-custombrown text-white rounded-full py-2 px-6 md:px-10 flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={handleViewMore}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View More<FaChevronDown className="ml-2" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dine;
