import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedInstallers } from "@/components/home/featured-installers"
import { HowItWorks } from "@/components/home/how-it-works"
import { LocationServices } from "@/components/home/location-services"
import { FAQ } from "@/components/home/faq"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedInstallers />
        <HowItWorks />
        <LocationServices />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}