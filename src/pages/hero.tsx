import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const SLIDES = [
    { id: 1, label: "01" },
    { id: 2, label: "02" },
    { id: 3, label: "03" },
    { id: 4, label: "04" },
    { id: 5, label: "05" },
    { id: 6, label: "06" },
    { id: 7, label: "07" },
    { id: 8, label: "08" },
];

const INFO_CARDS = [
    {
        id: 1,
        title: "NFT EXPLAINED",
        body: "NFTs are designed to give you something that can't be copied...",
        cta: "READ MORE",
    },
    {
        id: 2,
        title: "BLOCK CHAIN",
        body: "NFTs involving digital art generally do not store the file on the blockchain due to its size...",
        cta: "READ MORE",
    },
    {
        id: 3,
        title: "THE ART BEHIND IT",
        body: "Previously, any copy of a digital artwork would be just as valuable – or valueless – as the next. In theory, NFTs have changed this",
        cta: "READ MORE",
    },
];

const THUMBNAILS = [
    { id: 1, bg: "bg-[#c8c8c8]", accent: "" },
    { id: 2, bg: "bg-[#e8e000]", accent: "" },
];

export default function DreamerHero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const heroImageRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation
            gsap.set(lettersRef.current, { x: -100, opacity: 0 });
            gsap.set(heroImageRef.current, { scale: 1.1, opacity: 0 });
            gsap.set(rightColRef.current, { x: 50, opacity: 0 });
            gsap.set(navRef.current, { y: -20, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.to(navRef.current, { y: 0, opacity: 1 })
              .to(lettersRef.current, { x: 0, opacity: 1, stagger: 0.1 }, "-=0.5")
              .to(heroImageRef.current, { scale: 1, opacity: 1 }, "-=0.8")
              .to(rightColRef.current, { x: 0, opacity: 1 }, "-=0.8");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(mobileMenuRef.current, { 
                y: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power3.out",
                pointerEvents: "all"
            });
            document.body.style.overflow = "hidden";
        } else {
            gsap.to(mobileMenuRef.current, { 
                y: "-100%", 
                opacity: 0, 
                duration: 0.5, 
                ease: "power3.in",
                pointerEvents: "none"
            });
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div
            ref={containerRef}
            className="min-h-screen w-full flex items-center justify-center overflow-x-hidden relative"
            style={{ backgroundColor: "#b5a99a", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
            {/* Google Fonts Import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

                .hero-card {
                  background-color: #d4c9bc;
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  height: 100%;
                  min-height: 100vh;
                }

                @media (min-width: 1024px) {
                    .hero-card {
                        height: auto;   
                        min-height: auto;
                        width: 100%;
                        max-width: screen;
                        border-radius: 4px;
                    }
                }

                .vertical-season {
                  writing-mode: vertical-rl;
                  text-orientation: mixed;
                  transform: rotate(180deg);
                  letter-spacing: 0.25em;
                  font-size: 0.65rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  color: #1a1a1a;
                }

                .dreamer-letter {
                  font-family: 'Barlow Condensed', sans-serif;
                  font-weight: 900;
                  font-size: clamp(4rem, 12vw, 10rem);
                  line-height: 0.82;
                  color: #0d0d0d;
                  text-transform: uppercase;
                  letter-spacing: -0.02em;
                  display: block;
                  user-select: none;
                }

                .nav-link {
                  font-family: 'Barlow Condensed', sans-serif;
                  font-size: 0.75rem;
                  font-weight: 700;
                  letter-spacing: 0.15em;
                  text-transform: uppercase;
                  color: #1a1a1a;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  text-decoration: none;
                }
                .nav-link:hover { opacity: 0.5; letter-spacing: 0.25em; }

                .mobile-nav-link {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #d4c9bc;
                    text-decoration: none;
                    text-transform: uppercase;
                    line-height: 1;
                    transition: all 0.3s ease;
                }
                .mobile-nav-link:hover {
                    color: #fff;
                    transform: translateX(10px);
                }

                .info-title {
                  font-size: 0.7rem;
                  font-weight: 800;
                  letter-spacing: 0.12em;
                  text-transform: uppercase;
                  color: #0d0d0d;
                }

                .info-body {
                  font-family: 'Barlow', sans-serif;
                  font-size: 0.65rem;
                  font-weight: 400;
                  line-height: 1.4;
                  color: #2a2a2a;
                }

                .menu-btn {
                  width: 48px;
                  height: 48px;
                  background: #0d0d0d;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 6px;
                  cursor: pointer;
                  border: none;
                  z-index: 100;
                }
                .menu-line {
                  width: 22px;
                  height: 2px;
                  background: #d4c9bc;
                  transition: all 0.3s ease;
                }
                .menu-open .menu-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
                .menu-open .menu-line:nth-child(2) { opacity: 0; }
                .menu-open .menu-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

                .placeholder-img {
                  background: linear-gradient(135deg, #c5b9ac 0%, #b8ac9f 50%, #c5b9ac 100%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  overflow: hidden;
                }
            `}</style>

            {/* ── MOBILE MENU OVERLAY ── */}
            <div 
                ref={mobileMenuRef}
                className="fixed inset-0 z-[90] bg-[#0d0d0d] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none"
                style={{ transform: "translateY(-100%)" }}
            >
                <Link to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>HOME</Link>
                <Link to="/projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
                <Link to="/artists" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>ARTISTS</Link>
                <div className="flex gap-6 mt-12">
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50">INSTAGRAM</span>
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50">TWITTER</span>
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50">DISCORD</span>
                </div>
            </div>

            <div className="hero-card">
                {/* ── TOP NAV ── */}
                <div ref={navRef} className="flex items-center justify-between p-6 lg:p-10 relative z-[80]">
                    <div className="flex items-start gap-4">
                        <Link to="/projects" className="nav-link hidden lg:block mt-1">PROJECTS</Link>
                        <div className="flex h-24 lg:h-32 items-end">
                            <span className="vertical-season">SEASON 01</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Link to="/" className="nav-link text-sm lg:text-base font-black tracking-[0.3em]">DREAMERS</Link>
                        <div className="hidden lg:flex gap-6">
                            <span className="nav-link text-[10px]">INDEX</span>
                            <Link to="/artists" className="nav-link text-[10px]">ARTISTS</Link>
                        </div>
                    </div>

                    <button 
                        className={`menu-btn ${menuOpen ? 'menu-open' : ''}`} 
                        onClick={toggleMenu}
                    >
                        <div className="menu-line" />
                        <div className="menu-line" />
                        <div className="menu-line" />
                    </button>
                </div>

                {/* ── MAIN CONTENT ── */}
                <div className="flex-1 flex flex-col lg:flex-row relative lg:mt-[-40px]">
                    {/* Left: DREAMER Text */}
                    <div className="flex flex-col justify-end p-6 lg:pl-10 lg:pb-10 relative z-10 order-2 lg:order-1">
                        <div className="flex flex-col">
                            {"DREAMER".split("").map((letter, i) => (
                                <span key={i} className="dreamer-letter" ref={el => lettersRef.current[i] = el}>
                                    {letter}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <p className="artist-label text-[10px] opacity-60">ARTIST</p>
                            <p className="artist-label text-xs font-bold">YUGAL ODHRANI</p>
                        </div>
                    </div>

                    {/* Center: Image */}
                    <div 
                        ref={heroImageRef}
                        className="flex-1 min-h-[40vh] lg:absolute lg:inset-0 lg:left-[20%] lg:right-[30%] z-0 order-1 lg:order-2 placeholder-img"
                    >
                        <span className="text-[10px] tracking-[0.5em] opacity-20 uppercase font-black">Hero Visual</span>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {SLIDES.map((_, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setActiveSlide(i)}
                                    className={`h-[2px] transition-all cursor-pointer ${i === activeSlide ? 'w-8 bg-[#0d0d0d]' : 'w-4 bg-[#0d0d0d]/30'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div 
                        ref={rightColRef}
                        className="w-full lg:w-[400px] lg:ml-auto p-6 lg:pr-10 lg:pl-0 flex flex-col justify-center gap-8 z-10 order-3 lg:order-3"
                    >
                        <div className="flex flex-col gap-6">
                            {INFO_CARDS.map((card, idx) => (
                                <div key={card.id} className={`pb-6 ${idx < 2 ? 'border-b border-black/10' : ''}`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="info-title">{card.title}</h3>
                                        <div className="grid grid-cols-2 gap-1">
                                            {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-black/40" />)}
                                        </div>
                                    </div>
                                    <p className="info-body mb-3">{card.body}</p>
                                    <button className="text-[10px] font-black underline underline-offset-4 uppercase tracking-wider hover:opacity-50 transition-opacity">
                                        {card.cta}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 h-20">
                            {THUMBNAILS.map((t) => (
                                <div key={t.id} className={`flex-1 placeholder-img ${t.bg} cursor-pointer hover:brightness-95 transition-all`}>
                                    <span className="text-[8px] opacity-20 font-bold">PREVIEW</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
