import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MosaicGallery from './components/MosaicGallery'
import StepsSection from './components/StepsSection'
import DealsSection from './components/DealsSection'
import InfiniteMarquee from './components/InfiniteMarquee'
import EbookSection from './components/EbookSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MosaicGallery />
        <StepsSection />
        <DealsSection />
        <InfiniteMarquee />
        <EbookSection />
      </main>
      <Footer />
    </div>
  )
}
