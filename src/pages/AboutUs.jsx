import HomeTemplate1 from "../components/HomeTemplate1";
import { Link } from "react-router-dom";
import About from '../../public/samaboutpic.jpg';
import React, { useEffect,useState,useRef } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import axios from 'axios';

import Parking from '../assets/services/parking.webp';
import Escalators from '../assets/services/escalator.webp';
import Lift from '../assets/services/lift.webp';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const [reels, setReels] = useState([]);
  const videoRefs = useRef([]);


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
    const fetchReels = async () => {
      try {
        const accessToken = 'IGQWROb2YyeUxEODZAObUUtN2wzTVEtb0xfQ1JNclMwb1J3c29UeGM5by1tU1dsSl9GQW1HMEFqVWcxMUd1cFg3QTkwamhFQlloSGRlMDJxNng0UVEzQzVReFEydEViTGpSOU5PUTFabWYtNWVRSTZAOTEJZAb3FwbmcZD';
        const userId = '7979275072189805';
        const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`;

        const response = await axios.get(url);
        const latestReels = response.data.data
          .filter(item => item.media_type === 'VIDEO')
          .slice(0, 3); // Ensure it selects 4 reels

        setReels(latestReels);
        // console.log(latestReels, 'Latest Reels'); 
      } catch (error) {
        console.error('Error fetching Instagram reels:', error);
      }
    };

    fetchReels();
  }, []);
  return (
    <div>
      <header className="header-space h-20 sm:h-9"></header>
      <div className="w-full h-auto lg:h-[75vh] flex flex-col lg:flex-row mx-auto justify-center items-center gap-12 bg-[#F1F0F0] p-6 lg:p-0">
        <div className="w-full lg:w-5/12 h-full flex flex-col gap-8 justify-center text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl">About us</h1>
          <p className="text-sm lg:text-base">
            Welcome to South Avenue Mall, Jabalpur's premier shopping and entertainment destination. Opened in 2009, it holds the distinction of being the city's first mall and multiplex, located in the prestigious Narmada Road area—a highly sought-after residential location. South Avenue Mall offers a vibrant mix of cinemas, food outlets, shopping, and entertainment, fulfilling the long-awaited demand for a quality family outing venue in the city. Our mall has elevated Jabalpur's standing among India's modern urban centers.
          </p>
        </div>
        <div className="w-full lg:w-[450px] h-auto overflow-hidden relative lg:top-[50px]">
          <img src={About} alt="About Us Image" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col px-6 lg:px-[200px] py-8 lg:py-16 text-sm lg:text-base">
        <p className="text-center mt-8">
          This remarkable development is the proud initiative of the esteemed Raja Gokuldas family of Jabalpur. With an impeccable reputation spanning over two centuries, the family is well-known for their contributions to trading, manufacturing, real estate, and investment. They are also deeply involved in educational and philanthropic endeavors. For more information, please visit [www.gokuldas.com](http://www.gokuldas.com). The same management team has successfully executed other real estate projects in Jabalpur, resulting in satisfied customers and impressive property appreciation.
        </p>
        <p className="text-center mt-8">
          Designed by the renowned architect Sanjay Puri from Mumbai, South Avenue Mall features a modern, fully air-conditioned glass facade, making it a true landmark in the city. The mall hosts an array of top international and national brands, making it the go-to retail destination for the entire region. We are committed to continuously introducing new and upscale brands to enhance your shopping experience.
        </p>
        <p className="text-center mt-8">
          In addition to shopping, South Avenue Mall regularly hosts a variety of events and promotions. Be sure to check out our events section and follow our social media channels for the latest updates. The company is now looking to expand and welcomes business and joint development proposals from other cities in Central India.
        </p>
      </div>

      <div className="w-full py-10 bg-gray-100 flex flex-col justify-center items-center mx-auto gap-4">
        <h1 className="text-3xl lg:text-4xl uppercase mt-10">Mall Features</h1>
        <p className="text-center text-sm lg:text-base px-6 lg:px-[200px]">
          South Avenue Mall offers an exceptional experience for every family member, catering to both the young and the elderly. Our mall features a 3-screen multiplex for the latest movies, a variety of restaurants for a delightful dining experience, an entertainment and gaming zone for kids, a hypermarket for convenient shopping, and a wide range of retail stores with top brands. Situated in a prime location with a 300-foot frontage on a main 120-foot-wide road, South Avenue Mall is fully air-conditioned, providing a comfortable environment for all visitors. We offer ample open and covered parking, reliable power backup by generators, and easy access to all floors via lifts and escalators. Our dedicated security, maintenance, and management teams ensure a safe and well-maintained space. We also host regular events and promotions to enhance your visit. As a lease-only property, we maintain a high standard of quality and exclusivity. Additionally, the mall is equipped with handicap access and wheelchairs on premises, ensuring inclusivity for all guests. South Avenue Mall is committed to delivering a comfortable and enjoyable family outing experience.
        </p>
      </div>

      {/* OUR SERVICES */}
      <section className="flex flex-col items-center w-full  pt-10 pb-16">
        <p className="text-3xl uppercase tracking-wide">Our Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          <div className="flex flex-col w-full md:w-[350px] p-4">
            <Link to="/events">
              <div className="w-full  overflow-hidden rounded cursor-pointer">
                <img src={Parking} className=" hover:scale-110 duration-500 object-contain" alt="Car Parking" />
              </div>
            </Link>
            <p className="text-center mt-5 text-xl font-semibold text-customblack">Car Parking</p>
          </div>

          <div className="flex flex-col w-full md:w-[350px] p-4">
            <Link to="/events">
              <div className="w-full  overflow-hidden rounded cursor-pointer">
                <img src={Lift} className=" hover:scale-110 duration-500 object-contain" alt="Customer Lifts" />
              </div>
            </Link>
            <p className="text-center mt-5 text-xl font-semibold text-customblack">Customer Lifts</p>
          </div>

          <div className="flex flex-col w-full md:w-[350px]">
            <Link to="/events">
              <div className="w-full overflow-hidden rounded cursor-pointer p-5">
                <img src={Escalators} className="hover:scale-110 duration-500 object-contain" alt="Escalators" />
              </div>
            </Link>
            <p className="text-center mt-5 text-xl font-semibold text-customblack">Escalators</p>
          </div>

        </div>
      </section>
      {/* OUR SERVICES */}

      {/* SOCIAL MEDIA */}
      {/* Social Media Section */}
      <div className="h-10  w-full bg-gray-100"></div>
      <div className="w-full flex relative bg-gray-100 items-center  text-2xl sm:text-4xl">

        <p className="min-w-[290px] sm:min-w-[400px] px-10 flex items-center justify-center">
          Our Social Media
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>


      <section className="flex flex-col items-center w-full bg-gray-100 pt-10 sm:mt-0 pb-10">
        {/* <p className="text-2xl md:text-3xl uppercase tracking-wide">Our Social Media</p> */}
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
          {reels.length > 0 ? (
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
      {/* SOCIAL MEDIA */}
    </div>
  );
}

export default AboutUs;
