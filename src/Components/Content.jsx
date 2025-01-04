import { motion } from "framer-motion";
import { useState } from "react";
import { FaBrush, FaImage, FaPenNib, FaVideo, FaBook } from "react-icons/fa";
import bg from "./../assets/bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Initialize AOS
  AOS.init();

  // Handle scroll to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div
      id="content"
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#9333EA]"
          style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
          data-aos="fade-up"
        >
          My Design Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1: Social Media Post Design */}
          <motion.div
            className="p-6 bg-gradient-to-b from-[#000920FF] to-[#10001FFF] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rotate-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaBrush className="text-4xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Social Media Post Design
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Eye-catching social media post designs that captivate your
              audience and boost engagement.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-gradient-to-r from-[#2200FFFF] to-[#4400FFFF] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("socialmediaposts")}
              >
                Show More
              </button>
            </div>
          </motion.div>

          {/* Section 2: Logo Design */}
          <motion.div
            className="p-6 bg-gradient-to-b from-[#000920FF] to-[#10001FFF] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rotate-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={() => handleModal("Logo Design details...")}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaPenNib className="text-4xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Logo Design
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Custom logos that embody your brand's identity and make a
              memorable impact.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-gradient-to-r from-[#2200FFFF] to-[#4400FFFF] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("logo")}
              >
                Show More
              </button>
            </div>
          </motion.div>

          {/* Section 3: YouTube Thumbnails */}
          <motion.div
            className="p-6 bg-gradient-to-b from-[#000920FF] to-[#10001FFF] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rotate-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            onClick={() => handleModal("YouTube Thumbnails details...")}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaVideo className="text-4xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              YouTube Thumbnails
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Catchy and vibrant YouTube thumbnails that boost views and attract
              clicks.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-gradient-to-r from-[#2200FFFF] to-[#4400FFFF] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("youtubethumbnails")}
              >
                Show More
              </button>
            </div>
          </motion.div>

          {/* Section 4: Social Media Cover Images */}
          <motion.div
            className="p-6 bg-gradient-to-b from-[#000920FF] to-[#10001FFF] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rotate-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() => handleModal("Social Media Cover Images details...")}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaImage className="text-4xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Social Media Cover Images
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Professionally crafted covers to enhance your social media
              presence.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-gradient-to-r from-[#2200FFFF] to-[#4400FFFF] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("socialmediacover")}
              >
                Show More
              </button>
            </div>
          </motion.div>

          {/* Section 5: Tute/Book Cover */}
          <motion.div
            className="p-6 bg-gradient-to-b from-[#000920FF] to-[#10001FFF] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rotate-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={() => handleModal("Tute/Book Cover details...")}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaBook className="text-4xl text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Tute/Book Cover
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Stunning covers for books, tutorials, and more that grab
              attention.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-gradient-to-r from-[#2200FFFF] to-[#4400FFFF] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("bookcover")}
              >
                Show More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
