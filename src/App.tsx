import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import About from './pages/About'
import Experience from './pages/Experience'
import Learning from './pages/Learning'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(44,95,138,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 40% 50% at 85% 60%, rgba(44,95,138,0.04) 0%, transparent 70%),
          #FAFAF8
        `,
      }}
    >
      <Navbar />
      <main className="flex-1 max-w-[880px] w-full mx-auto px-6 pt-24 pb-20 max-md:px-4">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
