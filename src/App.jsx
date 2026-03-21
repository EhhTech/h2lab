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
