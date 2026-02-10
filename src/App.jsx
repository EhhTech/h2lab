import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MisionVision from './components/MisionVision'
import Showcase from './components/Showcase'
import Ofrecemos from './components/Ofrecemos'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MisionVision />
        <Showcase />
        <Ofrecemos />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
