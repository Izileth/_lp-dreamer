import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from "../components/layout/SEO";
import { useArtistsAnimations } from "../hooks/useArtistsAnimations";
import { ARTISTS } from "../utils/constants";

export default function Artists() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<(HTMLDivElement | null)[]>([]);

  useArtistsAnimations({
    containerRef,
    titleRef,
    listRef,
  });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col bg-[#d4c9bc] text-[#0d0d0d] pt-32 pb-20 px-6 lg:px-20"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <SEO 
        title="Visionary Artists" 
        description="Meet the world-class digital creators and collectives behind the Dreamer NFT ecosystem. Exploring the boundaries of art and technology." 
        ogImage={ARTISTS[0].img}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');
        
        .artist-title {
          font-weight: 900;
          font-size: clamp(3.5rem, 12vw, 10rem);
          line-height: 0.8;
          text-transform: uppercase;
          letter-spacing: -0.04em;
        }

        .artist-row {
          border-bottom: 1px solid rgba(0,0,0,1);
          padding: 3rem 0;
          transition: background-color 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .artist-row:hover {
          background-color: #b5a99a;
        }

        .artist-img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.5s ease;
          border-radius: 2px;
        }

        .artist-row:hover .artist-img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .dot-grid {
          display: grid;
          grid-template-cols: repeat(2, 1fr);
          gap: 4px;
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #0d0d0d;
        }
      `}</style>

      <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h1 ref={titleRef} className="artist-title">VISIONARY<br/>CREATORS</h1>
        <div className="dot-grid mb-4">
          {[...Array(8)].map((_, i) => <div key={i} className="dot" />)}
        </div>
      </div>

      <div className="flex flex-col border-t border-black">
        {ARTISTS.map((artist, i) => (
          <div 
            key={artist.name}
            ref={el => { listRef.current[i] = el; }}
            className="artist-row group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 px-4">
              <div className="lg:col-span-1 text-xs font-black opacity-30">0{i+1}</div>
              
              <div className="lg:col-span-2">
                <img src={artist.img} alt={artist.name} className="artist-img" />
              </div>

              <div className="lg:col-span-3">
                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-2 leading-none">
                  {artist.name}
                </h2>
                <p className="text-[10px] font-bold tracking-[0.2em] opacity-60">{artist.role}</p>
              </div>

              <div className="lg:col-span-3">
                <p className="font-sans text-xs leading-relaxed max-w-sm">
                  {artist.bio}
                </p>
              </div>

              <div className="lg:col-span-3 flex justify-between lg:justify-end gap-12 lg:pt-2">
                <div className="text-right">
                  <p className="text-[8px] font-black opacity-40 uppercase">Collections</p>
                  <p className="text-xl font-black">{artist.collections}</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black opacity-40 uppercase">Since</p>
                  <p className="text-xl font-black">{artist.since}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32">
        <Link 
          to="/" 
          className="inline-flex items-center gap-6 text-xs font-black uppercase tracking-[0.4em] hover:translate-x-4 transition-transform"
        >
          BACK TO HOME
          <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5H38M38 5L34 1M38 5L34 9" stroke="black" strokeWidth="2"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}
