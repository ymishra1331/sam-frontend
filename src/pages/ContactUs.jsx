import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import Contact from "../assets/contact.webp";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateNotification } from "../actions/contact.action";
import { IoIosMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";

const ContactUs = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const dispatch = useDispatch();

  const errorToast = (msg) => {
    toast.error(msg, { position: "top-center" });
  };
  const successToast = (msg) => {
    toast.success(msg, { position: "top-center" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !feedback) {
      errorToast("All Fields Are Required!");
      return;
    }
    const obj = { username, email, phone, feedback };
    dispatch(CreateNotification(obj)).then(() => {
      successToast("Thank You For Your Valuable Feedback!");
    });
    setUsername(null);
    setEmail(null);
    setPhone(null);
    setFeedback(null);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Banner Image */}
      <header className="header-space h-20 sm:h-20"></header>

      <div className="w-full h-[300px] sm:h-[500px] overflow-hidden bg-cover bg-center">
        <img
          src={Contact}
          className="object-cover w-full h-full"
          alt="Contact"
        />
      </div>

      {/* Contact and Feedback Section */}
      <div className="container mx-auto py-10 px-0 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Us Section */}
          <div className="p-8 bg-white lg:w-1/3 lg:border-r border-dotted border-[#1a1a1d88]">
            <h2 className="text-2xl lg:text-3xl mb-2">Contact Us</h2>
            <p className="mb-4 text-gray-600 text-sm flex items-center">
              <FaLocationArrow className="mr-2 text-gray-400 text-3xl" />
              South Avenue Mall, Narmada Rd, Bhim Nagar, Katanga, Jabalpur, MP
              482008
            </p>
            <ul>
              <li className="mb-2 text-sm text-black-600 flex cursor-pointer">
                <a href="tel:0761-266-8800" className="flex items-center">
                  <IoCall className="mr-2 text-gray-400" />
                  0761-266-8800
                </a>
              </li>
              <a
                href="mailto:info@southavenuemall.com"
                className="mb-2 text-sm flex items-center"
              >
                <IoIosMail className="mr-2 text-gray-400" size={20} />
                info@southavenuemall.com
              </a>
            </ul>

            <div className="mt-4">
              <h3 className="text-lg">Follow Us</h3>
              <div className="flex mt-5 text-gray-600 gap-3">
                <FaFacebook
                  className="cursor-pointer hover:top-[-4px] relative transition-all duration-300"
                  onClick={() => {
                    window.open("https://www.facebook.com/SAM.JBP");
                  }}
                  size={22}
                />
                <FaInstagram
                  className="cursor-pointer hover:top-[-4px] relative transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/southavenuemall/?hl=en",
                      "_blank"
                    );
                  }}
                  size={22}
                />
                <TfiYoutube
                  className="cursor-pointer hover:top-[-4px] relative transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/@southavenuemallmoviemagic6544",
                      "_blank"
                    );
                  }}
                  size={22}
                />
                <FaLinkedin
                  className="cursor-pointer hover:top-[-4px] relative transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/south-avenue-mall/",
                      "_blank"
                    );
                  }}
                  size={22}
                />
              </div>
            </div>
          </div>

          {/* Feedback Form Section */}
          <div className="p-6 bg-white rounded-md w-full lg:w-2/3">
            <h2 className="text-2xl lg:text-3xl mb-4">
              Have a grievance or special feedback? Write to top management.
            </h2>
            <p className="text-sm mb-4">
              Your feedback is invaluable to us. Help us serve you better by
              sharing your insights and suggestions directly with our top
              management.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="text"
                  className=" placeholder:font-normal placeholder:text-[#000000b0] block w-full px-3 py-2 bg-white border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Full Name"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  className="placeholder:font-normal placeholder:text-[#000000b0] block w-full px-3 py-2 bg-white border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Email Id"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="number"
                  className="placeholder:font-normal placeholder:text-[#000000b0] block w-full px-3 py-2 bg-white border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Mobile Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  className="placeholder:font-normal placeholder:text-[#000000b0] block w-full px-3 py-2 bg-white border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Any Feedback"
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-[200px] py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="flex w-full h-[300px] sm:h-[400px] lg:h-[500px] px-5 lg:px-24 mb-20">
        <div className="rounded overflow-hidden w-full bg-gray-100">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.2619406378485!2d79.92461907495681!3d23.124098912532457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ad8e8f53dadb%3A0x70759b622cdf68a0!2sSouth%20Avenue%20Mall.!5e0!3m2!1sen!2sin!4v1723118035835!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
