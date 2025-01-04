import { motion } from "framer-motion";
import { FaBehance } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import bg from "./../assets/bg3.jpg"; // You can use the same background or change if needed
import gig8 from "./../assets/Social Media Cover/cover (1).jpg";
import gig6 from "./../assets/Social Media Cover/cover (11).jpg";
import gig7 from "./../assets/Social Media Cover/cover (18).jpg";
import gig10 from "./../assets/Social Media Cover/cover (19).jpg";
import gig9 from "./../assets/Social Media Cover/cover (2).jpg";
import gig4 from "./../assets/Social Media Cover/cover (3).jpg";
import gig5 from "./../assets/Social Media Cover/cover (4).jpg";
import gig1 from "./../assets/Social Media Cover/gig4.jpg";
import gig2 from "./../assets/Social Media Cover/gig5.jpg";
import gig3 from "./../assets/Social Media Cover/gig6.jpg";
const SocialMediaCover = () => {
  return (
    <div
      id="socialmediacover"
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#9333EA]"
          style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
          data-aos="fade-up"
        >
          Social Media Cover Images
        </h1>

        {/* Description */}

        <p
          className="text-lg leading-relaxed text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore our captivating social media cover images that will help make
          your profile stand out. Crafted with care and creativity for every
          brand!
        </p>

        {/* Full-Size Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {[gig1, gig2, gig3].map((image, index) => (
            <motion.div
              key={index}
              className="w-full col-span-1 md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.01 * index }}
              viewport={{ once: false }} // Ensures the animation runs each time the element enters the viewport
            >
              <img
                src={image}
                alt={`Social Media Cover ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg group hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}

          {/* Remaining Images */}
          {[gig4, gig5, gig6, gig7, gig8, gig9, gig10].map((image, index) => (
            <motion.div
              key={index + 3} // Ensures unique keys for the rest of the images
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.02 * (index + 3) }}
              viewport={{ once: false }}
            >
              <img
                src={image}
                alt={`Social Media Cover ${index + 4}`}
                className="w-full h-auto rounded-lg shadow-lg group hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

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

export default SocialMediaCover;
