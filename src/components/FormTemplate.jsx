import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { adminCreateEnquiry } from '../actions/enquiry.action'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FormTemplate = ({ type }) => {

  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const errorToast = (msg) => {
    toast.error(msg, { position: "top-center" });
  }

  const successToast = (msg) => {
    toast.success(msg, { position: "top-center" });
  }

  const handleSubmit = (e) => {
    const enquiryObj = {
      name: name,
      email: email,
      message: message,
      subject: subject,
      type
    };
    dispatch(adminCreateEnquiry(enquiryObj)).then(() => {
      successToast("Enquiry Created Successfully");
    })
    setName(null);
    setEmail(null);
    setMessage(null);
    setSubject(null);
  };

  return (
    <>
      <div className="w-full p-6 flex justify-center">
        <div className="space-y-4 bg-white px-7 sm:w-[420px] py-10">
          <div className="text-2xl font-semibold text-center mb-3">
            {
              type == "advertising" ? "Contact Us for Advertising Opportunities 😍" : "Request More Information on Rental Spaces"
            }
          </div>
          <div className="mt-4">
            <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2  border placeholder:text-[#1a1a1db1]  border-[#1a1a1d3c]  text-sm  h-10 focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent" placeholder="Enter your name here"
            />
          </div>
          <div>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2  border placeholder:text-[#1a1a1db1]  border-[#1a1a1d3c]  text-sm h-10 focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent" placeholder="Enter your email here" />
          </div>
          <div>
            <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2  border placeholder:text-[#1a1a1db1]  border-[#1a1a1d3c]  text-sm h-10 focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent" placeholder="Enter your subject here" />
          </div>
          <div>
            <textarea onChange={(e) => setMessage(e.target.value)} id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2  border placeholder:text-[#1a1a1db1]  border-[#1a1a1d3c]  text-sm h-10 focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent h-20" placeholder="Enter your message here"></textarea>
          </div>
          <div>
            <button onClick={handleSubmit} type="submit" className="w-full outline  bg-indigo-600 text-white py-2 px-4  shadow-md  uppercase">Submit</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default FormTemplate
