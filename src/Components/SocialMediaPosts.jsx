import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";
import ImageGrid from "./PostsImageGrid";
import bg from "./../assets/bg3.jpg";
import gig1 from "./../assets/Social Media Posts/gig1.jpg";
import gig2 from "./../assets/Social Media Posts/gig2.jpg";
import gig3 from "./../assets/Social Media Posts/gig3.jpg";
import gig4 from "./../assets/Social Media Posts/a.jpg";
import gig5 from "./../assets/Social Media Posts/b.jpg";
import gig6 from "./../assets/Social Media Posts/c.jpg";
import gig7 from "./../assets/Social Media Posts/d.jpg";
import gig8 from "./../assets/Social Media Posts/e.jpg";

import { FaBehance } from "react-icons/fa";

const SocialMediaPosts = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: false, // Animation repeats every time the element enters the viewport
      mirror: true // Animates when scrolling past the element
    });
  }, []);

  return (
    <div
      id="socialmediaposts"
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
        data-aos="fade-up"
      >
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#9333EA]"
          style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
          data-aos="fade-up"
        >
          Social Media Posts
        </h1>

        {/* Description */}
        <p
          className="text-lg leading-relaxed text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore our latest social media posts and stay updated with our newest
          content! We share the most engaging and exciting posts for you to
          discover.
        </p>

        {/* Full-Size Images */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {[gig1, gig2, gig3, gig4, gig5, gig6, gig7, gig8].map(
            (image, index) => (
              <div
                key={index}
                className="w-full"
                data-aos="fade-up"
                data-aos-delay={20 * (index + 1)}
              >
                <img
                  src={image}
                  alt={`Social Media Post ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg group hover:scale-105 transition-all duration-300"
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-center mb-6" data-aos="fade-up">
          <ImageGrid />
        </div>

        {/* Fiverr Button */}
        <a
          href="https://www.fiverr.com/vector_ix/beautiful-vector-landscape-illustrations"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-[#00A529FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 mb-4"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <SiFiverr className="text-2xl" /> Check Out on Fiverr
        </a>

        {/* Behance Button */}
        <a
          href="https://www.behance.net/ishannilaksha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-[#1769FF] hover:bg-[#0044FFFF] px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <FaBehance className="text-2xl" /> Check Out on Behance
        </a>
      </motion.div>
    </div>
  );
};

export default SocialMediaPosts;
