// src/Components/Copyright.jsx
import PropTypes from "prop-types";

const COLORS = {
  marble: "#E7DFD6",
  bronze: "#B08B57",
  darkBg: "#0A0B0D",
  darkCard: "#141518",
  slate: "#6B7785",
  ink: "#1F232B",
  peach: "#F1D6BF"
};

const Copyright = ({ designerName, contactHref, homeHref }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="copyright"
      className="relative overflow-hidden text-[#E7DFD6] py-10 px-6 sm:px-8 lg:px-16"
      style={{
        background:
          "radial-gradient(ellipse at 70% 10%, #1F232B 0%, #141518 40%, #0A0B0D 100%)"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-full px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B08B57]" />
          <span className="text-xs md:text-sm text-[#E7DFD6]/80 font-medium tracking-wide">
            Thanks for visiting
          </span>
        </div>

        {/* Copy */}
        <div className="mt-4">
          <p className="text-sm sm:text-base">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="text-sm sm:text-base mt-1">
            Designed by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7DFD6] via-[#B08B57] to-[#6B7785] font-semibold">
              {designerName}
            </span>
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
          {homeHref && (
            <a
              href={homeHref}
              className="text-sm font-medium text-[#E7DFD6]/80 hover:text-[#E7DFD6] transition-colors"
              aria-label="Home"
            >
              Home
            </a>
          )}
          {contactHref && (
            <>
              <span className="text-[#E7DFD6]/30">•</span>
              <a
                href={contactHref}
                className="text-sm font-medium text-[#E7DFD6]/80 hover:text-[#E7DFD6] transition-colors"
                aria-label="Contact"
              >
                Contact
              </a>
            </>
          )}
          <span className="text-[#E7DFD6]/30">•</span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 text-sm font-medium text-[#0A0B0D] px-4 py-2 rounded-full overflow-hidden"
            style={{
              background: COLORS.bronze,
              boxShadow: "0 12px 28px -16px rgba(176,139,87,.45)"
            }}
            aria-label="Back to top"
            title="Back to top"
          >
            <span className="relative z-10">Back to top</span>
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C89B67] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-8 bg-[#B08B57]/35 blur-2xl group-hover:blur-3xl transition-all duration-500" />
            </div>
          </a>
        </div>
      </div>

      {/* Local styles */}
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(-14px) scale(1.03);} }
        @keyframes float-reverse { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(14px) scale(0.97);} }
        @keyframes grain {
          0%,100% { transform: translate(0,0);}
          10% { transform: translate(-5%,-10%);} 20% { transform: translate(-15%,5%);}
          30% { transform: translate(7%,-25%);} 40% { transform: translate(-5%,25%);}
          50% { transform: translate(-15%,10%);} 60% { transform: translate(15%,0%);}
          70% { transform: translate(0%,15%);} 80% { transform: translate(3%,25%);}
          90% { transform: translate(-10%,10%);}
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 9s ease-in-out infinite; }
        .animate-grain { animation: grain 8s steps(10) infinite; }
        .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
      `}</style>
    </section>
  );
};

// Defaults
Copyright.defaultProps = {
  designerName: "Ishan Hatharasinghe",
  homeHref: "#home",
  contactHref: "#contact"
};

// Prop Types
Copyright.propTypes = {
  designerName: PropTypes.string,
  homeHref: PropTypes.string,
  contactHref: PropTypes.string
};

export default Copyright;
