import Logo from '../../public/logowhite.webp';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { useNavigate,Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full bg-customblack flex flex-col px-8 py-10  md:px-20 md:py-8 mb-10 sm:mb-0">
        <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center sm:items-start justify-start mb-8 md:mb-0">
            <Link to={'/'}><div className='w-[150px] md:w-[220px] hover:scale-105 transition-all duration-500 p-5'>
              <img src={Logo} className="w-full h-full" alt="Logo" />
            </div></Link>
            <p className="text-sm text-white mb-1"><span className="font-light mr-1">Mall Timings:</span>11AM - 10PM</p>
            <p className="text-sm text-white mb-1"><span className="font-light mr-1">Restaurant Timings:</span>11AM - 10PM</p>
            <p className="text-sm text-white mb-1"><span className="font-light mr-1">Contact: </span>0761-2662222, 9425807508</p>
            <div className="flex mt-5 text-white gap-3">
              <FaFacebook className="cursor-pointer hover:top-[-4px] relative transition-all duration-300" onClick={() => { window.open("https://www.facebook.com/SAM.JBP") }} size={22} />
              <FaInstagram className="cursor-pointer hover:top-[-4px] relative transition-all duration-300" onClick={() => { window.open("https://www.instagram.com/southavenuemall/?hl=en", "_blank") }} size={22} />
              <TfiYoutube className="cursor-pointer hover:top-[-4px] relative transition-all duration-300" onClick={() => { window.open("https://www.youtube.com/@southavenuemallmoviemagic6544", "_blank") }} size={22} />
              <FaLinkedin className="cursor-pointer hover:top-[-4px] relative transition-all duration-300" onClick={() => { window.open("https://www.linkedin.com/company/south-avenue-mall/", "_blank") }} size={22} />
            </div>
          </div>

          <div className="flex flex-row w-full  justify-between sm:justify-evenly px-12">
            {/* About Us Section */}
            <div className="flex flex-col mb-8 md:mb-0 ">
              <p className="text-white font-semibold text-lg md:text-xl mb-5 mt-5">About Us</p>
              <ul className="text-white text-sm font-light">
                {[
                  { text: 'About SAM', link: '/about' },
                  { text: 'Leasing', link: '/business-enquiry/leasing' },
                  { text: 'Advertising', link: '/business-enquiry/advertising' },
                  { text: 'Careers', link: '/career' },
                  { text: 'Level Plan', link: '/floor-plan' }
                ].map((item, index) => (
                  <li
                    key={index}
                    className="mb-2 cursor-pointer group hover:font-normal flex items-center"
                    onClick={() => { navigate(item.link) }}>
                    {item.text}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 hover:font-normal transition-all duration-300 ease-out">

                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Quick Links Section */}
            <div className="flex flex-col  mb-8 md:mb-0">
              <p className="text-white font-semibold text-lg md:text-xl mb-5 mt-5">Quick Links</p>
              <ul className="text-white text-sm font-light">
                {[
                  { text: 'Photos & Media', link: '/gallery' },
                  { text: 'Events', link: '/events' },
                  { text: 'Contact Us', link: '/contactus' },
                  { text: 'Careers', link: '/career' },
                  { text: 'Level Plan', link: '/floor-plan' }
                ].map((item, index) => (
                  <li
                    key={index}
                    className="mb-2 cursor-pointer group hover:font-normal flex items-center"
                    onClick={() => { navigate(item.link) }}>
                    {item.text}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 hover:font-normal transition-all duration-300 ease-out">

                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Map Location Section */}
          <div className="flex flex-col sm:mr-10 mb-10 sm:mb-0">
            <p className="text-white font-semibold text-lg mb-4">Walkthrough</p>
            <div className="w-[300px] rounded overflow-hidden h-[220px] bg-gray-100">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/SeYCNC3TYt0?si=CJIHIQgbxLpLDpPY&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Map Location Section */}
          <div className="flex flex-col">
            <p className="text-white font-semibold text-lg mb-4">Map Location</p>
            <div className="w-[300px] rounded overflow-hidden h-[220px] bg-gray-100">
              <iframe className="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.2619406378485!2d79.92461907495681!3d23.124098912532457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ad8e8f53dadb%3A0x70759b622cdf68a0!2sSouth%20Avenue%20Mall.!5e0!3m2!1sen!2sin!4v1723118035835!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-white text-sm  mt-10 items-center sm:items-start">
          <p className="mb-4 md:mb-0 text-center sm:text-start">Welcome to South Avenue Mall. Jabalpur's premier shopping and entertainment destination</p>
          <div className="flex">
            <button className="mr-5 cursor-pointer hover:border-b " onClick={() => navigate("/privacy/privacy")}>Privacy Policy</button>
            <button className="cursor-pointer hover:border-b" onClick={() => navigate("/privacy/terms")}>Terms & Conditions</button>
          </div>
        </div>
        <div className="mt-5  w-full text-xs flex justify-center tracking-wider items-center h-10 bg-customblack text-white text-opacity-[0.7] font-light ">
          Made with <span className="text-red-500 mx-1 opacity-[0.7]">❤</span> by <span className="font-normal ml-1 cursor-pointer" onClick={() => { window.open("https://www.innogative.in/", "_blank") }}>Innogative</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
