// src/Components/SocialMediaCoverSection.jsx
import { useEffect, useRef, useState } from "react";

import Image1 from "./../assets/Social Media Cover/cover (1).jpg";
import Image2 from "./../assets/Social Media Cover/cover (2).jpg";
import Image3 from "./../assets/Social Media Cover/cover (3).jpg";
import Image4 from "./../assets/Social Media Cover/cover (4).jpg";
import Image5 from "./../assets/Social Media Cover/cover (5).jpg";
import Image6 from "./../assets/Social Media Cover/cover (6).jpg";
import Image7 from "./../assets/Social Media Cover/cover (7).jpg";
import Image8 from "./../assets/Social Media Cover/cover (8).jpg";
import Image9 from "./../assets/Social Media Cover/cover (9).jpg";
import Image10 from "./../assets/Social Media Cover/cover (10).jpg";
import Image11 from "./../assets/Social Media Cover/cover (11).jpg";
import Image12 from "./../assets/Social Media Cover/cover (12).jpg";
import Image13 from "./../assets/Social Media Cover/cover (13).jpg";
import Image14 from "./../assets/Social Media Cover/cover (14).jpg";
import Image15 from "./../assets/Social Media Cover/cover (15).jpg";
import Image16 from "./../assets/Social Media Cover/cover (16).jpg";
import Image17 from "./../assets/Social Media Cover/cover (17).jpg";
import Image18 from "./../assets/Social Media Cover/cover (18).jpg";
import Image19 from "./../assets/Social Media Cover/cover (19).jpg";
import Image20 from "./../assets/Social Media Cover/cover (20).jpg";
import Image21 from "./../assets/Social Media Cover/cover (21).jpg";
import Image22 from "./../assets/Social Media Cover/cover (22).jpg";
import Image23 from "./../assets/Social Media Cover/cover (23).jpg";
import Image24 from "./../assets/Social Media Cover/cover (24).jpg";
import Image25 from "./../assets/Social Media Cover/cover (25).jpg";
import Image26 from "./../assets/Social Media Cover/cover (26).jpg";
import Image27 from "./../assets/Social Media Cover/cover (27).jpg";
import Image28 from "./../assets/Social Media Cover/cover (28).jpg";

import gig1 from "./../assets/Social Media Cover/gig4.jpg";
import gig2 from "./../assets/Social Media Cover/gig5.jpg";
import gig3 from "./../assets/Social Media Cover/gig6.jpg";

// Theme
const COLORS = {
  slate: "#6B7785",
  marble: "#E7DFD6",
  peach: "#F1D6BF",
  bronze: "#B08B57",
  ink: "#1F232B",
  darkBg: "#0A0B0D",
  darkCard: "#141518"
};

const ChevronLeftIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);
const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
  </svg>
);

