import React, { useState, useEffect } from "react";
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
import "./../index.css";
import { motion } from "framer-motion";

const ToolTip = ({ text }) => <div className="tooltip">{text}</div>;

const ContactLinks = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const contactSection = document.getElementById("contact");
      const copyrightSection = document.getElementById("copyright");

      if (homeSection && contactSection && copyrightSection) {
        const homeRect = homeSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();
        const copyrightRect = copyrightSection.getBoundingClientRect();

        const isInHomeSection =
          homeRect.top < window.innerHeight && homeRect.bottom > 0;
        const isInContactSection =
          contactRect.top < window.innerHeight && contactRect.bottom > 0;
        const isInCopyrightSection =
          copyrightRect.top < window.innerHeight && copyrightRect.bottom > 0;

        if (isInHomeSection || isInContactSection || isInCopyrightSection) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="contactlinks"
      className="absolute bottom-20 left-8 flex flex-col space-y-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -100,
        transition: { type: "spring", stiffness: 100, damping: 25 }
      }}
      exit={{ opacity: 0, x: -100 }}
    >
      {/* Portfolio */}
      <a
        href="https://ishanHatharasinghe.github.io/portfolio_web"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReact
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Portfolio" />
      </a>

      {/* Social Media Links */}
      <a
        href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="LinkedIn" />
      </a>

      <a
        href="https://www.fiverr.com/sellers/vector_ix/"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiFiverr
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Fiverr" />
      </a>

      <a
        href="https://www.behance.net/ishannilaksha"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehanceSquare
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Behance" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/94703052181"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareWhatsapp
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="WhatsApp" />
      </a>

      {/* Contact Details */}
      <a
        href="mailto:ishanhatharasinghe222@gmail.com"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Email" />
      </a>

      <a
        href="https://www.facebook.com/share/1QPksjDfsK/?mibextid=qi2Omg"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Facebook" />
      </a>

      <a
        href="https://www.instagram.com/ishan_hatharasinghe/"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Instagram" />
      </a>

      <a
        href="https://www.google.com/maps/dir/6.301967,80.610486/Beralapanathara,+Matara+-+Hakmana+Road/@6.309715,80.5673928,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae3e29df098bdef:0x1f156755cd0421b5!2m2!1d80.6043!2d6.32296?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-115"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaAddressBook
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Address" />
      </a>

      <a
        href="tel:+94703052181"
        className="relative text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuPhoneCall
          size={30}
          className="transform transition-all hover:rotate-12"
        />
        <ToolTip text="Phone" />
      </a>
    </motion.div>
  );
};

export default ContactLinks;
