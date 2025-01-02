import PropTypes from "prop-types";

const Copyright = ({ designerName, contactHref, homeHref }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="copyright"
      className="bg-gradient-to-r from-[#00070FFF] to-[#000513FF] text-white py-8 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base mb-2">
          &copy; {currentYear} All Rights Reserved.
        </p>
        <p className="text-sm sm:text-base">
          Designed by{" "}
          <span className="text-[#FFFFFFFF] hover:text-[#ffffff] font-bold">
            {designerName}
          </span>
        </p>
        <div className="mt-6">
          <a
            href={homeHref}
            className="text-[#0022FFFF] hover:text-[#ffffff] font-semibold transition duration-300"
            aria-label="home"
          >
            Home
          </a>

          <a
            href={contactHref}
            className="text-[#0022FFFF] hover:text-[#ffffff] font-semibold transition duration-300 ml-4"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

// Default Props
Copyright.defaultProps = {
  designerName: "Ishan Hatharasinghe",
  contactHref: "#contact",
  homeHref: "#home"
};

// Prop Types
Copyright.propTypes = {
  designerName: PropTypes.string,
  contactHref: PropTypes.string,
  homeHref: PropTypes.string // Added missing prop type validation
};

export default Copyright;