const SocialMediaCoverSection = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });
  const [isVisible, setIsVisible] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // See more (measured height fix)
  const [showMore, setShowMore] = useState(false); // default hidden
  const extrasWrapRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const resizeObsRef = useRef(null);

  // Covers array (ordered)
  const covers = [
    { src: gig1, title: "Cover 8", category: "Social • Cover" },
    { src: gig2, title: "Cover 9", category: "Social • Cover" },
    { src: gig3, title: "Cover 10", category: "Social • Cover" },
    { src: Image21, title: "Cover 21", category: "Social • Cover" },
    { src: Image3, title: "Cover 3", category: "Social • Cover" },
    { src: Image4, title: "Cover 4", category: "Social • Cover" },
    { src: Image1, title: "Cover 1", category: "Social • Cover" },
    { src: Image2, title: "Cover 2", category: "Social • Cover" },
    { src: Image5, title: "Cover 5", category: "Social • Cover" },
    { src: Image6, title: "Cover 6", category: "Social • Cover" },
    { src: Image7, title: "Cover 7", category: "Social • Cover" },
    { src: Image8, title: "Cover 8", category: "Social • Cover" },
    { src: Image9, title: "Cover 9", category: "Social • Cover" },
    { src: Image10, title: "Cover 10", category: "Social • Cover" },
    { src: Image11, title: "Cover 11", category: "Social • Cover" },
    { src: Image12, title: "Cover 12", category: "Social • Cover" },
    { src: Image13, title: "Cover 13", category: "Social • Cover" },
    { src: Image14, title: "Cover 14", category: "Social • Cover" },
    { src: Image15, title: "Cover 15", category: "Social • Cover" },
    { src: Image16, title: "Cover 16", category: "Social • Cover" },
    { src: Image17, title: "Cover 17", category: "Social • Cover" },
    { src: Image18, title: "Cover 18", category: "Social • Cover" },
    { src: Image19, title: "Cover 19", category: "Social • Cover" },
    { src: Image20, title: "Cover 20", category: "Social • Cover" },

    { src: Image22, title: "Cover 22", category: "Social • Cover" },
    { src: Image23, title: "Cover 23", category: "Social • Cover" },
    { src: Image24, title: "Cover 24", category: "Social • Cover" },
    { src: Image25, title: "Cover 25", category: "Social • Cover" },
    { src: Image26, title: "Cover 26", category: "Social • Cover" },
    { src: Image27, title: "Cover 27", category: "Social • Cover" },
    { src: Image28, title: "Cover 28", category: "Social • Cover" }
  ];

  const featured = covers.slice(0, 6);
  const extras = covers.slice(6);
  const allPosts = covers;

  // Spotlight cursor
  const onMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x: `${x}%`, y: `${y}%` });
  };

  // In-view header animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Reduced motion respect
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Autoplay for overlay
  useEffect(() => {
    if (!overlayOpen || reducedMotion || !isPlaying || isHovering) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % allPosts.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [overlayOpen, isPlaying, isHovering, reducedMotion, allPosts.length]);

  // Keyboard nav
  useEffect(() => {
    if (!overlayOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOverlayOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlayOpen]);

  // Measure extras height and observe changes (image loads, responsive)
  useEffect(() => {
    const node = extrasWrapRef.current;
    if (!node) return;

    const updateHeight = () => {
      if (!showMore) {
        setMaxHeight(0);
      } else {
        // Use scrollHeight to get full height
        setMaxHeight(node.scrollHeight);
      }
    };

    updateHeight();

    if (showMore) {
      // Observe size changes when images load or layout changes
      if (window.ResizeObserver) {
        resizeObsRef.current = new ResizeObserver(updateHeight);
        resizeObsRef.current.observe(node);
      } else {
        // Fallback: update after a short delay
        const t = setTimeout(updateHeight, 300);
        return () => clearTimeout(t);
      }
    }

    const onResize = () => updateHeight();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeObsRef.current) {
        resizeObsRef.current.disconnect();
        resizeObsRef.current = null;
      }
    };
  }, [showMore, extras.length]);

  const openOverlay = (index) => {
    setActiveIndex(index);
    setOverlayOpen(true);
    setIsPlaying(true);
  };
  const closeOverlay = () => {
    setOverlayOpen(false);
    setIsPlaying(false);
  };
  const next = () => setActiveIndex((i) => (i + 1) % allPosts.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + allPosts.length) % allPosts.length);
  const select = (i) => {
    setActiveIndex(i);
    setIsPlaying(false);
  };
  const togglePlayPause = () => setIsPlaying((p) => !p);

  // Touch swipe (overlay)
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    if (Math.abs(dx) > 40 && Math.abs(dy) < 40) {
      dx < 0 ? next() : prev();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="socialmediacover"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden text-[#E7DFD6]"
      style={{
        background:
          "radial-gradient(ellipse at 70% 10%, #1F232B 0%, #141518 40%, #0A0B0D 100%)"
      }}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x} ${mouse.y}, rgba(176,139,87,0.14), transparent 55%)`
        }}
      />

      {/* Morphing blob background */}
      <div className="absolute -inset-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B08B57]/20 via-[#F1D6BF]/10 to-[#6B7785]/20 blur-3xl animate-morph" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6B7785]/15 via-[#1F232B]/30 to-[#B08B57]/15 blur-3xl animate-morph-reverse animation-delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">
        {/* Header */}
        <div
          className={`mb-10 md:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-full px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B08B57] shadow-[0_0_0_4px_rgba(176,139,87,0.18)]" />
            <span className="text-xs md:text-sm text-[#E7DFD6]/80 font-medium tracking-wide">
              Facebook • LinkedIn • X/Twitter • Banners
            </span>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] relative">
            <span className="block overflow-hidden">
              <span className="block animate-slide-up text-transparent bg-clip-text bg-gradient-to-br from-[#E7DFD6] via-[#B08B57] to-[#F1D6BF]">
                Social Media Cover Images
              </span>
            </span>
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#B08B57] to-transparent animate-expand-width" />
          </h2>

          <p className="mt-6 max-w-2xl text-[#E7DFD6]/60">
            Responsive cover and banner designs optimized for clarity across
            devices.
          </p>
        </div>

        {/* Featured Grid (wide covers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <button
              key={`cover-feat-${i}`}
              onClick={() => openOverlay(i)}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 text-left"
            >
              <div className="relative rounded-2xl bg-[#141518]/40 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-gradient-to-tr from-[#B08B57]/10 via-transparent to-[#F1D6BF]/10 -z-10" />
                <div className="relative overflow-hidden">
                  <div className="w-full aspect-[21/9]">
                    <img
                      src={p.src}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border border-white/10 animate-[orbit_18s_linear_infinite]" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse" />
                    <span className="text-xs text-[#B08B57] font-medium">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-1 text-base md:text-lg font-semibold text-[#E7DFD6]">
                    {p.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-[#0A0B0D]/0 group-hover:bg-[#0A0B0D]/10 transition-colors duration-500" />
              </div>
            </button>
          ))}
        </div>

        {/* See more toggle */}
        {extras.length > 0 && (
          <>
            <div className="mt-10 md:mt-14 flex justify-center">
              <button
                onClick={() => setShowMore((s) => !s)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg:white/15 hover:bg-white/15 text-[#E7DFD6] px-4 py-2 ring-1 ring-white/10 transition"
                aria-controls="covers-extras"
                aria-expanded={showMore}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {showMore ? "Show less" : "See more"}
                </span>
              </button>
            </div>

            {/* Extras wrapper with measured height */}
            <div
              id="covers-extras"
              className={`mt-6 md:mt-8 overflow-hidden ${
                showMore
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
              style={{
                maxHeight: showMore ? `${maxHeight}px` : 0,
                transition: reducedMotion
                  ? "none"
                  : "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, transform 400ms ease"
              }}
              aria-hidden={!showMore}
            >
              <div
                ref={extrasWrapRef}
                className="rounded-2xl p-4 md:p-5 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {extras.map((p, i) => {
                    const globalIndex = featured.length + i;
                    return (
                      <button
                        key={`cover-extra-${i}`}
                        onClick={() => openOverlay(globalIndex)}
                        className="relative overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/20 transition group"
                        aria-label={`Open ${p.title}`}
                      >
                        <div className="w-full aspect-[21/9]">
                          <img
                            src={p.src}
                            alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                            onLoad={() => {
                              // Ensure height recalculates when images load
                              if (showMore && extrasWrapRef.current) {
                                setMaxHeight(
                                  extrasWrapRef.current.scrollHeight
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-[#0A0B0D]/0 group-hover:bg-[#0A0B0D]/10 transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Lightbox Overlay */}
      {overlayOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0A0B0D]/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Social media cover viewer"
          ref={overlayRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full max-w-6xl rounded-3xl p-[2px] bg-gradient-to-br from-white/20 via-white/10 to-transparent ring-1 ring-white/10 shadow-[0_60px_140px_-30px_rgba(0,0,0,0.9)]">
            <div className="relative bg-[#141518]/60 backdrop-blur-xl rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse" />
                  <span className="text-xs md:text-sm text-[#E7DFD6]/70">
                    {allPosts[activeIndex].category}
                  </span>
                </div>
                <button
                  onClick={closeOverlay}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-[#E7DFD6] ring-1 ring-white/10 transition"
                  aria-label="Close"
                  title="Close"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Viewer (wide) */}
              <div className="relative aspect-[21/9]">
                {allPosts.map((p, idx) => (
                  <img
                    key={`cover-viewer-${idx}`}
                    src={p.src}
                    alt={p.title}
                    className={`absolute inset-0 w-full h-full object-contain p-4 md:p-6 transition-all duration-700 ${
                      idx === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />
                ))}

                {/* Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-3 pointer-events-none">
                  <button
                    onClick={prev}
                    className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0A0B0D]/40 hover:bg-[#0A0B0D]/60 text-[#E7DFD6] ring-1 ring-white/10 transition"
                    aria-label="Previous"
                    title="Previous"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0A0B0D]/40 hover:bg-[#0A0B0D]/60 text-[#E7DFD6] ring-1 ring-white/10 transition"
                    aria-label="Next"
                    title="Next"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption + Play/Pause */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-[#E7DFD6]">
                      {allPosts[activeIndex].title}
                    </h3>
                    <p className="text-xs text-[#E7DFD6]/60">
                      {activeIndex + 1} / {allPosts.length}
                    </p>
                  </div>
                  <button
                    onClick={togglePlayPause}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A0B0D]/50 hover:bg-[#0A0B0D]/70 text-[#E7DFD6] px-3 py-1.5 ring-1 ring-white/10 transition"
                    aria-pressed={!reducedMotion && isPlaying}
                    aria-label={
                      isPlaying ? "Pause auto-rotate" : "Play auto-rotate"
                    }
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <PauseIcon className="w-4 h-4" />
                    ) : (
                      <PlayIcon className="w-4 h-4" />
                    )}
                    <span className="text-xs hidden sm:inline">
                      {isPlaying ? "Pause" : "Play"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Thumbnails (scrollable) */}
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-10 gap-2">
                  {allPosts.map((p, idx) => (
                    <button
                      key={`cover-thumb-${idx}`}
                      onClick={() => select(idx)}
                      className={`relative overflow-hidden rounded-lg aspect-[21/9] group transition ${
                        idx === activeIndex
                          ? "ring-2 ring-[#B08B57]"
                          : "ring-1 ring-white/10 hover:ring-white/20"
                      }`}
                      aria-current={idx === activeIndex}
                      aria-label={`View ${p.title}`}
                    >
                      <img
                        src={p.src}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                      />
                      <div
                        className={`absolute inset-0 transition ${
                          idx === activeIndex
                            ? "bg-[#B08B57]/20"
                            : "bg-[#0A0B0D]/10 group-hover:bg-[#0A0B0D]/5"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(-20px) scale(1.05);} }
        @keyframes float-reverse { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(20px) scale(0.95);} }
        @keyframes morph { 0%,100% { transform: rotate(0) scale(1);} 33% { transform: rotate(120deg) scale(1.1);} 66% { transform: rotate(240deg) scale(0.9);} }
        @keyframes morph-reverse { 0%,100% { transform: rotate(0) scale(1);} 33% { transform: rotate(-120deg) scale(0.9);} 66% { transform: rotate(-240deg) scale(1.1);} }
        @keyframes slide-up { from { transform: translateY(100%);} to { transform: translateY(0);} }
        @keyframes expand-width { from { width: 0;} to { width: 200px;} }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes pulse-slow { 0%,100% { opacity: .6; transform: scale(1);} 50% { opacity: 1; transform: scale(1.2);} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-morph { animation: morph 20s ease-in-out infinite; }
        .animate-morph-reverse { animation: morph-reverse 25s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up .8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-expand-width { animation: expand-width 1s cubic-bezier(0.16,1,0.3,1) .5s forwards; }
        .animate-fade-in { animation: fade-in .8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default SocialMediaCoverSection;
