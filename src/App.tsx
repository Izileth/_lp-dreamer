import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DreamerHero from './pages/hero'
import Projects from './pages/Projects'
import Artists from './pages/Artists'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'


function App() {
  return (
    <Router>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<DreamerHero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </PageTransition>
    </Router>
  )
}

export default App
