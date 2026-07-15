import { useState, useRef } from "react";
import SEO from "../components/layout/SEO";
import { useHeroAnimations } from "../hooks/useHeroAnimations";
import { SLIDES, INFO_CARDS, THUMBNAILS } from "../utils/constants";
import heroImage from "../assets/nfts/Token4.jpg";

export default function DreamerHero() {
    const [activeSlide, setActiveSlide] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const heroImageRef = useRef<HTMLDivElement>(null);
    const nftRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rightColRef = useRef<HTMLDivElement>(null);

    useHeroAnimations({
        containerRef,
        lettersRef,
        nftRefs,
        rightColRef,
        activeSlide,
        slidesZIndexes: SLIDES.map(s => s.z),
    });

    return (
        <div
            ref={containerRef}
            className="min-h-screen w-full flex items-center justify-center overflow-x-hidden relative"
            style={{ backgroundColor: "#b5a99a", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
            <SEO
                title="The Future of Digital Art"
                description="Explore and collect unique digital art on Dreamer NFT. A curated marketplace for visionary artists and collectors in the Web3 space."
                ogImage={heroImage}
            />
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
                  padding-top: 80px; /* Space for fixed Navbar */
                }

                @media (min-width: 1024px) {
                    .hero-card {
                        height: auto;   
                        min-height: auto;
                        width: 100%;
                        max-width: screen;
                        border-radius: 4px;
                        padding-top: 0;
                    }
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
                  position: relative;
                  z-index: 60;
                  text-shadow: 0 0 20px rgba(212, 201, 188, 0.5);
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

                .hero-image-container {
                  position: relative;
                  overflow: hidden;
                  background: transparent;
                }
                
                .nft-card {
                  position: absolute;
                  background: #000;
                  border: 1px solid rgba(255,255,255,0.1);
                  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                  transition: filter 0.5s ease;
                  overflow: hidden;
                  border-radius: 12px;
                }

                .nft-card img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }

                @media (max-width: 1023px) {
                    .mobile-overlay-text {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        padding: 1.5rem;
                        z-index: 70;
                        pointer-events: none;
                    }
                    .hero-image-container {
                        min-height: 60vh;
                        width: 100%;
                    }
                }
            `}</style>

            <div className="hero-card">
                {/* ── MAIN CONTENT ── */}
                <div className="flex-1 flex flex-col lg:flex-row relative lg:mt-[100px]">

                    {/* Left: DREAMER Text */}
                    <div
                        className="
        absolute top-4 left-4 z-70
        flex flex-col
        md:relative md:top-auto md:left-auto
        md:justify-end
        p-4 lg:pl-10 lg:pb-10
        order-2 lg:order-1
        mobile-overlay-text
    "
                    >
                        <div className="flex flex-col">
                            {"DREAMER".split("").map((letter, i) => (
                                <span
                                    key={i}
                                    className="dreamer-letter"
                                    ref={el => {
                                        lettersRef.current[i] = el;
                                    }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <p className="artist-label text-[10px] opacity-60">
                                ARTIST
                            </p>
                            <p className="artist-label text-xs font-bold">
                                YUGAL ODHRANI
                            </p>
                        </div>
                    </div>

                    {/* Center: Random Dispersion NFT Grid */}
                    <div
                        ref={heroImageRef}
                        className="flex-1 min-h-[50vh] relative lg:absolute lg:inset-0 lg:left-[5%] lg:right-[35%] z-0 order-1 lg:order-2 hero-image-container"
                    >
                        {SLIDES.map((slide, i) => (
                            <div
                                key={slide.id}
                                ref={el => { nftRefs.current[i] = el; }}
                                className="nft-card cursor-pointer"
                                style={{
                                    top: slide.top,
                                    left: slide.left,
                                    width: slide.width,
                                    zIndex: slide.z,
                                    transform: `rotate(${slide.rotate}deg)`,
                                }}
                                onClick={() => setActiveSlide(i)}
                            >
                                <img src={slide.img} alt={`NFT ${slide.id}`} />
                            </div>
                        ))}

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[100]">
                            {SLIDES.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveSlide(i)}
                                    className={`h-[2px] transition-all cursor-pointer ${i === activeSlide ? 'w-8 bg-[#d4c9bc]' : 'w-4 bg-[#d4c9bc]/30'}`}
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
                                <div key={t.id} className={`flex-1 overflow-hidden cursor-pointer hover:brightness-95 transition-all bg-black`}>
                                    <img src={t.img} className="w-full h-full object-cover grayscale opacity-60" alt="thumbnail" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
