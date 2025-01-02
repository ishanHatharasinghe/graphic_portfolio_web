import React, { useState } from "react";
import my from "./../assets/my.jpg"; // Import the image

const Header = () => {
  // State for Mobile Menu Toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for Content Dropdown
  const [isContentDropdownOpen, setContentDropdownOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setContentDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  // Toggle Content Dropdown
  const toggleContentDropdown = () => {
    setContentDropdownOpen(!isContentDropdownOpen);
  };

  // Close All Menus when any item is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setContentDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#000314FF] to-[#000314FF] shadow-[0_0_4px_0.1px_#0800FFFF]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Image Section */}
        <div className="flex items-center space-x-3">
          <img src={my} alt="My Profile" className="w-10 h-10 rounded-full" />
          <div className="text-2xl font-semibold text-[#fafafa] hover:text-[#60a5fa] transition-colors duration-300 cursor-pointer">
            Ishan Nilaksha
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}

          {/* Content Dropdown */}
          <div className="relative">
            <button
              onClick={toggleContentDropdown}
              className="font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
            >
              Content
            </button>
            {isContentDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#0a0a0a] px-4 py-2 space-y-2 rounded-md shadow-lg">
                {[
                  { name: "Social Media Posts", id: "socialmediaposts" },
                  { name: "Logo", id: "logo" },
                  { name: "YouTube Thumbnails", id: "youtubethumbnails" },
                  { name: "Social Media Covers", id: "socialmediacover" },
                  { name: "Book Covers", id: "bookcover" }
                ].map(({ name, id }) => (
                  <a
                    key={name}
                    href={`#${id}`}
                    className="font-bold block text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
            onClick={handleLinkClick}
          >
            Contact Me
          </a>

          {/* Find Me Button */}
          <a
            href="https://ishanHatharasinghe.github.io/portfolio_web"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white bg-[#E90000FF] px-4 py-2 rounded-md hover:bg-[#0008FFFF] transition-all duration-300"
          >
            Find Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="font-bold md:hidden text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white focus:outline-none transition-all duration-300"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? "❎" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="font-bold md:hidden bg-[#0a0a0a] px-4 py-4 space-y-2 transition-all duration-300 rounded-b-md shadow-lg">
          {["Home", "About", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}

          {/* Content Dropdown for Mobile */}
          <div className="relative">
            <button
              onClick={toggleContentDropdown}
              className="block font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
            >
              Content
            </button>
            {isContentDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#0a0a0a] px-4 py-2 space-y-2 rounded-md shadow-lg">
                {[
                  { name: "Social Media Posts", id: "socialmediaposts" },
                  { name: "Logo", id: "logo" },
                  { name: "YouTube Thumbnails", id: "youtubethumbnails" },
                  { name: "Social Media Covers", id: "socialmediacover" },
                  { name: "Book Covers", id: "bookcover" }
                ].map(({ name, id }) => (
                  <a
                    key={name}
                    href={`#${id}`}
                    className="block font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="block font-bold text-[#fafafa] px-3 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-all duration-300"
            onClick={handleLinkClick}
          >
            Contact Me
          </a>

          {/* Find Me Button for Mobile */}
          <a
            href="https://ishanHatharasinghe.github.io/portfolio_web"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-bold text-white bg-[#FF0000FF] px-4 py-2 rounded-md hover:bg-[#0008FFFF] transition-all duration-300"
          >
            Find Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
