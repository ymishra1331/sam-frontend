import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import CareerImg from '../assets/career.webp';
import Logo from '/sam.webp';
import { useDispatch } from 'react-redux';
import { adminCreateCareer } from '../actions/career.action';
import { toast, ToastContainer } from 'react-toastify';

const JobCard = ({data}) => {
  const [applyPopup, setApplyPopup] = useState(false);
  const dispatch = useDispatch();

  const errorToast = (msg) => {
    toast.error(msg, { position: "top-center" });
  }
  const successToast = (msg) => {
    toast.success(msg, { position: "top-center" });
  }

  const [title,setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [resume, setResume] = useState(null);
  const [filename, setFilename] = useState(null);

  const handleApply = () => {
    if (!name || !email || !phone || !resume ) {
      errorToast("Please fill all the fields");
    }
    const careerObj = {
      title:data?.jobTitle,
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
    setTitle(null);
  }
  return (
    <>
    <div className="flex flex-col shadow-md">
        <div className="w-[380px] h-[250px]">
            <img src={(data?.image)?data.image:"https://picsum.photos/380/250"} alt="" />
        </div>
        <div className="bg-white py-3 px-3 w-[380px] h-[300px] relative">
            <p className="font-semibold">{data.jobTitle}</p>
            <p className="text-sm mt-1">{"("+data.salary+")"}</p>
            <p className="font-light text-sm mt-3">{data.jobDescription}</p>
            <p className=" font-semibold text-sm my-3">{data.jobType} - <span className="font-light">{"("+data.location+")"}</span></p>
            <p className="text-xs font-light text-gray-500 lowercase">{data.date}</p>
            <button className="w-full text-white bg-custombrown rounded py-2  mt-10" onClick={() => setApplyPopup(true)}>Apply Now</button>
        </div>
    </div>


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
                <div className="underline capitalize text-sm font-light w-full flex justify-center mt-2 cursor-pointer" onClick={() => { 
                  setApplyPopup(false) 
                  setFilename(null)
                  setResume(null)
                  setName(null)
                  setEmail(null)
                  setPhone(null)
                  setTitle(null)
                  }}>
                  No Thanks
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </>
  )
}

export default JobCard