import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(mobileMenuRef.current, { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                ease: "power4.out",
                pointerEvents: "all"
            });
            document.body.style.overflow = "hidden";
        } else {
            gsap.to(mobileMenuRef.current, { 
                y: "-100%", 
                opacity: 0, 
                duration: 0.6, 
                ease: "power4.in",
                pointerEvents: "none"
            });
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* ── MOBILE MENU OVERLAY ── */}
            <div 
                ref={mobileMenuRef}
                className="fixed inset-0 z-[100] bg-[#0d0d0d] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none"
                style={{ transform: "translateY(-100%)" }}
            >
                <Link to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>HOME</Link>
                <Link to="/projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
                <Link to="/artists" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>ARTISTS</Link>
                <div className="flex gap-6 mt-12">
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50 transition-opacity">INSTAGRAM</span>
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50 transition-opacity">TWITTER</span>
                    <span className="text-[#d4c9bc] text-xs tracking-widest cursor-pointer hover:opacity-50 transition-opacity">DISCORD</span>
                </div>
            </div>

            {/* ── TOP NAV ── */}
            <header 
                ref={navRef} 
                className="fixed top-0 left-0 w-full flex items-center justify-between p-6 lg:p-10 z-[110] mix-blend-difference"
            >
                <style>{`
                    .nav-link {
                        font-family: 'Barlow Condensed', sans-serif;
                        font-size: 0.75rem;
                        font-weight: 700;
                        letter-spacing: 0.15em;
                        text-transform: uppercase;
                        color: #d4c9bc;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        text-decoration: none;
                    }
                    .nav-link:hover { opacity: 0.5; letter-spacing: 0.25em; }

                    .mobile-nav-link {
                        font-family: 'Barlow Condensed', sans-serif;
                        font-size: 3.5rem;
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

                    .menu-btn {
                        width: 48px;
                        height: 48px;
                        background: #d4c9bc;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        cursor: pointer;
                        border: none;
                    }
                    .menu-line {
                        width: 22px;
                        height: 2px;
                        background: #0d0d0d;
                        transition: all 0.3s ease;
                    }
                    .menu-open .menu-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
                    .menu-open .menu-line:nth-child(2) { opacity: 0; }
                    .menu-open .menu-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

                    .vertical-season {
                        writing-mode: vertical-rl;
                        text-orientation: mixed;
                        transform: rotate(180deg);
                        letter-spacing: 0.25em;
                        font-size: 0.65rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        color: #d4c9bc;
                    }
                `}</style>

                <div className="flex items-start gap-4">
                    <Link to="/projects" className="nav-link hidden lg:block mt-1">PROJECTS</Link>
                    <div className="flex h-16 lg:h-20 items-end">
                        <span className="vertical-season">SEASON 01</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Link to="/" className="nav-link text-sm lg:text-base font-black tracking-[0.3em]">DREAMERS</Link>
                    <div className="hidden lg:flex gap-6">
                        <Link to="/projects" className="nav-link text-[10px]">PROJECTS</Link>
                        <Link to="/artists" className="nav-link text-[10px]">ARTISTS</Link>
                    </div>
                </div>

                <button 
                    className={`menu-btn ${menuOpen ? 'menu-open' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="menu-line" />
                    <div className="menu-line" />
                    <div className="menu-line" />
                </button>
            </header>
        </>
    );
}
