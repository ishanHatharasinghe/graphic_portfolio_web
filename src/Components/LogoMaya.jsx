import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bg from "./../assets/bg3.jpg";
import logoImage from "./../assets/Logo Design/Maya Digital St/logo.png";
import Image1 from "./../assets/Logo Design/Maya Digital St/1.png";
import Image2 from "./../assets/Logo Design/Maya Digital St/2.jpg";
import Image3 from "./../assets/Logo Design/Maya Digital St/3.jpg";
import Image4 from "./../assets/Logo Design/Maya Digital St/4.jpg";
import Image5 from "./../assets/Logo Design/Maya Digital St/5.jpg";
import Image6 from "./../assets/Logo Design/Maya Digital St/6.jpg";
import Image7 from "./../assets/Logo Design/Maya Digital St/7.jpg";
import Image8 from "./../assets/Logo Design/Maya Digital St/8.jpg";
import Image9 from "./../assets/Logo Design/Maya Digital St/9.jpg";
import Image10 from "./../assets/Logo Design/Maya Digital St/10.jpg";
import Image11 from "./../assets/Logo Design/Maya Digital St/11.jpg";

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
  Image11
];

const ImageGallery = memo(({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#0a0a0a] rounded-xl mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-3xl bg-white rounded-lg p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

const LogoMaya = () => {
  return (
    <div
      id="logo"
      className="w-full h-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-60 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="w-full relative z-10 text-center max-w-full px-6 py-16 bg-gradient-to-b from-[#000000FF] to-transparent rounded-xl shadow-lg"
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
          01. MayaDigitalStudio 🖥
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Maya Digital Studio, established in 2018, specializes in graphic and
          video editing services. We offer professional, tailored solutions to
          bring your visual content to life.
        </motion.p>

        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div title="Maya Digital Studio Logo"></div>
        </motion.div>
      </motion.div>

      <ImageGallery images={images} />
    </div>
  );
};

export default LogoMaya;
