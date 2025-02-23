"use client";
import { motion } from "framer-motion";

const AboutMe = () => {

  return (
    <section className="container mx-auto px-4 mt-20" id="about me">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-1 text-black flex flex-col justify-center items-center md:items-start py-12"
        >
          <h1 className="text-lg sm:text-[20px] md:text-[22px] text-gray-400 py-1 px-1 underline-offset-3 underline">
            About Me
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-[34rem] py-3">
            <span className="text-blue-600">Driven,</span> Innovative, Software
            <span className="text-blue-600 px-2.5">Engineer</span>
          </h1>
          <p className="w-full max-w-[30rem] text-[15px] sm:text-[17px] md:text-[20px] text-gray-900 text-justify leading-relaxed font-inter">
            With over a year of experience in software and solution development,
            I am a highly consistent individual with a strong eagerness to learn
            new concepts and technologies. I am passionate about software
            development, particularly in building scalable and efficient
            solutions. Additionally, I have hands-on experience with various
            backend technologies and possess a solid foundation in algorithms,
            data structures, and the Object-Oriented Programming paradigm.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={`relative w-72 h-96 mt-16 lg:mt-10 cursor-pointer border border-blue-600/15 shadow-lg shadow-gray-600 rounded-3xl mb-6 transition-transform duration-800 ease-in-out transform}`}>

          {/* frontside */}
          <div className="image-container absolute inset-0 flex justify-center bg-none backface-hidden rounded-[15px]">
            <img
              src="/images/self4.jpg"
              alt="Profile picture"
              className="relative z-10 w-full h-auto object-cover rounded-3xl border-2 border-gray-900 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
