import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/features/hero'
import { AboutSection } from '@/features/about'
import { ServicesSection } from '@/features/services'
import { PortfolioSection } from '@/features/portfolio'
import { TestimonialsSection } from '@/features/testimonials'
import { DroneSection } from '@/features/drone'
import { ContactSection } from '@/features/contact'
import { LocationSection } from '@/features/location'
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <DroneSection />
      <TestimonialsSection />
      <ContactSection />
      <LocationSection />
      <Footer />
      <FloatingActionButtons />
    </main>
  )
}
