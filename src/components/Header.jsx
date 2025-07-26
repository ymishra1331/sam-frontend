import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImage from "../../public/sam.webp";
import { GoHome } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronUp, FaChevronRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown, FaHome } from "react-icons/fa";
import Homeicon from '../assets/homeicon.webp';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBusinessEnquiryOpen, setIsBusinessEnquiryOpen] = useState(false);
  const [isOfferTitle, setIsOfferTitle] = useState(true);
  const [activePath, setActivePath] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (path) => {
    setActivePath(path);
    navigate(path);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const controlHeaderVisibility = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY >= lastScrollY ) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlHeaderVisibility);
  //     return () => {
  //       window.removeEventListener('scroll', controlHeaderVisibility);
  //     };
  //   }
  // }, [lastScrollY]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollPosition]);
  return (
    <>
      <div className={`${!isVisible ? "top-[-100%]" : ""} w-full h-8 bg-white hidden lg:flex justify-between items-center transition-all duration-300 border-b`}>
        <div className="flex items-center text-sm h-full pl-10 ">
          <p className="text-customblack font-semibold ">Contact:&nbsp;</p>
          <a className="text-customblack font-normal tracking-wide" href="tel:+919425807508"> 0761-2662222, 9425807508 |&nbsp;</a>
          <Link to="https://www.google.com/maps?ll=23.124094,79.927194&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=8103553950485014688"><p className="text-customblack"><FaLocationDot /></p></Link>
            <Link to="https://www.google.com/maps?ll=23.124094,79.927194&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=8103553950485014688"><p className="uppercase text-customblack font-normal cursor-pointer">&nbsp;Get Directions</p></Link>
            <Link to="https://www.google.com/maps?ll=23.124094,79.927194&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=8103553950485014688"><p className="text-customblack"><FaChevronDown className="rotate-[-90deg] ml-1" /></p></Link>
        </div>


        <div className="text-gray-500 flex items-center gap-3 pr-10">
          <div>
            <p className="font-semibold text-sm">
              🕒 Mall Timings: <span className="font-normal text-gray-600">Mon - Sun, 11:00AM - 10:00PM</span>
            </p>
          </div>
          <p>|</p>
          <FaFacebook className="cursor-pointer " onClick={() => { window.open("https://www.facebook.com/SAM.JBP") }} size={17} />
          <FaInstagram className="cursor-pointer " onClick={() => { window.open("https://www.instagram.com/southavenuemall/?hl=en", "_blank") }} size={17} />
          <TfiYoutube className="cursor-pointer " onClick={() => { window.open("https://www.youtube.com/@southavenuemallmoviemagic6544", "_blank") }} size={17} />
          <FaLinkedin className="cursor-pointer " onClick={() => { window.open("https://www.linkedin.com/company/south-avenue-mall/", "_blank") }} size={17} />
          {/* <p className=" text-customblack text-sm cursor-pointer font-semibold" onClick={() => { navigate("/career") }}>Careers</p> */}
        </div>
      </div>

      <motion.header
        className={`${!isVisible ? "top-0" : ""} fixed flex w-full z-[5000] bg-white mx-auto drop-shadow-xl transition-all duration-300 h-20 md:h-[95px]`}
      >
        <nav className="flex w-full items-center justify-between lg:justify-center   px-2 sm:px-5  lg:px-5  sm:h-[95px]">
          <Link to="/">
            <motion.img
              src={logoImage}
              alt="Logo"
              className="block lg:hidden object-cover h-16 w-32 md:h-20 md:w-[150px]  lg:w-[180px] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <motion.div
            className="lg:hidden pr-5 md:pb-4 scale-150 sm:scale-150"
            onClick={toggleMenu}
          >
            <FaBars className="text-gray-800 font-light" />
          </motion.div>

          <motion.div
            className="hidden lg:flex pr-10 relative top-[-2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ul className="h-full items-center flex gap-4 md:gap-6 lg:gap-4 xl:gap-12  text-sm text-customblack md:text-base lg:text-xl">
              {[
                { path: "/brands", label: "Brands" },
                { path: "/entertainments", label: "Entertainment" },
                { path: "/dine", label: "Dine" },
                { path: "/events", label: "Events" },
              ].map((item) => (
                <motion.li
                  key={item.path}
                  className={`relative ${location.pathname === item.path
                    ? "text-custombrown text-[0.98rem] after:absolute after:bottom-[7px] after:left-1/2 after:w-9 after:h-[1px] after:bg-custombrown after:transform after:-translate-x-1/2 transition-all duration-300"
                    : ""
                    } hover:text-custombrown hover:underline py-1 text-[13px] lg:text-[13px] xl:text-[15px] uppercase text-black tracking-wide`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={item.path}>{item.label}</Link>
                </motion.li>
              ))}


              <Link to="/">
                <motion.div
                  className="object-cover h-16 w-32 md:h-16 md:w-28 lg:w-[150px] flex items-center justify-center text-gray-500 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onMouseEnter={() => setIsHovered(true)}  // Set hover to true on mouse enter
                  onMouseLeave={() => setIsHovered(false)} // Set hover to false on mouse leave
                >
                  {isHovered ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl"
                    >
                      <motion.img
                        src={Homeicon}  // Your logo image
                        alt="Logo" //new build comment
                        className="object-cover h-16 w-32 md:h-16 md:w-28 lg:w-[90px]"
                        initial={{ opacity: 0, scale: 0.8 }}  // Start hidden and scaled down
                        animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and size
                        exit={{ opacity: 0, scale: 0.8 }}     // Exit with fade and scale down
                        transition={{ duration: 0.3 }}        // Control transition duration
                      />
                    </motion.div>

                  ) : (
                    <motion.img
                      src={logoImage}  // Your logo image
                      alt="Logo"
                      className="object-cover h-16 w-32 md:h-16 md:w-28 lg:w-[150px]"
                      initial={{ opacity: 0, scale: 0.8 }}  // Start hidden and scaled down
                      animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and size
                      exit={{ opacity: 0, scale: 0.8 }}     // Exit with fade and scale down
                      transition={{ duration: 0.3 }}        // Control transition duration
                    />
                  )}
                </motion.div>
              </Link>



              {[
                { path: "/gallery", label: "Gallery" },
                { path: "/floor-plan", label: "Level Plan" },
                { path: "/career", label: "Career" },
              ].map((item) => (
                <motion.li
                  key={item.path}
                  className={`relative ${location.pathname === item.path
                    ? "text-custombrown text-[0.98rem] after:absolute after:bottom-[7px] after:left-1/2 after:w-9 after:h-[1px] after:bg-custombrown after:transform after:-translate-x-1/2 transition-all duration-300"
                    : ""
                    } hover:text-custombrown hover:underline py-1 text-[13px] lg:text-[13px] xl:text-[15px] uppercase text-black tracking-wide`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={item.path}>{item.label}</Link>
                </motion.li>
              ))}

              {/* Business Enquiry Dropdown */}
              <motion.li
                className={`relative  ${location.pathname.startsWith('/business-enquiry')
                  ? "text-custombrown text-[15px] after:absolute after:bottom-[7px] after:left-1/2 after:w-9 after:h-[1px] after:bg-custombrown after:transform after:-translate-x-1/2 transition-all duration-300"
                  : ""
                  } hover:text-custombrown py-1 text-[15px] uppercase text-black tracking-wide`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="cursor-pointer">Business Enquiry <span className="text-[15px]"></span></span>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-1 w-48 bg-white shadow-lg border rounded-md z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ul>
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/business-enquiry/leasing">Leasing</Link>
                      </li>
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/business-enquiry/advertising">Advertising</Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile Menu */}
          <div
            className={`fixed ${isMenuOpen ? "top-0" : "top-[-1700%]"
              } h-screen inset-0 bg-white flex flex-col items-center pt-12 z-[5000] md:hidden transition-all duration-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute right-8 top-7" onClick={toggleMenu}>
              <FaX size={18} />
            </div>
            <ul className="flex flex-col pl-6 items-start gap-2 text-[16.5px] font-light bg-white w-full py-5 text-customblack">
              {[
                { path: "/brands", label: "Brands" },
                { path: "/entertainments", label: "Entertainment" },
                { path: "/dine", label: "Dine" },
                { path: "/events", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/floor-plan", label: "Level Plan" },
                { path: "/career", label: "Career" },
              ].map((item) => (
                <li
                  key={item.path}
                  className={`${location.pathname === item.path
                    ? "text-custombrown"
                    : ""
                    } w-full pr-8`}
                >
                  <Link
                    to={item.path}
                    className="flex items-center mt-4 justify-between w-full"
                    onClick={toggleMenu}
                  >
                    {item.label}
                    <span>
                      <FaChevronRight size={11} className="font-light" />
                    </span>
                  </Link>
                </li>
              ))}

              {/* Business Enquiry Dropdown */}
              <li className="w-full pr-8">
                <div
                  className={`flex items-center mt-4 justify-between w-full cursor-pointer ${location.pathname.startsWith('/business-enquiry') ? 'text-custombrown' : ''}`}
                  onClick={() => setIsBusinessEnquiryOpen(!isBusinessEnquiryOpen)}
                >
                  Business Enquiry
                  <span>
                    <FaChevronRight size={11} className={`font-light transform ${isBusinessEnquiryOpen ? 'rotate-90' : ''}`} />
                  </span>
                </div>
                {isBusinessEnquiryOpen && (
                  <ul className="pl-4 mt-2">
                    <li className="hover:text-custombrown w-full py-2">
                      <Link to="/business-enquiry/advertising" onClick={toggleMenu}>
                        Advertising
                      </Link>
                    </li>
                    <li className="hover:text-custombrown w-full py-2">
                      <Link to="/business-enquiry/leasing" onClick={toggleMenu}>
                        Leasing
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <div className="w-full h-20 flex gap-5 absolute bottom-0 left-0 pl-4">
              <FaFacebook onClick={() => { window.open("https://www.facebook.com/SAM.JBP") }} size={22} className="text-gray-700" />
              <FaInstagram onClick={() => { window.open("https://www.instagram.com/southavenuemall/?hl=en", "_blank") }} size={22} className="text-gray-700" />
              <TfiYoutube onClick={() => { window.open("https://www.youtube.com/@southavenuemallmoviemagic6544", "_blank") }} size={22} className="text-gray-700" />
              <FaLinkedin onClick={() => { window.open("https://www.linkedin.com/company/south-avenue-mall/", "_blank") }} size={22} className="text-gray-700" />
            </div>
          </div>
        </nav>
      </motion.header>

      {/* {isOfferTitle && location.pathname === '/' && <div className="shadow-lg w-full h-16  absolute mt-[105px] bg-[#303035] hidden sm:flex items-center justify-center text-white text-xs font-light z-[5000]">
        Welcome to South Avenue Mall. Jabalpur's premier shopping and entertainment destination,{" "}
        <p className="underline cursor-pointer">&nbsp;view all brands</p>
        <div className="absolute right-5 cursor-pointer bg-[#feffff90] rounded-full w-6 h-6 flex items-center justify-center" onClick={() => setIsOfferTitle(false)}>
          <FaX className="text-[#303035]" size={11} />
        </div>
      </div>} */}

      {/* <div className="bg-gray-200 h-[66px] rounded-t-3xl w-full fixed bottom-0 left-0 z-[5000] flex sm:hidden">
        <ul className="flex w-full items-center h-full justify-between px-5">
          <motion.li
            onClick={() => navigate('/')}
            className={`text-xs flex flex-col items-center ${
              location.pathname === '/'
                ? 'text-customred'
                : 'text-gray-500'
            }`}
          >
            <GoHome size={22} />
            Homes
            {location.pathname === '/' && (
              <div className="absolute bottom-[-23px] bg-customred w-7 h-7 rounded-full"></div>
            )}
          </motion.li>
          <motion.li
            onClick={() => navigate('/brands')}
            className={`text-xs flex flex-col items-center ${
              location.pathname === '/brands'
                ? 'text-customred'
                : 'text-gray-500'
            }`}
          >
            <MdOutlineShoppingBag size={20} />
            Brands
            {location.pathname === '/brands' && (
              <div className="absolute bottom-[-23px] bg-customred w-7 h-7 rounded-full"></div>
            )}
          </motion.li>
          <motion.li
            onClick={() => navigate('/dine')}
            className={`text-xs flex flex-col items-center ${
              location.pathname === '/dine'
                ? 'text-customred'
                : 'text-gray-500'
            }`}
          >
            <IoRestaurantOutline size={20} />
            Dine
            {location.pathname === '/dine' && (
              <div className="absolute bottom-[-23px] bg-customred w-7 h-7 rounded-full"></div>
            )}
          </motion.li>
          <motion.li
            onClick={() => navigate('/entertainments')}
            className={`text-xs flex flex-col items-center ${
              location.pathname === '/entertainments'
                ? 'text-customred'
                : 'text-gray-500'
            }`}
          >
            <HiOutlineUserGroup size={20} />
            Entertainment
            {location.pathname === '/entertainments' && (
              <div className="absolute bottom-[-23px] bg-customred w-7 h-7 rounded-full"></div>
            )}
          </motion.li>
          <motion.li
            onClick={() => navigate('/events')}
            className={`text-xs flex flex-col items-center ${
              location.pathname === '/events'
                ? 'text-customred'
                : 'text-gray-500'
            }`}
          >
            <LuCalendarDays size={20} />
            Events
            {location.pathname === '/events' && (
              <div className="absolute bottom-[-23px] bg-customred w-7 h-7 rounded-full"></div>
            )}
          </motion.li>
        </ul>
      </div> */}

      <div className="bg-gray-200 h-[66px] rounded-t-3xl w-full fixed bottom-0 left-0 z-[4000] flex sm:hidden px-3">
        <ul className="flex w-full items-center h-full justify-between px-5 relative">
          {['/', '/brands', '/entertainments', '/dine', '/events'].map((path, index) => {
            const icons = [
              <GoHome size={22} />,
              <MdOutlineShoppingBag size={20} />,
              <HiOutlineUserGroup size={20} />,
              <IoRestaurantOutline size={20} />,
              <LuCalendarDays size={20} />
            ];
            const labels = ['Home', 'Brands', 'Entertainment', 'Dine', 'Events'];

            const isActive = activePath === path;

            return (
              <motion.li
                key={index}
                onClick={() => handleClick(path)}
                className={`text-xs flex flex-col items-center relative cursor-pointer ${isActive ? 'text-white  z-[5000] top-[-20px] ' : 'text-gray-500'
                  }`}
                whileTap={{ scale: 0.9 }}
              >
                {icons[index]}
                {!isActive && labels[index]} {/* Conditionally render text */}
                {isActive && (
                  <motion.div
                    className="absolute z-[-1] top-[-15px] bg-customred w-14 h-14 rounded-full transition-all duration-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
