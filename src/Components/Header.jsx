import React, { useState } from "react";
import my from "./../assets/my2.jpg"; // Import the image

const Header = () => {
  // State for Mobile Menu Toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for Content Dropdown
  const [isContentDropdownOpen, setContentDropdownOpen] = useState(false);

  // State for Alert
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);

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
  const handleLinkClick = (message) => {
    setMobileMenuOpen(false);
    setContentDropdownOpen(false);
    showAlert(message);
  };

  // Show Alert
  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#000314FF] to-[#000314FF] shadow-[0_0_4px_0.1px_#0800FFFF]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Image Section */}
        <div className="flex items-center space-x-3">
          <img
            src={my}
            alt="My Profile"
            className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <div className="text-2xl font-semibold text-[#fafafa] hover:text-[#60a5fa] transition-colors duration-300 cursor-pointer transform transition-transform duration-300 hover:scale-110">
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
              onClick={() => handleLinkClick(`Here are the ${item} Tab`)}
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
                    onClick={() => handleLinkClick(name)}
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
            onClick={() => handleLinkClick("Contact Me")}
          >
            Contact Me
          </a>

          {/* Find Me Button */}
          <a
            href="https://ishanHatharasinghe.github.io/portfolio_web"
            rel="noopener noreferrer"
            className="font-bold text-white bg-[#E90000FF] px-4 py-2 rounded-md hover:bg-[#0008FFFF] transition-all duration-300"
            onClick={() => showAlert("You clicked Engineer Mode")}
          >
            Engineer Mode
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
              onClick={() => handleLinkClick(`Here are the ${item} Tab`)}
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
                    onClick={() => handleLinkClick(name)}
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
            onClick={() => handleLinkClick("Contact Me")}
          >
            Contact Me
          </a>

          {/* Find Me Button for Mobile */}
          <a
            href="https://ishanHatharasinghe.github.io/portfolio_web"
            rel="noopener noreferrer"
            className="block font-bold text-white bg-[#FF0000FF] px-4 py-2 rounded-md hover:bg-[#0008FFFF] transition-all duration-300"
            onClick={() => showAlert("You clicked Engineer Mode")}
          >
            Engineer Mode
          </a>
        </div>
      )}

      {/* Alert Notification */}
      {isAlertVisible && (
        <div
          role="alert"
          className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0 inline-block mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{alertMessage}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
