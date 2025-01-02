// Home.js

import { motion } from "framer-motion";
import { FaArrowDown, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import bg from "./../assets/bg.jpg";
import ContactLinks from "./ContactLinks"; // Import ContactLinks

const Home = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  // Hide text after typewriter is done
  const handleTypewriterComplete = () => {
    setIsTextVisible(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-[#0a0a0a]/70 text-[#fafafa] fixed top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold">MyPortfolio</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="#home"
              className="hover:text-[#60a5fa] transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#60a5fa] transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#60a5fa] transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#60a5fa] transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen flex items-center justify-center text-[#0a0a0a] dark:text-[#fafafa] relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Content Container */}
        <motion.div
          className="text-center px-6 py-12 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent rounded-lg max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Header with Typewriter Effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {isTextVisible && (
              <Typewriter
                words={[
                  "Hello, I'm Ishan Hatharasinghe",
                  "I'm a Graphic Designer",
                  "I Create Stunning Visuals"
                ]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                onComplete={handleTypewriterComplete}
              />
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl mb-8 text-[#fafafa]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I craft stunning visual designs that communicate your message
            effectively.
          </motion.p>

          {/* Call-to-Action */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="#content"
              className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-[#fafafa] px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <FaBriefcase /> View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-[#60a5fa] text-[#60a5fa] px-6 py-3 rounded-full hover:bg-[#60a5fa] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <FaEnvelope /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Social Media Icons (Hidden on small screens) */}
        <div className="absolute bottom-20 left-8 sm:left-4 z-30 hidden sm:block">
          <ContactLinks />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <a
            href="#about"
            className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 flex flex-col items-center"
          >
            <FaArrowDown className="text-2xl animate-bounce" />
            <span className="mt-2 text-sm">Scroll Down</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
