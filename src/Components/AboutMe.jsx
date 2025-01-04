import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "./../assets/bg4.jpg"; // Replace with the appropriate image
import my from "./../assets/my3.jpg"; // Import the image

const Title = () => {
  return (
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#2563eb]"
      style={{
        lineHeight: "1.3", // Ensure sufficient line height to avoid clipping
        paddingBottom: "0.2em" // Add padding to avoid bottom clipping
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      About Me
    </motion.h2>
  );
};

const ProfileImage = () => {
  return (
    <motion.div
      className="flex justify-center mb-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#60a5fa] shadow-lg transition-transform duration-300 hover:scale-110">
        <img
          src={my} // Use the imported image
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("about");
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative text-black dark:text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-3xl sm:max-w-4xl text-center text-white px-6 py-10 bg-gradient-to-b from-[#0a0a0a] to-transparent rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.2 }}
      >
        <Title />
        <ProfileImage />

        {/* Subtitle */}
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-4 text-[#fafafa]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Graphic Designer!
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg leading-relaxed mb-6 text-[#fafafa]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am an undergraduate of Higher National Diploma in Electrical and
          Electronic engineering in Sri Lanka Advanced Technology Institute
          Galle. Successfully combine many of the practical knowledge with the
          theoretical knowledge related to field of Electrical and Electronic
          Engineering. And also I am undergraduate in BIT University of Moratuwa
          I am well qualified in the fields of adobe Photoshop and adobe
          illustrator and can design any post, banners and cover design and many
          more designing works related to these fields. I am an energetic,
          hardworking and enthusiastic person who enjoys a challenge with the
          intention of achieving personal goals and also ready to take up any
          challenges during the path of my career.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
