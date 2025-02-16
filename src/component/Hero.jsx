import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id='About' className="container mx-auto px-4 py-20">
    <div className="flex flex-col md:flex-row items-center justify-between md:gap-5">
      <div
        className={`relative w-72 h-96 cursor-pointer border border-blue-200 shadow-lg shadow-blue-200/20 rounded-3xl mb-6 transition-transform duration-800 ease-in-out transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        onMouseEnter={() => setFlipped(!flipped)}
        onMouseLeave={() => setFlipped(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* frontside */}
        <div className="image-container absolute inset-0 flex justify-center bg-none backface-hidden rounded-[15px]">
          <img
            src="/images/semicolon3.jpg"
            alt="Profile picture"
            className="relative z-10 w-full h-auto object-cover rounded-3xl border-2 border-blue-700 shadow-2xl"
          />
        </div>

        {/* backside */}
        <div className="aboutMe-Container absolute inset-0 bg-gradient-to-br from-gray-900 text-white rounded-3xl rotate-y-180 backface-hidden px-2 py-2">
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
      <div className="text-center md:text-left space-y-6">
        <h1 className='text-[17px] md:text-[20px] text-gray-400'>HELLO, MY NAME IS</h1>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          OMODARA <span className="text-blue-400">EMMANUEL</span>
        </h1>
        <p className="text-xl md:text-[24px] text-gray-400">
          Software engineer | Creative Thinker
        </p>
        <p className='w-full max-w-[40rem] text-[20px] text-white text-justify leading-relaxed'>From Lagos, Nigeria, I specialize in full-stack development with expertise in modern Java frameworks and JavaScript. With over a year of experience, I have worked with various backend technologies and have a strong foundation in algorithms, data structures, and the Object-Oriented Programming paradigm. I am passionate about building scalable, efficient solutions and eager to keep up with new advancements in technology.</p>
        <div className="socials flex items-center justify-center md:justify-self-start gap-5">
          <a href="" className='w-[2.6rem] h-[2.6rem] flex items-center justify-center border-4 border-pink-600 rounded-[9px] px-1.5 bg-pink-600  hover:border-pink-600 transform transition-all duration-300 hover:scale-110 shadow-lg'><FaInstagram className='w-[30px] h-7 text-white'/></a>
          <a href="" className='w-[2.6rem] h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-0.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg'><FaGithub className='w-[30px] h-7 text-[#000]'/></a>
          <a href="" className='w-[2.6rem] h-[2.6rem] flex items-center justify-center border-4 border-white rounded-[9px] bg-white px-1.5 hover:border-blue-700 transform transition-all duration-300 hover:scale-110 shadow-lg'><FaLinkedin className='w-[30px] h-7 text-blue-700'/></a>
          <a href="" className='w-[2.6rem] h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-1.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg'><FaXTwitter className='w-[30px] h-7 text-[#000]'/></a>
        </div>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href='/pdf/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download= "OMODARA EMMANUEL AYODELE-FULLSTACK.Resume"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full 
          transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;