import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image1 from "./../assets/Logo Design/Mascot/logomascot (1).png";
import Image10 from "./../assets/Logo Design/Mascot/logomascot (10).png";
import Image11 from "./../assets/Logo Design/Mascot/logomascot (11).png";
import Image12 from "./../assets/Logo Design/Mascot/logomascot (12).png";
import Image13 from "./../assets/Logo Design/Mascot/logomascot (13).png";
import Image14 from "./../assets/Logo Design/Mascot/logomascot (14).png";
import Image15 from "./../assets/Logo Design/Mascot/logomascot (15).png";
import Image16 from "./../assets/Logo Design/Mascot/logomascot (16).png";
import Image17 from "./../assets/Logo Design/Mascot/logomascot (17).png";
import Image18 from "./../assets/Logo Design/Mascot/logomascot (18).png";
import Image19 from "./../assets/Logo Design/Mascot/logomascot (19).png";
import Image2 from "./../assets/Logo Design/Mascot/logomascot (2).png";
import Image3 from "./../assets/Logo Design/Mascot/logomascot (3).png";
import Image4 from "./../assets/Logo Design/Mascot/logomascot (4).png";
import Image5 from "./../assets/Logo Design/Mascot/logomascot (5).png";
import Image6 from "./../assets/Logo Design/Mascot/logomascot (6).png";
import Image7 from "./../assets/Logo Design/Mascot/logomascot (7).png";
import Image8 from "./../assets/Logo Design/Mascot/logomascot (8).png";
import Image9 from "./../assets/Logo Design/Mascot/logomascot (9).png";

const MascotLogo = memo(() => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19
  ];

  return (
    <div
      className="min-h-screen w-full   relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('your-background-image.jpg')` }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center px-6 py-16 bg-gradient-to-b from-[#000000FF] to-transparent rounded-xl shadow-lg w-full max-w-screen-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-2xl md:text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          02. Mascot Logo Collection 🖥
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our collection of unique mascot logo designs, each embodying
          creativity and brand identity.
        </motion.p>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 2.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full aspect-square">
                <img
                  src={image}
                  alt={`Mascot Logo ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

export default MascotLogo;
