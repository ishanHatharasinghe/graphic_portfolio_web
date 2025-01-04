import { motion } from "framer-motion";
import { FaBehance } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import bg from "./../assets/bg3.jpg";
import img1 from "./../assets/Book Cover/books (1).jpg";
import img10 from "./../assets/Book Cover/books (10).jpg";
import img11 from "./../assets/Book Cover/books (11).jpg";
import img12 from "./../assets/Book Cover/books (12).jpg";
import img13 from "./../assets/Book Cover/books (13).jpg";
import img14 from "./../assets/Book Cover/books (14).jpg";
import img15 from "./../assets/Book Cover/books (15).jpg";
import img16 from "./../assets/Book Cover/books (16).jpg";
import img17 from "./../assets/Book Cover/books (17).jpg";
import img18 from "./../assets/Book Cover/books (18).jpg";
import img19 from "./../assets/Book Cover/books (19).jpg";
import img2 from "./../assets/Book Cover/books (2).jpg";
import img20 from "./../assets/Book Cover/books (20).jpg";
import img21 from "./../assets/Book Cover/books (21).jpg";
import img22 from "./../assets/Book Cover/books (22).jpg";
import img23 from "./../assets/Book Cover/books (23).jpg";
import img24 from "./../assets/Book Cover/books (24).jpg";
import img25 from "./../assets/Book Cover/books (25).jpg";
import img26 from "./../assets/Book Cover/books (26).jpg";
import img27 from "./../assets/Book Cover/books (27).jpg";
import img28 from "./../assets/Book Cover/books (28).jpg";
import img29 from "./../assets/Book Cover/books (29).jpg";
import img3 from "./../assets/Book Cover/books (3).jpg";
import img4 from "./../assets/Book Cover/books (4).jpg";
import img5 from "./../assets/Book Cover/books (5).jpg";
import img6 from "./../assets/Book Cover/books (6).jpg";
import img7 from "./../assets/Book Cover/books (7).jpg";
import img8 from "./../assets/Book Cover/books (8).jpg";
import img9 from "./../assets/Book Cover/books (9).jpg";

import { useState } from "react";

const BookCover = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div
      id="bookcover"
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
          Book Cover Images
        </h1>

        {/* Description */}
        <p
          className="text-lg leading-relaxed text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover our beautifully designed book covers that will make your
          publication stand out. Created for authors, publishers, and book
          enthusiasts!
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* First 3 images (small size) */}
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
            (image, index) => (
              <motion.div
                key={index + 3} // Ensures unique keys for the rest of the images
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.02 * (index + 3) }}
                viewport={{ once: false }}
              >
                <img
                  src={image}
                  alt={`Book Cover ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg group hover:scale-105 transition-all duration-300"
                />
              </motion.div>
            )
          )}

          {/* Remaining images (only show if 'showMore' is true) */}
          {showMore &&
            [
              img11,
              img12,
              img13,
              img14,
              img15,
              img16,
              img17,
              img18,
              img19,
              img20,
              img21,
              img22,
              img23,
              img24,
              img25,
              img26,
              img27,
              img28,
              img29
            ].map((image, index) => (
              <motion.div
                key={index + 3}
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 * (index + 3) }}
              >
                <img
                  src={image}
                  alt={`Book Cover ${index + 4}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg group hover:scale-105 transition-all duration-300"
                />
              </motion.div>
            ))}
        </div>

        {/* Show More Toggle */}
        <motion.div
          className="flex items-center justify-center text-white cursor-pointer"
          onClick={toggleShowMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="mr-2 text-lg font-semibold">
            {showMore ? "Hide" : "Show More"}{" "}
          </span>
          <span className="text-xl">{showMore ? "▲" : "▼"}</span>{" "}
          {/* Up or Down arrow */}
        </motion.div>

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

export default BookCover;
