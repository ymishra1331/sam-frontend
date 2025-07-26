import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion'; // Import Framer Motion
import { GetGalleryImg } from '../actions/gallery.action';
import { GetOffers } from '../actions/offer.action';
import { FaX } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa';
import Loader from '../components/Loader';

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const allimages = useSelector(state => state.gallery.allimages);
  const dispatch = useDispatch();
  const [offers, setOffers] = useState(null);
  const [isOfferActive, setIsOfferActive] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const alloffers = useSelector(state => state.offers.alloffers);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [offers]);

  useEffect(() => {
    if (alloffers) {
      setOffers(alloffers);
    }
  }, [alloffers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(GetGalleryImg(page));
    dispatch(GetOffers(0));
  }, [dispatch]);

  useEffect(() => {
    if (allimages) {
      setImages(allimages);
    }
  }, [allimages]);

  const openImagePreview = (image) => {
    setSelectedImage(image);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  const handleViewMore = (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(page + 1);
    dispatch((GetGalleryImg(page + 1))).then(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <div>
        <header className="header-space h-20 sm:h-9"></header>
        <div className="min-h-[751px] w-full bg-[#F1F0F0] flex flex-col justify-center items-center sm:gap-10 gap-3 sm:py-20 px-4 md:px-10 py-10 ">
          <div className="flex flex-col items-center justify-center w-full">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl uppercase mb-2 mt-5 sm:mt-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Gallery
            </motion.h1>
            <motion.p
              className="text-center w-full md:w-8/12 lg:w-6/12 text-sm md:text-base lg:text-lg mb-10 sm:mb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover the highlights of our mall—events, dining, and shopping—all captured in our gallery. Experience the moments that make us the city's favorite destination.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-5 sm:px-0">
            {
              images?.map((image, key) => (
                <div className="flex flex-col gap-5">
                  <motion.div
                    className="h-[280px] sm:h-[250px] md:h-[300px] lg:h-[300px] sm:w-[400px] overflow-hidden cursor-pointer rounded-lg shadow"
                    key={key}
                    onClick={() => openImagePreview(image.image[0].img)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: key * 0.01 }}
                  >
                    <motion.img
                      src={image?.image[0]?.img}
                      className="object-cover hover:scale-105 transition-all duration-500 w-full h-full"
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />


                  </motion.div>
                  <div className="capitalize font-semibold text-lg">
                    {image?.title}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {(offers && offers[0]?.active && isOfferActive && !localStorage.getItem('isOfferActive') && showPopup) && (
          <motion.div
            className="fixed z-[5000] flex items-center justify-center top-0 left-0 w-full h-full bg-[#1a1a1d7a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-[700px] overflow-hidden h-[450px] bg-white rounded-3xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute object-contain right-5 top-5 text-white cursor-pointer" onClick={() => {
                setIsOfferActive(false);
                localStorage.setItem('isOfferActive', true);
              }}>
                &times;
              </div>
              <img src={offers[0]?.image} className="object-cover" alt="" />
            </motion.div>
          </motion.div>
        )}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#000000e2] flex justify-center items-center z-[6000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={closeImagePreview}
          >
            <motion.div
              className="absolute right-10 top-10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={closeImagePreview}
            >
              <FaX className="text-gray-200" size={22} />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeImagePreview}
              >
                {/* &times; */}
              </button>
              <div className="max-w-[700px] max-h-screen rounded-xl shadow-lg overflow-hidden">
                <img src={selectedImage} className="object-cover w-full" alt="Preview" />
              </div>
            </motion.div>


          </motion.div>
        )}

      </div>
      <div className="flex w-full justify-center">
        {
          loading && <Loader />
        }
      </div>
      <div className="w-full flex justify-center">
        <motion.div
          className=" justify-center mt-10 md:mt-20 capitalize bg-custombrown text-white rounded-full py-2 px-6 md:px-10 flex items-center hover:scale-105 transition-all duration-300 cursor-pointer w-60"
          onClick={handleViewMore}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View More<FaChevronDown className="ml-2" />
        </motion.div>
      </div>
      <br />
    </>
  );
}

export default Gallery;
