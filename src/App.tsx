import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import AboutSection from './components/AboutSection'
import IndustriesSection from './components/IndustriesSection'
import ProcessSection from './components/ProcessSection'
import GallerySection from './components/GallerySection'
import QuoteSection from './components/QuoteSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
        <IndustriesSection />
        <ProcessSection />
        <GallerySection />
        <QuoteSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}

export default App