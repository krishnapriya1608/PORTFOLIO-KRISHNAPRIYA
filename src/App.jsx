import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CertsEdu from './components/CertsEdu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CertsEdu />
      <Contact />
      <Footer />
    </div>
  )
}
