import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import bg from "./../assets/bg3.jpg";
import MayaLogo from "./../Components/LogoMaya";
import LogoMascot from "./../Components/LogoMascot";
import { SiFiverr } from "react-icons/si";
import { FaBehance } from "react-icons/fa";

const Logo = () => {
  const [showMayaLogo, setShowMayaLogo] = useState(false); // State for MayaLogo visibility
  const [showLogoMascot, setShowLogoMascot] = useState(false); // State for LogoMascot visibility

  const toggleSection = (section) => {
    if (section === "MayaLogo") {
      setShowMayaLogo(!showMayaLogo);
    } else if (section === "LogoMascot") {
      setShowLogoMascot(!showLogoMascot);
    }
  };

  const SectionToggle = ({ title, isOpen, onClick, children }) => (
    <div
      className="w-full mt-8 px-2 mb-4"
      data-aos="fade-up" // Apply AOS effect here
      data-aos-duration="1000" // Control animation speed
    >
      <motion.div
        className="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300"
        onClick={onClick}
      >
        <span className="font-bold text-white text-left">{title}</span>{" "}
        {/* Added font-bold and text-white here */}
        <motion.svg
          className={`w-8 h-8 transform transition-all duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.div>
      {isOpen && (
        <motion.div
          className="mt-4 mx-auto max-w-full px-6 sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false // Make it run every time the section enters the viewport
    });

    // Reinitialize AOS when component updates
    AOS.refresh();
  }, []);

  return (
    <div
      id="logo"
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center relative text-white"
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
        className="relative z-10 text-center max-w-full px-6 py-12 bg-gradient-to-b from-[#0a0a0a] to-transparent rounded-xl shadow-lg w-full max-w-screen-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        data-aos="fade-up" // AOS effect for content container
        data-aos-duration="1200"
      >
        {/* Title */}

        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#9333EA]"
          style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
          data-aos="fade-up"
        >
          Logo Design
        </h1>

        {/* Description */}
        <p
          className="text-lg leading-relaxed text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover the essence of our brand through our iconic logo. It
          represents our vision, mission, and dedication to excellence.
        </p>

        {/* MayaLogo Section */}
        <SectionToggle
          title="01. Maya Degital Studio Logo"
          isOpen={showMayaLogo}
          onClick={() => toggleSection("MayaLogo")}
        >
          <MayaLogo />
        </SectionToggle>

        {/* LogoMascot Section */}
        <SectionToggle
          className="mb-4"
          title="02. Mascot Logos"
          isOpen={showLogoMascot}
          onClick={() => toggleSection("LogoMascot")}
        >
          <LogoMascot />
        </SectionToggle>

        {/* Fiverr Button */}
        <motion.a
          href="https://www.fiverr.com/vector_ix/design-attractive-amazing-viral-youtube-thumbnail-for-you"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-[#00A529FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          data-aos="fade-up" // AOS effect for Fiverr button
          data-aos-duration="1200"
        >
          <SiFiverr className="text-2xl" /> Check Out on Fiverr
        </motion.a>

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

export default Logo;
