import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBrands } from '../actions/brand.action';
import GridTemplate from '../components/GridTemplate';
import { FaChevronDown } from 'react-icons/fa6';
import { IoIosSearch } from "react-icons/io";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import BrandFilter from '../components/BrandFilter';
import AllBrands from "../assets/Sam_web.jpg";
import Loader from '../components/Loader';

const Brands = () => {

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const dispatch = useDispatch();
  const [brands, setBrands] = useState(null);
  const [filteredBrands, setFilteredBrands] = useState(null);
  const allbrands = useSelector(state => state.brands.allbrands);
  const [keyword, setKeyword] = useState(null);
  const [limit, setLimit] = useState(8);
  const [floor, setFloor] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(GetBrands(8, "", ""));
  }, [dispatch]);

  useEffect(() => {
    if (allbrands) {
      setBrands(allbrands);
      setFilteredBrands(allbrands);
    }
  }, [allbrands]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterCategory = (e) => {
    const { value } = e.target;
    setFloor(value);
    dispatch(GetBrands(limit, value, keyword));
  }

  const handleViewMore = () => {
    setLoading(true);
    dispatch(GetBrands(limit + 8, floor, keyword)).then(()=>{
      setLoading(false);
    });
    setLimit(limit + 8);
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    setKeyword(value);
    dispatch(GetBrands(8, floor, value));
  }

  return (
    <>
      <header className="header-space h-20 sm:h-20"></header>

      <motion.div
        className="w-full mx-auto z-[0]"
      >
        <motion.div
          className="h-[50vh] md:h-[55vh] relative overflow-hidden w-full bg-[#F1F0F0] flex flex-col justify-center items-center gap-4 md:gap-8 p-4"
        >



          <motion.div
            className="absolute w-full h-full z-[0]"
          >
            <img src={AllBrands} className="h-full w-full brightness-[10%]" alt="" />
          </motion.div>
          <motion.h1
            className="text-lg sm:text-2xl md:text-4xl text-white uppercase z-[10]"
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8 }}
          >
            brands
          </motion.h1>
          <motion.p
            className="w-full md:w-6/12 text-center z-[10] text-gray-400 text-xs sm:text-sm md:text-base"
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8 }}
          >
            South Avenue Mall is your ultimate destination for shopping, dining, and entertainment. Experience the best of fashion, lifestyle, and leisure as you explore a carefully curated selection of renowned international and national brands. Indulge in luxury and enjoy an unparalleled shopping experience that caters to all your needs and desires.
          </motion.p>
          <motion.div
            className="w-full md:w-6/12 flex justify-center items-center z-[10]"
            initial="hidden"
            animate="visible"
            variants={slideIn}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full md:w-[42vw] rounded-lg flex flex-col md:flex-row gap-2 md:gap-0 items-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <motion.select
                name=""
                id=""
                className="h-8 sm:h-11 px-2 text-sm w-[200px] md:w-[150px] cursor-pointer rounded shadow px-1 outline-none"
                onChange={filterCategory}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <option value="" className="cursor-pointer" hidden defaultSelected>Floor</option>
                <option value="artium" className="cursor-pointer">Artium Floor</option>
                <option value="ground" className="cursor-pointer">Ground Floor</option>
                <option value="first" className="cursor-pointer">First Floor</option>
                <option value="second" className="cursor-pointer">Second Floor</option>
                <option value="third" className="cursor-pointer">Third Floor</option>
              </motion.select>
              <motion.div
                className="h-9 sm:h-11 ml-0 sm:ml-1 relative flex items-center w-full"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute left-3 text-gray-500">
                  <IoIosSearch size={20} />
                </div>
                <motion.input
                  type="text"
                  placeholder="Search by Brand Names"
                  onChange={handleSearch}
                  className="h-full px-5 rounded shadow text-xs sm:text-sm pl-10 w-full outline-none"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>







        </motion.div>

        <motion.div
          className="bg-white mx-auto w-full flex flex-col justify-center items-center my-10 md:my-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-12 justify-center items-center m-5 w-full md:px-56 px-9 sm:px-0 place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {
              filteredBrands?.map((brand, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{  }
                >
                  <GridTemplate
                    Logo={brand.logo}
                    name={brand.name}
                    contact={brand?.contact}
                    floor={brand?.floor}
                    categoryTags={brand?.categoryDescription || ""}
                  />
                </motion.div>
              ))
            }
          </motion.div>
          {loading && <Loader/>}
          <motion.div
            className="mt-10 md:mt-20 capitalize bg-custombrown text-white rounded-full py-2 px-6 md:px-10 flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={handleViewMore}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            View More<FaChevronDown className="ml-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Brands;
