import { motion } from "framer-motion";
import { FaArrowRight, FaBehance } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import bg from "./../assets/bg3.jpg";
import thumbnail1 from "./../assets/uiuxdesigns/falling1.jpg";
import thumbnail2 from "./../assets/uiuxdesigns/falling2.jpg";
import thumbnail3 from "./../assets/uiuxdesigns/falling3.jpg";

const UXUIDesigns = () => {
  return (
    <div
      id="uxuidesign"
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed", // Parallax scrolling effect
      }}
    >
      

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-6 py-12 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Title with Glitch Effect */}
        <h1
          className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00C7] to-[#00BFFF] mb-12 glitch-effect"
          style={{ lineHeight: "1.2" }}
        >
          UX/UI Designs
        </h1>

        {/* Description with Typewriter Effect */}
        <motion.p
          className="text-lg leading-relaxed text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our innovative <TypewriterText text="UX/UI design projects" /> that enhance user experience and interface.
        </motion.p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[thumbnail1, thumbnail2, thumbnail3].map((thumbnail, index) => (
            <motion.div
              key={index}
              className="w-full relative group rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
            >
              {/* Image */}
              <img
                src={thumbnail}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Overlay with 3D Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end group-hover:translate-y-[-10px] transition-transform duration-300">
                <h2 className="text-xl font-bold text-white mb-2">Project {index + 1}</h2>
                <p className="text-sm text-gray-300">
                  This is a brief description of Project {index + 1}. It demonstrates our innovative approach to problem-solving.
                </p>
                <button
                  className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 flex items-center gap-2"
                >
                  View Project <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons with Custom Cursor */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {/* Fiverr Button */}
          <a
            href="https://www.fiverr.com/vector_ix/design-attractive-amazing-viral-youtube-thumbnail-for-you"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white bg-[#00A529FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 custom-cursor"
          >
            <SiFiverr className="text-2xl" /> Check Out on Fiverr
          </a>

          {/* Behance Button */}
          <motion.a
            href="https://www.behance.net/ishannilaksha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white bg-[#1769FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 custom-cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaBehance className="text-2xl" /> Check Out on Behance
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

// Particles Background Component
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="50" cy="50" r="50" fill="rgba(255, 255, 255, 0.05)" />
        <circle cx="80" cy="20" r="10" fill="rgba(255, 255, 255, 0.1)" />
        <circle cx="20" cy="80" r="15" fill="rgba(255, 255, 255, 0.1)" />
      </svg>
    </div>
  );
};

// Typewriter Text Component
const TypewriterText = ({ text }) => {
  return (
    <span className="typewriter">{text}</span>
  );
};

export default UXUIDesigns;