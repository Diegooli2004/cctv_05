import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Home } from "lucide-react"

const serviceData = {
  icon: Home,
  title: "Residential CCTV",
  description: "Protect your home with state-of-the-art surveillance systems designed for residential properties.",
  features: [
    "HD cameras with night vision",
    "Mobile app monitoring",
    "Motion detection alerts",
    "24/7 recording capabilities",
    "Easy-to-use interface"
  ],
  benefits: [
    "Deter potential intruders",
    "Monitor your property remotely",
    "Protect your family and assets",
    "Evidence collection if needed",
    "Peace of mind while away"
  ],
  image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
}

export default function ResidentialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceDetail service={serviceData} />
      </main>
      <Footer />
    </div>
  )
}