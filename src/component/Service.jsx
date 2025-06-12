"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

const Service = () => {
  const customIcon = [
    {
      title: "Web Development",
      description:
        "Modern website that will help you reach all of your stakeholders.",
      icon: "/images/Globe.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Design inituitive interfaces and delightful user experiences by blending aesthetics with usability.",
      icon: "/images/Design.png",
    },
    {
      title: "API Design / Integration",
      description:
        "Developing highly secure, fast, and scalable RESTful APIs for robust applications.",
      icon: "/images/Code.png",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-6 md:px-4 mt-16 md:mt-30"
      id="service"
    >
      {/* title */}
      <h1 className="w-full text-4xl font-bold text-gray-900 text-center mb-8 py-4 grid place-items-center">
        <p className="w-full max-w-[21rem] py-2">
          My{" "}
          <span className="text-blue-600 underline underline-offset-3">
            Services
          </span>
        </p>
      </h1>
      <div className="list-container grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {customIcon.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 flex flex-col items-center justify-center rounded-2xl cursor-pointer lg:px-5 py-10 drop-shadow-xl shadow-gray-900"
          >
            <div className="flex flex-col justify-center items-center gap-2.5 py-6 w-full h-24">
              <img
                src={item.icon}
                alt={item.title}
                className={clsx({
                  "w-[2.5rem] h-[2.6rem] -mt-5":
                    item.title === "Web Development",
                  "w-[2.3rem] h-[2.3rem] ": item.title === "UI/UX Design",
                  "w-[3rem] h-[1.5rem] -mt-2 mb-3":
                    item.title === "API Design / Integration",
                })}
              />
              <p className="cursor-auto font-semibold text-[0.97rem] sm:text-[0.95rem] lg:text-[1.1rem]">
                {item.title.toUpperCase()}
              </p>
            </div>
            <p className="w-full px-10 md:px-8 text-center text-gray-400 mt-5 text-[1.1rem] md:text-[0.85rem] lg:text-[1rem] cursor-auto h-20 text-ellipsis line-clamp-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Service;
