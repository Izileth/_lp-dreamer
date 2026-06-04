import { Link } from 'react-router-dom'

export default function Artists() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d4c9bc] text-[#0d0d0d] font-serif p-10">
      <h1 className="text-6xl font-black mb-8 tracking-tighter">ARTISTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full mb-12">
        <div className="border border-[#0d0d0d]/10 p-6">
          <h2 className="text-xl font-bold mb-2">YUGAL ODHRANI</h2>
          <p className="text-sm opacity-70">Lead Visual Architect</p>
        </div>
        <div className="border border-[#0d0d0d]/10 p-6">
          <h2 className="text-xl font-bold mb-2">DREAMER LABS</h2>
          <p className="text-sm opacity-70">Conceptual Design Collective</p>
        </div>
      </div>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#0d0d0d] text-[#d4c9bc] uppercase tracking-[0.2em] text-xs font-bold hover:scale-105 transition-transform"
      >
        BACK TO DREAMER
      </Link>
    </div>
  )
}
