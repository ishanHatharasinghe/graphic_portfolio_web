import React from "react";
import bg from "./../assets/bg4.jpg"; // Import background image
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaBehanceSquare,
  FaAddressBook
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaSquareWhatsapp } from "react-icons/fa6"; // Import WhatsApp icon
import { FaReact } from "react-icons/fa"; // Import Portfolio icon

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${bg})` }} // Apply background image here
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-full px-6 py-12 bg-black rounded-xl shadow-lg w-full max-w-screen-lg">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#004CFFFF]"
          style={{
            lineHeight: "1.2"
          }}
        >
          Contact Me
        </h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Contact me for designing your dream design.
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Portfolio */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#1D4ED8] hover:scale-105 hover:shadow-lg">
            <a
              href="https://ishanHatharasinghe.github.io/portfolio_web"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaReact className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Portfolio
                </span>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#0a66c2] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaLinkedin className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  LinkedIn
                </span>
              </div>
            </a>
          </div>

          {/* Fiverr */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#00ac2c] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.fiverr.com/sellers/vector_ix/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <SiFiverr className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Fiverr
                </span>
              </div>
            </a>
          </div>

          {/* Behance */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#1666f7] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.behance.net/ishannilaksha"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaBehanceSquare className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Behance
                </span>
              </div>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#25D366] hover:scale-105 hover:shadow-lg">
            <a
              href="https://wa.me/94703052181"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaSquareWhatsapp className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  WhatsApp
                </span>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#d44638] hover:scale-105 hover:shadow-lg">
            <a
              href="mailto:ishanhatharasinghe222@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <MdEmail className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Email
                </span>
              </div>
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#0861F2] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.facebook.com/share/1QPksjDfsK/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaFacebook className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Facebook
                </span>
              </div>
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#f400d1] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.instagram.com/ishan_hatharasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaInstagramSquare className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Instagram
                </span>
              </div>
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#b1b1b1] hover:scale-105 hover:shadow-lg">
            <a
              href="https://www.google.com/maps/dir/6.301967,80.610486/Beralapanathara,+Matara+-+Hakmana+Road/@6.309715,80.5673928,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae3e29df098bdef:0x1f156755cd0421b5!2m2!1d80.6043!2d6.32296?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <FaAddressBook className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Address
                </span>
              </div>
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center bg-[#000000] p-4 rounded-lg transform transition duration-300 hover:bg-[#128c7e] hover:scale-105 hover:shadow-lg">
            <a
              href="tel:+94703052181"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <LuPhoneCall className="text-5xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-lg font-bold text-white group-hover:text-white">
                  Phone
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
