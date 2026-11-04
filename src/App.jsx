import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Advantages from './components/Advantages.jsx'
import Contact from './components/Contact.jsx'
import GameCursor from './components/GameCursor.jsx'

export default function App() {
  return (
    <div className="app">
      <GameCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Advantages />
        <Contact />
      </main>
    </div>
  )
}
