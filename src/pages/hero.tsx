import { useState } from "react";

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

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: "#b5a99a", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
            {/* Google Fonts Import via style tag */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        .hero-card {
          background-color: #d4c9bc;
          position: relative;
          overflow: hidden;
        }

        .vertical-season {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.25em;
          font-size: 0.55rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #1a1a1a;
        }

        .dreamer-letter {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(5rem, 10vw, 8.5rem);
          line-height: 0.88;
          color: #0d0d0d;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          display: block;
          user-select: none;
        }

        .nav-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1a1a1a;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 0.5; }

        .info-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0d0d0d;
          margin-bottom: 4px;
        }

        .info-body {
          font-family: 'Barlow', sans-serif;
          font-size: 0.58rem;
          font-weight: 400;
          line-height: 1.5;
          color: #2a2a2a;
          margin-bottom: 4px;
        }

        .info-cta {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0d0d0d;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .dots-grid {
          display: grid;
          grid-template-columns: repeat(2, 4px);
          gap: 3px;
        }
        .dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #555;
        }

        .slide-dot {
          width: 16px;
          height: 2px;
          background: #0d0d0d;
          opacity: 0.25;
          cursor: pointer;
          transition: all 0.2s;
        }
        .slide-dot.active {
          opacity: 1;
          width: 24px;
        }

        .indicator-line {
          width: 22px;
          height: 1.5px;
          background: #0d0d0d;
        }
        .indicator-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid #0d0d0d;
        }

        .social-icon {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: #0d0d0d;
          cursor: pointer;
          transition: opacity 0.2s;
          letter-spacing: 0.05em;
        }
        .social-icon:hover { opacity: 0.4; }

        .artist-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          line-height: 1.6;
        }
        .artist-name {
          font-weight: 700;
          color: #0d0d0d;
        }

        .menu-btn {
          width: 40px;
          height: 40px;
          background: #0d0d0d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          flex-shrink: 0;
        }
        .menu-line {
          width: 18px;
          height: 1.5px;
          background: #d4c9bc;
        }

        /* Mobile responsive overrides */
        @media (max-width: 768px) {
          .dreamer-letter {
            font-size: clamp(3.5rem, 15vw, 6rem);
          }
          .hero-card {
            border-radius: 0;
          }
        }

        /* Placeholder shimmer */
        .placeholder-img {
          background: linear-gradient(135deg, #c5b9ac 0%, #b8ac9f 50%, #c5b9ac 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .placeholder-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .placeholder-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.2);
          z-index: 1;
        }
      `}</style>

            {/* ── OUTER WRAPPER ── */}
            <div className="w-full max-w-[1200px] px-4 md:px-8">
                <div
                    className="hero-card w-full"
                    style={{
                        minHeight: "clamp(420px, 56vw, 620px)",
                        borderRadius: "2px",
                    }}
                >
                    {/* ════════════════════════════════════
              TOP NAVIGATION BAR
          ════════════════════════════════════ */}
                    <div className="flex items-start justify-between" style={{ padding: "20px 22px 0 22px" }}>

                        {/* Left: PROJECTS + vertical SEASON 01 + big D */}
                        <div className="flex items-start" style={{ gap: "10px" }}>
                            {/* PROJECTS label */}
                            <div style={{ paddingTop: "2px" }}>
                                <span className="nav-link">PROJECTS</span>
                            </div>

                            {/* Vertical SEASON 01 */}
                            <div style={{ height: "clamp(80px, 12vw, 130px)", display: "flex", alignItems: "flex-end" }}>
                                <span className="vertical-season">SEASON 01</span>
                            </div>
                        </div>

                        {/* Center nav */}
                        <div className="flex flex-col items-center" style={{ gap: "6px", paddingTop: "2px" }}>
                            <span className="nav-link" style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em" }}>
                                DREAMERS
                            </span>
                            <span className="nav-link">INDEX</span>
                            <span className="nav-link">ARTISTS</span>
                        </div>

                        {/* Right: hamburger */}
                        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="menu-line" />
                            <div className="menu-line" />
                            <div className="menu-line" />
                        </div>
                    </div>

                    {/* ════════════════════════════════════
              MAIN CONTENT AREA
          ════════════════════════════════════ */}
                    <div
                        className="flex"
                        style={{
                            marginTop: "-clamp(60px, 8vw, 90px)",
                            position: "relative",
                            minHeight: "clamp(320px, 44vw, 510px)",
                        }}
                    >
                        {/* ── LEFT COLUMN: Giant DREAMER text ── */}
                        <div
                            className="flex-shrink-0 flex flex-col justify-end"
                            style={{
                                paddingLeft: "22px",
                                paddingBottom: "22px",
                                zIndex: 10,
                                position: "relative",
                            }}
                        >
                            {"DREAMER".split("").map((letter, i) => (
                                <span key={i} className="dreamer-letter">
                                    {letter}
                                </span>
                            ))}

                            {/* Artist label */}
                            <div style={{ marginTop: "18px" }}>
                                <p className="artist-label">ARTIST</p>
                                <p className="artist-label artist-name">YUGAL ODHRANI</p>
                            </div>

                            {/* Social icons */}
                            <div className="flex items-center" style={{ gap: "14px", marginTop: "14px" }}>
                                <span className="social-icon">f</span>
                                <span className="social-icon" style={{ fontSize: "0.7rem" }}>&#9711;</span>
                                <span className="social-icon">𝕏</span>
                            </div>
                        </div>

                        {/* ── CENTER: Hero image placeholder ── */}
                        <div
                            className="flex-1 placeholder-img"
                            style={{
                                position: "absolute",
                                left: "clamp(100px, 15vw, 200px)",
                                right: "clamp(200px, 28vw, 320px)",
                                top: 0,
                                bottom: 0,
                                zIndex: 5,
                            }}
                        >
                            <span className="placeholder-label">HERO IMAGE</span>

                            {/* Slide dots */}
                            <div
                                className="flex items-center"
                                style={{
                                    position: "absolute",
                                    bottom: "16px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    gap: "5px",
                                    zIndex: 20,
                                }}
                            >
                                {SLIDES.map((s, i) => (
                                    <div
                                        key={s.id}
                                        className={`slide-dot ${i === activeSlide ? "active" : ""}`}
                                        onClick={() => setActiveSlide(i)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN: Info cards ── */}
                        <div
                            className="flex-shrink-0 flex flex-col justify-center"
                            style={{
                                width: "clamp(180px, 24vw, 280px)",
                                marginLeft: "auto",
                                padding: "16px 20px 16px 12px",
                                gap: "0",
                                zIndex: 10,
                            }}
                        >
                            {/* Indicators (lines + circles) */}
                            <div
                                className="flex flex-col items-end"
                                style={{ gap: "8px", marginBottom: "8px", alignSelf: "flex-end" }}
                            >
                                <div className="flex items-center" style={{ gap: "6px" }}>
                                    <div className="indicator-line" />
                                    <div className="indicator-circle" style={{ background: "#0d0d0d" }} />
                                </div>
                                <div className="flex items-center justify-end" style={{ gap: "6px" }}>
                                    <div className="indicator-circle" />
                                </div>
                                <div className="flex items-center justify-end" style={{ gap: "6px" }}>
                                    <div className="indicator-circle" />
                                </div>
                            </div>

                            {/* Three info cards */}
                            <div className="flex flex-col" style={{ gap: "0" }}>
                                {INFO_CARDS.map((card, idx) => (
                                    <div
                                        key={card.id}
                                        style={{
                                            padding: "12px 0",
                                            borderBottom: idx < INFO_CARDS.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                                        }}
                                    >
                                        <div className="flex items-start justify-between">
                                            <p className="info-title">{card.title}</p>
                                            {/* dotted grid icon */}
                                            <div className="dots-grid" style={{ marginTop: "1px", flexShrink: 0 }}>
                                                <div className="dot" />
                                                <div className="dot" />
                                                <div className="dot" />
                                                <div className="dot" />
                                            </div>
                                        </div>
                                        <p className="info-body">{card.body}</p>
                                        <span className="info-cta">{card.cta}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Thumbnail row */}
                            <div className="flex" style={{ gap: "4px", marginTop: "12px", height: "clamp(50px, 8vw, 80px)" }}>
                                {THUMBNAILS.map((t) => (
                                    <div
                                        key={t.id}
                                        className={`flex-1 placeholder-img ${t.bg}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span className="placeholder-label" style={{ fontSize: "0.45rem" }}>IMG</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MOBILE LAYOUT ── */}
                <style>{`
          @media (max-width: 640px) {
            /* Stack dreamer vertically full width on mobile */
            .dreamer-letter {
              font-size: clamp(4rem, 22vw, 5.5rem) !important;
            }
          }
        `}</style>
            </div>
        </div>
    );
}