"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Slide, toast } from "react-toastify";

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Message = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${ACCESS_KEY}`);

    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      event.target.reset();
      setResult("Send Message");
    } else {
      console.log("Error", data);
      toast.error(`${data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      })
    }
  };

  return (
    <section>
      <form
        onSubmit={onSubmit}
        className="font-inter text-[1rem] font-medium flex flex-col gap-3 outline-none"
      >
        <div className="nameAndaddress-container text-white grid grid-cols-2 gap-5">
          {/* fullname */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="border border-gray-300 px-2 py-1.5 outline-none rounded font-normal placeholder:text-[0.92rem]"
              required
            />
          </div>

          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="John@mail.com"
              className="border border-gray-300 px-2 py-1.5 outline-none rounded font-normal placeholder:text-[0.92rem]"
              required
            />
          </div>
        </div>

        {/* phone-number and subject */}
        <div className="phone-number-and-subject-container text-white grid grid-cols-2 gap-5">
          {/* phone number */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+808 (123) 90244"
              className="border border-gray-300 px-2 py-1.5 outline-none rounded font-normal placeholder:text-[0.92rem]"
              required
            />
          </div>

          {/* subject */}
          <div className="subject-container flex flex-col gap-1">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 px-2 py-1.5 outline-none rounded font-normal placeholder:text-[0.92rem]"
              required
            />
          </div>
        </div>

        {/* message */}
        <div className="text-white flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="Message"
            className="border border-gray-300 px-2 py-1.5 outline-none rounded font-normal h-[7rem] resize-none"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center py-1.5 md:py-2 w-full max-w-[10rem] md:max-w-[12rem] mx-auto rounded gap-1 text-white cursor-pointer border border-blue-600 hover:border-blue-700 transform transition-all duration-300 ease-in-out">
          <p>{result ? result : "Send Message"}</p>
          <FiSend className="mt-1" />
        </button>
      </form>
    </section>
  );
};

export default Message;
