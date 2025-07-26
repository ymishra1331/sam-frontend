import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CareerImg from '../assets/career.webp';
import Team from '../assets/team.webp';
import Logo from '/sam.webp';
import CareerPopupImg from '../assets/about.webp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import { adminCreateCareer } from '../actions/career.action';
import JobCard from '../components/JobCard';
import { GetVacancies } from '../actions/vacancy.action';
const Career = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [title,setTitle] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [resume, setResume] = useState(null);
  const [filename, setFilename] = useState(null);


  const allvacancies = useSelector((state) => state.vacancy.allvacancies);
  const [vacancies, setVacancies] = useState(null);

  useEffect(() => {
    dispatch(GetVacancies());
  }, [dispatch]);

  useState(() => {
    if (allvacancies) {
      setVacancies(allvacancies);
    }
  }, [allvacancies])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const errorToast = (msg) => {
    toast.error(msg, { position: "top-center" });
  }
  const successToast = (msg) => {
    toast.success(msg, { position: "top-center" });
  }


  const [applyPopup, setApplyPopup] = useState(false);

  const handleApply = () => {
    if (!name || !email || !phone || !resume) {
      errorToast("Please fill all the fields");
    }
    const careerObj = {
      title:"No Title",
      name,
      email,
      phone,
      resume
    }
    dispatch(adminCreateCareer(careerObj)).then(() => {
      successToast("Applied Successfully");
    })
    setApplyPopup(false);
    setName(null);
    setEmail(null);
    setPhone(null);
    setResume(null);
  }


  return (
    <>
      <header className="header-space h-20 sm:h-16"></header>

      <div className="w-full mx-auto ">
        {/* Hero Section */}
        <motion.div
          className="w-full relative flex flex-col items-center h-auto min-h-[322px] gap-3 bg-[#F1F0F0] p-4 md:p-8"
        >
          <motion.div
            className="absolute w-full h-full z-[0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img className="object-cover w-full h-full brightness-[25%]" src={CareerImg} alt="" />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl uppercase text-center mt-12 sm:mt-20 z-[10] text-white"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >Work with us</motion.h1>
          <motion.p
            className="text-center w-full md:w-8/12 lg:w-6/12 text-base md:text-lg lg:text-xl z-[10] text-gray-400"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the dynamic team at South Avenue Mall and be a part of Jabalpur’s premier shopping and entertainment destination. Explore exciting career opportunities and contribute to creating memorable experiences for our visitors.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="w-full flex flex-col items-center gap-16 my-10 p-4 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-10/12 flex flex-col md:flex-row gap-8">
            {/* Text Section */}
            <motion.div
              className="w-full flex flex-col justify-center items-start gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider">Be a part of our team</h1>
              <p className="text-base md:text-lg lg:text-xl">
                Join our team and grow your career with us. We're committed to fostering talent and providing opportunities for professional development.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full h-[300px] flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full max-w-[400px] h-full rounded-md overflow-hidden bg-gray-200">
                <img src={Team} className="object-cover h-full" alt="" />
              </div>
            </motion.div>
          </div>

          {/* Application Section */}
          <motion.div
            className="flex flex-col text-center gap-3 w-full items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-custombrown text-white px-8 md:px-10 py-[2px] rounded cursor-pointer text-base md:text-lg hover:scale-105 transition-all duration-300" onClick={() => setApplyPopup(true)}>
              Apply Here
            </button>
            <p className="text-base md:text-lg">
              Submit your application to start your journey with us.
              <br />
              For any queries, please contact us at <a style={{color:"blue"}} href="mailto:careers@southavenuemall.com" className="text-custombrown">careers@southavenuemall.com</a>

            </p>
          </motion.div>
        </motion.div>
      </div>


      {/* Vacancies Section */}

      <div className="h-10 bg-gray-100 w-full"></div>
      <div className="w-full flex  relative bg-gray-100 items-center text-2xl sm:text-4xl">
        <p className="min-w-[250px] sm:min-w-[340px] px-10 flex items-center justify-center">
          Vacancies
        </p>
        <div className=" flex right-0 items-end w-full">
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      <section className="flex flex-col items-center w-full bg-gray-100 sm:pt-10 pb-16 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5 ">
          {allvacancies?.map((vacancy, index) => (
                        <JobCard key={index} data={vacancy} />

          ))}
        </div>
      </section>

      {/* Vacancies Section */}

      {applyPopup &&
        <motion.div
          className="fixed top-0 left-0 flex justify-center items-center h-full w-full bg-[#0000009b] z-[5000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex h-[480px] w-[700px] z-[6000] px-8 sm:px-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden sm:block w-[50%] h-full object-cover">
              <img src={CareerImg} className="object-cover min-h-full" alt="" />
            </div>
            <div className=" sm:w-[50%] h-full bg-white flex flex-col items-center px-8 justify-between py-5">
              <div><img src={"https://innogativebucket.s3.ap-south-1.amazonaws.com/sam.webp"} alt="" /></div>
              <div>
                <p className="w-full flex items-center text-[#1a1a1d] justify-center font-semibold uppercase text-xl mb-2">Join Our Family😍</p>
                <input className="border-[.1px] h-10 pl-2 border-[#1a1a1d5e] text-xs font-light placeholder:text-[#1a1a1d] w-full" type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} />
                <input className="mt-3 border-[.1px] h-10 pl-2 border-[#1a1a1d5e] text-xs font-light placeholder:text-[#1a1a1d] w-full" type="email" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} />
                <div className="relative mt-3 border-[.1px] h-10 pl-2 border-[#1a1a1d5e] text-xs font-light placeholder:text-[#1a1a1d] w-full flex items-center">
                  <div className="absolute left-0 bg-gray-200 h-full flex items-center w-8 justify-center rounded-r ">+91</div>
                  <input
                    className="w-full h-full pl-7 outline-none"
                    type="text"
                    placeholder="Enter your phone here"
                    maxLength={10} // Limit to 10 digits
                    onChange={(e) => {
                      // Get the raw value and remove any non-digit characters
                      const rawValue = e.target.value.replace(/\D/g, '');

                      // Limit the length to 10 digits
                      const phoneValue = rawValue.slice(0, 10);

                      // Update state with the phone number
                      setPhone(phoneValue);
                    }}
                    value={phone} // Display the phone number without +91
                  />

                </div>


                <div className="w-full">
                  <div className="border-dotted divide-dotted border border-[#1a1a1d] mt-3 w-full flex items-center justify-center h-10">
                    <span
                      className="text-xs font-light cursor-pointer"
                      onClick={() => document.getElementById('resumeUpload').click()}
                    >
                      {filename?filename:"Upload your resume"}
                    </span>
                  </div>
                  <input
                    type="file"
                    id="resumeUpload"
                    style={{ display: 'none' }}
                    accept=".pdf" // Only allow PDF files
                    onChange={(e) => {
                      setResume(e.target.files[0])
                      setFilename(e.target.files[0].name)
                    }}
                  />
                </div>
                <div className="w-full mt-3 uppercase border-2 border-[#ff1aa7] flex items-center justify-center h-10 text-[#ff1aa7] cursor-pointer hover:tracking-widest transition-all duration-300" onClick={handleApply}>
                  Apply!
                </div>
                <div className="underline capitalize text-sm font-light w-full flex justify-center mt-2 cursor-pointer" onClick={() => { setApplyPopup(false) }}>
                  No Thanks
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
      <ToastContainer />
    </>
  );
}


export default Career;
