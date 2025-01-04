import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import illustratorIcon from "./../assets/Skills/ai.png";
import figma from "./../assets/Skills/figma.png";
import id from "./../assets/Skills/id.png";
import photoshopIcon from "./../assets/Skills/ps.png";
import xd from "./../assets/Skills/xd.png";
import bg from "./../assets/bg3.jpg";

const SkillBar = ({ skill, percentage, animate }) => (
  <div className="mb-6 flex flex-col items-center md:items-start group">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 mr-3 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex flex-col items-start">
          <span className="text-white text-lg font-semibold">{skill.name}</span>
          <span className="text-white text-sm font-medium mt-1">
            {percentage}%
          </span>{" "}
          {/* Added margin-top to create space */}
        </div>
      </div>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden relative">
      <div
        className={`h-full ${
          animate ? "bg-[#1EFF2DFF]" : "bg-[#1a1a1a]"
        } transition-all duration-1000 ease-in-out group-hover:bg-[#001EFFFF]`}
        style={{
          width: animate ? `${percentage}%` : 0
        }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Check if the skills section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when it's out of view
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of the section is in view
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "Adobe Photoshop", icon: photoshopIcon, percentage: 90 },
    { name: "Adobe Illustrator", icon: illustratorIcon, percentage: 85 },
    { name: "Adobe InDesign", icon: id, percentage: 80 },
    { name: "Adobe XD", icon: xd, percentage: 75 },
    { name: "Figma", icon: figma, percentage: 95 }
  ];

  return (
    <div
      id="skills"
      ref={skillsRef}
      className="min-h-screen flex items-center justify-center relative text-black dark:text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000B3] z-0"></div>

      {/* Content Container with swipe-up animation */}
      <motion.div
        className="relative z-10 max-w-6xl text-center text-white px-8 py-14 bg-gradient-to-b from-[#000000FF] to-transparent rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1.2 }}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#0000FF]">
          Skills
        </h2>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill}
              percentage={skill.percentage}
              animate={isVisible}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
