// src/Components/Banner.jsx
import { useEffect, useRef, useState } from "react";
import banner1 from "../assets/Banner/banner.jpg";
import banner2 from "../assets/Banner/banner2.jpg";
// If you have a third image, import it and replace the duplicate below
// import banner3 from "../assets/Banner/banner3.jpg";

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
  </svg>
);
const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3" />
  </svg>
);

const Banner = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });
  const [isVisible, setIsVisible] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Data (3 items for a full row; replace the third item with your own asset if available)
  const featured = [
    { src: banner1, title: "Banner Design 1", category: "Large Format • Banner" },
    { src: banner2, title: "Banner Design 2", category: "Large Format • Banner" },
    
  ];
  const allPosts = featured;

  // Spotlight cursor
  const onMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x: `${x}%`, y: `${y}%` });
  };

  // In-view animation
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const openOverlay = (i) => {
    setActiveIndex(i);
    setOverlayOpen(true);
  };
  const closeOverlay = () => setOverlayOpen(false);
  const next = () => {
    if (allPosts.length <= 1) return;
    setActiveIndex((i) => (i + 1) % allPosts.length);
  };
  const prev = () => {
    if (allPosts.length <= 1) return;
    setActiveIndex((i) => (i - 1 + allPosts.length) % allPosts.length);
  };

  // Touch swipe (overlay)
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (allPosts.length <= 1) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    if (Math.abs(dx) > 40 && Math.abs(dy) < 40) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <section
      id="banners"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden text-[#E7DFD6]"
      style={{ background: "radial-gradient(ellipse at 70% 10%, #1F232B 0%, #141518 40%, #0A0B0D 100%)" }}
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
        <div className={`mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-full px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B08B57] shadow-[0_0_0_4px_rgba(176,139,87,0.18)]" />
            <span className="text-xs md:text-sm text-[#E7DFD6]/80 font-medium tracking-wide">
              Large Format • Events • Campaigns
            </span>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] relative">
            <span className="block overflow-hidden">
              <span className="block animate-slide-up text-transparent bg-clip-text bg-gradient-to-br from-[#E7DFD6] via-[#B08B57] to-[#F1D6BF]">
                Banners
              </span>
            </span>
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#B08B57] to-transparent animate-expand-width" />
          </h2>

          <p className="mt-6 max-w-2xl text-[#E7DFD6]/60">
            High‑impact, print‑ready banner designs with proper bleeds, safe margins, and CMYK color for crisp output.
          </p>
        </div>

        {/* Grid: 1 col on mobile, 2 on small screens, 3 on large (three items per row) */}
        {/* If you want 3 columns at all sizes, use: grid grid-cols-3 gap-6 md:gap-8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allPosts.map((p, i) => (
            <button
              key={`banner-${i}`}
              onClick={() => openOverlay(i)}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 text-left"
            >
              <div className="relative rounded-2xl bg-[#141518]/40 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-gradient-to-tr from-[#B08B57]/10 via-transparent to-[#F1D6BF]/10 -z-10" />
                <div className="relative overflow-hidden">
                  {/* Banner ratio */}
                  <div className="w-full aspect-[21/9]">
                    <img
                      src={p.src}
                      alt={p.title}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                  {/* subtle orbit ring */}
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
      </div>

      {/* Lightbox Overlay */}
      {overlayOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0A0B0D]/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Banner viewer"
          ref={overlayRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => {
            if (e.target === overlayRef.current) closeOverlay();
          }}
        >
          <div className="relative w-full max-w-6xl rounded-3xl p-[2px] bg-gradient-to-br from-white/20 via-white/10 to-transparent ring-1 ring-white/10 shadow-[0_60px_140px_-30px_rgba(0,0,0,0.9)]">
            <div className="relative bg-[#141518]/60 backdrop-blur-xl rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse" />
                  <div className="text-xs md:text-sm text-[#E7DFD6]/70">
                    <div className="font-semibold text-[#E7DFD6]">
                      {allPosts[activeIndex].title}
                    </div>
                    <div className="opacity-70">
                      {activeIndex + 1} / {allPosts.length} • {allPosts[activeIndex].category}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={allPosts[activeIndex].src}
                    download
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-[#E7DFD6] ring-1 ring-white/10 transition"
                    title="Download"
                  >
                    <DownloadIcon className="w-5 h-5" />
                  </a>
                  <button
                    onClick={closeOverlay}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-[#E7DFD6] ring-1 ring-white/10 transition"
                    aria-label="Close"
                    title="Close"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Viewer (wide ratio) */}
              <div className="relative aspect-[21/9]">
                {allPosts.map((p, idx) => (
                  <img
                    key={`banner-viewer-${idx}`}
                    src={p.src}
                    alt={p.title}
                    className={`absolute inset-0 w-full h-full object-contain p-4 md:p-6 transition-all duration-700 ${
                      idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />
                ))}

                {/* Controls (only if multiple banners) */}
                {allPosts.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-3 pointer-events-none">
                    <button
                      onClick={(e) => { e.stopPropagation(); prev(); }}
                      className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0A0B0D]/40 hover:bg-[#0A0B0D]/60 text-[#E7DFD6] ring-1 ring-white/10 transition"
                      aria-label="Previous"
                      title="Previous"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); next(); }}
                      className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0A0B0D]/40 hover:bg-[#0A0B0D]/60 text-[#E7DFD6] ring-1 ring-white/10 transition"
                      aria-label="Next"
                      title="Next"
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes morph { 0%,100% { transform: rotate(0) scale(1);} 33% { transform: rotate(120deg) scale(1.1);} 66% { transform: rotate(240deg) scale(0.9);} }
        @keyframes morph-reverse { 0%,100% { transform: rotate(0) scale(1);} 33% { transform: rotate(-120deg) scale(0.9);} 66% { transform: rotate(-240deg) scale(1.1);} }
        @keyframes slide-up { from { transform: translateY(100%);} to { transform: translateY(0);} }
        @keyframes expand-width { from { width: 0;} to { width: 200px;} }
        .animate-morph { animation: morph 20s ease-in-out infinite; }
        .animate-morph-reverse { animation: morph-reverse 25s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up .8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-expand-width { animation: expand-width 1s cubic-bezier(0.16,1,0.3,1) .5s forwards; }
      `}</style>
    </section>
  );
};

export default Banner;