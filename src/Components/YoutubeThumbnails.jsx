import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";
import { FaBehance } from "react-icons/fa";
import bg from "./../assets/bg3.jpg";

import thumbnail1 from "./../assets/Youtube Thumbnails/gig7.jpg";
import thumbnail2 from "./../assets/Youtube Thumbnails/gig8.jpg";
import thumbnail3 from "./../assets/Youtube Thumbnails/gig9.jpg";
const YoutubeThumbnails = () => {
  return (
    <div
      id="youtubethumbnails"
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-60 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center max-w-lg sm:max-w-xl lg:max-w-3xl xl:max-w-5xl px-6 py-12 bg-gradient-to-b from-[#0a0a0a] to-transparent rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#E50914] to-[#FF5722]"
          style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
          data-aos="fade-up"
        >
          YouTube Thumbnails
        </h1>

        {/* Description */}
        <p
          className="text-lg leading-relaxed text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          data-aos="fade-up"
        >
          Check out our stunning YouTube thumbnails that capture attention and
          drive views! Perfectly crafted to enhance your video content.
        </p>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          {[thumbnail1, thumbnail2, thumbnail3].map((thumbnail, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              key={index}
              className="w-full relative group rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 * index }}
            >
              <img
                src={thumbnail}
                alt={`YouTube Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Fiverr Button */}
        <a
          data-aos="fade-up" // AOS effect for content container
          data-aos-duration="1200"
          href="https://www.fiverr.com/vector_ix/design-attractive-amazing-viral-youtube-thumbnail-for-you"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-[#00A529FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SiFiverr className="text-2xl" /> Check Out on Fiverr
        </a>
        {/* Behance Button */}
        <motion.a
          href="https://www.behance.net/ishannilaksha" // Replace with your Behance profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-[#1769FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          data-aos="fade-up" // AOS effect for Behance button
          data-aos-duration="1200"
        >
          <FaBehance className="text-2xl" /> Check Out on Behance
        </motion.a>
      </motion.div>
    </div>
  );
};

export default YoutubeThumbnails;
