import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaBehanceSquare,
  FaAddressBook,
  FaReact
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaSquareWhatsapp } from "react-icons/fa6";

const ContactLinks = () => {
  return (
    <div className="absolute bottom-20 left-8 flex flex-col space-y-4">
      {/* Portfolio */}
      <a
        href="https://ishanHatharasinghe.github.io/portfolio_web"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-110 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReact size={24} />
      </a>

      {/* Social Media Links */}
      <a
        href="https://www.facebook.com/share/1QPksjDfsK/?mibextid=qi2Omg"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://www.instagram.com/ishan_hatharasinghe/"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare size={24} />
      </a>

      <a
        href="https://www.behance.net/ishannilaksha"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehanceSquare size={24} />
      </a>

      <a
        href="https://www.fiverr.com/sellers/vector_ix/"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiFiverr size={24} />
      </a>

      {/* Contact Details */}
      <a
        href="mailto:ishanhatharasinghe222@gmail.com"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={24} />
      </a>

      <a
        href="https://www.google.com/maps/dir/6.301967,80.610486/Beralapanathara,+Matara+-+Hakmana+Road/@6.309715,80.5673928,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae3e29df098bdef:0x1f156755cd0421b5!2m2!1d80.6043!2d6.32296?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-115"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaAddressBook size={24} />
      </a>

      <a
        href="tel:+94703052181"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuPhoneCall size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/94703052181"
        className="text-[#fafafa] hover:text-[#60a5fa] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareWhatsapp size={24} />{" "}
        {/* You can replace this icon with a WhatsApp-specific one */}
      </a>
    </div>
  );
};

export default ContactLinks;
