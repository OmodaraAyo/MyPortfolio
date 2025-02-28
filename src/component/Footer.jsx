import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import Message from "./Message";
import { motion } from "framer-motion";

const Footer = () => {
  const contacts = [
    "+234 70-8335-2449",
    "+234 70-4497-6427",
    "+234 91-5285-4629",
  ];
  return (
    <footer
      className="bg-gradient-to-br from-gray-900 to-gray-900 mt-32"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 lg:px-9 py-5"
      >
        <h2 className="text-3xl font-bold text-white underline underline-offset-3 mb-2 text-center mx-auto pb-6">
          Contacts
        </h2>

        <div className="item-wrapper w-full flex flex-col gap-14 justify-between lg:flex-row lg:gap-0 py-4 font-inter">
          {/* contacts */}
          <div className="flex flex-col gap-1 w-full lg:gap-2 lg:max-w-[30rem] ">
            <h1 className="text-gray-300 lg:-mb-3 font-light text-sm sm:text-[0.96rem] md:text-[1.1rem] lg:text-[1rem]">
              Get In Touch
            </h1>
            <label
              htmlFor="next- project"
              className="text-white text-3xl sm:text-4xl font-bold w-full py-2 md:text-[1.9rem] mb-3 sm:mb-4 font-display"
            >
              Let's Talk For your{" "}
              <span className="text-blue-600">Next Projects</span>
            </label>
            <p className="text-white w-full text-sm sm:text-[0.96rem] md:text-[1.1rem] lg:text-[1rem] font-light sm:-mt-2 lg:-mt-5">
              Discuss a project or just want to say hi? Connect with me via
              email or through a phone call.
            </p>
            <h1 className="phone-list flex text-gray-400 gap-3 mt-5 text-sm sm:text-[0.96rem] md:text-[0.97rem] lg:text-[1rem]">
              <MdPhone className="text-[1.4rem] text-white lg:mt-1" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                {contacts.map((contact, index) => (
                  <div key={index}>
                    <a
                      href={`tel: ${contact}`}
                      className="hover:text-white cursor-pointer"
                    >
                      {contact}
                    </a>
                  </div>
                ))}
              </div>
            </h1>

            {/* Email */}
            <h2 className="flex items-center gap-3 text-sm sm:text-[0.96rem] md:text-[0.97rem] lg:text-[1rem]">
              <p className="text-white text-[1.4rem] lg:mt-1">
                <MdEmail />
              </p>
              <a
                href="mailto:ayodeleomodara1234@gmail.com"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                ayodeleomodara1234@gmail.com
              </a>
            </h2>

            {/* whatsapp */}
            <h3 className="flex items-center gap-3 text-sm sm:text-[0.96rem] md:text-[0.97rem] lg:text-[1rem]">
              <p className="text-[1.4rem] text-green-500 lg:mt-1">
                <MdWhatsapp />
              </p>
              <a
                href="https://wa.me/2347083352449"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                +234 70-8335-2449
              </a>
            </h3>
          </div>
          <Message />
        </div>
        <h3 className="text-[0.7rem] lg:text-[0.9rem] text-white text-center lg:text-start mt-4 cursor-pointer">
          &copy; 2025,
          <span className="px-1.5 text-blue-600">
            Omodara Emmanuel Ayodele
          </span>{" "}
          All Right Reserved.
        </h3>
      </motion.div>
    </footer>
  );
};

export default Footer;
