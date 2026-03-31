import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import MisionVision    from './components/MisionVision'
import Showcase        from './components/Showcase'
import Ofrecemos       from './components/Ofrecemos'
import Portfolio       from './components/Portfolio'
import DarkSection     from './components/DarkSection'
import Blog            from './components/Blog'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import Chatbot         from './components/Chatbot'
import NewsletterModal from './components/NewsletterModal'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: '#111',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
      }}
    />
  )
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MisionVision />
        <Showcase />
        <Ofrecemos />
        <Portfolio />
        <DarkSection />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <NewsletterModal />
    </>
  )
}

export default App
