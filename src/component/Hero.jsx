"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Download } from "lucide-react";

const Hero = () =>  {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="container mx-auto px-4 lg:px-14 xl:px-4 py-[8rem] md:py-20 relative"
      id="about"
    >
      <div className="absolute w-[14rem] h-[14rem] -z-50 bg-blue-100 rounded-full top-0 mt-13 right-0 -mb-16"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-8 lg:gap-5">
        {/* Image Card with Flip Effect */}
        <div
          className={`relative w-72 h-96 cursor-pointer border border-blue-600/15 shadow-lg shadow-gray-600 rounded-3xl mb-6 transition-transform duration-700 ease-in-out perspective-1000 ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setFlipped(!flipped)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`absolute inset-0 flex justify-center bg-none backface-hidden rounded-[15px] -mt-9 lg:-mt-2 ${flipped? 'pointer-events-none': 'pointer-events-auto'}`}
            style={{backfaceVisibility: "hidden"}}
          >
            <img
              src="/images/semicolon3.jpg"
              alt="Profile picture"
              className="relative z-10 w-full h-auto object-cover rounded-3xl border-2 border-gray-900 shadow-2xl"
            />
          </motion.div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl rotate-y-180 backface-hidden px-2 py-2 pointer-events-auto" style={{backfaceVisibility: "hidden", transform: "rotateY(180deg)"}}>
            <h1 className="relative flex flex-col items-center font-bold text-lg text-gray-300">
              <p className="shadow-xs rounded-3xl shadow-gray-900 px-2">
                EQUIPMENT
              </p>
              <p className="text-[0.7rem]">
                by Edgar A. Guest{" "}
                <span>
                  (<span className="text-">1881</span>-1959)
                </span>
              </p>
            </h1>
            <div className="w-full px-2 py-2 text-[15px] flex flex-col gap-1.5 italic text-gray-400">
              <p>Figure it out for yourself, my lad,</p>{" "}
              <p>You have all that the greatest of men have had,</p>{" "}
              <p>Two arms, two hands, two legs, two eyes,</p>{" "}
              <p>And a brain to use if you would be wise.</p>{" "}
              <p>With this equipment they all began,</p>{" "}
              <p>Get hold of yourself, and say: "I can."</p>
              <a
                href="https://docs.google.com/document/d/1MFyOT6U3aSbFtkeUN6a9rOpLDGzL5-oFGYg3YtObrzo/edit?usp=sharing"
                className="text-center w-full bg-blue-500 hover:bg-blue-600 rounded-2xl py-1 mt-4 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue reading...
              </a>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center md:text-left space-y-4 text-black"
        >
          <h1 className="text-lg sm:text-[20px] md:text-[22px] text-gray-400">
            HELLO, MY NAME IS
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            OMODARA <span className="text-blue-600">EMMANUEL</span>
          </h1>
          <p className="text-lg sm:text-[20px] md:text-[22px] text-gray-400">
            Software engineer | Creative Thinker
          </p>
          <p className="w-full max-w-[30rem] text-[15px] sm:text-[17px] md:text-[20px] text-gray-900 text-justify font-inter">
            From Lagos, Nigeria, I have extensive experience working with modern
            JavaScript, crafting dynamic, responsive UIs that are both intuitive
            and visually appealing, with strong UX/UI skills to enhance user
            experience.
          </p>

          {/* Social Links */}
          <div className="socials flex items-center justify-center md:justify-start gap-5">
            <a
              href="https://www.instagram.com/notyetbutwill_?igsh=ZjY2ejB6dmg2OG1u&utm_source=qr"
              className="w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-pink-600 rounded-[9px] px-1 md:px-1.5 bg-pink-600 hover:border-pink-600 transform transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaInstagram className="w-[30px] h-7 text-white" />
            </a>
            <a
              href="https://github.com/OmodaraAyo"
              className="w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-0 md:px-0.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaGithub className="w-[22px] h-6 md:w-[30px] md:h-7 text-[#000]" />
            </a>
            <a
              href="https://www.linkedin.com/in/omodara-emmanuel-ayodele-99a13b311/?trk=public-profile-join-page"
              className="w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-white rounded-[9px] bg-white px-1 md:px-1.5 hover:border-blue-700 transform transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaLinkedin className="w-[30px] h-7 text-blue-700" />
            </a>
            <a
              href="https://x.com/notyetbutwill?s=21&t=9aRWoOIfb1meddYKMODuTA"
              className="w-[2.3rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem] flex items-center justify-center border-4 border-black rounded-[9px] px-1 md:px-1.5 hover:border-black transform transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaXTwitter className="w-[30px] h-7 text-[#000]" />
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="OMODARA_EMMANUEL_AYODELE-FULLSTACK.Resume"
              className="flex space-x-1.5 justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:px-6 md:py-3 rounded-full transform transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <p>Download Resume</p>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
