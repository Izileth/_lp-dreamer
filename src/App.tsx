import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DreamerHero from './pages/hero'
import Projects from './pages/Projects'
import Artists from './pages/Artists'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DreamerHero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </Router>
  )
}

export default App
