import { Link } from 'react-router-dom'
import SEO from "../components/SEO";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#b5a99a] text-[#0d0d0d] font-serif p-10">
      <SEO 
        title="Projects" 
        description="View our latest NFT projects and digital art collections on Dreamer NFT." 
      />
      <h1 className="text-6xl font-black mb-8 tracking-tighter">PROJECTS</h1>
      <p className="max-w-md text-center mb-12 opacity-80 leading-relaxed">
        Exploring the boundaries of digital art and blockchain technology through immersive experiences and unique collections.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#0d0d0d] text-[#d4c9bc] uppercase tracking-[0.2em] text-xs font-bold hover:scale-105 transition-transform"
      >
        BACK TO DREAMER
      </Link>
    </div>
  )
}
