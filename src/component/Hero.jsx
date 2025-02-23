"use client"
import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Download } from "lucide-react";

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="container mx-auto px-4 py-[8rem] md:py-20" id='about'>
    <div className="flex flex-col md:flex-row items-center justify-between md:gap-5">
      <div
        className={`relative w-72 h-96 cursor-pointer border border-blue-600/15 shadow-lg shadow-gray-600 rounded-3xl mb-6 transition-transform duration-800 ease-in-out transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setFlipped(!flipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* frontside */}
        <div className="image-container absolute inset-0 flex justify-center bg-none backface-hidden rounded-[15px]">
          <img
            src="/images/semicolon3.jpg"
            alt="Profile picture"
            className="relative z-10 w-full h-auto object-cover rounded-3xl border-2 border-gray-900 shadow-2xl"
          />
        </div>

        {/* backside */}
        <div className="aboutMe-Container absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl rotate-y-180 backface-hidden px-2 py-2">
          <h1 className=" relative flex justify-self-center font-bold text-lg text-gray-300">
            ABOUT ME
          </h1>
          <p className="w-full px-2 py-2 text-[15px]">
            I am a Software Engineer with a year experience specializing in
            full-stack development. Proficient in modern Java frameworks and
            JavaScript with various backend technologies, with a strong
            foundation in algorithms and data structures as well as Object
            Oriented Programming paradigm. while demonstrating ability to
            build scalable applications using Spring Boot, Node.js, React,
            NextJs and various database technologies.
          </p>
        </div>
      </div>
      {/* Text Content */}
      <div className="text-center md:text-left space-y-6 text-black">
        <h1 className='text-lg sm:text-[20px] md:text-[22px] text-gray-400'>HELLO, MY NAME IS</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          OMODARA <span className="text-blue-600">EMMANUEL</span>
        </h1>
        <p className="text-lg sm:text-[20px] md:text-[22px] text-gray-400">
          Software engineer | Creative Thinker
        </p>
        <p className='w-full max-w-[30rem] text-[15px] sm:text-[17px] md:text-[20px] text-gray-900 text-justify font-inter'>From Lagos, Nigeria, I have extensive experience working with modern Java framework, JavaScript, and designing/developing dynamic, responsive web applications. specialize in creating user interface that are not only intuitive but also visually appealing, with a strong focus on UX/UI best practices to optimize user engagement and deliver exceptional digital experiences.</p>
        <div className="socials flex items-center justify-center md:justify-self-start gap-5">
          <a href="https://www.instagram.com/notyetbutwill_?igsh=ZjY2ejB6dmg2OG1u&utm_source=qr" className='w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-pink-600 rounded-[9px] px-1 md:px-1.5 bg-pink-600  hover:border-pink-600 transform transition-all duration-300 hover:scale-110 shadow-lg'><FaInstagram className='w-[30px] h-7 text-white'/></a>
          <a href="https://github.com/OmodaraAyo" className='w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-0 md:px-0.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg'><FaGithub className='w-[22px] h-6 md:w-[30px] md:h-7 text-[#000]'/></a>
          <a href="https://www.linkedin.com/in/omodara-emmanuel-ayodele-99a13b311/?trk=public-profile-join-page" className='w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-white rounded-[9px] bg-white px-1 md:px-1.5 hover:border-blue-700 transform transition-all duration-300 hover:scale-110 shadow-lg'><FaLinkedin className='w-[30px] h-7 text-blue-700'/></a>
          <a href="https://x.com/notyetbutwill?s=21&t=9aRWoOIfb1meddYKMODuTA" className='w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-1 md:px-1.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg'><FaXTwitter className='w-[30px] h-7 text-[#000]'/></a>
        </div>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href='/pdf/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download= "OMODARA EMMANUEL AYODELE-FULLSTACK.Resume"
            className="flex space-x-1.5 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full 
          transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className='w-5 h-5'/>
            <p>Download Resume</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;