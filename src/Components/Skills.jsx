import illustratorIcon from "./../assets/Skills/ai.png";
import figma from "./../assets/Skills/figma.png";
import id from "./../assets/Skills/id.png";
import photoshopIcon from "./../assets/Skills/ps.png";
import xd from "./../assets/Skills/xd.png";
import bg from "./../assets/bg3.jpg";
import ContactLinks from "./ContactLinks";

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-6 flex flex-col items-center md:items-start group">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 mr-3 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-white text-lg font-semibold">{skill.name}</span>
      </div>
      <span className="text-white text-sm font-medium hidden md:block">
        {percentage}%
      </span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden relative">
      <div
        className="h-full bg-[#1EFF2DFF] transition-all duration-300 group-hover:bg-[#001EFFFF]"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
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
      className="min-h-screen flex items-center justify-center relative text-black dark:text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000b3] z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl text-center text-white px-8 py-14 bg-gradient-to-b from-[#1a1a1a] to-transparent rounded-xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#0000FF]">
          Skills
        </h2>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} percentage={skill.percentage} />
          ))}
        </div>
      </div>
      {/* Contact Links (Visible only on larger screens) */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30 hidden sm:block">
        <ContactLinks />
      </div>
    </div>
  );
};

export default Skills;
