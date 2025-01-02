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

const ContactLinks = () => {
  // Track if the component is visible
  const [isVisible, setIsVisible] = useState(true);

  // Hide the component when scrolling past certain section (for example, Home, Contact, and Copyright sections)
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const contactSection = document.getElementById("contact");
      const copyrightSection = document.getElementById("copyright");

      if (homeSection && contactSection && copyrightSection) {
        // Get the positions of the sections
        const homeRect = homeSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();
        const copyrightRect = copyrightSection.getBoundingClientRect();

        // Check if any section is visible in the viewport
        const isInHomeSection =
          homeRect.top < window.innerHeight && homeRect.bottom > 0;
        const isInContactSection =
          contactRect.top < window.innerHeight && contactRect.bottom > 0;
        const isInCopyrightSection =
          copyrightRect.top < window.innerHeight && copyrightRect.bottom > 0;

        // If we're inside any of these sections, hide the component
        if (isInHomeSection || isInContactSection || isInCopyrightSection) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on load
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="contactlinks"
      className="absolute bottom-20 left-8 flex flex-col space-y-4"
      initial={{ opacity: 0, x: -100 }} // Start from the left
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -100, // Swipe from left to right
        transition: { type: "spring", stiffness: 100, damping: 25 } // Smoother transition
      }}
      exit={{ opacity: 0, x: -100 }} // Exit to the left
    >
      {/* Portfolio */}
      <a
        href="https://ishanHatharasinghe.github.io/portfolio_web"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReact size={26} />
      </a>

      {/* Social Media Links */}
      <a
        href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={26} />
      </a>

      <a
        href="https://www.behance.net/ishannilaksha"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehanceSquare size={26} />
      </a>

      <a
        href="https://www.fiverr.com/sellers/vector_ix/"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiFiverr size={26} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/94703052181"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareWhatsapp size={26} />
      </a>

      <a
        href="https://www.facebook.com/share/1QPksjDfsK/?mibextid=qi2Omg"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={26} />
      </a>

      <a
        href="https://www.instagram.com/ishan_hatharasinghe/"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare size={26} />
      </a>

      {/* Contact Details */}
      <a
        href="mailto:ishanhatharasinghe222@gmail.com"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={26} />
      </a>

      <a
        href="https://www.google.com/maps/dir/6.301967,80.610486/Beralapanathara,+Matara+-+Hakmana+Road/@6.309715,80.5673928,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae3e29df098bdef:0x1f156755cd0421b5!2m2!1d80.6043!2d6.32296?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-115"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaAddressBook size={26} />
      </a>

      <a
        href="tel:+94703052181"
        className="text-[#fafafa] hover:text-[#0008FFFF] transition-all duration-300 transform hover:scale-150 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuPhoneCall size={26} />
      </a>
    </motion.div>
  );
};

export default ContactLinks;
