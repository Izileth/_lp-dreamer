import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from "../components/layout/SEO";
import { useProjectsAnimations } from "../hooks/useProjectsAnimations";
import { PROJECTS } from "../utils/constants";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useProjectsAnimations({
    containerRef,
    titleRef,
    cardsRef,
  });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col bg-[#b5a99a] text-[#0d0d0d] pt-32 pb-20 px-6 lg:px-20"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <SEO 
        title="Exclusive NFT Collections" 
        description="Discover the latest curated NFT projects on Dreamer NFT. From 3D generative art to AI collaborations, explore the cutting edge of digital creativity." 
        ogImage={PROJECTS[2].img}
      />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');
        
        .project-title {
          font-weight: 900;
          font-size: clamp(3rem, 10vw, 8rem);
          line-height: 0.8;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .project-card {
          background-color: #d4c9bc;
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card:hover {
          background-color: #0d0d0d;
          color: #d4c9bc;
        }

        .project-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          transition: transform 0.6s ease, opacity 0.3s ease;
          filter: grayscale(100%);
        }

        .project-card:hover img {
          transform: scale(1.1);
          opacity: 0.2;
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
          background-color: currentColor;
          opacity: 0.4;
        }
      `}</style>

      <div className="mb-20">
        <h1 ref={titleRef} className="project-title mb-4">LATEST<br/>PROJECTS</h1>
        <p className="font-sans text-xs uppercase tracking-widest opacity-60">Curated Digital Excellence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECTS.map((project, i) => (
          <div 
            key={project.id}
            ref={el => { cardsRef.current[i] = el; }}
            className="project-card p-6 flex flex-col justify-between aspect-[3/4]"
          >
            <img src={project.img} alt={project.name} />
            
            <div className="flex justify-between items-start relative z-10">
              <span className="text-4xl font-black italic">{project.id}</span>
              <div className="dot-grid">
                {[...Array(4)].map((_, j) => <div key={j} className="dot" />)}
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-tighter opacity-60 mb-1">{project.type}</p>
              <h2 className="text-2xl font-bold leading-none mb-6">{project.name}</h2>
              
              <div className="flex flex-col gap-2 border-t border-current/10 pt-4">
                <div className="flex justify-between text-[10px] font-bold">
                  <span>FLOOR PRICE</span>
                  <span>{project.floor}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold">
                  <span>STATUS</span>
                  <span className={project.status === 'MINTING' ? 'text-green-600' : ''}>{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Link 
          to="/" 
          className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
        >
          <span className="w-10 h-[1px] bg-black group-hover:w-20 transition-all"></span>
          BACK TO DREAMER
        </Link>
      </div>
    </div>
  )
}
