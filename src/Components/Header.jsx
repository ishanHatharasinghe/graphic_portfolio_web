// src/Components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Image as ImageIcon,
  Video,
  Book,
  Shirt,
  PenTool,
  LayoutTemplate
} from "lucide-react";

const COLORS = {
  marble: "#E7DFD6",
  bronze: "#B08B57",
  darkBg: "#0A0B0D",
  darkCard: "#141518",
  slate: "#6B7785"
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: ""
  });
  const [activeHash, setActiveHash] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navRef = useRef(null);

  // Nav items with new sections
  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Content", href: "#content" },
    {
      title: "Work",
      items: [
        { title: "Social Media Posts", href: "#social-posts", Icon: ImageIcon },
        {
          title: "YouTube Thumbnails",
          href: "#youtubethumbnails",
          Icon: Video
        },
        {
          title: "Social Media Covers",
          href: "#socialmediacover",
          Icon: LayoutTemplate
        },
        { title: "Book Covers", href: "#bookcover", Icon: Book },
        { title: "T‑Shirt Design", href: "#tshirtdesign", Icon: Shirt },
        { title: "Logo Design", href: "#logo", Icon: PenTool }
      ]
    },
    { title: "Contact", href: "#contact" }
  ];

  // Handle scroll effect + progress
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setScrollProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlighting with IntersectionObserver
  useEffect(() => {
    const ids = new Set();
    navItems.forEach((item) => {
      if (item.href?.startsWith("#")) ids.add(item.href.slice(1));
      if (item.items)
        item.items.forEach(
          (s) => s.href?.startsWith("#") && ids.add(s.href.slice(1))
        );
    });

    const elements = Array.from(ids)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );
        if (visible.length > 0) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { threshold: [0.35, 0.6, 0.9] }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // ESC closes dropdown/mobile
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: "" }), 2200);
  };

  const smoothScrollTo = (href) => {
    if (!href?.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id) || document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHash(href);
    } else {
      window.location.hash = href;
    }
  };

  const handleNavClick = (title, href) => {
    if (href?.startsWith("#")) {
      smoothScrollTo(href);
    }
    showNotification(`Navigating to ${title}`);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinkBase =
    "relative transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-full px-3 py-1.5";
  const navLinkActive =
    "text-white bg-white/10 ring-1 ring-white/10 shadow-[0_6px_18px_-10px_rgba(0,0,0,0.6)]";
  const navLinkInactive = "text-[#E7DFD6]/75 hover:text-white hover:bg-white/5";

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0A0B0D]/70 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
      ref={navRef}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#B08B57] via-[#C89B67] to-[#6B7785] transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hairline bottom border glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Home", "#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="relative"></div>
            <span className="hidden sm:block text-[#E7DFD6] font-semibold text-lg tracking-tight">
              Ishan Nilaksha
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.items ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      className={`${navLinkBase} ${
                        item.items.some((s) => s.href === activeHash)
                          ? navLinkActive
                          : navLinkInactive
                      } flex items-center gap-1`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.title}
                    >
                      <span>{item.title}</span>
                      {activeDropdown === item.title ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {/* Dropdown panel */}
                    {activeDropdown === item.title && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-[110%] right-0 min-w-[260px] bg-[#141518]/95 backdrop-blur-xl ring-1 ring-white/10 rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-2"
                      >
                        {item.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(sub.title, sub.href);
                            }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                              activeHash === sub.href
                                ? "bg-white/10 text-white"
                                : "text-[#E7DFD6]/85 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {sub.Icon ? (
                              <sub.Icon className="w-4.5 h-4.5 opacity-80" />
                            ) : null}
                            <span>{sub.title}</span>
                          </a>
                        ))}
                        <div className="mt-2 h-px bg-white/10" />
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("Contact", "#contact");
                          }}
                          className="mt-2 block px-3 py-2 text-xs text-[#E7DFD6]/70 hover:text-white rounded-lg transition"
                        >
                          Need something custom? Let’s talk.
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.title, item.href);
                    }}
                    className={`${navLinkBase} ${
                      activeHash === item.href ? navLinkActive : navLinkInactive
                    }`}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-[#E7DFD6] hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (full-screen drawer) */}
      <div
        className={`md:hidden fixed inset-0 z-[99] transition ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-[#0A0B0D]/95 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <span className="text-[#E7DFD6]/90 font-semibold">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E7DFD6]/80 hover:text-white transition"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="p-2">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="border-b border-white/10 last:border-none"
              >
                {item.items ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-[#E7DFD6]/85 hover:bg-white/10 hover:text-white transition"
                      aria-expanded={activeDropdown === item.title}
                    >
                      <span>{item.title}</span>
                      {activeDropdown === item.title ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                        activeDropdown === item.title
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      } bg-white/5`}
                    >
                      <div className="min-h-0 px-4 py-2">
                        {item.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(sub.title, sub.href);
                            }}
                            className="flex items-center gap-2 py-2 text-sm text-[#E7DFD6]/75 hover:text-white transition-colors"
                          >
                            {sub.Icon ? (
                              <sub.Icon className="w-4.5 h-4.5 opacity-80" />
                            ) : null}
                            <span>{sub.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.title, item.href);
                    }}
                    className="block px-4 py-3 text-[#E7DFD6]/85 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 bg-[#141518]/90 backdrop-blur-md text-[#E7DFD6] px-4 py-2 rounded-lg shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 flex items-center gap-2 ring-1 ring-white/10">
          <div className="w-2 h-2 bg-[#B08B57] rounded-full animate-pulse" />
          <span className="text-sm">{notification.message}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
