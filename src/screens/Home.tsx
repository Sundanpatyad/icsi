import Header from '../components/Header'
import VisionBanner from '../components/VisionBanner'
import Navigation from '../components/Navigation'
import EventCarousel from '../components/EventCarousel'
import ServiceGrid from '../components/ServiceGrid'
import PartnerLogos from '../components/PartnerLogos'
import Footer from '../components/Footer'
import SocialSidebar from '../components/SocialSidebar'
import BackToTop from '../components/BackToTop'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <Header />
    <VisionBanner />
    <Navigation />
    <main className="relative">
      <EventCarousel />
      <ServiceGrid />
      <PartnerLogos />
    </main>
    <Footer />
    <SocialSidebar />
    <BackToTop />
  </div>
  )
}

export default Home